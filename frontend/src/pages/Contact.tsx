import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Icon,
  HStack,
} from '@chakra-ui/react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { useToastContext } from '@/components/ui/toaster'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'

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
  const { toast } = useToastContext()
  const config = getPageConfig('contact')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    toast({
      title: 'Message Sent',
      description: 'We will get back to you soon!',
      status: 'success',
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
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {/* Contact Form */}
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            rounded="xl"
            shadow="lg"
            p={8}
          >
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Subject</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea rows={6} />
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="brand"
                  size="lg"
                  w="full"
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>

          {/* Contact Information */}
          <Stack spacing={8}>
            <Box>
              <Heading size="md" mb={6}>
                Contact Information
              </Heading>
              <VStack spacing={6} align="stretch">
                {CONTACT_INFO.map((info) => (
                  <HStack key={info.title} spacing={4}>
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
              <VStack spacing={2} align="stretch">
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
