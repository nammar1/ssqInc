import {
  Box,
  Heading,
  Text,
  VStack,
  Icon,
  Circle,
  Flex,
  HStack,
  IconButton,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { useColorMode } from '@/components/ui/color-mode'

interface StepData {
  icon: React.ComponentType
  title: string
  description: string
}

interface BigStepperProps {
  steps: StepData[]
  title: string
  subtitle?: string
  colorScheme?: string
  clickable?: boolean
}

const MotionBox = motion(Box)

export const BigStepper = ({ 
  steps, 
  title, 
  subtitle, 
  colorScheme = "purple",
  clickable = true
}: BigStepperProps) => {
  const { colorMode } = useColorMode()
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Memoized calculations to prevent unnecessary re-renders
  const stepProgress = useMemo(() => {
    return (activeStep / Math.max(steps.length - 1, 1)) * 100
  }, [activeStep, steps.length])

  const containerHeight = useMemo(() => {
    const height = Math.max(steps.length * 100, 200)
    return `${height}vh`
  }, [steps.length])

  // Initialize component
  useEffect(() => {
    const timer = setTimeout(() => setIsInitialized(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Optimized scroll handler with debouncing
  const handleScroll = useCallback(() => {
    if (isScrolling || !containerRef.current) return

    const container = containerRef.current
    const rect = container.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    const containerHeight = container.offsetHeight
    
    // Calculate scroll progress more accurately
    const scrollTop = window.pageYOffset
    const containerTop = scrollTop + rect.top
    const scrollProgress = Math.max(0, Math.min(1, 
      (scrollTop - containerTop) / (containerHeight - viewportHeight)
    ))

    // Calculate step based on scroll progress
    const newStep = Math.min(
      Math.floor(scrollProgress * steps.length),
      steps.length - 1
    )

    if (newStep !== activeStep && newStep >= 0) {
      setActiveStep(newStep)
    }
  }, [activeStep, steps.length, isScrolling])

  // Throttled scroll listener
  useEffect(() => {
    let ticking = false
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [handleScroll])

  // Clean up timeouts
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  // Optimized step click handler
  const handleStepClick = useCallback((index: number) => {
    if (!clickable || index === activeStep) return

    setIsScrolling(true)
    setActiveStep(index)

    // Calculate target scroll position more accurately
    if (containerRef.current) {
      const container = containerRef.current
      const containerHeight = container.offsetHeight
      const viewportHeight = window.innerHeight
      const availableScroll = containerHeight - viewportHeight
      const targetScroll = (index / Math.max(steps.length - 1, 1)) * availableScroll
      
      // Get container's position relative to document
      const containerRect = container.getBoundingClientRect()
      const containerTop = window.pageYOffset + containerRect.top
      
      window.scrollTo({
        top: containerTop + targetScroll,
        behavior: 'smooth'
      })

      // Reset scrolling flag after animation
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
      }, 800)
    }
  }, [clickable, activeStep, steps.length])

  // Optimized navigation handler
  const navigateStep = useCallback((direction: 'prev' | 'next') => {
    const newStep = direction === 'prev' 
      ? Math.max(0, activeStep - 1)
      : Math.min(steps.length - 1, activeStep + 1)
    
    if (newStep !== activeStep) {
      handleStepClick(newStep)
    }
  }, [activeStep, steps.length, handleStepClick])

  // Animation variants for better performance
  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    completed: { scale: 1.05 }
  }

  const descriptionVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.99 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -15, 
      scale: 0.99,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  }

  return (
    <Box 
      ref={containerRef}
      position="relative"
      minH={containerHeight}
      w="full"
    >
      {/* Sticky Header Container */}
      <Box 
        position="sticky" 
        top="0" 
        w="full"
        bg={colorMode === 'light' ? 'white' : 'gray.900'}
        zIndex={1000}
        borderBottom="1px solid"
        borderBottomColor={colorMode === 'light' ? 'gray.100' : 'gray.800'}
        shadow="sm"
      >
        <Box
          maxW="full" 
          mx="auto" 
          px={{ base: 4, md: 8 }}
          py="8"
        >
          {/* Header Section */}
          <VStack gap={4} mb={12}>
            <Box w="full" textAlign="center">
              <VStack gap={1}>
                <Heading 
                  size={{ base: "xl", md: "2xl" }}
                  color={colorMode === 'light' ? `${colorScheme}.600` : `${colorScheme}.400`}
                  lineHeight="shorter"
                  fontWeight="bold"
                  pt={28}
                >
                  {title}
                </Heading>
                
                {subtitle && (
                  <Text 
                    fontSize={{ base: "md", md: "lg" }}
                    color={colorMode === 'light' ? 'gray.600' : 'gray.400'}
                    maxW="3xl"
                    lineHeight="relaxed"
                  >
                    {subtitle}
                  </Text>
                )}
              </VStack>
            </Box>
          </VStack>

          {/* Steps Container */}
          <Box position="relative" mb={8}>
            {/* Progress Line */}
            <Box
              position="absolute"
              top="48px"
              left={{ base: "40px", md: "60px" }}
              right={{ base: "40px", md: "60px" }}
              h="2px"
              bg={colorMode === 'light' ? 'gray.200' : 'gray.700'}
              borderRadius="full"
              zIndex={1}
            >
              <Box
                h="full"
                bg={`${colorScheme}.500`}
                borderRadius="full"
                w={`${stepProgress}%`}
                transition="width 0.3s ease-out"
              />
            </Box>

            {/* Steps */}
            <Flex
              justify="space-between"
              position="relative"
              zIndex={2}
              wrap={{ base: "wrap", md: "nowrap" }}
              gap={{ base: 4, md: 0 }}
            >
              {steps.map((step, index) => (
                <MotionBox
                  key={index}
                  variants={stepVariants}
                  initial="hidden"
                  animate={isInitialized ? "visible" : "hidden"}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  flex={{ base: "1 1 45%", md: "1" }}
                  maxW={{ base: "140px", md: "auto" }}
                  mx={{ base: "auto", md: 0 }}
                >
                  <VStack gap={2} align="center">
                    <MotionBox
                      position="relative"
                      whileHover={clickable ? { scale: 1.05 } : {}}
                      whileTap={clickable ? { scale: 0.95 } : {}}
                      cursor={clickable ? "pointer" : "default"}
                      onClick={() => handleStepClick(index)}
                      transition={{ duration: 0.15 }}
                    >
                      <Circle
                        size="20"
                        bg={
                          activeStep >= index 
                            ? `${colorScheme}.500` 
                            : colorMode === 'light' ? 'white' : 'gray.800'
                        }
                        border="3px solid"
                        borderColor={
                          activeStep >= index 
                            ? `${colorScheme}.500` 
                            : colorMode === 'light' ? 'gray.300' : 'gray.600'
                        }
                        shadow={activeStep === index ? "lg" : "md"}
                        transition="all 0.2s ease-out"
                        color={activeStep >= index ? "white" : colorMode === 'light' ? 'gray.400' : 'gray.500'}
                      >
                        <AnimatePresence mode="wait">
                          {activeStep > index ? (
                            <MotionBox
                              key="completed"
                              initial={{ scale: 0, rotate: -90 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0 }}
                              transition={{ duration: 0.25, type: "spring", stiffness: 300 }}
                            >
                              <Icon as={Check} boxSize={6} />
                            </MotionBox>
                          ) : (
                            <MotionBox
                              key="icon"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              transition={{ duration: 0.15 }}
                            >
                              <Icon as={step.icon} boxSize={6} />
                            </MotionBox>
                          )}
                        </AnimatePresence>
                      </Circle>
                      
                      {/* Step Number Badge */}
                      <Circle
                        size="6"
                        bg={activeStep >= index ? `${colorScheme}.600` : colorMode === 'light' ? 'gray.400' : 'gray.600'}
                        color="white"
                        fontSize="xs"
                        fontWeight="bold"
                        position="absolute"
                        bottom="-2"
                        right="-2"
                        border="2px solid"
                        borderColor={colorMode === 'light' ? 'white' : 'gray.900'}
                        transition="all 0.2s ease-out"
                      >
                        {index + 1}
                      </Circle>
                    </MotionBox>
                    
                    <Text
                      fontSize={{ base: "xs", md: "sm" }}
                      fontWeight="medium"
                      color={
                        activeStep >= index 
                          ? colorMode === 'light' ? 'gray.900' : 'gray.100'
                          : colorMode === 'light' ? 'gray.400' : 'gray.500'
                      }
                      textAlign="center"
                      transition="color 0.2s ease-out"
                      maxWidth="100px"
                    >
                      {step.title}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </Flex>
          </Box>

          {/* Active Step Description */}
          <AnimatePresence mode="wait">
            <MotionBox
              key={`step-${activeStep}`}
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Box
                p={{ base: 6, md: 8 }}
                bg={colorMode === 'light' ? 'white' : 'gray.800'}
                borderRadius="xl"
                shadow="lg"
                maxW="4xl"
                mx="auto"
                border="1px solid"
                borderColor={colorMode === 'light' ? `${colorScheme}.100` : 'gray.700'}
                position="relative"
                overflow="hidden"
              >
                {/* Background Gradient */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bgGradient={`linear(135deg, ${colorScheme}.50, transparent)`}
                  opacity={colorMode === 'light' ? 0.5 : 0.1}
                />
                
                <VStack gap={5} position="relative">
                  {/* Step Header */}
                  <HStack gap={4} align="center" w="full">
                    <Circle
                      size="12"
                      bg={`${colorScheme}.100`}
                      color={`${colorScheme}.600`}
                      flexShrink={0}
                    >
                      <Icon as={steps[activeStep].icon} boxSize={6} />
                    </Circle>
                    <VStack gap={0} align="start" flex="1">
                      <Heading 
                        size="lg" 
                        color={colorMode === 'light' ? 'gray.900' : 'gray.100'}
                        fontWeight="bold"
                      >
                        {steps[activeStep].title}
                      </Heading>
                      <Text
                        fontSize="sm"
                        color={`${colorScheme}.500`}
                        fontWeight="medium"
                      >
                        Step {activeStep + 1} of {steps.length}
                      </Text>
                    </VStack>
                  </HStack>
                  
                  {/* Description */}
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight="relaxed"
                    color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
                    textAlign="center"
                    maxW="3xl"
                  >
                    {steps[activeStep].description}
                  </Text>
                  
                  {/* Navigation Controls */}
                  <HStack gap={4} justify="center" pt={2}>
                    <IconButton
                      aria-label="Previous step"
                      onClick={() => navigateStep('prev')}
                      disabled={activeStep === 0}
                      colorScheme={colorScheme}
                      variant="outline"
                      size="md"
                      borderRadius="full"
                      _disabled={{
                        opacity: 0.3,
                        cursor: 'not-allowed'
                      }}
                    >
                      <Icon as={ChevronLeft} boxSize={4} />
                    </IconButton>
                    
                    <Box
                      px={4}
                      py={1}
                      bg={colorMode === 'light' ? `${colorScheme}.50` : `${colorScheme}.900`}
                      borderRadius="full"
                      border="1px solid"
                      borderColor={`${colorScheme}.200`}
                      minW="80px"
                      textAlign="center"
                    >
                      <Text
                        fontSize="xs"
                        fontWeight="bold"
                        color={`${colorScheme}.600`}
                      >
                        {activeStep + 1} / {steps.length}
                      </Text>
                    </Box>
                    
                    <IconButton
                      aria-label="Next step"
                      onClick={() => navigateStep('next')}
                      disabled={activeStep === steps.length - 1}
                      colorScheme={colorScheme}
                      variant="outline"
                      size="md"
                      borderRadius="full"
                      _disabled={{
                        opacity: 0.3,
                        cursor: 'not-allowed'
                      }}
                    >
                      <Icon as={ChevronRight} boxSize={4} />
                    </IconButton>
                  </HStack>
                </VStack>
              </Box>
            </MotionBox>
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  )
}
