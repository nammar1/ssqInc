import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Icon,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Flex,
  Image,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { FaArrowRight, FaCheck, FaCode, FaMobile, FaServer, FaCloud, FaShieldAlt } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

export default function SoftwareDevelopment() {
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const bgColor = useColorModeValue('white', 'gray.800')
  const cardBg = useColorModeValue('gray.50', 'gray.700')

  const features = [
    {
      title: 'Custom Software Development',
      description: 'Tailored solutions designed to meet your specific business requirements',
      icon: FaCode,
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: FaMobile,
    },
    {
      title: 'Enterprise Solutions',
      description: 'Scalable software systems for large organizations',
      icon: FaServer,
    },
    {
      title: 'Cloud-Native Applications',
      description: 'Modern applications built for cloud infrastructure',
      icon: FaCloud,
    },
    {
      title: 'Security-First Development',
      description: 'Built-in security measures and best practices',
      icon: FaShieldAlt,
    },
  ]

  const technologies = [
    'React & Next.js',
    'Node.js & Express',
    'Python & Django',
    'Java & Spring Boot',
    '.NET Core',
    'Docker & Kubernetes',
    'AWS & Azure',
    'MongoDB & PostgreSQL',
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={textColor}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="1200px" py={12}>
          <Stack spacing={6} align="center" textAlign="center">
            <Heading
              fontSize={{ base: '4xl', md: '5xl' }}
              bgGradient="linear(to-r, brand.500, brand.700)"
              bgClip="text"
            >
              Software Development
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              Transform your ideas into powerful, scalable software solutions that drive business growth
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="1200px" py={12}>
        <VStack spacing={12} align="stretch">
          <Box textAlign="center" mb={8}>
            <Heading size="lg" mb={4}>Our Development Approach</Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              We combine technical expertise with industry best practices to deliver high-quality software solutions
              that meet your business objectives.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
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
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Heading size="lg" mb={4}>Technologies We Use</Heading>
              <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
                We leverage cutting-edge technologies to build robust and scalable solutions
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
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
        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading size="lg" mb={4}>Our Development Process</Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              A systematic approach to delivering high-quality software solutions
            </Text>
          </Box>

          <List spacing={4}>
            {[
              'Requirements Analysis & Planning',
              'Architecture Design & Prototyping',
              'Agile Development & Regular Updates',
              'Quality Assurance & Testing',
              'Deployment & Maintenance',
            ].map((step, index) => (
              <ListItem key={index}>
                <HStack spacing={4}>
                  <ListIcon as={FaCheck} color="brand.500" />
                  <Text fontSize="lg">{step}</Text>
                </HStack>
              </ListItem>
            ))}
          </List>
        </VStack>
      </Container>

      {/* CTA Section */}
      <Box bg={useColorModeValue('brand.50', 'brand.900')}>
        <Container maxW="1200px" py={20}>
          <Stack spacing={8} align="center" textAlign="center">
            <Heading>Ready to Build Your Software Solution?</Heading>
            <Text fontSize="lg" maxW="2xl">
              Let's discuss how we can help bring your ideas to life with our expert software development services
            </Text>
            <Button
              as={RouterLink}
              to="/contact"
              colorScheme="brand"
              size="lg"
              px={8}
              rightIcon={<FaArrowRight />}
            >
              Get Started
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
