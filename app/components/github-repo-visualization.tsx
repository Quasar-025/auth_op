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
const DONUT_OUTER_RADIUS = 18       // Larger outer radius for better display
const DONUT_INNER_RADIUS = 10
const DONUT_EXTRUDE_DEPTH = 4       // Deeper segments for better 3D effect
const DONUT_LABEL_OFFSET = 22       // More space for labels
const DONUT_SEGMENT_SPACING = 0.02  // Small spacing between segments
const LANGUAGE_COLORS: Record<string, number> = {
  JavaScript: 0xf7df1e,
  TypeScript: 0x3178c6,
  Python: 0x3776ab,
  Java: 0xb07219,
  Ruby: 0xcc342d,
  Go: 0x00add8,
  Rust: 0xdea584,
  C: 0x555555,
  "C++": 0xf34b7d,
  "C#": 0x178600,
  PHP: 0x4F5D95,
  Swift: 0xffac45,
  Kotlin: 0xA97BFF,
  Dart: 0x00B4AB,
  HTML: 0xe34c26,
  CSS: 0x563d7c,
  Shell: 0x89e051,
  Dockerfile: 0x384d54,
  Markdown: 0x083fa1,
  YAML: 0xcb171e,
  JSON: 0x292929,
}
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
  contributors: { position: new THREE.Vector3(SIDE_VIS_X_OFFSET + 20, 20, -20), target: new THREE.Vector3(SIDE_VIS_X_OFFSET, 5, SIDE_VIS_Z_POSITION) },
  trainPOV: { position: new THREE.Vector3(0, 0, 0), target: new THREE.Vector3(0, 0, 0) } // Placeholder, will be set dynamically
}
// Visual Effects
const PARTICLE_COUNT = 200
const TIME_RIBBON_WIDTH = 1
const BLOOM_STRENGTH = 0.8
const BLOOM_RADIUS = 0.3

// Time Train
const TRAIN_SIZE = 1.2
const TRAIN_COLOR = 0xffaa00
const TRAIN_EMISSION_COLOR = 0xff6600
const TRAIN_LENGTH = 3
const HIGHLIGHT_DISTANCE = 2.5 // Distance at which commits get highlighted

interface CommitObject {
  mesh: THREE.Mesh
  data: Commit
  position: THREE.Vector3
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
  
  // Time train references
  const timeTrainRef = useRef<THREE.Group | null>(null)
  const trainPositionRef = useRef<number>(0)
  const timeRibbonCurveRef = useRef<THREE.CatmullRomCurve3 | null>(null)
  const sliderRef = useRef<HTMLInputElement | null>(null)
  const highlightedCommitRef = useRef<THREE.Mesh | null>(null)
  const highlightedLabelRef = useRef<CSS2DObject | null>(null)
  const [trainPosition, setTrainPosition] = useState<number>(0)
  const sortedCommitsRef = useRef<Commit[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navContainerRef = useRef<HTMLDivElement | null>(null)
  const sliderContainerRef = useRef<HTMLDivElement | null>(null)
  
  // Add a state for train POV mode
  const [trainPOVEnabled, setTrainPOVEnabled] = useState<boolean>(false)

  // Initialize the scene - back to a simpler approach
  useEffect(() => {
    if (!containerRef.current) return

    // Cleanup previous instance if it exists
    if (rendererRef.current && containerRef.current) {
      containerRef.current.removeChild(rendererRef.current.domElement)
    }
    if (labelRendererRef.current && containerRef.current) {
      containerRef.current.removeChild(labelRendererRef.current.domElement)
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a1929)
    sceneRef.current = scene

    // Fog for depth perception
    scene.fog = new THREE.FogExp2(0x0a1929, 0.002)

    // Camera
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 2000)
    camera.position.copy(CAMERA_PRESETS.overview.position)
    camera.lookAt(CAMERA_PRESETS.overview.target)
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // Limit pixel ratio for better performance
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Label Renderer
    const labelRenderer = new CSS2DRenderer()
    labelRenderer.setSize(window.innerWidth, window.innerHeight)
    labelRenderer.domElement.style.position = "absolute"
    labelRenderer.domElement.style.top = "0px"
    labelRenderer.domElement.style.pointerEvents = "none"
    labelRenderer.domElement.style.zIndex = "1"
    containerRef.current.appendChild(labelRenderer.domElement)
    labelRendererRef.current = labelRenderer

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 0.7
    controls.zoomSpeed = 1.2
    controls.panSpeed = 0.8
    controls.minDistance = 5
    controls.maxDistance = 300
    controls.target.set(0, 20, 0)
    controlsRef.current = controls

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7)
    directionalLight.position.set(40, 80, 60)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024
    directionalLight.shadow.camera.near = 10
    directionalLight.shadow.camera.far = 200
    directionalLight.shadow.bias = -0.0005
    scene.add(directionalLight)
    
    const bluePointLight = new THREE.PointLight(0x3366ff, 0.8, 100)
    bluePointLight.position.set(-30, 20, -20)
    scene.add(bluePointLight)
    
    // Ground plane - moved much lower to avoid cutting through language visualization
    const groundGeometry = new THREE.PlaneGeometry(300, 300)
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x0a1929,
      metalness: 0.2,
      roughness: 0.8,
    })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -20 // Moved from -10 to -20 to position it much lower
    ground.receiveShadow = true
    scene.add(ground)

    // Add particle system 
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = Math.min(PARTICLE_COUNT, 100) // Limit particles for performance
    const positions = new Float32Array(particlesCount * 3)
    
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200
      positions[i * 3 + 1] = Math.random() * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
    })
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)
    particlesRef.current = particles

    // Raycaster for interaction
    const raycaster = new THREE.Raycaster()
    raycasterRef.current = raycaster

    // Process data and create visualizations directly
    processData(repoData)
    createVisualizations(repoData)
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

      // Clean up UI elements
      if (sliderContainerRef.current && containerRef.current) {
        containerRef.current.removeChild(sliderContainerRef.current)
      }
      
      if (navContainerRef.current && containerRef.current) {
        containerRef.current.removeChild(navContainerRef.current)
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
    let moveTimeout: number;
    
    const handlePointerMove = (event: PointerEvent) => {
      // Clear previous timeout
      window.clearTimeout(moveTimeout);
      
      // Set new timeout to debounce raycasting
      moveTimeout = window.setTimeout(() => {
        if (!containerRef.current || !raycasterRef.current || !sceneRef.current || !cameraRef.current) return;
        if (isLoading) return; // Don't process events while loading

        try {
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
        } catch (error) {
          console.error("Error in pointer move handler:", error);
        }
      }, 16); // Roughly 60fps
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
      window.clearTimeout(moveTimeout);
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("click", handlePointerClick)
    }
  }, [hoveredObject, isLoading])

  // Process data to assign colors to contributors
  const processData = (repoData: RepoData) => {
    const contributors = repoData.contributors || []
    contributors.forEach((contributor, index) => {
      // Assign a color based on index, spread around the hue wheel
      contributorColorsRef.current[contributor.login] = new THREE.Color().setHSL((index * 0.17) % 1.0, 0.6, 0.6)
    })
    contributorColorsRef.current["null"] = new THREE.Color(0x888888) // Gray for unknown/null authors
    
    // Store sorted commits for time train reference
    sortedCommitsRef.current = [...repoData.commits].sort(
      (a, b) => new Date(a.commit.author.date).getTime() - new Date(b.commit.author.date).getTime(),
    )
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
    
    // Create timeline train and slider after everything else is set up
    createTimelineTrain()
    createTimelineSlider()
  }

  // Create commit graph - simplified version
  const createCommitGraph = (commits: Commit[]) => {
    const group = new THREE.Group()
    const commitObjects: Record<string, CommitObject> = {}

    // Sort commits by date
    const sortedCommits = [...commits].sort(
      (a, b) => new Date(a.commit.author.date).getTime() - new Date(b.commit.author.date).getTime(),
    )

    // Create ribbon points
    const ribbonPoints: THREE.Vector3[] = []
    const totalCommits = sortedCommits.length
    
    for (let i = 0; i <= totalCommits; i++) {
      const t = i / totalCommits
      const angle = (t * totalCommits / COMMITS_PER_LOOP) * Math.PI * 2
      const x = HELIX_RADIUS * Math.cos(angle)
      const z = HELIX_RADIUS * Math.sin(angle)
      const y = HELIX_START_Y + (t * totalCommits / COMMITS_PER_LOOP) * HELIX_PITCH
      
      ribbonPoints.push(new THREE.Vector3(x, y, z))
    }
    
    // Create curve and tube
    const ribbonCurve = new THREE.CatmullRomCurve3(ribbonPoints)
    timeRibbonCurveRef.current = ribbonCurve
    
    // Use appropriate detail level based on commit count
    const ribbonDetail = Math.min(totalCommits, 100)
    const ribbonGeometry = new THREE.TubeGeometry(
      ribbonCurve, 
      ribbonDetail, 
      TIME_RIBBON_WIDTH, 
      8, 
      false
    )
    
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

    // For large repos, limit visible commits
    const maxVisibleCommits = Math.min(sortedCommits.length, 200)
    const visibleCommits = sortedCommits.length <= maxVisibleCommits 
      ? sortedCommits 
      : sortedCommits.filter((commit, i) => {
          // Keep important commits and sample others
          return commit.parents.length > 1 || // Keep all merge commits
                 i === 0 || // Keep first commit
                 i === sortedCommits.length - 1 || // Keep last commit
                 i % Math.ceil(sortedCommits.length / maxVisibleCommits) === 0 // Sample others
        })

    // Create commit spheres
    const commitSphereGeo = new THREE.SphereGeometry(COMMIT_RADIUS, 16, 16)
    const commitDates = sortedCommits.map(c => new Date(c.commit.author.date).getTime())
    const timeRange = Math.max(...commitDates) - Math.min(...commitDates)
    
    visibleCommits.forEach((commitData) => {
      const authorLogin = commitData.author?.login || null
      const color = contributorColorsRef.current[authorLogin || "null"] || contributorColorsRef.current["null"]
      
      // Create commit mesh
      const material = new THREE.MeshStandardMaterial({ 
        color: color, 
        metalness: 0.6, 
        roughness: 0.3,
        emissive: new THREE.Color(color).multiplyScalar(0.1)
      })
      
      const mesh = new THREE.Mesh(commitSphereGeo, material)
      
      // Calculate position
      const index = sortedCommits.indexOf(commitData)
      const normalizedIndex = index / sortedCommits.length
      const angle = (normalizedIndex * totalCommits / COMMITS_PER_LOOP) * Math.PI * 2
      const xPos = HELIX_RADIUS * Math.cos(angle)
      const zPos = HELIX_RADIUS * Math.sin(angle)
      const yPos = HELIX_START_Y + (normalizedIndex * totalCommits / COMMITS_PER_LOOP) * HELIX_PITCH
      
      // Apply scaling and jitter
      const isMerge = commitData.parents.length > 1
      const commitTime = new Date(commitData.commit.author.date).getTime()
      const commitAge = (commitTime - Math.min(...commitDates)) / timeRange
      const isSignificant = commitData.commit.message.toLowerCase().includes('release') || 
                           commitData.commit.message.toLowerCase().includes('version') ||
                           commitData.commit.message.toLowerCase().includes('milestone')
      
      let scale = 1.0
      if (isMerge) scale *= 1.3
      if (isSignificant) scale *= 1.5
      if (commitAge < 0.1) scale *= 1.2
      
      mesh.scale.set(scale, scale, scale)
      
      // Add jitter
      const jitterFactor = isMerge ? 0.5 : 0.2
      const jitter = new THREE.Vector3(
        (Math.random() - 0.5) * jitterFactor,
        (Math.random() - 0.5) * jitterFactor,
        (Math.random() - 0.5) * jitterFactor
      )
      
      const finalPosition = new THREE.Vector3(
        xPos + jitter.x,
        yPos + jitter.y,
        zPos + jitter.z
      )
      
      mesh.position.copy(finalPosition)
      
      // Store metadata
      mesh.userData = {
        type: "commit",
        sha: commitData.sha,
        message: commitData.commit.message,
        author: authorLogin || "Unknown",
        date: new Date(commitData.commit.author.date).toLocaleString(),
        url: commitData.html_url,
        parents: commitData.parents.map((p) => p.sha),
        isSignificant,
        isMerge,
        index
      }
      
      commitObjects[commitData.sha] = { 
        mesh, 
        data: commitData,
        position: finalPosition
      }
      
      group.add(mesh)
    })

    // Store commit objects
    commitObjectsRef.current = commitObjects

    // Add connections - limit count for performance
    const maxConnections = Math.min(300, sortedCommits.length)
    let connectionCount = 0
    
    Object.values(commitObjects).forEach((commitObj) => {
      if (connectionCount >= maxConnections) return
      
      commitObj.data.parents.forEach((parentSha) => {
        if (connectionCount >= maxConnections) return
        
        const parentObj = commitObjects[parentSha]
        if (parentObj) {
          const isMerge = commitObj.data.parents.length > 1
          
          // Create simple line for better performance
          const points = [parentObj.position.clone(), commitObj.position.clone()]
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
          const lineColor = isMerge ? 0x9966ff : 0x666666
          const lineMaterial = new THREE.LineBasicMaterial({
            color: lineColor, 
            transparent: true,
            opacity: isMerge ? 0.5 : 0.3
          })
          
          const line = new THREE.Line(lineGeometry, lineMaterial)
          group.add(line)
          connectionCount++
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

  // Create language donut chart - enhanced version
  const createLanguageDonut = (languages: Record<string, number>) => {
    const group = new THREE.Group()
    const totalBytes = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0)
    if (totalBytes === 0) return group

    // Create a stand for the donut
    const standGeometry = new THREE.CylinderGeometry(DONUT_INNER_RADIUS * 0.8, DONUT_INNER_RADIUS * 1.2, 1, 32)
    const standMaterial = new THREE.MeshStandardMaterial({
      color: 0x333344,
      metalness: 0.7,
      roughness: 0.3,
    })
    const stand = new THREE.Mesh(standGeometry, standMaterial)
    stand.position.y = -DONUT_EXTRUDE_DEPTH / 2 - 0.5
    group.add(stand)

    // Create a central sphere
    const coreGeometry = new THREE.SphereGeometry(DONUT_INNER_RADIUS * 0.6, 24, 24)
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x3366ff,
      metalness: 0.7,
      roughness: 0.2,
      clearcoat: 1.0,
      emissive: 0x3366ff,
      emissiveIntensity: 0.2,
    })
    const core = new THREE.Mesh(coreGeometry, coreMaterial)
    core.position.y = 1
    group.add(core)

    // Add point light in the center for better illumination
    const centerLight = new THREE.PointLight(0x3366ff, 1, 30)
    centerLight.position.set(0, 1, 0)
    group.add(centerLight)

    // Sort languages by size
    const sortedLangs = Object.entries(languages)
      .filter(([, bytes]) => bytes > 0)
      .sort(([, a], [, b]) => b - a)

    let currentAngle = Math.PI / 2 // Start at 12 o'clock

    // Enhanced extrude settings with bevels
    const extrudeSettings = { 
      steps: 2, 
      depth: DONUT_EXTRUDE_DEPTH, 
      bevelEnabled: true,
      bevelThickness: 0.2,
      bevelSize: 0.1,
      bevelOffset: 0,
      bevelSegments: 3
    }

    // Create a group for all segments
    const segmentsGroup = new THREE.Group()
    group.add(segmentsGroup)

    // Create segments with small spacing between them
    sortedLangs.forEach(([lang, bytes]) => {
      const percentage = bytes / totalBytes
      const angleSweep = percentage * Math.PI * 2
      
      if (angleSweep < 0.02) return // Skip very small segments
      
      // Apply segment spacing
      const startAngle = currentAngle + DONUT_SEGMENT_SPACING / 2
      const endAngle = currentAngle + angleSweep - DONUT_SEGMENT_SPACING / 2

      // Use predefined colors for common languages or generate one if not in the list
      let color = LANGUAGE_COLORS[lang]
      if (!color) {
        // Use a consistent algorithm for languages not in our palette
        color = getLanguageColor(lang)
      } else {
        // Brighten predefined colors by 15%
        const threeColor = new THREE.Color(color)
        threeColor.multiplyScalar(1.15) // Brighten the color
        color = (Math.floor(threeColor.r * 255) << 16) | 
                (Math.floor(threeColor.g * 255) << 8) | 
                 Math.floor(threeColor.b * 255)
      }

      // Create shape with rounded corners
      const shape = new THREE.Shape()
      shape.absarc(0, 0, DONUT_OUTER_RADIUS, startAngle, endAngle, false)
      shape.absarc(0, 0, DONUT_INNER_RADIUS, endAngle, startAngle, true)

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
      
      // Enhanced material with brighter emissive values
      const material = new THREE.MeshPhysicalMaterial({
        color: color,
        metalness: 0.3,
        roughness: 0.5,
        clearcoat: 0.3,
        clearcoatRoughness: 0.25,
        reflectivity: 0.5,
        emissive: new THREE.Color(color).multiplyScalar(0.25), // Increased from 0.15 for more glow
        side: THREE.DoubleSide,
      })
      
      const segment = new THREE.Mesh(geometry, material)
      
      // Slightly elevate each segment for better 3D effect
      segment.position.y = -DONUT_EXTRUDE_DEPTH / 2 + Math.random() * 0.1

      // Store metadata for interaction
      segment.userData = {
        type: "language_segment",
        name: lang,
        bytes: bytes,
        percentage: (percentage * 100).toFixed(1),
        color: color
      }
      
      segmentsGroup.add(segment)

      // Create enhanced label with icon
      const labelDiv = document.createElement("div")
      labelDiv.className = "language-label"
      
      // Add styling for better visibility
      labelDiv.style.fontSize = "11px"
      labelDiv.style.fontWeight = "bold"
      labelDiv.style.color = "#" + new THREE.Color(color).getHexString()
      labelDiv.style.backgroundColor = "rgba(0,0,0,0.7)"
      labelDiv.style.padding = "3px 6px"
      labelDiv.style.borderRadius = "4px"
      labelDiv.style.backdropFilter = "blur(2px)"
      labelDiv.style.border = `1px solid #${new THREE.Color(color).getHexString()}`
      labelDiv.style.boxShadow = "0 2px 4px rgba(0,0,0,0.5)"
      labelDiv.style.whiteSpace = "nowrap"
      
      // Add language icon when available
      const languageIcon = getLanguageIcon(lang)
      if (languageIcon) {
        labelDiv.textContent = `${languageIcon} ${lang} (${(percentage * 100).toFixed(1)}%)`
      } else {
        labelDiv.textContent = `${lang} (${(percentage * 100).toFixed(1)}%)`
      }
      
      // Position label with slight randomization for better layout
      const midAngle = (startAngle + endAngle) / 2
      const labelDistance = DONUT_LABEL_OFFSET + (percentage > 0.1 ? 0 : 3) // Push small segments' labels further out
      const labelX = Math.cos(midAngle) * labelDistance
      const labelZ = -Math.sin(midAngle) * labelDistance
      
      const langLabel = new CSS2DObject(labelDiv)
      langLabel.position.set(labelX, 0, labelZ)
      group.add(langLabel)

      currentAngle += angleSweep
    })

    // Add title with improved styling
    const titleDiv = document.createElement("div")
    titleDiv.className = "language-title"
    titleDiv.textContent = "Languages"
    titleDiv.style.fontSize = "16px"
    titleDiv.style.fontWeight = "bold"
    titleDiv.style.color = "#fff"
    titleDiv.style.textShadow = "0 0 5px rgba(51, 102, 255, 0.8)"
    titleDiv.style.backgroundColor = "rgba(10, 25, 41, 0.7)"
    titleDiv.style.padding = "5px 15px"
    titleDiv.style.borderRadius = "20px"
    titleDiv.style.border = "1px solid rgba(51, 102, 255, 0.5)"
    titleDiv.style.boxShadow = "0 3px 8px rgba(0,0,0,0.5)"
    titleDiv.style.backdropFilter = "blur(3px)"
    
    const titleLabel = new CSS2DObject(titleDiv)
    titleLabel.position.set(0, DONUT_OUTER_RADIUS * 1.5, 0)
    group.add(titleLabel)

    // Add subtle rotation animation
    const animate = () => {
      segmentsGroup.rotation.y += 0.001
      requestAnimationFrame(animate)
    }
    animate()

    return group
  }

  // Helper function to get consistent colors for languages with brighter output
  const getLanguageColor = (language: string): number => {
    let hash = 0
    for (let i = 0; i < language.length; i++) {
      hash = language.charCodeAt(i) + ((hash << 5) - hash)
    }
    
    // Generate vibrant colors with good saturation
    const r = Math.abs((hash >> 16) & 255)
    const g = Math.abs((hash >> 8) & 255)
    const b = Math.abs(hash & 255)
    
    // Ensure colors are vibrant by boosting the dominant channel and overall brightness
    const max = Math.max(r, g, b)
    const boost = 255 / max
    
    // Higher multipliers (0.9 instead of 0.8) for brighter colors
    const boostedR = Math.min(255, Math.floor(r * boost * 0.9))
    const boostedG = Math.min(255, Math.floor(g * boost * 0.9))
    const boostedB = Math.min(255, Math.floor(b * boost * 0.9))
    
    return (boostedR << 16) | (boostedG << 8) | boostedB
  }

  // Helper function to get language icons
  const getLanguageIcon = (language: string): string => {
    const icons: Record<string, string> = {
      JavaScript: "🟨",
      TypeScript: "🔵",
      Python: "🐍",
      Java: "☕",
      Ruby: "💎",
      Go: "🔹",
      Rust: "⚙️",
      "C++": "🔧",
      "C#": "🟢",
      PHP: "🐘",
      Swift: "🦅",
      Kotlin: "🎯",
      HTML: "🌐",
      CSS: "🎨",
      Shell: "🐚",
      Markdown: "📝",
      YAML: "📋",
      JSON: "📦"
    }
    
    return icons[language] || "🧩"
  }

  // Create timeline train - simplified
  const createTimelineTrain = () => {
    if (!sceneRef.current || !timeRibbonCurveRef.current) return
    
    // Create train group
    const trainGroup = new THREE.Group()
    
    // Main sphere
    const trainSphere = new THREE.Mesh(
      new THREE.SphereGeometry(TRAIN_SIZE, 12, 12),
      new THREE.MeshStandardMaterial({
        color: TRAIN_COLOR,
        emissive: TRAIN_EMISSION_COLOR,
        emissiveIntensity: 0.5
      })
    )
    trainGroup.add(trainSphere)
    
    // Direction cone
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(TRAIN_SIZE * 0.6, TRAIN_SIZE * 2, 8),
      new THREE.MeshStandardMaterial({
        color: TRAIN_COLOR,
        emissive: TRAIN_EMISSION_COLOR,
        emissiveIntensity: 0.3
      })
    )
    cone.rotation.x = Math.PI / 2
    cone.position.z = TRAIN_SIZE * 1.2
    trainGroup.add(cone)
      
    // Light
    const light = new THREE.PointLight(TRAIN_EMISSION_COLOR, 1, 8)
    trainGroup.add(light)
    
    sceneRef.current.add(trainGroup)
    timeTrainRef.current = trainGroup
    
    // Initialize position
    updateTrainPosition(0)
  }
  
  // Create slider - simplified
  const createTimelineSlider = () => {
    if (!containerRef.current) return
    
    // Container
    const container = document.createElement('div')
    container.style.position = 'absolute'
    container.style.bottom = '80px'
    container.style.left = '50%'
    container.style.transform = 'translateX(-50%)'
    container.style.width = '80%'
    container.style.maxWidth = '600px'
    container.style.background = 'rgba(10, 25, 41, 0.7)'
    container.style.padding = '12px 20px'
    container.style.borderRadius = '8px'
    container.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)'
    container.style.zIndex = '100'
    container.style.display = 'none' // Hidden initially
    
    // Title
    const title = document.createElement('div')
    title.textContent = 'Time Machine'
    title.style.color = '#ffffff'
    title.style.fontSize = '14px'
    title.style.fontWeight = 'bold'
    title.style.textAlign = 'center'
    title.style.marginBottom = '8px'
    
    // Slider
    const slider = document.createElement('input')
    slider.type = 'range'
    slider.min = '0'
    slider.max = '1000'
    slider.value = '0'
    slider.style.width = '100%'
    slider.style.height = '20px'
    slider.style.appearance = 'none'
    slider.style.background = 'rgba(20, 40, 60, 0.8)'
    slider.style.borderRadius = '10px'
    slider.style.cursor = 'pointer'
    
    // Text
    const text = document.createElement('div')
    text.textContent = 'Drag to explore commit history'
    text.style.color = '#ffffff'
    text.style.fontSize = '12px'
    text.style.textAlign = 'center'
    text.style.marginTop = '5px'
    
    // Add POV toggle
    const controlsRow = document.createElement('div')
    controlsRow.style.display = 'flex'
    controlsRow.style.alignItems = 'center'
    controlsRow.style.justifyContent = 'center'
    controlsRow.style.marginTop = '10px'
    
    const povToggle = document.createElement('div')
    povToggle.style.display = 'flex'
    povToggle.style.alignItems = 'center'
    povToggle.style.cursor = 'pointer'
    povToggle.style.padding = '5px 8px'
    povToggle.style.borderRadius = '4px'
    povToggle.style.backgroundColor = 'rgba(20, 40, 60, 0.8)'
    povToggle.style.transition = 'background-color 0.2s'
    
    const povCheckbox = document.createElement('div')
    povCheckbox.style.width = '16px'
    povCheckbox.style.height = '16px'
    povCheckbox.style.borderRadius = '3px'
    povCheckbox.style.border = '2px solid white'
    povCheckbox.style.marginRight = '8px'
    povCheckbox.style.display = 'flex'
    povCheckbox.style.alignItems = 'center'
    povCheckbox.style.justifyContent = 'center'
    povCheckbox.innerHTML = trainPOVEnabled ? '✓' : ''
    povCheckbox.style.color = 'white'
    povCheckbox.style.transition = 'background-color 0.2s'
    povCheckbox.style.backgroundColor = trainPOVEnabled ? '#ffaa00' : 'transparent'
    
    const povLabel = document.createElement('span')
    povLabel.textContent = 'Train POV Mode'
    povLabel.style.color = 'white'
    povLabel.style.fontSize = '12px'
    
    povToggle.appendChild(povCheckbox)
    povToggle.appendChild(povLabel)
    
    povToggle.addEventListener('click', () => {
      setTrainPOVEnabled(!trainPOVEnabled)
      povCheckbox.innerHTML = !trainPOVEnabled ? '✓' : ''
      povCheckbox.style.backgroundColor = !trainPOVEnabled ? '#ffaa00' : 'transparent'
      
      // Update camera immediately if turning on POV mode
      if (!trainPOVEnabled && timeRibbonCurveRef.current && cameraRef.current && controlsRef.current) {
        const position = trainPositionRef.current
        const point = timeRibbonCurveRef.current.getPointAt(position)
        const tangent = timeRibbonCurveRef.current.getTangentAt(position)
        
        if (point && tangent) {
          const trainDirection = tangent.normalize()
          const behind = trainDirection.clone().multiplyScalar(-3)
          const up = new THREE.Vector3(0, 1.5, 0)
          
          const cameraPos = point.clone().add(behind).add(up)
          cameraRef.current.position.copy(cameraPos)
          
          const lookAhead = point.clone().add(trainDirection.clone().multiplyScalar(10))
          cameraRef.current.lookAt(lookAhead)
          controlsRef.current.target.copy(lookAhead)
          controlsRef.current.update()
        }
      }
    })
    
    povToggle.addEventListener('mouseenter', () => {
      povToggle.style.backgroundColor = 'rgba(30, 50, 70, 0.8)'
    })
    
    povToggle.addEventListener('mouseleave', () => {
      povToggle.style.backgroundColor = 'rgba(20, 40, 60, 0.8)'
    })
    
    controlsRow.appendChild(povToggle)
    
    // Event listener for slider with immediate train position update
    slider.addEventListener('input', () => {
      const position = parseInt(slider.value) / 1000
      setTrainPosition(position)
      updateTrainPosition(position)
    })
    
    // Assemble
    container.appendChild(title)
    container.appendChild(slider)
    container.appendChild(text)
    container.appendChild(controlsRow)
    containerRef.current.appendChild(container)
    
    // Store references
    sliderRef.current = slider
    sliderContainerRef.current = container
  }
  
  // Update train position - optimized for real-time POV updates
  const updateTrainPosition = (position: number) => {
    if (!timeRibbonCurveRef.current || !timeTrainRef.current) return
    
    try {
      // Clamp position to valid range
      const safePosition = Math.max(0, Math.min(1, position))
      trainPositionRef.current = safePosition
      
      // Get position on curve
      const point = timeRibbonCurveRef.current.getPointAt(safePosition)
      const tangent = timeRibbonCurveRef.current.getTangentAt(safePosition)
      
      if (!point || !tangent) return;
      
      // Position train
      timeTrainRef.current.position.copy(point)
      
      // Orient along curve
      const lookAt = new THREE.Vector3().copy(point).add(tangent)
      timeTrainRef.current.lookAt(lookAt)
      
      // Update camera if trainPOV is enabled - improved position calculation
      if (trainPOVEnabled && cameraRef.current && controlsRef.current) {
        // Calculate camera position - slightly behind and above the train
        const trainDirection = tangent.clone().normalize()
        const behind = trainDirection.clone().multiplyScalar(-3) // 3 units behind the train
        const up = new THREE.Vector3(0, 1.5, 0) // 1.5 units above
        
        const cameraPos = point.clone().add(behind).add(up)
        cameraRef.current.position.copy(cameraPos)
        
        // Look ahead of the train - further ahead for better viewing
        const lookAhead = point.clone().add(trainDirection.clone().multiplyScalar(15))
        cameraRef.current.lookAt(lookAhead)
        controlsRef.current.target.copy(lookAhead)
        
        // Disable controls to prevent orbit conflicts
        controlsRef.current.enabled = false
      } else if (controlsRef.current) {
        // Re-enable controls when not in POV mode
        controlsRef.current.enabled = true
      }
      
      // Highlight nearest commit
      highlightNearestCommit(point)
    } catch (error) {
      console.error("Error updating train position:", error)
    }
  }

  // Highlight nearest commit - simplified
  const highlightNearestCommit = (trainPosition: THREE.Vector3) => {
    if (!sceneRef.current) return
    
    // Clear previous highlight
    if (highlightedCommitRef.current) {
      if (highlightedCommitRef.current.material instanceof THREE.MeshStandardMaterial) {
        highlightedCommitRef.current.material.emissive.setHex(0)
      }
      highlightedCommitRef.current = null
    }
    
    if (highlightedLabelRef.current) {
      sceneRef.current.remove(highlightedLabelRef.current)
      highlightedLabelRef.current = null
    }
    
    // Find closest commit
    let closest: THREE.Mesh | null = null
    let closestDistance = Infinity
    let closestData: Commit | null = null
    
    Object.values(commitObjectsRef.current).forEach(({ mesh, data, position }) => {
      const distance = trainPosition.distanceTo(position)
      if (distance < closestDistance) {
        closestDistance = distance
        closest = mesh
        closestData = data
      }
    })
    
    // Apply highlight if close enough
    if (closest && closestDistance < HIGHLIGHT_DISTANCE) {
      highlightedCommitRef.current = closest
      
      if (closest.material instanceof THREE.MeshStandardMaterial) {
        closest.material.emissive.setHex(0xffaa00)
      }
      
      // Create label for selected commit
      const labelDiv = document.createElement("div")
      labelDiv.style.backgroundColor = "#ffaa00"
      labelDiv.style.color = "white"
      labelDiv.style.padding = "5px 10px"
      labelDiv.style.borderRadius = "4px"
      labelDiv.style.fontWeight = "bold"
      labelDiv.style.fontSize = "12px"
      
      // Get commit message first line
      const messageLine = closestData?.commit.message.split("\n")[0] || "Unknown commit"
      labelDiv.textContent = messageLine.length > 40 ? 
        messageLine.substring(0, 40) + "..." : 
        messageLine
      
      const label = new CSS2DObject(labelDiv)
      label.position.copy(closest.position)
      label.position.y += 3 // Position above commit
      
      sceneRef.current.add(label)
      highlightedLabelRef.current = label
    }
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
      { id: 'timeMachine', label: '🚂 Time Machine' }, // Add this new option
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
  
  // Navigate to different views - fixed variable scope issues
  const navigateToView = (viewId: string) => {
    if (!cameraRef.current || !controlsRef.current) return
    
    // Disable train POV when switching views (except time machine)
    if (viewId !== 'timeMachine' && trainPOVEnabled) {
      setTrainPOVEnabled(false)
      
      // Update the checkbox in the UI
      if (sliderContainerRef.current) {
        const povCheckbox = sliderContainerRef.current.querySelector('div > div')
        if (povCheckbox) {
          povCheckbox.innerHTML = ''
          povCheckbox.style.backgroundColor = 'transparent'
        }
      }
    }
    
    // Show/hide the time slider based on view
    if (sliderRef.current && sliderRef.current.parentElement) {
      sliderRef.current.parentElement.style.display = viewId === 'timeMachine' ? 'flex' : 'none'
    }
    
    // Set time machine specific camera view
    if (viewId === 'timeMachine' && timeRibbonCurveRef.current) {
      const position = trainPositionRef.current
      const point = timeRibbonCurveRef.current.getPointAt(position)
      const tangent = timeRibbonCurveRef.current.getTangentAt(position)
      
      // Position camera to look at the train from a good angle
      const cameraPosition = point.clone().add(
        new THREE.Vector3(30, 20, 30)
      )
      
      // Get current position and target
      const startPos = cameraRef.current.position.clone()
      const startTarget = controlsRef.current.target.clone()
      const endPos = cameraPosition.clone()
      const endTarget = point.clone()
      
      // Animation duration in ms
      const duration = 1000
      const startTime = Date.now()
      
      // Animation function with locally scoped variables for safe closure
      const animateCamera = () => {
        // Safely ensure variables are available within this closure
        const currentCamera = cameraRef.current
        const currentControls = controlsRef.current
        
        if (!currentCamera || !currentControls) return
        
        // Use local references to prevent "not defined" errors 
        const start = startPos
        const startT = startTarget
        const end = endPos
        const endT = endTarget
        
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Ease function (ease-in-out)
        const easeProgress = progress < 0.5 
          ? 2 * progress * progress 
          : -1 + (4 - 2 * progress) * progress
        
        // Update camera position and controls target
        currentCamera.position.lerpVectors(start, end, easeProgress)
        currentControls.target.lerpVectors(startT, endT, easeProgress)
        currentControls.update()
        
        if (progress < 1) {
          requestAnimationFrame(animateCamera)
        }
      }
      
      // Start animation
      animateCamera()
    } else {
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
      
      // Animation function with locally scoped variables for safe closure
      const animateCamera = () => {
        // Safely ensure variables are available within this closure
        const currentCamera = cameraRef.current
        const currentControls = controlsRef.current
        
        if (!currentCamera || !currentControls) return
        
        // Use local references to prevent "not defined" errors
        const start = startPos
        const startT = startTarget
        const end = endPos
        const endT = endTarget
        
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Ease function (ease-in-out)
        const easeProgress = progress < 0.5 
          ? 2 * progress * progress 
          : -1 + (4 - 2 * progress) * progress
        
        // Update camera position and controls target
        currentCamera.position.lerpVectors(start, end, easeProgress)
        currentControls.target.lerpVectors(startT, endT, easeProgress)
        currentControls.update()
        
        if (progress < 1) {
          requestAnimationFrame(animateCamera)
        }
      }
      
      // Start animation
      animateCamera()
    }
  }

  // Animate - simplified to avoid POV camera conflicts
  const animate = () => {
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current || !labelRendererRef.current) {
      animationFrameRef.current = requestAnimationFrame(animate)
      return
    }
    
    try {
      // Simple animation of icosahedron
      if (repoIcosahedronRef.current) {
        repoIcosahedronRef.current.rotation.y += 0.002
      }
      
      // Gentle particle animation
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0001
      }
      
      // Render the scene
      rendererRef.current.render(sceneRef.current, cameraRef.current)
      labelRendererRef.current.render(sceneRef.current, cameraRef.current)
    } catch (error) {
      console.error("Error in animation loop:", error)
    }
    
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

  // Error display component
  const renderError = () => {
    if (!error) return null;
    
    return (
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(200, 30, 30, 0.9)',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '400px',
        textAlign: 'center',
        zIndex: '1001'
      }}>
        <h3>Visualization Error</h3>
        <p>{error}</p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            backgroundColor: 'white',
            color: '#c81e1e',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px',
            fontWeight: 'bold'
          }}
        >
          Reload
        </button>
      </div>
    );
  };

  return (
    <div ref={containerRef} className="w-full h-screen">
      {renderError()}
    </div>
  );
}

