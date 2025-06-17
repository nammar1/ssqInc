import {
  Box,
  VStack,
  Text,
  IconButton,
  Heading,
} from '@chakra-ui/react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useColorMode } from '../ui/color-mode'
import { useColorModeValue } from '@/components/ui/color-mode'

const MotionBox = motion(Box)

interface BlogPostModalProps {
  isOpen: boolean
  onClose: () => void
  post: {
    title: string
    content: string
    date: string
    readTime: string
  }
}

export function BlogPostModal({ isOpen, onClose, post }: BlogPostModalProps) {
  const { colorMode } = useColorMode()
  const bgColor = colorMode === 'light' ? 'white' : 'gray.900'
  const borderColor = colorMode === 'light' ? 'gray.200' : 'gray.600'
  const textColor = colorMode === 'light' ? 'gray.900' : 'white'
  const overlayBg = colorMode === 'light' ? 'blackAlpha.600' : 'blackAlpha.700'

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scroll
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <MotionBox
            position="fixed"
            top="0"
            left="0"
            width="100vw"
            height="100vh"
            bg={overlayBg}
            zIndex="9998"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Slide-in Panel */}
          <MotionBox
            position="fixed"
            top="0"
            right="0"
            height="100vh"
            width={{ base: "100vw", md: "600px", lg: "700px" }}
            bg={bgColor}
            boxShadow="2xl"
            zIndex="9999"
            overflow="hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300,
              duration: 0.5 
            }}
          >
            {/* Header */}
            <Box
              p={6}
              borderBottom="1px"
              borderColor={borderColor}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Heading size="lg" color={textColor}>
                {post.title}
              </Heading>
              <IconButton
                aria-label="Close post"
                variant="ghost"
                size="sm"
                onClick={onClose}
                _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
              >
                <X size={18} />
              </IconButton>
            </Box>

            {/* Scrollable Content */}
            <Box
              height="calc(100vh - 80px)"
              overflowY="auto"
              p={6}
              css={{
                '&::-webkit-scrollbar': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-track': {
                  background: 'transparent',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: useColorModeValue('#CBD5E0', '#4A5568'),
                  borderRadius: '3px',
                },
              }}
            >
              <VStack gap={6} align="stretch">
                {/* Meta Information */}
                <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                  {post.date} • {post.readTime}
                </Text>

                {/* Blog Content */}
                <Text
                  fontSize="md"
                  color={useColorModeValue('gray.700', 'gray.300')}
                  lineHeight="1.8"
                  whiteSpace="pre-wrap"
                >
                  {post.content}
                </Text>
              </VStack>
            </Box>
          </MotionBox>
        </>
      )}
    </AnimatePresence>
  )
} 