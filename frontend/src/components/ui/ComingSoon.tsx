import {
  Box,
  Container,
  Heading,
  Text,
  Input,
  Button,
  Stack,
  Field,
} from '@chakra-ui/react'
import { toaster } from '@/components/ui/toaster'
import { motion, Variants } from 'framer-motion'
import { useState } from 'react'
import { useColorModeValue } from '@/components/ui/color-mode'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionStack = motion(Stack)
const MotionInput = motion(Input)
const MotionButton = motion(Button)

export const ComingSoon = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Theme-aware colors
  const bgColor = useColorModeValue('white', 'gray.900')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const inputBg = useColorModeValue('white', 'gray.800')
  const inputBorder = useColorModeValue('gray.200', 'gray.600')
  const inputFocusBorder = useColorModeValue('brand.500', 'brand.400')
  const buttonShadow = useColorModeValue('0 4px 20px rgba(139, 92, 246, 0.25)', '0 2px 8px rgba(139, 92, 246, 0.2)')

  // Typewriter animation variants for the word "extraordinary"
  const wordVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.08
      }
    }
  }

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // TODO: Implement newsletter signup logic here
    // For now, just show a success message
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toaster.create({
      title: "Thank you for subscribing!",
      description: "We'll notify you when this page is ready.",
      type: "success",
      duration: 5000,
    })

    setEmail('')
    setIsLoading(false)
  }

  return (
    <Container 
      maxW="container.lg" 
      py={20}
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="70vh"
    >
      <MotionBox
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        bg={bgColor}
        p={12}
        borderRadius="2xl"
        boxShadow="xl"
        border="1px solid"
        borderColor={useColorModeValue('gray.100', 'gray.700')}
        maxW="600px"
        w="full"
        textAlign="center"
        position="relative"
        overflow="hidden"
      >
        <Stack gap={10} align="center">
          {/* Animated heading with staggered letters */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MotionHeading
              fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
              fontWeight="bold"
              bgGradient="linear(to-r, brand.400, brand.600, brand.500)"
              bgClip="text"
              color={useColorModeValue('gray.800', 'white')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              _hover={{
                bgGradient: "linear(to-r, brand.500, brand.700, brand.600)",
              }}
              cursor="default"
            >
              Coming Soon
            </MotionHeading>
            
            {/* Animated underline */}
            <MotionBox
              h="4px"
              w="0"
              bg="brand.500"
              mx="auto"
              mt={6}
              borderRadius="full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </MotionBox>

          {/* Description with partial typewriter effect */}
          <MotionText
            fontSize={{ base: "lg", md: "xl" }}
            color={textColor}
            lineHeight="1.6"
            maxW="400px"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We're crafting something{" "}
            <MotionBox
              as="span"
              color="brand.500"
              fontWeight="semibold"
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              display="inline-flex"
            >
              {"extraordinary".split("").map((char, index) => (
                <MotionBox
                  as="span"
                  key={index}
                  variants={letterVariants}
                  style={{
                    display: 'inline-block',
                    whiteSpace: 'pre'
                  }}
                >
                  {char}
                </MotionBox>
              ))}
            </MotionBox>
            <MotionBox
              as="span"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              . Be the first to know when we launch!
            </MotionBox>
          </MotionText>

          {/* Newsletter form with enhanced animations */}
          <MotionBox
            as="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            w="full"
            maxW="200px"
          >
            <Field.Root>
              <MotionStack 
                gap={6}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <MotionInput
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="lg"
                  required
                  bg={inputBg}
                  border="2px solid"
                  borderColor={inputBorder}
                  borderRadius="xl"
                  px={6}
                  py={4}
                  fontSize="md"
                  color={textColor}
                  _hover={{
                    borderColor: 'brand.300',
                    boxShadow: 'sm',
                  }}
                  _focus={{
                    borderColor: inputFocusBorder,
                    boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.1)',
                    outline: 'none',
                  }}
                  _placeholder={{
                    color: useColorModeValue('gray.400', 'gray.500'),
                  }}
                  animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
                
                <MotionButton
                  type="submit"
                  size="lg"
                  w="full"
                  bg="brand.500"
                  color="white"
                  fontWeight="semibold"
                  borderRadius="xl"
                  py={6}
                  fontSize="md"
                  loading={isLoading}
                  loadingText="Subscribing..."
                  boxShadow={buttonShadow}
                  _hover={{
                    bg: 'brand.600',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)',
                  }}
                  _active={{
                    transform: 'translateY(0px)',
                    boxShadow: '0 2px 8px rgba(139, 92, 246, 0.2)',
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 10px 30px ${useColorModeValue('rgba(139, 92, 246, 0.3)', 'rgba(139, 92, 246, 0.2)')}`,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Notify Me When Ready
                </MotionButton>
              </MotionStack>
            </Field.Root>
          </MotionBox>

          {/* Floating particles animation - 8 optimized dots */}
          {/* Top row particles */}
          <MotionBox
            position="absolute"
            top="20%"
            left="10%"
            w="6px"
            h="6px"
            bg="brand.400"
            borderRadius="full"
            opacity={0.6}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [-20, 20, -20],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 1,
            }}
          />
          <MotionBox
            position="absolute"
            top="25%"
            left="20%"
            w="4px"
            h="4px"
            bg="brand.300"
            borderRadius="full"
            opacity={0.4}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [15, -25, 15],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 2.5,
            }}
          />
          <MotionBox
            position="absolute"
            top="12%"
            right="20%"
            w="5px"
            h="5px"
            bg="brand.500"
            borderRadius="full"
            opacity={0.5}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [-18, 22, -18],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: 1.8,
            }}
          />
          <MotionBox
            position="absolute"
            top="20%"
            right="8%"
            w="7px"
            h="7px"
            bg="brand.200"
            borderRadius="full"
            opacity={0.3}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [12, -28, 12],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 3,
            }}
          />

          {/* Middle row particles */}
          <MotionBox
            position="absolute"
            top="35%"
            left="5%"
            w="5px"
            h="5px"
            bg="brand.600"
            borderRadius="full"
            opacity={0.4}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [-22, 18, -22],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              delay: 2,
            }}
          />
          <MotionBox
            position="absolute"
            top="40%"
            left="18%"
            w="3px"
            h="3px"
            bg="brand.400"
            borderRadius="full"
            opacity={0.6}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [20, -15, 20],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: 4,
            }}
          />
          <MotionBox
            position="absolute"
            top="38%"
            right="25%"
            w="6px"
            h="6px"
            bg="brand.300"
            borderRadius="full"
            opacity={0.5}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [-16, 24, -16],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              delay: 1.5,
            }}
          />
          <MotionBox
            position="absolute"
            top="42%"
            right="12%"
            w="4px"
            h="4px"
            bg="brand.500"
            borderRadius="full"
            opacity={0.4}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [18, -20, 18],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              delay: 3.5,
            }}
          />

          {/* Lower row particles */}
          <MotionBox
            position="absolute"
            top="58%"
            left="12%"
            w="8px"
            h="8px"
            bg="brand.200"
            borderRadius="full"
            opacity={0.3}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [-15, 25, -15],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 2.2,
            }}
          />
          <MotionBox
            position="absolute"
            top="55%"
            left="28%"
            w="5px"
            h="5px"
            bg="brand.400"
            borderRadius="full"
            opacity={0.5}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [14, -26, 14],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              delay: 3.8,
            }}
          />
          <MotionBox
            position="absolute"
            top="62%"
            right="18%"
            w="6px"
            h="6px"
            bg="brand.600"
            borderRadius="full"
            opacity={0.4}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [-19, 21, -19],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 5.8,
              repeat: Infinity,
              delay: 1.2,
            }}
          />
          <MotionBox
            position="absolute"
            top="60%"
            right="5%"
            w="4px"
            h="4px"
            bg="brand.300"
            borderRadius="full"
            opacity={0.6}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [16, -22, 16],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4.7,
              repeat: Infinity,
              delay: 4.5,
            }}
          />


        </Stack>
      </MotionBox>
    </Container>
  )
} 