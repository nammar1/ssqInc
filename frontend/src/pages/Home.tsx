import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  useColorModeValue,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaRocket, FaChartLine, FaUsers } from 'react-icons/fa'
import { WebHero } from '../components/ui/WebHero'

const FEATURES = [
  {
    title: 'Innovative Solutions',
    description: 'Cutting-edge technology solutions tailored to your business needs',
    icon: FaRocket,
  },
  {
    title: 'Business Growth',
    description: 'Strategies and tools to help your business scale effectively',
    icon: FaChartLine,
  },
  {
    title: 'Expert Team',
    description: 'Dedicated professionals committed to your success',
    icon: FaUsers,
  },
]

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <WebHero>
        <Container maxW="1200px" py={20}>
          <Stack spacing={8} align="center" textAlign="center">
            <Heading
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="bold"
            >
              Welcome to SSQ Inc
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={useColorModeValue('gray.600', 'gray.400')} maxW="2xl">
              We provide exceptional services to help your business grow and succeed in the digital age
            </Text>
            <Button
              as={RouterLink}
              to="/contact"
              colorScheme="brand"
              size="lg"
              px={8}
            >
              Get Started
            </Button>
          </Stack>
        </Container>
      </WebHero>

      {/* Features Section */}
      <Container maxW="1200px" py={20}>
        <Stack spacing={12}>
          <Heading textAlign="center">Our Services</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {FEATURES.map((feature) => (
              <Box
                key={feature.title}
                p={6}
                bg={useColorModeValue('white', 'gray.800')}
                rounded="xl"
                shadow="lg"
                textAlign="center"
              >
                <Icon
                  as={feature.icon}
                  w={10}
                  h={10}
                  color="brand.500"
                  mb={4}
                />
                <Heading size="md" mb={2}>
                  {feature.title}
                </Heading>
                <Text color={useColorModeValue('gray.600', 'gray.400')}>{feature.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
}
