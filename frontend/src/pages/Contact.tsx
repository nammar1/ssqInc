import {
  Box,
  Container,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  VStack,
  Stack,
  Field,
} from '@chakra-ui/react'
import { toaster } from '@/components/ui/toaster'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { useColorModeValue } from '@/components/ui/color-mode'
import { QuoteBox } from '@/components/ui/QuoteBox'
import { motion } from 'framer-motion'
import { useState } from 'react'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionVStack = motion(VStack)

export default function Contact() {
  const config = getPageConfig('contact')
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // Theme-aware colors
  const bgColor = useColorModeValue('white', 'gray.900')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const inputBg = useColorModeValue('white', 'gray.800')
  const inputBorder = useColorModeValue('gray.200', 'gray.600')
  const inputFocusBorder = useColorModeValue('brand.500', 'brand.400')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // TODO: Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000))

    toaster.success({
      title: 'Message Sent',
      description: 'We will get back to you soon!',
    })

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setIsLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <Box>
      <WebHero
        title={config.title}
        tagline={config.tagline}
        showText={config.showText}
      />

      <QuoteBox 
        quote={config.quote || ""}
      />

      <Container maxW="800px" py={20}>
        <MotionBox
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          bg={bgColor}
          p={{ base: 6, md: 12 }}
          borderRadius="2xl"
          boxShadow="xl"
          border="1px solid"
          borderColor={useColorModeValue('gray.100', 'gray.700')}
          w="full"
          position="relative"
          overflow="hidden"
        >
          <Stack gap={8} alignItems="center">
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <MotionHeading
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                bgGradient="linear(to-r, brand.400, brand.600, brand.500)"
                bgClip="text"
                textAlign="center"
                mb={2}
              >
                Get in Touch
              </MotionHeading>
              <MotionText
                color={textColor}
                textAlign="center"
                fontSize="lg"
                maxW="md"
                mb={8}
              >
                Have a question or want to work together? We'd love to hear from you.
              </MotionText>

              {/* Animated underline */}
              <MotionBox
                h="3px"
                w="0"
                bg="brand.500"
                mx="auto"
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ duration: 0.8, delay: 0.8 }}
                borderRadius="full"
              />
            </MotionBox>

            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <MotionVStack
                gap={6}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Field.Root required>
                  <Field.Label>Name</Field.Label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    bg={inputBg}
                    border="2px solid"
                    borderColor={inputBorder}
                    _focus={{
                      borderColor: inputFocusBorder,
                      boxShadow: 'none'
                    }}
                    _hover={{
                      borderColor: inputFocusBorder
                    }}
                    placeholder="Your name"
                  />
                </Field.Root>

                <Field.Root required>
                  <Field.Label>Email</Field.Label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    bg={inputBg}
                    border="2px solid"
                    borderColor={inputBorder}
                    _focus={{
                      borderColor: inputFocusBorder,
                      boxShadow: 'none'
                    }}
                    _hover={{
                      borderColor: inputFocusBorder
                    }}
                    placeholder="your.email@example.com"
                  />
                </Field.Root>

                <Field.Root required>
                  <Field.Label>Subject</Field.Label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    bg={inputBg}
                    border="2px solid"
                    borderColor={inputBorder}
                    _focus={{
                      borderColor: inputFocusBorder,
                      boxShadow: 'none'
                    }}
                    _hover={{
                      borderColor: inputFocusBorder
                    }}
                    placeholder="What's this about?"
                  />
                </Field.Root>

                <Field.Root required>
                  <Field.Label>Message</Field.Label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    bg={inputBg}
                    border="2px solid"
                    borderColor={inputBorder}
                    _focus={{
                      borderColor: inputFocusBorder,
                      boxShadow: 'none'
                    }}
                    _hover={{
                      borderColor: inputFocusBorder
                    }}
                    placeholder="Tell us about your project or question..."
                  />
                </Field.Root>

                <Button
                  type="submit"
                  colorScheme="brand"
                  size="lg"
                  w="full"
                  loading={isLoading}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg'
                  }}
                  transition="all 0.2s"
                >
                  Send Message
                </Button>
              </MotionVStack>
            </form>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  )
}
