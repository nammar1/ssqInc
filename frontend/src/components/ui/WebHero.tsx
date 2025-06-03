import { Box, useColorModeValue } from '@chakra-ui/react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { motion } from 'framer-motion'
import { SpiderWeb3D } from './SpiderWeb3D'
import { useRef } from 'react'
import * as THREE from 'three'

// Camera animation component
const AnimatedCamera = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null)
  
  useFrame((state) => {
    if (cameraRef.current) {
      // Create a smooth circular motion
      const time = state.clock.getElapsedTime()
      const radius = 25
      const speed = 0.2
      
      // Circular motion
      cameraRef.current.position.x = Math.sin(time * speed) * radius
      cameraRef.current.position.z = Math.cos(time * speed) * radius + 20
      cameraRef.current.position.y = Math.sin(time * speed * 0.5) * 5
      
      // Always look at the center
      cameraRef.current.lookAt(0, 0, 0)
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
  minHeight = '50vh',
  backgroundColor,
  webColor
}: WebHeroProps) => {
  const defaultBgColor = useColorModeValue('gray.50', 'gray.900')
  const defaultWebColor = useColorModeValue('#2D3748', '#E2E8F0')
  
  const bgColor = backgroundColor || defaultBgColor
  const finalWebColor = webColor || defaultWebColor

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box
        position="relative"
        bg={bgColor}
        color={useColorModeValue('gray.700', 'gray.200')}
        minH={minHeight}
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
            <AnimatedCamera />
            <SpiderWeb3D
              segments={32}
              layers={12}
              color={finalWebColor}
              title={title}
              tagline={tagline}
              showText={showText}
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