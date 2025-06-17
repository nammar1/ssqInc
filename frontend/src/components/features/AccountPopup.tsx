import {
  Box,
  Button,
  VStack,
  Text,
  Separator,
  Input,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSignInAlt } from 'react-icons/fa'
import { useColorModeValue } from '@/components/ui/color-mode'
import { useState } from 'react'

const MotionBox = motion(Box)

interface AccountPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function AccountPopup({ isOpen, onClose }: AccountPopupProps) {
  const [clientId, setClientId] = useState('')
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const shadowColor = useColorModeValue('rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)')

  const handleLogin = () => {
    // TODO: Implement login functionality with clientId
    console.log('Login clicked with ID:', clientId)
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
            minW="280px"
            backdropFilter="blur(8px)"
          >
            <VStack gap={4} align="stretch">
              <Text
                fontSize="md"
                fontWeight="semibold"
                color={textColor}
                textAlign="center"
              >
                Partner / Client Login
              </Text>
              
              <Separator />
              
              <Box>
                <Text fontSize="sm" mb={1}>Client/Partner ID</Text>
                <Input
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  placeholder="Enter your ID"
                  size="md"
                  borderRadius="lg"
                  _focus={{
                    borderColor: 'brand.500',
                    boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
                  }}
                />
              </Box>
              
              <Button
                colorPalette="brand"
                variant="solid"
                size="md"
                borderRadius="lg"
                fontWeight="semibold"
                onClick={handleLogin}
                _hover={{ transform: 'translateY(-1px)' }}
                transition="all 0.2s"
              >
                <FaSignInAlt style={{ marginRight: '8px' }} />
                Login
              </Button>
            </VStack>
          </Box>
        </MotionBox>
      )}
    </AnimatePresence>
  )
} 