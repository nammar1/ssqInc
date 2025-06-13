import {
  Box,
  Button,
  VStack,
  Text,
  Separator,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa'
import { useColorModeValue } from '@/components/ui/color-mode'

const MotionBox = motion(Box)

interface AccountPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function AccountPopup({ isOpen, onClose }: AccountPopupProps) {
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const shadowColor = useColorModeValue('rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)')

  const handleLogin = () => {
    // TODO: Implement login functionality
    console.log('Login clicked')
    onClose()
  }

  const handleSignup = () => {
    // TODO: Implement signup functionality
    console.log('Signup clicked')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionBox
          position="absolute"
          top="calc(100% + 10px)"
          right="0"
          zIndex={4000}
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Box
            bg={bg}
            border="1px solid"
            borderColor={borderColor}
            borderRadius="xl"
            boxShadow={`0 8px 25px ${shadowColor}`}
            p={4}
            minW="200px"
            backdropFilter="blur(8px)"
          >
            <VStack gap={3} align="stretch">
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color={textColor}
                textAlign="center"
                mb={1}
              >
                Account
              </Text>
              
              <Separator />
              
              <Button
                colorPalette="blue"
                variant="solid"
                size="md"
                borderRadius="lg"
                fontWeight="semibold"
                onClick={handleLogin}
                _hover={{ transform: 'translateY(-1px)' }}
                transition="all 0.2s"
              >
                <FaSignInAlt />
                Login
              </Button>
              
              <Button
                colorPalette="green"
                variant="outline"
                size="md"
                borderRadius="lg"
                fontWeight="semibold"
                onClick={handleSignup}
                _hover={{ 
                  transform: 'translateY(-1px)',
                  bg: useColorModeValue('green.50', 'green.900')
                }}
                transition="all 0.2s"
              >
                <FaUserPlus />
                Sign Up
              </Button>
            </VStack>
          </Box>
        </MotionBox>
      )}
    </AnimatePresence>
  )
} 