// components/RepoVisualizer.tsx
"use client"
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import { forceSimulation, forceLink, forceManyBody, forceCenter } from 'd3-force';
import { Commit, Branch, RepositoryData } from '../types/github';

interface Node {
  id: string;
  x?: number;
  y?: number;
  z?: number;
  commit: Commit;
  color: string;
  branches: string[];
}

interface Link {
  source: string;
  target: string;
}

const CommitNode = ({ node, onClick }: { node: Node; onClick: (commit: Commit) => void }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    if (meshRef.current) {
      document.body.style.cursor = hovered ? 'pointer' : 'auto';
    }
  }, [hovered]);

  return (
    <group position={[node.x || 0, node.y || 0, node.z || 0]}>
      <mesh
        ref={meshRef}
        onClick={() => onClick(node.commit)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={hovered ? '#ffffff' : node.color} />
      </mesh>
      {hovered && (
        <Html distanceFactor={10}>
          <div className="bg-black bg-opacity-80 text-white p-2 rounded-md text-xs max-w-xs">
            <p className="font-bold">{node.commit.commit.message.split('\n')[0]}</p>
            <p className="text-gray-300">{node.commit.sha.substring(0, 7)}</p>
            <p className="text-gray-400">{new Date(node.commit.commit.author.date).toLocaleDateString()}</p>
            {node.branches.length > 0 && (
              <div className="mt-1">
                {node.branches.map(branch => (
                  <span key={branch} className="bg-blue-500 text-xs px-1 py-0.5 rounded mr-1">
                    {branch}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Html>
      )}
    </group>
  );
};

const CommitLink = ({ source, target }: { source: [number, number, number]; target: [number, number, number] }) => {
  const points = [new THREE.Vector3(...source), new THREE.Vector3(...target)];
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#666666" linewidth={1} />
    </line>
  );
};

const Graph = ({ data }: { data: RepositoryData }) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [links, setLinks] = useState<Link[]>([]);
  const [selectedCommit, setSelectedCommit] = useState<Commit | null>(null);

  useEffect(() => {
    if (!data.commits || !data.branches) return;

    // Create nodes from commits
    const nodesMap: Record<string, Node> = {};
    const branchHeads: Record<string, string> = {};
    
    // Map branch heads
    data.branches.forEach(branch => {
      branchHeads[branch.commit.sha] = branch.name;
    });

    // Create color mapping for authors
    const authors = Array.from(new Set(data.commits.map(c => c.author?.login || c.commit.author.name)));
    const colorScale = authors.reduce((acc, author, i) => {
      const hue = (i * 360) / authors.length;
      acc[author] = `hsl(${hue}, 70%, 60%)`;
      return acc;
    }, {} as Record<string, string>);

    // Create nodes
    const commitNodes = data.commits.map(commit => {
      const authorName = commit.author?.login || commit.commit.author.name;
      const branches = [];
      
      // Check if this commit is a branch head
      if (branchHeads[commit.sha]) {
        branches.push(branchHeads[commit.sha]);
      }
      
      return {
        id: commit.sha,
        commit,
        color: colorScale[authorName] || '#cccccc',
        branches,
        x: Math.random() * 10 - 5,
        y: Math.random() * 10 - 5,
        z: Math.random() * 10 - 5
      };
    });
    
    commitNodes.forEach(node => {
      nodesMap[node.id] = node;
    });

    // Create links between commits and their parents
    const commitLinks: Link[] = [];
    data.commits.forEach(commit => {
      commit.parents.forEach(parent => {
        if (nodesMap[parent.sha]) {
          commitLinks.push({
            source: commit.sha,
            target: parent.sha
          });
        }
      });
    });

    // Use D3 force simulation to layout the graph
    const simulation = forceSimulation(commitNodes as any)
      .force('link', forceLink(commitLinks as any).id((d: any) => d.id).distance(3))
      .force('charge', forceManyBody().strength(-5))
      .force('center', forceCenter(0, 0))
      .stop();

    // Run the simulation
    for (let i = 0; i < 300; ++i) simulation.tick();

    setNodes(commitNodes);
    setLinks(commitLinks);
  }, [data]);

  const handleCommitClick = (commit: Commit) => {
    setSelectedCommit(commit);
  };

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {/* Render links */}
      {links.map((link, i) => {
        const sourceNode = nodes.find(n => n.id === link.source);
        const targetNode = nodes.find(n => n.id === link.target);
        
        if (!sourceNode || !targetNode) return null;
        
        return (
          <CommitLink 
            key={`link-${i}`} 
            source={[sourceNode.x || 0, sourceNode.y || 0, sourceNode.z || 0]} 
            target={[targetNode.x || 0, targetNode.y || 0, targetNode.z || 0]} 
          />
        );
      })}
      
      {/* Render nodes */}
      {nodes.map(node => (
        <CommitNode key={node.id} node={node} onClick={handleCommitClick} />
      ))}
      
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      
      {/* Commit details panel */}
      {selectedCommit && (
        <Html position={[0, 0, 0]} center style={{ width: '300px', right: '20px', top: '20px', position: 'absolute' }}>
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-md">
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedCommit(null)}
            >
              ✕
            </button>
            <h3 className="text-lg font-bold mb-2">Commit Details</h3>
            <div className="mb-2">
              <span className="font-medium">SHA:</span> {selectedCommit.sha.substring(0, 7)}
            </div>
            <div className="mb-2">
              <span className="font-medium">Message:</span> {selectedCommit.commit.message}
            </div>
            <div className="mb-2">
              <span className="font-medium">Author:</span> {selectedCommit.commit.author.name}
            </div>
            <div className="mb-2">
              <span className="font-medium">Date:</span> {new Date(selectedCommit.commit.author.date).toLocaleString()}
            </div>
            <a 
              href={selectedCommit.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </Html>
      )}
    </>
  );
};

const RepoVisualizer = ({ data }: { data: RepositoryData }) => {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <Graph data={data} />
      </Canvas>
    </div>
  );
};

export default RepoVisualizer;
