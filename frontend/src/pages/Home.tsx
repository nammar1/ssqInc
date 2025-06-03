import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  useColorModeValue,
  SimpleGrid,
  Icon,
  VStack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'

const FEATURES = [
  {
    icon: FaRocket,
    title: 'Innovation First',
    description: 'Cutting-edge solutions that drive your business forward'
  },
  {
    icon: FaLightbulb,
    title: 'Strategic Thinking',
    description: 'Data-driven insights to make informed decisions'
  },
  {
    icon: FaUsers,
    title: 'Expert Team',
    description: 'Experienced professionals dedicated to your success'
  }
]

export default function Home() {
  const config = getPageConfig('home')
  
  return (
    <Box>
      {/* Enhanced WebHero with 3D Text */}
      <WebHero
        title={config.title}
        tagline={config.tagline}
        showText={config.showText}
        minHeight={config.minHeight}
      >
        <Container maxW="1200px" py={20}>
          <Stack spacing={8} align="center" textAlign="center">
          </Stack>
        </Container>
      </WebHero>

      {/* Features Section */}
      <Container maxW="1200px" py={20}>
        <Stack spacing={12}>
          <Box textAlign="center">
            <Heading mb={4}>Why Choose SSQ Inc?</Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')}>
              We combine expertise, innovation, and dedication to deliver exceptional results
            </Text>
          </Box>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {FEATURES.map((feature) => (
              <VStack
                key={feature.title}
                spacing={4}
                p={6}
                bg={useColorModeValue('white', 'gray.800')}
                rounded="xl"
                shadow="lg"
                textAlign="center"
              >
                <Icon
                  as={feature.icon}
                  w={12}
                  h={12}
                  color="brand.500"
                />
                <Heading size="md">{feature.title}</Heading>
                <Text color={useColorModeValue('gray.600', 'gray.400')}>
                  {feature.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      {/* CTA Section */}
      <Box bg={useColorModeValue('brand.50', 'brand.900')}>
        <Container maxW="1200px" py={20}>
          <Stack spacing={8} align="center" textAlign="center">
            <Heading>Ready to Transform Your Business?</Heading>
            <Text fontSize="lg" maxW="2xl">
              Let's discuss how we can help you achieve your digital transformation goals
            </Text>
            <Button
              as={RouterLink}
              to="/services"
              colorScheme="brand"
              size="lg"
              px={8}
            >
              Explore Our Services
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
