"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer"
import type { RepoData, Commit, Branch, Contributor } from "../types/repo-data"

// --- Visualization Constants ---
// Commit Graph
const COMMIT_RADIUS = 0.5
// Helix Parameters
const HELIX_RADIUS = 25        // Increased radius for better visibility
const HELIX_PITCH = 5          // More vertical space between loops
const COMMITS_PER_LOOP = 12    // Fewer commits per loop for better spacing
const HELIX_START_Y = 8        // Starting height of the helix
// Contributor Spheres
const CONTRIBUTOR_SPHERE_MAX_RADIUS = 4
const CONTRIBUTOR_SPHERE_MIN_RADIUS = 0.5
const CONTRIBUTOR_GRID_SPACING = 8
// Language Donut
const DONUT_OUTER_RADIUS = 15
const DONUT_INNER_RADIUS = 10
const DONUT_EXTRUDE_DEPTH = 3  // Slightly deeper for better appearance
const DONUT_LABEL_OFFSET = DONUT_OUTER_RADIUS + 2
// Positioning
const SIDE_VIS_X_OFFSET = 90 
const SIDE_VIS_Z_POSITION = -40
// Icosahedron
const ICOSAHEDRON_RADIUS = 8   // Larger central representation
const ICOSAHEDRON_COLOR = 0x00ffff 
// Camera Presets
const CAMERA_PRESETS = {
  overview: { position: new THREE.Vector3(30, 40, 80), target: new THREE.Vector3(0, 20, 0) },
  commitHistory: { position: new THREE.Vector3(0, 30, 60), target: new THREE.Vector3(0, 20, 0) },
  languages: { position: new THREE.Vector3(-SIDE_VIS_X_OFFSET - 20, 20, -20), target: new THREE.Vector3(-SIDE_VIS_X_OFFSET, 5, SIDE_VIS_Z_POSITION) },
  contributors: { position: new THREE.Vector3(SIDE_VIS_X_OFFSET + 20, 20, -20), target: new THREE.Vector3(SIDE_VIS_X_OFFSET, 5, SIDE_VIS_Z_POSITION) }
}
// Visual Effects
const PARTICLE_COUNT = 200
const TIME_RIBBON_WIDTH = 1
const BLOOM_STRENGTH = 0.8
const BLOOM_RADIUS = 0.3

interface CommitObject {
  mesh: THREE.Mesh
  data: Commit
}

interface GitHubRepoVisualizationProps {
  repoData: RepoData
}

export default function GitHubRepoVisualization({ repoData }: GitHubRepoVisualizationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const labelRendererRef = useRef<CSS2DRenderer | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)
  const raycasterRef = useRef<THREE.Raycaster | null>(null)
  const pointerRef = useRef<THREE.Vector2>(new THREE.Vector2())
  const repoIcosahedronRef = useRef<THREE.Mesh | null>(null)
  const commitObjectsRef = useRef<Record<string, CommitObject>>({})
  const contributorColorsRef = useRef<Record<string, THREE.Color>>({})
  const [hoveredObject, setHoveredObject] = useState<THREE.Object3D | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const hoverLabelRef = useRef<CSS2DObject | null>(null) // New reference for hover description label
  const [activeView, setActiveView] = useState<string>("overview")
  const particlesRef = useRef<THREE.Points | null>(null)
  const timeRibbonRef = useRef<THREE.Mesh | null>(null)

  // Initialize the scene
  useEffect(() => {
    if (!containerRef.current) return

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a1929) // Deeper blue background for better contrast
    sceneRef.current = scene

    // Fog for depth perception
    scene.fog = new THREE.FogExp2(0x0a1929, 0.002)

    // Camera
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 2000)
    camera.position.copy(CAMERA_PRESETS.overview.position)
    camera.lookAt(CAMERA_PRESETS.overview.target)
    cameraRef.current = camera

    // Renderer with better shadows and antialiasing
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Label Renderer with improved styling
    const labelRenderer = new CSS2DRenderer()
    labelRenderer.setSize(window.innerWidth, window.innerHeight)
    labelRenderer.domElement.style.position = "absolute"
    labelRenderer.domElement.style.top = "0px"
    labelRenderer.domElement.style.pointerEvents = "none"
    labelRenderer.domElement.style.zIndex = "1" // Ensure labels appear above everything
    containerRef.current.appendChild(labelRenderer.domElement)
    labelRendererRef.current = labelRenderer

    // Enhanced Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 0.7
    controls.zoomSpeed = 1.2
    controls.panSpeed = 0.8
    controls.minDistance = 5
    controls.maxDistance = 300
    controls.target.set(0, 20, 0) // Look at center of helix
    controlsRef.current = controls

    // Improved Lighting
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)
    
    // Main directional light with shadows
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7)
    directionalLight.position.set(40, 80, 60)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    directionalLight.shadow.camera.near = 10
    directionalLight.shadow.camera.far = 200
    directionalLight.shadow.bias = -0.0005
    scene.add(directionalLight)
    
    // Accent lights for depth and drama
    const bluePointLight = new THREE.PointLight(0x3366ff, 0.8, 100)
    bluePointLight.position.set(-30, 20, -20)
    scene.add(bluePointLight)
    
    const purplePointLight = new THREE.PointLight(0xaa33ff, 0.6, 80)
    purplePointLight.position.set(30, 15, -30)
    scene.add(purplePointLight)
    
    // Ground plane with reflection
    const groundGeometry = new THREE.PlaneGeometry(300, 300)
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x0a1929,
      metalness: 0.2,
      roughness: 0.8,
      envMapIntensity: 0.5,
    })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -2
    ground.receiveShadow = true
    scene.add(ground)

    // Add particle system for ambient effect
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = PARTICLE_COUNT
    const positions = new Float32Array(particlesCount * 3)
    const scales = new Float32Array(particlesCount)
    
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200
      positions[i * 3 + 1] = Math.random() * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200
      scales[i] = Math.random() * 2.5
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1))
    
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    })
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)
    particlesRef.current = particles

    // Interaction Setup
    const raycaster = new THREE.Raycaster()
    raycasterRef.current = raycaster

    // Process data and create visualizations
    processData(repoData)
    createVisualizations(repoData)

    // Add navigation UI
    createNavigationUI()

    // Start animation
    animate()

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }

      if (labelRendererRef.current && containerRef.current) {
        containerRef.current.removeChild(labelRendererRef.current.domElement)
      }

      if (controlsRef.current) {
        controlsRef.current.dispose()
      }
    }
  }, [repoData])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current || !labelRendererRef.current) return

      cameraRef.current.aspect = window.innerWidth / window.innerHeight
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
      labelRendererRef.current.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle pointer events
  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!containerRef.current || !raycasterRef.current || !sceneRef.current || !cameraRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      pointerRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointerRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      raycasterRef.current.setFromCamera(pointerRef.current, cameraRef.current)
      const intersects = raycasterRef.current.intersectObjects(sceneRef.current.children, true)

      let newlyHovered: THREE.Object3D | null = null
      for (let i = 0; i < intersects.length; i++) {
        let obj = intersects[i].object
        // Traverse up to find an object with userData.type
        while (obj && !(obj.userData && obj.userData.type)) {
          obj = obj.parent as THREE.Object3D
        }
        if (obj) {
          newlyHovered = obj
          break // Found the first interactable object
        }
      }

      // Remove existing hover label if object changed or no longer hovering
      if (hoveredObject !== newlyHovered && hoverLabelRef.current && sceneRef.current) {
        sceneRef.current.remove(hoverLabelRef.current)
        hoverLabelRef.current = null
      }

      if (hoveredObject !== newlyHovered) {
        // Clear previous hover effect
        if (
          hoveredObject &&
          (hoveredObject as THREE.Mesh).material &&
          (hoveredObject as THREE.Mesh).material instanceof THREE.Material
        ) {
          const material = (hoveredObject as THREE.Mesh).material as THREE.MeshStandardMaterial
          if (material.emissive) {
            material.emissive.setHex(0x000000)
          }
        }

        setHoveredObject(newlyHovered)

        if (
          newlyHovered &&
          (newlyHovered as THREE.Mesh).material &&
          (newlyHovered as THREE.Mesh).material instanceof THREE.Material
        ) {
          // Apply new hover effect
          const material = (newlyHovered as THREE.Mesh).material as THREE.MeshStandardMaterial
          if (material.emissive) {
            material.emissive.setHex(0x555555) // Glow effect
          }

          // Create and add hover description label
          if (newlyHovered.userData.type && sceneRef.current) {
            const hoverDesc = createHoverDescription(newlyHovered)
            if (hoverDesc) {
              sceneRef.current.add(hoverDesc)
              hoverLabelRef.current = hoverDesc
            }
          }

          // Display Tooltip
          const tooltipElement = document.getElementById("tooltip")
          if (tooltipElement) {
            tooltipElement.style.display = "block"
            tooltipElement.style.left = `${event.clientX + 10}px`
            tooltipElement.style.top = `${event.clientY + 10}px`

            let tooltipContent = ""
            const ud = newlyHovered.userData
            switch (ud.type) {
              case "commit":
                const fullMessage = ud.message || ""
                const messageLines = fullMessage.split("\n")
                const title = messageLines[0].trim()
                const body = messageLines.slice(1).join("\n").trim()

                tooltipContent = `Title: ${title}\n`
                tooltipContent += `--------------------\n`
                if (body) {
                  const maxBodyLength = 250 // Limit message body in tooltip
                  tooltipContent += `Message:\n${body.length > maxBodyLength ? body.substring(0, maxBodyLength) + "..." : body}\n`
                  tooltipContent += `--------------------\n`
                }
                tooltipContent += `Author: ${ud.author}\n`
                tooltipContent += `Date: ${ud.date}\n`
                tooltipContent += `SHA: ${ud.sha.substring(0, 7)}\n`
                tooltipContent += `(Click to view on GitHub)`
                break
              case "language_segment":
                tooltipContent = `Language: ${ud.name}\nBytes: ${ud.bytes.toLocaleString()}\nPercentage: ${ud.percentage}%`
                break
              case "contributor_sphere":
                tooltipContent = `Contributor: ${ud.login}\nContributions: ${ud.contributions}\n(Click to view profile)`
                break
              case "repo_representation": // Tooltip for the icosahedron
                tooltipContent = `Repository:\n${ud.name}`
                break
              default:
                tooltipContent = "Unknown Object"
            }
            tooltipElement.textContent = tooltipContent
          }
        } else {
          // No object hovered
          const tooltipElement = document.getElementById("tooltip")
          if (tooltipElement) {
            tooltipElement.style.display = "none"
          }
        }
      }

      // Update tooltip position continuously if hovered
      if (newlyHovered) {
        const tooltipElement = document.getElementById("tooltip")
        if (tooltipElement) {
          tooltipElement.style.left = `${event.clientX + 10}px`
          tooltipElement.style.top = `${event.clientY + 10}px`
        }
      }
    }

    const handlePointerClick = (event: PointerEvent) => {
      if (hoveredObject) {
        const ud = hoveredObject.userData
        if (ud.type === "commit" && ud.url) {
          window.open(ud.url, "_blank")
        } else if (ud.type === "contributor_sphere" && ud.login) {
          window.open(`https://github.com/${ud.login}`, "_blank")
        }
      }
    }

    window.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("click", handlePointerClick)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("click", handlePointerClick)
    }
  }, [hoveredObject])

  // Process data to assign colors to contributors
  const processData = (repoData: RepoData) => {
    const contributors = repoData.contributors || []
    contributors.forEach((contributor, index) => {
      // Assign a color based on index, spread around the hue wheel
      contributorColorsRef.current[contributor.login] = new THREE.Color().setHSL((index * 0.17) % 1.0, 0.6, 0.6)
    })
    contributorColorsRef.current["null"] = new THREE.Color(0x888888) // Gray for unknown/null authors
  }

  // Create all visualizations
  const createVisualizations = (repoData: RepoData) => {
    if (!sceneRef.current) return

    const commitGroup = createCommitGraph(repoData.commits)
    sceneRef.current.add(commitGroup) // Commit graph centered at origin

    createBranchLabels(repoData.branches, commitGroup) // Add labels relative to commits

    // Position side visualizations
    const contributorSpheres = createContributorSpheres(repoData.contributors)
    contributorSpheres.position.set(SIDE_VIS_X_OFFSET, 5, SIDE_VIS_Z_POSITION)
    sceneRef.current.add(contributorSpheres)

    const languageDonut = createLanguageDonut(repoData.languages)
    languageDonut.position.set(-SIDE_VIS_X_OFFSET, 5, SIDE_VIS_Z_POSITION)
    languageDonut.rotation.x = -Math.PI / 10 // Slight tilt
    sceneRef.current.add(languageDonut)

    // Add Central Icosahedron
    const icosahedronGeometry = new THREE.IcosahedronGeometry(ICOSAHEDRON_RADIUS, 1)
    const icosahedronMaterial = new THREE.MeshBasicMaterial({
      color: ICOSAHEDRON_COLOR,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    })
    const repoIcosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial)
    
    // Position icosahedron at the center bottom of the helix
    repoIcosahedron.position.set(0, HELIX_START_Y - 5, 0)
    repoIcosahedron.rotation.x = Math.PI / 6
    repoIcosahedron.userData = {
      type: "repo_representation",
      name: repoData.metadata.full_name,
    }
    sceneRef.current.add(repoIcosahedron)
    repoIcosahedronRef.current = repoIcosahedron
  }

  // Create commit graph - enhanced with time ribbon
  const createCommitGraph = (commits: Commit[]) => {
    const group = new THREE.Group()
    const commitObjects: Record<string, CommitObject> = {}

    // Sort commits roughly by date (oldest first) for layout
    const sortedCommits = [...commits].sort(
      (a, b) => new Date(a.commit.author.date).getTime() - new Date(b.commit.author.date).getTime(),
    )

    // Create a time ribbon (spiral) that follows the helix
    const ribbonPoints: THREE.Vector3[] = []
    const ribbonCurve = new THREE.CatmullRomCurve3([])
    const totalCommits = sortedCommits.length
    
    for (let i = 0; i <= totalCommits; i++) {
      const t = i / totalCommits
      const angle = (t * totalCommits / COMMITS_PER_LOOP) * Math.PI * 2
      const x = HELIX_RADIUS * Math.cos(angle)
      const z = HELIX_RADIUS * Math.sin(angle)
      const y = HELIX_START_Y + (t * totalCommits / COMMITS_PER_LOOP) * HELIX_PITCH
      
      ribbonPoints.push(new THREE.Vector3(x, y, z))
    }
    
    ribbonCurve.points = ribbonPoints
    const ribbonGeometry = new THREE.TubeGeometry(ribbonCurve, totalCommits * 2, TIME_RIBBON_WIDTH, 8, false)
    
    // Create a gradient material for the ribbon
    const ribbonMaterial = new THREE.MeshStandardMaterial({
      color: 0x2288ff,
      metalness: 0.5,
      roughness: 0.2,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    })
    
    const timeRibbon = new THREE.Mesh(ribbonGeometry, ribbonMaterial)
    timeRibbon.castShadow = true
    timeRibbon.receiveShadow = true
    group.add(timeRibbon)
    timeRibbonRef.current = timeRibbon

    // Enhanced commit spheres
    const commitSphereGeo = new THREE.SphereGeometry(COMMIT_RADIUS, 24, 24)
    
    // Track important commits for bigger representation
    const commitDates = sortedCommits.map(c => new Date(c.commit.author.date).getTime())
    const timeRange = Math.max(...commitDates) - Math.min(...commitDates)
    
    sortedCommits.forEach((commitData, index) => {
      const authorLogin = commitData.author?.login || null
      const color = contributorColorsRef.current[authorLogin || "null"] || contributorColorsRef.current["null"]
      
      // Create a slightly more realistic material
      const material = new THREE.MeshPhysicalMaterial({ 
        color: color, 
        metalness: 0.6, 
        roughness: 0.3,
        clearcoat: 0.5,
        clearcoatRoughness: 0.2,
        emissive: new THREE.Color(color).multiplyScalar(0.2)
      })
      
      const mesh = new THREE.Mesh(commitSphereGeo, material)
      mesh.castShadow = true
      mesh.receiveShadow = true

      // Position on helix with spiral pattern
      const angle = (index / COMMITS_PER_LOOP) * Math.PI * 2
      const xPos = HELIX_RADIUS * Math.cos(angle)
      const zPos = HELIX_RADIUS * Math.sin(angle)
      const yPos = HELIX_START_Y + (index / COMMITS_PER_LOOP) * HELIX_PITCH
      
      // Determine if this is a significant commit (merge or old)
      const isMerge = commitData.parents.length > 1
      const commitTime = new Date(commitData.commit.author.date).getTime()
      const commitAge = (commitTime - Math.min(...commitDates)) / timeRange
      const isSignificant = commitData.commit.message.toLowerCase().includes('release') || 
                           commitData.commit.message.toLowerCase().includes('version') ||
                           commitData.commit.message.toLowerCase().includes('milestone')
      
      // Scale important commits to be more visible
      let scale = 1.0
      if (isMerge) scale *= 1.3
      if (isSignificant) scale *= 1.5
      if (commitAge < 0.1) scale *= 1.2 // Emphasize early commits
      
      mesh.scale.set(scale, scale, scale)
      
      // Add slight jitter for visual interest
      const jitterFactor = isMerge ? 0.8 : 0.2
      const jitterX = (Math.random() - 0.5) * jitterFactor
      const jitterY = (Math.random() - 0.5) * jitterFactor
      const jitterZ = (Math.random() - 0.5) * jitterFactor
      
      mesh.position.set(
        xPos + jitterX, 
        yPos + jitterY, 
        zPos + jitterZ
      )

      // Store data for interactions
      mesh.userData = {
        type: "commit",
        sha: commitData.sha,
        message: commitData.commit.message,
        author: authorLogin || "Unknown",
        date: new Date(commitData.commit.author.date).toLocaleString(),
        url: commitData.html_url,
        parents: commitData.parents.map((p) => p.sha),
        isSignificant,
        isMerge
      }
      
      commitObjects[commitData.sha] = { mesh: mesh, data: commitData }
      group.add(mesh)
      
      // Add glow effect for significant commits
      if (isSignificant) {
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color(color).multiplyScalar(1.5),
          transparent: true,
          opacity: 0.4,
          side: THREE.BackSide
        })
        
        const glowMesh = new THREE.Mesh(
          new THREE.SphereGeometry(COMMIT_RADIUS * scale * 1.5, 24, 24),
          glowMaterial
        )
        
        glowMesh.position.copy(mesh.position)
        group.add(glowMesh)
      }
    })

    // Store commit objects for later use
    commitObjectsRef.current = commitObjects

    // Draw parent connections with enhanced curved connections
    Object.values(commitObjects).forEach((commitObj) => {
      const childMesh = commitObj.mesh
      
      commitObj.data.parents.forEach((parentSha) => {
        const parentObj = commitObjects[parentSha]
        if (parentObj) {
          const parentMesh = parentObj.mesh
          
          // Create a smooth Bezier curve between commits
          const start = parentMesh.position.clone()
          const end = childMesh.position.clone()
          
          // Calculate control points for a smoother curve
          const midPoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5)
          
          const direction = new THREE.Vector3().subVectors(end, start).normalize()
          const perpendicular = new THREE.Vector3(-direction.z, 0, direction.x).normalize()
          
          // Adjust curve based on commit relationship
          let curveIntensity = 2
          if (commitObj.data.parents.length > 1) {
            curveIntensity = 3 // More curved for merge commits
          }
          
          midPoint.add(perpendicular.multiplyScalar(curveIntensity))
          
          // Create the curve
          const curve = new THREE.QuadraticBezierCurve3(start, midPoint, end)
          const points = curve.getPoints(12) // More points for smoother curve
          
          // Create a tube along the curve for a more polished look
          const tubeGeometry = new THREE.TubeGeometry(
            new THREE.CatmullRomCurve3(points),
            12,
            0.15, // Thinner tube
            8,
            false
          )
          
          // Determine connection color based on relationship
          let connectionColor = 0x666666
          if (commitObj.data.parents.length > 1) {
            // Merge connection - make it more distinctive
            connectionColor = 0x9966ff
          }
          
          const tubeMaterial = new THREE.MeshStandardMaterial({
            color: connectionColor,
            transparent: true,
            opacity: 0.4,
            metalness: 0.3,
            roughness: 0.5
          })
          
          const tube = new THREE.Mesh(tubeGeometry, tubeMaterial)
          group.add(tube)
        }
      })
    })

    return group
  }

  // Create branch labels with improved styling
  const createBranchLabels = (branches: Branch[], parentGroup: THREE.Group) => {
    branches.forEach((branch) => {
      const commitSha = branch.commit.sha
      const commitObj = commitObjectsRef.current[commitSha]
      if (commitObj) {
        const commitMesh = commitObj.mesh

        const labelDiv = document.createElement("div")
        labelDiv.className = "branch-label"
        labelDiv.textContent = branch.name
        
        // Improve branch label styling
        labelDiv.style.backgroundColor = "rgba(30, 70, 150, 0.8)"
        labelDiv.style.color = "#ffffff"
        labelDiv.style.border = "1px solid rgba(80, 140, 255, 0.8)"
        labelDiv.style.borderRadius = "4px"
        labelDiv.style.padding = "3px 8px"
        labelDiv.style.fontWeight = "bold"
        labelDiv.style.fontSize = "11px"
        labelDiv.style.boxShadow = "0 2px 4px rgba(0,0,0,0.3)"
        labelDiv.style.whiteSpace = "nowrap"

        // Create a badge for the branch type (main, feature, etc.)
        if (branch.name.includes('main') || branch.name.includes('master')) {
          const badge = document.createElement('span')
          badge.textContent = '🌟'
          badge.style.marginRight = '4px'
          labelDiv.prepend(badge)
          labelDiv.style.backgroundColor = "rgba(60, 120, 200, 0.9)"
        } else if (branch.name.includes('feature')) {
          const badge = document.createElement('span')
          badge.textContent = '✨'
          badge.style.marginRight = '4px'
          labelDiv.prepend(badge)
        } else if (branch.name.includes('fix') || branch.name.includes('bug')) {
          const badge = document.createElement('span')
          badge.textContent = '🐞'
          badge.style.marginRight = '4px'
          labelDiv.prepend(badge)
          labelDiv.style.backgroundColor = "rgba(200, 60, 80, 0.8)"
        }

        const label = new CSS2DObject(labelDiv)
        label.position.copy(commitMesh.position)
        
        // Position label more clearly in 3D space
        const positionVector = new THREE.Vector3(commitMesh.position.x, 0, commitMesh.position.z).normalize()
        label.position.x += positionVector.x * COMMIT_RADIUS * 4
        label.position.z += positionVector.z * COMMIT_RADIUS * 4
        label.position.y += COMMIT_RADIUS * 3
        
        parentGroup.add(label)
      }
    })
  }

  // Create contributor spheres
  const createContributorSpheres = (contributors: Contributor[]) => {
    const group = new THREE.Group()
    if (!contributors || contributors.length === 0) return group

    const sortedContributors = [...contributors].sort((a, b) => b.contributions - a.contributions)
    const maxContributions = sortedContributors[0]?.contributions || 1 // Avoid 0 max
    const minContributions = sortedContributors[sortedContributors.length - 1]?.contributions || 0

    const scaleRadius = (contribs: number) => {
      if (maxContributions === minContributions) return CONTRIBUTOR_SPHERE_MIN_RADIUS
      const scale = Math.sqrt(Math.max(0, contribs - minContributions) / (maxContributions - minContributions))
      return CONTRIBUTOR_SPHERE_MIN_RADIUS + scale * (CONTRIBUTOR_SPHERE_MAX_RADIUS - CONTRIBUTOR_SPHERE_MIN_RADIUS)
    }

    const gridCols = Math.ceil(Math.sqrt(contributors.length))
    const startX = (-(gridCols - 1) * CONTRIBUTOR_GRID_SPACING) / 2
    const startZ = (-(Math.ceil(contributors.length / gridCols) - 1) * CONTRIBUTOR_GRID_SPACING) / 2

    sortedContributors.forEach((contributor, index) => {
      const radius = scaleRadius(contributor.contributions)
      const color = contributorColorsRef.current[contributor.login] || contributorColorsRef.current["null"]

      const geometry = new THREE.SphereGeometry(radius, 32, 16) // Adjusted detail
      const material = new THREE.MeshStandardMaterial({
        color: color,
        metalness: 0.4,
        roughness: 0.5,
      })
      const sphere = new THREE.Mesh(geometry, material)

      const row = Math.floor(index / gridCols)
      const col = index % gridCols
      sphere.position.set(
        startX + col * CONTRIBUTOR_GRID_SPACING,
        radius, // Place base on y=0 plane
        startZ + row * CONTRIBUTOR_GRID_SPACING,
      )

      sphere.userData = {
        type: "contributor_sphere",
        login: contributor.login,
        contributions: contributor.contributions,
      }
      group.add(sphere)

      // Label below sphere
      const labelDiv = document.createElement("div")
      labelDiv.className = "label"
      labelDiv.textContent = contributor.login
      labelDiv.style.fontSize = "10px"
      labelDiv.style.color = "#ddd"
      labelDiv.style.marginTop = "5px" // Add some space below the sphere visually
      const contLabel = new CSS2DObject(labelDiv)
      contLabel.position.set(sphere.position.x, -1.5, sphere.position.z) // Positioned clearly below
      group.add(contLabel)
    })

    // Title Label
    const titleDiv = document.createElement("div")
    titleDiv.className = "label"
    titleDiv.textContent = "Contributors"
    titleDiv.style.fontSize = "14px"
    titleDiv.style.fontWeight = "bold"
    titleDiv.style.color = "#fff"
    titleDiv.style.backgroundColor = "transparent"
    titleDiv.style.textAlign = "center"
    const titleLabel = new CSS2DObject(titleDiv)
    titleLabel.position.set(0, CONTRIBUTOR_SPHERE_MAX_RADIUS * 2 + 5, 0) // Position above grid
    group.add(titleLabel)

    return group
  }

  // Create language donut chart
  const createLanguageDonut = (languages: Record<string, number>) => {
    const group = new THREE.Group()
    const totalBytes = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0)
    if (totalBytes === 0) return group

    const sortedLangs = Object.entries(languages)
      .filter(([, bytes]) => bytes > 0)
      .sort(([, a], [, b]) => b - a)

    let currentAngle = Math.PI / 2 // Start at 12 o'clock

    const extrudeSettings = { steps: 1, depth: DONUT_EXTRUDE_DEPTH, bevelEnabled: false }

    sortedLangs.forEach(([lang, bytes]) => {
      const percentage = bytes / totalBytes
      const angleSweep = percentage * Math.PI * 2
      if (angleSweep < 0.01) return // Skip very small segments

      const color = stringToColor(lang)

      const shape = new THREE.Shape()
      shape.absarc(0, 0, DONUT_OUTER_RADIUS, currentAngle, currentAngle + angleSweep, false)
      shape.absarc(0, 0, DONUT_INNER_RADIUS, currentAngle + angleSweep, currentAngle, true)

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
      const material = new THREE.MeshStandardMaterial({
        color: color,
        metalness: 0.1,
        roughness: 0.8,
        side: THREE.DoubleSide,
      })
      const segment = new THREE.Mesh(geometry, material)
      segment.position.y = -DONUT_EXTRUDE_DEPTH / 2 // Center extrusion

      segment.userData = {
        type: "language_segment",
        name: lang,
        bytes: bytes,
        percentage: (percentage * 100).toFixed(1),
      }
      group.add(segment)

      // Add Label outside the donut
      const midAngle = currentAngle + angleSweep / 2
      const labelX = Math.cos(midAngle) * DONUT_LABEL_OFFSET
      const labelZ = -Math.sin(midAngle) * DONUT_LABEL_OFFSET

      const labelDiv = document.createElement("div")
      labelDiv.className = "label"
      labelDiv.textContent = `${lang} (${(percentage * 100).toFixed(1)}%)`
      labelDiv.style.fontSize = "10px"
      labelDiv.style.color = "#" + new THREE.Color(color).getHexString()
      labelDiv.style.backgroundColor = "rgba(0,0,0,0.6)"
      const langLabel = new CSS2DObject(labelDiv)
      langLabel.position.set(labelX, 0, labelZ)
      group.add(langLabel)

      currentAngle += angleSweep
    })

    // Title Label
    const titleDiv = document.createElement("div")
    titleDiv.className = "label"
    titleDiv.textContent = "Languages"
    titleDiv.style.fontSize = "14px"
    titleDiv.style.fontWeight = "bold"
    titleDiv.style.color = "#fff"
    titleDiv.style.backgroundColor = "transparent"
    titleDiv.style.textAlign = "center"
    const titleLabel = new CSS2DObject(titleDiv)
    titleLabel.position.set(0, DONUT_OUTER_RADIUS * 1.2, 0) // Position above donut
    group.add(titleLabel)

    return group
  }

  // Add navigation UI
  const createNavigationUI = () => {
    const navContainer = document.createElement('div')
    navContainer.className = 'navigation-controls'
    navContainer.style.position = 'absolute'
    navContainer.style.bottom = '20px'
    navContainer.style.left = '50%'
    navContainer.style.transform = 'translateX(-50%)'
    navContainer.style.display = 'flex'
    navContainer.style.gap = '10px'
    navContainer.style.background = 'rgba(10, 25, 41, 0.7)'
    navContainer.style.padding = '8px 12px'
    navContainer.style.borderRadius = '8px'
    navContainer.style.backdropFilter = 'blur(4px)'
    navContainer.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
    navContainer.style.zIndex = '100'
    
    const views = [
      { id: 'overview', label: '🔍 Overview' },
      { id: 'commitHistory', label: '📝 Commits' },
      { id: 'languages', label: '🧩 Languages' },
      { id: 'contributors', label: '👥 Contributors' }
    ]
    
    views.forEach(view => {
      const button = document.createElement('button')
      button.textContent = view.label
      button.style.background = activeView === view.id ? 'rgba(0, 120, 255, 0.6)' : 'rgba(20, 40, 60, 0.6)'
      button.style.color = '#ffffff'
      button.style.border = 'none'
      button.style.padding = '8px 12px'
      button.style.borderRadius = '4px'
      button.style.cursor = 'pointer'
      button.style.transition = 'all 0.2s ease'
      button.style.fontWeight = '500'
      
      button.addEventListener('mouseenter', () => {
        button.style.background = 'rgba(0, 120, 255, 0.8)'
      })
      
      button.addEventListener('mouseleave', () => {
        button.style.background = activeView === view.id ? 'rgba(0, 120, 255, 0.6)' : 'rgba(20, 40, 60, 0.6)'
      })
      
      button.addEventListener('click', () => {
        setActiveView(view.id)
        navigateToView(view.id)
        
        // Update active button styles
        Array.from(navContainer.children).forEach((btn: Element) => {
          (btn as HTMLElement).style.background = 'rgba(20, 40, 60, 0.6)'
        })
        button.style.background = 'rgba(0, 120, 255, 0.6)'
      })
      
      navContainer.appendChild(button)
    })
    
    if (containerRef.current) {
      containerRef.current.appendChild(navContainer)
    }
  }
  
  // Navigate to different views
  const navigateToView = (viewId: string) => {
    if (!cameraRef.current || !controlsRef.current) return
    
    const preset = CAMERA_PRESETS[viewId as keyof typeof CAMERA_PRESETS]
    if (!preset) return
    
    // Get current position and target
    const startPos = cameraRef.current.position.clone()
    const startTarget = controlsRef.current.target.clone()
    const endPos = preset.position.clone()
    const endTarget = preset.target.clone()
    
    // Animation duration in ms
    const duration = 1000
    const startTime = Date.now()
    
    // Animation function
    const animateCamera = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Ease function (ease-in-out)
      const easeProgress = progress < 0.5 
        ? 2 * progress * progress 
        : -1 + (4 - 2 * progress) * progress
      
      // Update camera position and controls target
      cameraRef.current!.position.lerpVectors(startPos, endPos, easeProgress)
      controlsRef.current!.target.lerpVectors(startTarget, endTarget, easeProgress)
      controlsRef.current!.update()
      
      if (progress < 1) {
        requestAnimationFrame(animateCamera)
      }
    }
    
    // Start animation
    animateCamera()
  }

  // Animation loop with enhanced effects
  const animate = () => {
    if (
      !sceneRef.current ||
      !cameraRef.current ||
      !rendererRef.current ||
      !labelRendererRef.current ||
      !controlsRef.current
    )
      return

    // Rotate the central icosahedron
    if (repoIcosahedronRef.current) {
      repoIcosahedronRef.current.rotation.y += 0.003
      repoIcosahedronRef.current.rotation.x += 0.001
    }
    
    // Animate particles for ambient effect
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      const time = Date.now() * 0.0001
      
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3
        // Gentle wave motion based on position
        positions[i3 + 1] += Math.sin(time + positions[i3] * 0.01) * 0.02
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true
      particlesRef.current.rotation.y += 0.0003
    }
    
    // Make the time ribbon gently pulse
    if (timeRibbonRef.current) {
      const time = Date.now() * 0.001
      const material = timeRibbonRef.current.material as THREE.MeshStandardMaterial
      material.emissive.setRGB(0.1 + Math.sin(time) * 0.05, 0.2 + Math.sin(time * 1.2) * 0.05, 0.5 + Math.sin(time * 0.8) * 0.05)
    }

    controlsRef.current.update() // Update orbit controls
    rendererRef.current.render(sceneRef.current, cameraRef.current)
    labelRendererRef.current.render(sceneRef.current, cameraRef.current) // Update CSS2D labels

    animationFrameRef.current = requestAnimationFrame(animate)
  }

  // Utility function to convert string to color
  const stringToColor = (str: string): THREE.Color => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
      hash = hash & hash // Convert to 32bit integer
    }
    const hue = Math.abs(hash % 360) / 360 // Ensure hue is positive
    const saturation = 0.5 + Math.abs(hash % 11) / 20 // 0.5 - 1.0 range
    const lightness = 0.5 + Math.abs(hash % 21) / 40 // 0.5 - 1.0 range
    const color = new THREE.Color()
    color.setHSL(hue, saturation, lightness)
    return color
  }

  // Create hover description label with enhanced styling
  const createHoverDescription = (object: THREE.Object3D): CSS2DObject | null => {
    if (!object || !object.userData) return null
    
    const ud = object.userData
    let descriptionText = ""
    let iconEmoji = "ℹ️"
    
    switch (ud.type) {
      case "commit":
        // For commits, show a brief summary with emoji indicator
        const messageLines = (ud.message || "").split("\n")
        const shortTitle = messageLines[0].length > 30 
          ? messageLines[0].substring(0, 30) + "..." 
          : messageLines[0]
          
        if (ud.isSignificant) {
          iconEmoji = "🏆"
        } else if (ud.isMerge) {
          iconEmoji = "🔀"
        } else {
          iconEmoji = "📝"
        }
        
        descriptionText = shortTitle
        break
      case "language_segment":
        iconEmoji = "🧩"
        descriptionText = `${ud.name}: ${ud.percentage}%`
        break
      case "contributor_sphere":
        iconEmoji = "👤"
        descriptionText = `${ud.login}: ${ud.contributions.toLocaleString()} contributions`
        break
      case "repo_representation":
        iconEmoji = "📦"
        descriptionText = ud.name
        break
      default:
        return null
    }
    
    // Create a more attractive container for hover descriptions
    const descContainer = document.createElement("div")
    descContainer.className = "hover-description-container"
    descContainer.style.display = "flex"
    descContainer.style.flexDirection = "column"
    descContainer.style.alignItems = "center"
    descContainer.style.padding = "0"
    descContainer.style.pointerEvents = "none"
    descContainer.style.transition = "opacity 0.2s ease"
    
    // Create an arrow pointing down to the object
    const arrow = document.createElement("div")
    arrow.style.width = "0"
    arrow.style.height = "0"
    arrow.style.borderLeft = "8px solid transparent"
    arrow.style.borderRight = "8px solid transparent"
    arrow.style.borderTop = "8px solid rgba(0, 10, 30, 0.9)"
    arrow.style.marginTop = "3px"
    
    // Create styled element for the hover description
    const descDiv = document.createElement("div")
    descDiv.className = "hover-description"
    
    // Get a color based on the object type for custom styling
    let bgColorStart, bgColorEnd, borderColor
    
    if (ud.type === "commit") {
      const objectColor = (object as THREE.Mesh).material instanceof THREE.MeshPhysicalMaterial
        ? (object as THREE.Mesh).material.color
        : new THREE.Color(0x3366ff)
      
      // Create hex colors from the THREE.Color
      const baseColor = "#" + objectColor.getHexString()
      
      // Generate gradient colors from the base color
      bgColorStart = baseColor
      bgColorEnd = adjustColorBrightness(baseColor, -30)
      borderColor = adjustColorBrightness(baseColor, 50)
    } else if (ud.type === "language_segment") {
      bgColorStart = "#1a2b4d"
      bgColorEnd = "#0d1526" 
      borderColor = "#4a7dff"
    } else if (ud.type === "contributor_sphere") {
      bgColorStart = "#2d1a4d"
      bgColorEnd = "#160d26"
      borderColor = "#9d4aff"  
    } else {
      bgColorStart = "#1a4d3d"
      bgColorEnd = "#0d2621"
      borderColor = "#4affc2"
    }
    
    // Apply the fancy styling
    descDiv.style.background = `linear-gradient(to bottom, ${bgColorStart}, ${bgColorEnd})`
    descDiv.style.color = "#ffffff"
    descDiv.style.padding = "8px 12px"
    descDiv.style.borderRadius = "6px"
    descDiv.style.boxShadow = `0 3px 10px rgba(0,0,0,0.5), 0 0 0 1px ${borderColor}`
    descDiv.style.fontSize = "12px"
    descDiv.style.fontWeight = "bold"
    descDiv.style.display = "flex"
    descDiv.style.alignItems = "center"
    descDiv.style.gap = "6px"
    descDiv.style.textShadow = "0 1px 2px rgba(0,0,0,0.5)"
    descDiv.style.whiteSpace = "nowrap"
    
    // Add icon element
    const iconSpan = document.createElement("span")
    iconSpan.textContent = iconEmoji
    iconSpan.style.marginRight = "4px"
    
    // Add text content
    const textSpan = document.createElement("span")
    textSpan.textContent = descriptionText
    
    // Add the icon and text to description div
    descDiv.appendChild(iconSpan)
    descDiv.appendChild(textSpan)
    
    // Add SHA badge for commits
    if (ud.type === "commit") {
      const shaBadge = document.createElement("span")
      shaBadge.textContent = ud.sha.substring(0, 7)
      shaBadge.style.fontSize = "10px"
      shaBadge.style.backgroundColor = "rgba(0,0,0,0.3)"
      shaBadge.style.borderRadius = "3px"
      shaBadge.style.padding = "1px 4px"
      shaBadge.style.marginLeft = "5px"
      descDiv.appendChild(shaBadge)
    }
    
    // Add the description and arrow to the container
    descContainer.appendChild(descDiv)
    descContainer.appendChild(arrow)
    
    // Create and position the label
    const label = new CSS2DObject(descContainer)
    
    // Position above the object
    label.position.copy(object.position)
    
    // Adjust position based on object type
    if (ud.type === "commit") {
      // For commits in the helix, position label more directly above
      label.position.y += COMMIT_RADIUS * 6
    } else if (ud.type === "contributor_sphere") {
      const radius = (object as THREE.Mesh).geometry instanceof THREE.SphereGeometry 
        ? ((object as THREE.Mesh).geometry as THREE.SphereGeometry).parameters.radius
        : 1
      label.position.y += radius * 2
    } else if (ud.type === "language_segment") {
      // For language segments, position in front of the segment
      label.position.y += 8
    } else if (ud.type === "repo_representation") {
      label.position.y += ICOSAHEDRON_RADIUS * 1.8
    }
    
    return label
  }

  // Helper function to adjust color brightness
  const adjustColorBrightness = (hex: string, percent: number): string => {
    // Convert hex to RGB
    let r = parseInt(hex.slice(1, 3), 16)
    let g = parseInt(hex.slice(3, 5), 16)
    let b = parseInt(hex.slice(5, 7), 16)
    
    // Adjust brightness
    r = Math.max(0, Math.min(255, r + percent))
    g = Math.max(0, Math.min(255, g + percent))
    b = Math.max(0, Math.min(255, b + percent))
    
    // Convert back to hex
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
  }

  return <div ref={containerRef} className="w-full h-screen" />
}

