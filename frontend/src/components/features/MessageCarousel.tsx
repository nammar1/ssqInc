import { Box, Text } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useColorModeValue } from '../ui/color-mode'

const MotionBox = motion(Box)
const MotionText = motion(Text)

interface Message {
  id: string
  content: string
}

interface MessageCarouselProps {
  messages: Message[]
  isVisible: boolean
}

// Characters to use for scramble effect
const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

// Generate random string for scramble effect
const generateScrambleText = (length: number) => {
  return Array.from({ length }, () => 
    scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
  ).join('')
}

export const MessageCarousel = ({ messages, isVisible }: MessageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scrambleText, setScrambleText] = useState('')
  const [isScrambling, setIsScrambling] = useState(false)
  const [isInitialMount, setIsInitialMount] = useState(true)
  
  const textColor = useColorModeValue('gray.800', 'white')
  const bgColor = useColorModeValue('white', 'gray.800')
  
  // Wave animation variants for individual characters
  const waveVariants = {
    initial: { y: 0 },
    animate: (i: number) => ({
      y: [0, -2, 0],
      transition: {
        duration: 0.8,
        repeat: 1,
        delay: i * 0.05,
        ease: "easeInOut"
      }
    })
  }

  // Handle message rotation
  useEffect(() => {
    if (!isVisible || messages.length === 0) return

    const messageDuration = 5000 // 5 seconds per message
    const scrambleDuration = 1000 // 1 second for scramble effect
    let scrambleInterval: NodeJS.Timeout

    const rotateMessage = () => {
      setIsScrambling(true)
      let scrambleCount = 0
      const maxScrambles = 10

      // Start scramble effect
      scrambleInterval = setInterval(() => {
        if (scrambleCount >= maxScrambles) {
          clearInterval(scrambleInterval)
          setIsScrambling(false)
          setCurrentIndex((prev) => (prev + 1) % messages.length)
          return
        }

        setScrambleText(generateScrambleText(messages[currentIndex].content.length))
        scrambleCount++
      }, scrambleDuration / maxScrambles)
    }

    const messageTimer = setTimeout(rotateMessage, messageDuration)

    return () => {
      clearTimeout(messageTimer)
      clearInterval(scrambleInterval)
    }
  }, [currentIndex, isVisible, messages])

  // Set initial mount to false after first render
  useEffect(() => {
    setIsInitialMount(false)
  }, [])

  if (!isVisible || messages.length === 0) return null

  return (
    <Box
      position="absolute"
      left="50%"
      transform="translateX(-50%)"
      zIndex={1}
    >
      <AnimatePresence mode="wait">
        <MotionBox
          key={currentIndex}
          initial={isInitialMount ? { opacity: 0, y: 20 } : undefined}
          animate={isInitialMount ? { opacity: 1, y: 0 } : undefined}
          exit={isInitialMount ? { opacity: 0, y: -20 } : undefined}
          transition={{ duration: 0.3 }}
        >
          <Box
            px={6}
            py={2}
            borderRadius="full"
            bg={bgColor}
            boxShadow="md"
            backdropFilter="blur(8px)"
          >
            {isScrambling ? (
              <Text
                color={textColor}
                fontSize="lg"
                fontWeight="medium"
                textAlign="center"
              >
                {scrambleText}
              </Text>
            ) : (
              <Box display="flex" justifyContent="center" whiteSpace="pre">
                {messages[currentIndex].content.split('').map((char, index) => (
                  <MotionText
                    key={`${currentIndex}-${index}`}
                    custom={index}
                    variants={waveVariants}
                    initial="initial"
                    animate="animate"
                    color={textColor}
                    fontSize="lg"
                    fontWeight="medium"
                    display="inline-block"
                    mx={char === ' ' ? '0.25em' : 0}
                  >
                    {char}
                  </MotionText>
                ))}
              </Box>
            )}
          </Box>
        </MotionBox>
      </AnimatePresence>
    </Box>
  )
} 