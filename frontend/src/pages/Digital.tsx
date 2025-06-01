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
import { FaArrowRight, FaCheck, FaChartLine, FaUsers, FaRobot, FaCloud, FaMobile } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

export default function Digital() {
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const bgColor = useColorModeValue('white', 'gray.800')
  const cardBg = useColorModeValue('gray.50', 'gray.700')

  const features = [
    {
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation roadmaps and strategies',
      icon: FaChartLine,
    },
    {
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation solutions',
      icon: FaRobot,
    },
    {
      title: 'Cloud Transformation',
      description: 'Modernize infrastructure with cloud-native solutions',
      icon: FaCloud,
    },
    {
      title: 'Digital Experience',
      description: 'Enhance customer and employee digital experiences',
      icon: FaUsers,
    },
    {
      title: 'Mobile Solutions',
      description: 'Enterprise mobility and mobile-first strategies',
      icon: FaMobile,
    },
  ]

  const technologies = [
    'Digital Strategy',
    'Process Automation',
    'Cloud Solutions',
    'Data Analytics',
    'AI & ML',
    'Mobile Apps',
    'IoT',
    'Blockchain',
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
              Digital Transformation
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              Transform your business with modern digital solutions and stay ahead in the digital age
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="1200px" py={12}>
        <VStack spacing={12} align="stretch">
          <Box textAlign="center" mb={8}>
            <Heading size="lg" mb={4}>Our Digital Transformation Services</Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              We help businesses navigate their digital journey with comprehensive transformation strategies
              and modern technology solutions.
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
              <Heading size="lg" mb={4}>Our Digital Solutions</Heading>
              <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
                We leverage cutting-edge technologies to drive digital transformation
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
            <Heading size="lg" mb={4}>Our Transformation Process</Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              A systematic approach to digital transformation
            </Text>
          </Box>

          <List spacing={4}>
            {[
              'Digital Assessment & Strategy',
              'Technology Selection & Planning',
              'Implementation & Integration',
              'Change Management',
              'Continuous Improvement',
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
            <Heading>Ready to Start Your Digital Journey?</Heading>
            <Text fontSize="lg" maxW="2xl">
              Let's discuss how we can help transform your business with our expert digital transformation services
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
