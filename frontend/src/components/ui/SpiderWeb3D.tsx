import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Line, Text3D, Center } from '@react-three/drei'
import * as THREE from 'three'

interface SpiderWeb3DProps {
  segments?: number
  layers?: number
  color?: string
  title?: string
  tagline?: string
  showText?: boolean
}

export const SpiderWeb3D = ({
  segments = 24,
  layers = 8,
  color = '#ffffff',
  title = '',
  tagline = '',
  showText = false
}: SpiderWeb3DProps) => {
  const groupRef = useRef<THREE.Group>(null!)
  const textGroupRef = useRef<THREE.Group>(null!)
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
    
    // Generate main radial lines (spokes)
    const spokes: THREE.Vector3[] = []
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2
      const spokePoint = new THREE.Vector3(
        Math.cos(angle) * webSize,
        Math.sin(angle) * webSize,
        0
      )
      spokes.push(spokePoint)
      // Add main radial lines
      points.push([center, spokePoint])
    }
    
    // Generate spiral layers (capture spiral)
    for (let layer = 1; layer <= layers; layer++) {
      const radius = (webSize * layer) / layers
      const layerPoints: THREE.Vector3[] = []
      
      // Calculate points for this layer
      for (let i = 0; i < segments; i++) {
        const angle = (i / segments) * Math.PI * 2
        // Add subtle z-variation for depth
        const z = Math.sin(angle * 2 + layer) * 0.3
        layerPoints.push(
          new THREE.Vector3(
            Math.cos(angle) * radius,
            Math.sin(angle) * radius,
            z
          )
        )
      }
      
      // Connect points in the layer (spiral)
      for (let i = 0; i < layerPoints.length; i++) {
        const nextIndex = (i + 1) % layerPoints.length
        points.push([layerPoints[i], layerPoints[nextIndex]])
      }
      
      // Connect to nearest spokes for text areas
      if (!showText) {
        for (const layerPoint of layerPoints) {
          // Find the closest spoke
          let closestSpoke = spokes[0]
          let minDist = Infinity
          
          for (const spoke of spokes) {
            const dist = layerPoint.distanceTo(spoke)
            if (dist < minDist) {
              minDist = dist
              closestSpoke = spoke
            }
          }
          
          // Connect to closest spoke
          points.push([layerPoint, closestSpoke])
        }
      }

      // Add additional connections between adjacent layers
      if (layer > 1) {
        const prevLayerPoints = layerPoints.map((_, i) => {
          const prevAngle = (i / segments) * Math.PI * 2
          const prevRadius = (webSize * (layer - 1)) / layers
          const prevZ = Math.sin(prevAngle * 2 + (layer - 1)) * 0.3
          return new THREE.Vector3(
            Math.cos(prevAngle) * prevRadius,
            Math.sin(prevAngle) * prevRadius,
            prevZ
          )
        })

        // Connect to previous layer points (every third point for a more natural look)
        for (let i = 0; i < layerPoints.length; i += 3) {
          points.push([layerPoints[i], prevLayerPoints[i]])
        }
      }
    }
    
    return points
  }, [webSize, segments, layers, showText])

  // Generate web strands around text
  const textWebStrands = useMemo(() => {
    if (!showText) return []
    
    const strands: THREE.Vector3[][] = []
    const textBounds = { width: 8, height: 2, depth: 1 }
    
    // Create connecting strands from text to main web
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      const distance = Math.random() * 3 + 2
      
      // Start point near text
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * textBounds.width,
        (Math.random() - 0.5) * textBounds.height,
        (Math.random() - 0.5) * textBounds.depth
      )
      
      // End point on main web
      const end = new THREE.Vector3(
        Math.cos(angle) * distance * 3,
        Math.sin(angle) * distance * 2,
        (Math.random() - 0.5) * 2
      )
      
      strands.push([start, end])
    }
    
    return strands
  }, [showText])

  // Animation
  useFrame((state) => {
    if (groupRef.current) {
      // Very subtle rotation that complements camera movement
      const time = state.clock.getElapsedTime()
      groupRef.current.rotation.z = Math.sin(time * 0.1) * 0.02
      groupRef.current.rotation.x = Math.sin(time * 0.05) * 0.01
      groupRef.current.rotation.y = Math.sin(time * 0.15) * 0.01
    }
    
    // Animate text if present
    if (textGroupRef.current && showText) {
      const time = state.clock.getElapsedTime()
      textGroupRef.current.position.y = Math.sin(time * 0.5) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main spider web */}
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
      
      {/* Text and surrounding web strands */}
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
          
          {/* Web strands around text */}
          {textWebStrands.map((points, index) => (
            <Line
              key={`text-web-${index}`}
              points={points}
              color={color}
              lineWidth={0.5}
              transparent
              opacity={0.6}
            />
          ))}
        </group>
      )}
    </group>
  )
} 