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
import { FaArrowRight, FaCheck, FaRobot, FaBrain, FaChartLine, FaCloud, FaShieldAlt } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

export default function AISolutions() {
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const bgColor = useColorModeValue('white', 'gray.800')
  const cardBg = useColorModeValue('gray.50', 'gray.700')

  const features = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models and algorithms for predictive analytics and automation',
      icon: FaRobot,
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: FaBrain,
    },
    {
      title: 'Predictive Analytics',
      description: 'Data-driven forecasting and trend analysis for business insights',
      icon: FaChartLine,
    },
    {
      title: 'AI Cloud Integration',
      description: 'Seamless integration of AI solutions with cloud infrastructure',
      icon: FaCloud,
    },
    {
      title: 'AI Security & Ethics',
      description: 'Secure and ethical AI implementation with governance frameworks',
      icon: FaShieldAlt,
    },
  ]

  const technologies = [
    'TensorFlow',
    'PyTorch',
    'Scikit-learn',
    'Hugging Face',
    'AWS SageMaker',
    'Azure ML',
    'OpenAI',
    'LangChain',
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
              AI & ML Solutions
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              Intelligent solutions powered by cutting-edge AI and machine learning technologies
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="1200px" py={12}>
        <VStack spacing={12} align="stretch">
          <Box textAlign="center" mb={8}>
            <Heading size="lg" mb={4}>Our AI & ML Capabilities</Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              We develop and implement advanced AI solutions that drive innovation and create competitive advantages
              for your business.
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
                We leverage state-of-the-art AI and ML frameworks to build powerful solutions
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
            <Heading size="lg" mb={4}>Our AI Development Process</Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              A systematic approach to implementing AI solutions
            </Text>
          </Box>

          <List spacing={4}>
            {[
              'Problem Analysis & Data Assessment',
              'Model Selection & Architecture Design',
              'Development & Training',
              'Testing & Validation',
              'Deployment & Monitoring',
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
            <Heading>Ready to Harness the Power of AI?</Heading>
            <Text fontSize="lg" maxW="2xl">
              Let's discuss how we can help transform your business with our expert AI and ML solutions
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
