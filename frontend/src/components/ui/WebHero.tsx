import { Box } from '@chakra-ui/react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { motion } from 'framer-motion'
import { SpiderWeb3D } from './SpiderWeb3D'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { useColorMode } from './color-mode'

// Animation phases
type AnimationPhase = 'text' | 'web-expansion' | 'camera-movement'

// Camera animation component
const AnimatedCamera = ({ phase }: { phase: AnimationPhase }) => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null)
  
  useFrame((state) => {
    if (cameraRef.current) {
      const time = state.clock.getElapsedTime()
      
      if (phase === 'camera-movement') {
        // Create a smooth circular motion
        const radius = 25
        const speed = 0.2
        
        // Circular motion
        cameraRef.current.position.x = Math.sin(time * speed) * radius
        cameraRef.current.position.z = Math.cos(time * speed) * radius + 20
        cameraRef.current.position.y = Math.sin(time * speed * 0.5) * 5
        
        // Always look at the center
        cameraRef.current.lookAt(0, 0, 0)
      } else {
        // Keep camera centered during text and web expansion phases
        cameraRef.current.position.set(0, 0, 30)
        cameraRef.current.lookAt(0, 0, 0)
      }
    }
  })

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[0, 0, 30]}
      fov={35}
      near={0.1}
      far={1000}
    />
  )
}

interface WebHeroProps {
  children?: React.ReactNode
  title?: string
  tagline?: string
  showText?: boolean
  minHeight?: string
  backgroundColor?: string
  webColor?: string
}

export const WebHero = ({ 
  children, 
  title = '',
  tagline = '',
  showText = false,
  backgroundColor,
  webColor
}: WebHeroProps) => {
  const { colorMode } = useColorMode()
  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>('text')
  
  const defaultBgColor = colorMode === 'light' ? 'gray.50' : 'gray.900'
  const defaultWebColor = colorMode === 'light' ? '#2D3748' : '#E2E8F0'
  
  const bgColor = backgroundColor || defaultBgColor
  const finalWebColor = webColor || defaultWebColor
  const textColor = colorMode === 'light' ? 'gray.700' : 'gray.200'

  // Animation sequence timing
  useEffect(() => {
    if (!showText) {
      setAnimationPhase('camera-movement')
      return
    }

    const timers = [
      // Show text for 2 seconds, then start web expansion
      setTimeout(() => {
        setAnimationPhase('web-expansion')
      }, 1000),
      // Start camera movement after web expansion (3 seconds)
      setTimeout(() => {
        setAnimationPhase('camera-movement')
      }, 6000)
    ]

    return () => timers.forEach(clearTimeout)
  }, [showText])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ height: '50vh', position: 'relative' }}
    >
      <Box
        position="relative"
        bg={bgColor}
        color={textColor}
        height="50vh"
        overflow="hidden"
      >
        {/* Three.js Canvas */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={0}
        >
          <Canvas
            style={{ background: 'transparent' }}
          >
            <AnimatedCamera phase={animationPhase} />
            <SpiderWeb3D
              segments={20}
              layers={8}
              color={finalWebColor}
              title={title}
              tagline={tagline}
              showText={showText}
              animationPhase={animationPhase}
            />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
            />
          </Canvas>
        </Box>

        {/* Content */}
        <Box position="relative" zIndex={1}>
          {children}
        </Box>
      </Box>
    </motion.div>
  )
} 