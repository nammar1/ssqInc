import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Box,
  VStack,
  Text,
  useColorModeValue,
  IconButton,
  Heading,
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

const MotionBox = motion(Box)

interface LetsTalkProps {
  isOpen: boolean
  onClose: () => void
}

export function LetsTalk({ isOpen, onClose }: LetsTalkProps) {
  const inputBg = useColorModeValue('white', 'gray.800')
  const bgColor = useColorModeValue('white', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const textColor = useColorModeValue('gray.900', 'white')
  const overlayBg = useColorModeValue('blackAlpha.600', 'blackAlpha.700')

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
                Let's Talk Business
              </Heading>
              <IconButton
                aria-label="Close form"
                icon={<CloseIcon />}
                variant="ghost"
                size="sm"
                onClick={onClose}
                _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
              />
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
              <VStack spacing={6} align="stretch">
                <Text fontSize="md" color={useColorModeValue('gray.600', 'gray.300')} mb={4}>
                  Interested in solving your problems with SSQ software? Fill out this form and we'll get back to you soon.
                </Text>

                <FormControl isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input 
                    bg={inputBg} 
                    placeholder="Enter your first name"
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input 
                    bg={inputBg} 
                    placeholder="Enter your last name"
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Business Email Address</FormLabel>
                  <Input 
                    type="email" 
                    bg={inputBg} 
                    placeholder="Enter your business email"
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Phone Number</FormLabel>
                  <Input 
                    type="tel" 
                    bg={inputBg} 
                    placeholder="Enter your phone number"
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Job Title</FormLabel>
                  <Input 
                    bg={inputBg} 
                    placeholder="Enter your job title"
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Company / Institution</FormLabel>
                  <Input 
                    bg={inputBg} 
                    placeholder="Enter your company or institution"
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Country</FormLabel>
                  <Select 
                    bg={inputBg} 
                    placeholder="Select your country"
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                  >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="IN">India</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="AU">Australia</option>
                    <option value="JP">Japan</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Tell us about your project</FormLabel>
                  <Textarea 
                    bg={inputBg} 
                    placeholder="A bit of context will allow us to connect you to the right team faster." 
                    rows={4}
                    resize="vertical"
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                  />
                </FormControl>

                {/* File Upload Area */}
                <Box>
                  <FormLabel>Attachments (Optional)</FormLabel>
                  <Box 
                    border="2px dashed" 
                    borderColor={borderColor} 
                    borderRadius="md" 
                    p={8} 
                    textAlign="center" 
                    color={useColorModeValue('gray.500', 'gray.400')}
                    _hover={{ borderColor: 'blue.300', bg: useColorModeValue('blue.50', 'blue.900') }}
                    transition="all 0.2s"
                    cursor="pointer"
                  >
                    <Text fontSize="sm">
                      Drag and drop files here or click to browse
                    </Text>
                    <Text fontSize="xs" mt={2}>
                      Maximum file size: 10MB
                    </Text>
                  </Box>
                </Box>

                {/* Submit Button */}
                <Button 
                  colorScheme="blue" 
                  size="lg" 
                  w="full" 
                  borderRadius="lg"
                  fontWeight="semibold"
                  py={6}
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                  transition="all 0.2s"
                >
                  Send Message
                </Button>

                {/* Privacy Notice */}
                <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')} textAlign="center">
                  By submitting this form, you agree to our{' '}
                  <Text as="span" color="blue.500" textDecoration="underline" cursor="pointer">
                    Privacy Policy
                  </Text>{' '}
                  regarding how we handle your information.
                </Text>
              </VStack>
            </Box>
          </MotionBox>
        </>
      )}
    </AnimatePresence>
  )
} 