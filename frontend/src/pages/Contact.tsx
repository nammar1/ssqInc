import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Input,
  Textarea,
  Button,
  VStack,
  Icon,
  HStack,
  Stack,
  Field,
} from '@chakra-ui/react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { toaster } from '@/components/ui/toaster'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { useColorModeValue } from '@/components/ui/color-mode'

const CONTACT_INFO = [
  {
    icon: FaPhone,
    title: 'Phone',
    content: '(123) 456-7890',
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    content: 'contact@ssqinc.com',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Address',
    content: '123 Business Street, City, State 12345',
  },
]

export default function Contact() {
  const config = getPageConfig('contact')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    toaster.success({
      title: 'Message Sent',
      description: 'We will get back to you soon!',
    })
  }

  return (
    <Box>
      {/* Enhanced WebHero with 3D Text */}
      <WebHero
        title={config.title}
        tagline={config.tagline}
        showText={config.showText}
        minHeight={config.minHeight}
      />

      {/* Contact Form and Info Section */}
      <Container maxW="1200px" py={20}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          {/* Contact Form */}
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            rounded="xl"
            shadow="lg"
            p={8}
          >
            <form onSubmit={handleSubmit}>
              <VStack gap={4}>
                <Field.Root required>
                  <Field.Label>Name</Field.Label>
                  <Input type="text" />
                </Field.Root>
                <Field.Root required>
                  <Field.Label>Email</Field.Label>
                  <Input type="email" />
                </Field.Root>
                <Field.Root required>
                  <Field.Label>Subject</Field.Label>
                  <Input type="text" />
                </Field.Root>
                <Field.Root required>
                  <Field.Label>Message</Field.Label>
                  <Textarea rows={6} />
                </Field.Root>
                <Button
                  type="submit"
                  colorPalette="brand"
                  size="lg"
                  w="full"
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>

          {/* Contact Information */}
          <Stack gap={8}>
            <Box>
              <Heading size="md" mb={6}>
                Contact Information
              </Heading>
              <VStack gap={6} align="stretch">
                {CONTACT_INFO.map((info) => (
                  <HStack key={info.title} gap={4}>
                    <Icon
                      as={info.icon}
                      w={6}
                      h={6}
                      color="brand.500"
                      mb={2}
                    />
                    <Box>
                      <Heading size="md" mb={2}>
                        {info.title}
                      </Heading>
                      <Text color={useColorModeValue('gray.600', 'gray.400')}>{info.content}</Text>
                    </Box>
                  </HStack>
                ))}
              </VStack>
            </Box>

            <Box>
              <Heading size="md" mb={6}>
                Business Hours
              </Heading>
              <VStack gap={2} align="stretch">
                <Text>Monday - Friday: 9:00 AM - 5:00 PM</Text>
                <Text>Saturday: 10:00 AM - 2:00 PM</Text>
                <Text>Sunday: Closed</Text>
              </VStack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
