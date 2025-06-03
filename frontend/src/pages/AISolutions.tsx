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
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { FaArrowRight, FaCheck, FaBrain, FaRobot, FaEye, FaChartLine, FaDatabase } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'

export default function AISolutions() {
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const bgColor = useColorModeValue('white', 'gray.800')
  const cardBg = useColorModeValue('gray.50', 'gray.700')
  const config = getPageConfig('aisolutions')

  const features = [
    {
      title: 'Machine Learning Models',
      description: 'Custom ML models for predictive analytics and business intelligence',
      icon: FaBrain,
    },
    {
      title: 'Process Automation',
      description: 'Intelligent automation solutions to streamline business processes',
      icon: FaRobot,
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis for quality control and pattern recognition',
      icon: FaEye,
    },
    {
      title: 'Predictive Analytics',
      description: 'Data-driven insights for forecasting and decision making',
      icon: FaChartLine,
    },
    {
      title: 'Natural Language Processing',
      description: 'Text analysis, sentiment analysis, and intelligent document processing',
      icon: FaDatabase,
    },
  ]

  const technologies = [
    'TensorFlow & PyTorch',
    'Python & R',
    'Scikit-learn',
    'OpenCV',
    'Hugging Face',
    'Apache Spark',
    'MLflow & Kubeflow',
    'AWS SageMaker',
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
        <VStack spacing={12} align="stretch">
          <Box textAlign="center" mb={8}>
            <Heading size="lg" mb={4}>Our AI & ML Solutions</Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.
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
              <Heading size="lg" mb={4}>AI Technologies & Frameworks</Heading>
              <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
                We use cutting-edge AI and ML technologies to build intelligent solutions
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
            <Heading size="lg" mb={4}>Our AI Implementation Process</Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              A comprehensive approach to implementing AI solutions in your business
            </Text>
          </Box>

          <List spacing={4}>
            {[
              'Data Assessment & Strategy Planning',
              'Model Development & Training',
              'Validation & Performance Testing',
              'Integration & Production Deployment',
              'Monitoring & Continuous Improvement',
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
            <Heading>Ready to Embrace AI for Your Business?</Heading>
            <Text fontSize="lg" maxW="2xl">
              Let's explore how AI and machine learning can transform your operations and unlock new opportunities
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
