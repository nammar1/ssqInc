'use client'

import { Box, Container, Flex, Text, useBreakpointValue, chakra } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { useState } from 'react'

const ChakraLink = chakra(RouterLink)
const MotionLink = motion(ChakraLink)
const MotionBox = motion(Box)

const hoverVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
  },
}

interface ClipPathVariant {
  clipPath: string;
}

interface TransformVariant {
  left: string;
  transform: string;
}

const separatorVariants: Record<string, TransformVariant> = {
  initial: {
    left: '50%',
    transform: 'translateX(-50%)',
  },
  hoverLeft: {
    left: '65%',
    transform: 'translateX(-50%)',
  },
  hoverRight: {
    left: '35%',
    transform: 'translateX(-50%)',
  },
}

const leftTextVariants = {
  initial: {
    x: '0%',
    width: '100%',
  },
  hoverLeft: {
    x: '15%',
    width: '130%',
  },
  hoverRight: {
    x: '-15%',
    width: '70%',
  },
}

const rightTextVariants = {
  initial: {
    x: '0%',
    width: '100%',
  },
  hoverLeft: {
    x: '15%',
    width: '70%',
  },
  hoverRight: {
    x: '-15%',
    width: '130%',
  },
}

const leftVariants: Record<string, ClipPathVariant> = {
  initial: {
    clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)',
  },
  hoverLeft: {
    clipPath: 'polygon(0% 0%, 65% 0%, 65% 100%, 0% 100%)',
  },
  hoverRight: {
    clipPath: 'polygon(0% 0%, 35% 0%, 35% 100%, 0% 100%)',
  },
}

const rightVariants: Record<string, ClipPathVariant> = {
  initial: {
    clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)',
  },
  hoverLeft: {
    clipPath: 'polygon(65% 0%, 100% 0%, 100% 100%, 65% 100%)',
  },
  hoverRight: {
    clipPath: 'polygon(35% 0%, 100% 0%, 100% 100%, 35% 100%)',
  },
}

const transition = {
  type: 'spring',
  stiffness: 400,
  damping: 40,
  mass: 1,
}

export function CTABanner() {
  const isLargeScreen = useBreakpointValue({ base: false, md: true })
  const [hoveredSide, setHoveredSide] = useState<'none' | 'left' | 'right'>('none')
  
  return (
    <Box as="section" width="100%" position="relative">
      <Box borderTopWidth="2px" borderColor="gray.200" _dark={{ borderColor: "gray.700" }} />
      <Container maxW="100%" p={0}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          h={{ base: 'auto', md: '200px' }}
          position="relative"
          overflow="hidden"
        >
          {/* Background containers */}
          {isLargeScreen && (
            <>
              <MotionBox
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="white"
                _dark={{ bg: 'gray.800' }}
                initial="initial"
                animate={hoveredSide === 'left' ? 'hoverLeft' : hoveredSide === 'right' ? 'hoverRight' : 'initial'}
                variants={leftVariants}
                transition={transition}
                zIndex={0}
              />
              <MotionBox
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="gray.800"
                _dark={{ bg: 'white' }}
                initial="initial"
                animate={hoveredSide === 'left' ? 'hoverLeft' : hoveredSide === 'right' ? 'hoverRight' : 'initial'}
                variants={rightVariants}
                transition={transition}
                zIndex={0}
              />
            </>
          )}

          {/* Diagonal separator */}
          {isLargeScreen && (
            <MotionBox
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              pointerEvents="none"
              zIndex={2}
              initial="initial"
              animate={hoveredSide === 'left' ? 'hoverLeft' : hoveredSide === 'right' ? 'hoverRight' : 'initial'}
              variants={separatorVariants}
              _after={{
                content: '""',
                position: 'absolute',
                top: '-10%',
                bottom: '-10%',
                left: '50%',
                width: '2px',
                background: 'linear-gradient(to bottom, transparent 0%, var(--chakra-colors-gray-200) 20%, var(--chakra-colors-gray-200) 80%, transparent 100%)',
                _dark: {
                  background: 'linear-gradient(to bottom, transparent 0%, var(--chakra-colors-gray-700) 20%, var(--chakra-colors-gray-700) 80%, transparent 100%)',
                },
                transform: 'inherit',
                height: '120%',
              }}
              transition={transition}
            />
          )}

          {/* Left half - Schedule A Meeting */}
          <Box 
            flex="1" 
            h={{ base: '200px', md: 'full' }}
            onMouseEnter={() => setHoveredSide('left')}
            onMouseLeave={() => setHoveredSide('none')}
            position="relative"
            overflow="hidden"
            color={isLargeScreen ? "gray.800" : "inherit"}
            bg={isLargeScreen ? "transparent" : "white"}
            _dark={{
              color: isLargeScreen ? "white" : "inherit",
              bg: isLargeScreen ? "transparent" : "gray.800"
            }}
            zIndex={1}
          >
            <MotionLink
              to="/contact"
              initial="initial"
              whileHover="hover"
              variants={hoverVariants}
              transition={transition}
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={8}
              h="100%"
              w="100%"
              textDecoration="none"
              color="inherit"
            >
              <MotionBox
                initial="initial"
                animate={hoveredSide === 'left' ? 'hoverLeft' : hoveredSide === 'right' ? 'hoverRight' : 'initial'}
                variants={leftTextVariants}
                transition={transition}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="medium"
                  whiteSpace="nowrap"
                >
                  Schedule Your<br/> 
                  Free Consultation
                </Text>
              </MotionBox>
            </MotionLink>
          </Box>

          {/* Right half - Services & Solutions */}
          <Box 
            flex="1" 
            h={{ base: '200px', md: 'full' }}
            onMouseEnter={() => setHoveredSide('right')}
            onMouseLeave={() => setHoveredSide('none')}
            position="relative"
            overflow="hidden"
            color={isLargeScreen ? "white" : "inherit"}
            bg={isLargeScreen ? "transparent" : "gray.800"}
            _dark={{
              color: isLargeScreen ? "gray.800" : "inherit",
              bg: isLargeScreen ? "transparent" : "white"
            }}
            zIndex={1}
          >
            <MotionLink
              to="/services"
              initial="initial"
              whileHover="hover"
              variants={hoverVariants}
              transition={transition}
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={8}
              h="100%"
              w="100%"
              textDecoration="none"
              color="inherit"
            >
              <MotionBox
                initial="initial"
                animate={hoveredSide === 'left' ? 'hoverLeft' : hoveredSide === 'right' ? 'hoverRight' : 'initial'}
                variants={rightTextVariants}
                transition={transition}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="medium"
                  whiteSpace="nowrap"
                >
                  Services <br/>& Solutions
                </Text>
              </MotionBox>
            </MotionLink>
          </Box>
        </Flex>
      </Container>
      <Box borderBottomWidth="2px" borderColor="gray.200" _dark={{ borderColor: "gray.700" }} />
    </Box>
  )
} 