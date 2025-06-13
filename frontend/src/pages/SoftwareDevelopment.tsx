import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Icon,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  List,
} from '@chakra-ui/react'
import { FaArrowRight, FaCheck, FaCode, FaMobile, FaCloud, FaDatabase, FaShieldAlt } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { useColorModeValue } from '@/components/ui/color-mode'

export default function SoftwareDevelopment() {
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const bgColor = useColorModeValue('white', 'gray.800')
  const cardBg = useColorModeValue('gray.50', 'gray.700')
  const config = getPageConfig('software')

  const features = [
    {
      title: 'Web Applications',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      icon: FaCode,
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: FaMobile,
    },
    {
      title: 'Cloud-Native Solutions',
      description: 'Scalable applications designed for cloud deployment and microservices',
      icon: FaCloud,
    },
    {
      title: 'Database Design',
      description: 'Optimized database architecture and data management solutions',
      icon: FaDatabase,
    },
    {
      title: 'Security Integration',
      description: 'Built-in security measures and compliance frameworks',
      icon: FaShieldAlt,
    },
  ]

  const technologies = [
    'React & Next.js',
    'Node.js & Express',
    'Python & Django',
    'TypeScript',
    'AWS & Azure',
    'Docker & Kubernetes',
    'PostgreSQL & MongoDB',
    'GraphQL & REST APIs',
  ]

  return (
    <Box>
      {/* Enhanced WebHero with 3D Text */}
      <WebHero
        title={config.title}
        tagline={config.tagline}
        showText={config.showText}
        minHeight={config.minHeight}
      />

      {/* Features Section */}
      <Container maxW="1200px" py={12}>
        <VStack gap={12} align="stretch">
          <Box textAlign="center" mb={8}>
            <Heading size="lg" mb={4}>Our Software Development Services</Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              We build custom software solutions that are scalable, secure, and tailored to your business needs.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
            {features.map((feature, index) => (
              <Box
                key={index}
                bg={cardBg}
                p={6}
                rounded="xl"
                shadow="md"
                _hover={{ shadow: 'lg', transform: 'translateY(-2px)' }}
                transition="all 0.3s"
              >
                <Icon as={feature.icon} w={10} h={10} color="brand.500" mb={4} />
                <Heading size="md" mb={2}>{feature.title}</Heading>
                <Text color={textColor}>{feature.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Technologies Section */}
      <Box bg={useColorModeValue('gray.50', 'gray.900')} py={12}>
        <Container maxW="1200px">
          <VStack gap={8} align="stretch">
            <Box textAlign="center">
              <Heading size="lg" mb={4}>Technologies We Use</Heading>
              <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
                We leverage modern development tools and frameworks to build efficient solutions
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 2, md: 4 }} gap={6}>
              {technologies.map((tech, index) => (
                <Box
                  key={index}
                  bg={bgColor}
                  p={4}
                  rounded="lg"
                  textAlign="center"
                  shadow="sm"
                  _hover={{ shadow: 'md' }}
                  transition="all 0.2s"
                >
                  <Text fontWeight="medium">{tech}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Process Section */}
      <Container maxW="1200px" py={12}>
        <VStack gap={8} align="stretch">
          <Box textAlign="center">
            <Heading size="lg" mb={4}>Our Development Process</Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              A proven methodology for delivering high-quality software solutions
            </Text>
          </Box>

          <List.Root gap={4}>
            {[
              'Requirements Analysis & Planning',
              'Architecture Design & Prototyping',
              'Agile Development & Testing',
              'Quality Assurance & Code Review',
              'Deployment & Ongoing Support',
            ].map((step, index) => (
              <List.Item key={index}>
                <HStack gap={4}>
                  <List.Indicator asChild color="brand.500">
                    <Icon as={FaCheck} />
                  </List.Indicator>
                  <Text fontSize="lg">{step}</Text>
                </HStack>
              </List.Item>
            ))}
          </List.Root>
        </VStack>
      </Container>

      {/* CTA Section */}
      <Box bg={useColorModeValue('brand.50', 'brand.900')}>
        <Container maxW="1200px" py={20}>
          <Stack gap={8} align="center" textAlign="center">
            <Heading>Ready to Build Your Custom Software?</Heading>
            <Text fontSize="lg" maxW="2xl">
              Let's discuss how we can bring your software vision to life with our expert development team
            </Text>
            <RouterLink to="/contact">
              <Button
                colorPalette="brand"
                size="lg"
                px={8}
              >
                Get Started <FaArrowRight />
              </Button>
            </RouterLink>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
