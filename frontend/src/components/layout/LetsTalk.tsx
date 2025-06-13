import {
  Button,
  Box,
  VStack,
  Text,
  IconButton,
  Heading,
  Input,
  Textarea,
  NativeSelect,
} from '@chakra-ui/react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useColorMode } from '../ui/color-mode'
import { useColorModeValue } from '@/components/ui/color-mode'

const MotionBox = motion(Box)

interface LetsTalkProps {
  isOpen: boolean
  onClose: () => void
}

export function LetsTalk({ isOpen, onClose }: LetsTalkProps) {
  const { colorMode } = useColorMode()
  const inputBg = colorMode === 'light' ? 'white' : 'gray.800'
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
                Let's Talk Business
              </Heading>
              <IconButton
                aria-label="Close form"
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
                <Text fontSize="md" color={useColorModeValue('gray.600', 'gray.300')} mb={4}>
                  Interested in solving your problems with SSQ software? Fill out this form and we'll get back to you soon.
                </Text>

                {/* First Name */}
                <Box mb={2}>
                  <Text as="label" fontWeight="semibold" mb={1} display="block">
                    First Name <Text as="span" color="red.500">*</Text>
                  </Text>
                  <Input
                    type="text"
                    placeholder="Enter your first name"
                    bg={inputBg}
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor={borderColor}
                    p={2}
                    w="100%"
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                  />
                </Box>

                {/* Last Name */}
                <Box mb={2}>
                  <Text as="label" fontWeight="semibold" mb={1} display="block">
                    Last Name <Text as="span" color="red.500">*</Text>
                  </Text>
                  <Input
                    type="text"
                    placeholder="Enter your last name"
                    bg={inputBg}
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor={borderColor}
                    p={2}
                    w="100%"
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                  />
                </Box>

                {/* Business Email Address */}
                <Box mb={2}>
                  <Text as="label" fontWeight="semibold" mb={1} display="block">
                    Business Email Address <Text as="span" color="red.500">*</Text>
                  </Text>
                  <Input
                    type="email"
                    placeholder="Enter your business email"
                    bg={inputBg}
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor={borderColor}
                    p={2}
                    w="100%"
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                  />
                </Box>

                {/* Phone Number */}
                <Box mb={2}>
                  <Text as="label" fontWeight="semibold" mb={1} display="block">
                    Phone Number
                  </Text>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    bg={inputBg}
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor={borderColor}
                    p={2}
                    w="100%"
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                  />
                </Box>

                {/* Job Title */}
                <Box mb={2}>
                  <Text as="label" fontWeight="semibold" mb={1} display="block">
                    Job Title <Text as="span" color="red.500">*</Text>
                  </Text>
                  <Input
                    type="text"
                    placeholder="Enter your job title"
                    bg={inputBg}
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor={borderColor}
                    p={2}
                    w="100%"
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                  />
                </Box>

                {/* Company / Institution */}
                <Box mb={2}>
                  <Text as="label" fontWeight="semibold" mb={1} display="block">
                    Company / Institution <Text as="span" color="red.500">*</Text>
                  </Text>
                  <Input
                    type="text"
                    placeholder="Enter your company or institution"
                    bg={inputBg}
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor={borderColor}
                    p={2}
                    w="100%"
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                  />
                </Box>

                {/* Country */}
                <Box mb={2}>
                  <Text as="label" fontWeight="semibold" mb={1} display="block">
                    Country <Text as="span" color="red.500">*</Text>
                  </Text>
                  <NativeSelect.Root
                    bg={inputBg}
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor={borderColor}
                    p={2}
                    w="100%"
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                  >
                    <NativeSelect.Field placeholder="Select your country">
                      <option value="">Select your country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      <option value="IN">India</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="AU">Australia</option>
                      <option value="JP">Japan</option>
                    </NativeSelect.Field>
                    <NativeSelect.Indicator />
                  </NativeSelect.Root>
                </Box>

                {/* Tell us about your project */}
                <Box mb={2}>
                  <Text as="label" fontWeight="semibold" mb={1} display="block">
                    Tell us about your project
                  </Text>
                  <Textarea
                    placeholder="A bit of context will allow us to connect you to the right team faster."
                    rows={4}
                    resize="vertical"
                    bg={inputBg}
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor={borderColor}
                    p={2}
                    w="100%"
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                  />
                </Box>

                {/* File Upload Area */}
                <Box>
                  <Text as="label" fontWeight="semibold" mb={1} display="block">
                    Attachments (Optional)
                  </Text>
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
                  colorPalette="blue" 
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