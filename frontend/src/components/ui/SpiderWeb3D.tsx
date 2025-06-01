import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import * as THREE from 'three'

interface SpiderWeb3DProps {
  size?: number
  segments?: number
  layers?: number
  color?: string
}

export const SpiderWeb3D = ({
  size = 15,
  segments = 24,
  layers = 8,
  color = '#ffffff'
}: SpiderWeb3DProps) => {
  const groupRef = useRef<THREE.Group>(null)
  const { viewport } = useThree()
  
  // Calculate size based on viewport width
  const webSize = useMemo(() => {
    const aspectRatio = viewport.width / viewport.height
    return Math.max(viewport.width * 0.6, viewport.height * 0.6 * aspectRatio)
  }, [viewport])

  // Create glowing material
  const glowMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
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
      const point = new THREE.Vector3(
        Math.cos(angle) * webSize,
        Math.sin(angle) * webSize,
        0
      )
      spokes.push(point)
      // Add main radial lines
      points.push([center, point])
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
      
      // Connect to nearest spokes
      for (const point of layerPoints) {
        // Find the closest spoke
        let closestSpoke = spokes[0]
        let minDist = Infinity
        
        for (const spoke of spokes) {
          const dist = point.distanceTo(spoke)
          if (dist < minDist) {
            minDist = dist
            closestSpoke = spoke
          }
        }
        
        // Connect to closest spoke
        points.push([point, closestSpoke])
      }

      // Add additional connections between adjacent layers
      if (layer > 1) {
        const prevLayerPoints = layerPoints.map((point, i) => {
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
  }, [webSize, segments, layers])

  // Animation
  useFrame((state) => {
    if (groupRef.current) {
      // Very subtle rotation that complements camera movement
      const time = state.clock.getElapsedTime()
      groupRef.current.rotation.z = Math.sin(time * 0.1) * 0.02
      groupRef.current.rotation.x = Math.sin(time * 0.05) * 0.01
      groupRef.current.rotation.y = Math.sin(time * 0.15) * 0.01
    }
  })

  return (
    <group ref={groupRef}>
      {webPoints.map((points, index) => (
        <Line
          key={index}
          points={points}
          color={color}
          lineWidth={1}
          transparent
          opacity={0.4}
        />
      ))}
    </group>
  )
} 