import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Line, Text3D, Center } from '@react-three/drei'
import * as THREE from 'three'

type AnimationPhase = 'text' | 'web-expansion' | 'camera-movement'

interface SpiderWeb3DProps {
  segments?: number
  layers?: number
  color?: string
  title?: string
  tagline?: string
  showText?: boolean
  animationPhase?: AnimationPhase
}

export const SpiderWeb3D = ({
  segments = 16,
  layers = 6,
  color = '#ffffff',
  title = '',
  tagline = '',
  showText = false,
  animationPhase = 'camera-movement'
}: SpiderWeb3DProps) => {
  const groupRef = useRef<THREE.Group>(null!)
  const textGroupRef = useRef<THREE.Group>(null!)
  const webGroupRef = useRef<THREE.Group>(null!)
  const textWebGroupRef = useRef<THREE.Group>(null!)
  const { viewport } = useThree()
  
  // Calculate size based on viewport width
  const webSize = useMemo(() => {
    const aspectRatio = viewport.width / viewport.height
    return Math.max(viewport.width * 0.6, viewport.height * 0.6 * aspectRatio)
  }, [viewport])

  // Create glowing material for text
  const textMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.9,
      emissive: new THREE.Color(color),
      emissiveIntensity: 0.2,
      metalness: 0.1,
      roughness: 0.1
    })
  }, [color])

  // Generate web points with realistic spider web pattern
  const webPoints = useMemo(() => {
    const points: THREE.Vector3[][] = []
    const center = new THREE.Vector3(0, 0, 0)
    
    // Generate main radial lines (spokes) - these go from center to edge
    const spokes: THREE.Vector3[] = []
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2
      const spokePoint = new THREE.Vector3(
        Math.cos(angle) * webSize,
        Math.sin(angle) * webSize,
        0
      )
      spokes.push(spokePoint)
      // Add radial lines from center to edge
      points.push([center, spokePoint])
    }
    
    // Generate concentric circles (capture spiral)
    const layerPoints: THREE.Vector3[][] = []
    
    for (let layer = 1; layer <= layers; layer++) {
      const radius = (webSize * layer) / layers
      const currentLayerPoints: THREE.Vector3[] = []
      
      // Calculate points for this layer - same number as spokes for alignment
      for (let i = 0; i < segments; i++) {
        const angle = (i / segments) * Math.PI * 2
        // Add very subtle z-variation for depth (spider webs aren't perfectly flat)
        const z = Math.sin(angle * 3 + layer * 0.5) * 0.1
        const point = new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          z
        )
        currentLayerPoints.push(point)
      }
      
      layerPoints.push(currentLayerPoints)
      
      // Connect points in the layer to form concentric circles
      for (let i = 0; i < currentLayerPoints.length; i++) {
        const nextIndex = (i + 1) % currentLayerPoints.length
        points.push([currentLayerPoints[i], currentLayerPoints[nextIndex]])
      }
    }
    
    // Add stabilizing strands between layers (not every point, just key connections)
    // Real spider webs have some connections between rings for stability
    for (let layer = 1; layer < layerPoints.length; layer++) {
      const currentLayer = layerPoints[layer]
      const prevLayer = layerPoints[layer - 1]
      
      // Connect every 4th point between layers for a natural look
      for (let i = 0; i < currentLayer.length; i += 4) {
        if (prevLayer[i]) {
          points.push([currentLayer[i], prevLayer[i]])
        }
      }
    }
    
    return points
  }, [webSize, segments, layers])

  // Generate web strands that connect from text area to outer web
  const textWebStrands = useMemo(() => {
    if (!showText) return []
    
    const strands: THREE.Vector3[][] = []
    const textBounds = { width: 6, height: 1.5, depth: 0.5 }
    
    // Create fewer, more strategic connecting strands from text area to web
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      const distance = 3 + Math.random() * 2
      
      // Start point near text (around the text perimeter)
      const startRadius = Math.random() * 2 + 1
      const startAngle = angle + (Math.random() - 0.5) * 0.5
      const start = new THREE.Vector3(
        Math.cos(startAngle) * startRadius,
        Math.sin(startAngle) * startRadius * 0.5,
        (Math.random() - 0.5) * textBounds.depth
      )
      
      // End point connecting to web structure
      const end = new THREE.Vector3(
        Math.cos(angle) * distance * 3,
        Math.sin(angle) * distance * 2.5,
        (Math.random() - 0.5) * 2
      )
      
      strands.push([start, end])
    }
    
    return strands
  }, [showText])

  // Animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (groupRef.current) {
      // Different animations based on phase
      if (animationPhase === 'camera-movement') {
        // Very subtle rotation that complements camera movement
        groupRef.current.rotation.z = Math.sin(time * 0.1) * 0.02
        groupRef.current.rotation.x = Math.sin(time * 0.05) * 0.01
        groupRef.current.rotation.y = Math.sin(time * 0.15) * 0.01
      }
    }
    
    // Text appears immediately if showText is true
    if (textGroupRef.current && showText) {
      textGroupRef.current.visible = true
      // Subtle floating animation for text
      textGroupRef.current.position.y = Math.sin(time * 0.5) * 0.2
    } else if (textGroupRef.current) {
      textGroupRef.current.visible = false
    }
    
    // Text web strands animation - appear during web-expansion phase
    if (textWebGroupRef.current && showText) {
      if (animationPhase === 'web-expansion') {
        const expansionProgress = Math.min((time - 2) / 3, 1) // Start after 2s, complete in 3s
        if (expansionProgress > 0) {
          textWebGroupRef.current.scale.setScalar(expansionProgress)
          textWebGroupRef.current.visible = true
        }
      } else if (animationPhase === 'camera-movement') {
        textWebGroupRef.current.scale.setScalar(1)
        textWebGroupRef.current.visible = true
      } else {
        textWebGroupRef.current.visible = false
      }
    }
    
    // Main web expansion animation
    if (webGroupRef.current) {
      if (animationPhase === 'web-expansion') {
        const expansionProgress = Math.min((time - 2) / 3, 1) // Start after 2s, complete in 3s
        if (expansionProgress > 0) {
          webGroupRef.current.scale.setScalar(expansionProgress)
          webGroupRef.current.visible = true
        }
      } else if (animationPhase === 'camera-movement') {
        webGroupRef.current.scale.setScalar(1)
        webGroupRef.current.visible = true
      } else {
        webGroupRef.current.visible = false
      }
    }
  })

  return (
    <group ref={groupRef}>
      {/* 3D Text - visible from the start when showText is true */}
      {showText && (
        <group ref={textGroupRef}>
          <Center>
            <group>
              {/* Title */}
              {title && (
                <Text3D
                  font="/fonts/helvetiker_regular.typeface.json"
                  size={1.5}
                  height={0.2}
                  position={[0, 0.5, 0]}
                  material={textMaterial}
                >
                  {title}
                </Text3D>
              )}
              
              {/* Tagline */}
              {tagline && (
                <Text3D
                  font="/fonts/helvetiker_regular.typeface.json"
                  size={0.6}
                  height={0.1}
                  position={[0, -1, 0]}
                  material={textMaterial}
                >
                  {tagline}
                </Text3D>
              )}
            </group>
          </Center>
        </group>
      )}
      
      {/* Web strands connecting from text - expand during web-expansion phase */}
      {showText && (
        <group ref={textWebGroupRef} visible={false} scale={0}>
          {textWebStrands.map((points, index) => (
            <Line
              key={`text-web-${index}`}
              points={points}
              color={color}
              lineWidth={0.8}
              transparent
              opacity={0.7}
            />
          ))}
        </group>
      )}

      {/* Main spider web - expands during web-expansion phase */}
      <group ref={webGroupRef} visible={false} scale={0}>
        {webPoints.map((points, index) => (
          <Line
            key={`web-${index}`}
            points={points}
            color={color}
            lineWidth={1}
            transparent
            opacity={0.4}
          />
        ))}
      </group>
    </group>
  )
} 