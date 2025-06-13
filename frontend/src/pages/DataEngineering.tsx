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
import { FaArrowRight, FaCheck, FaDatabase, FaChartLine, FaRobot, FaCloud, FaShieldAlt } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { useColorModeValue } from '@/components/ui/color-mode'

export default function DataEngineering() {
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const bgColor = useColorModeValue('white', 'gray.800')
  const cardBg = useColorModeValue('gray.50', 'gray.700')
  const config = getPageConfig('dataengineering')

  const features = [
    {
      title: 'Data Pipeline Development',
      description: 'Build robust ETL pipelines for efficient data processing and transformation',
      icon: FaDatabase,
    },
    {
      title: 'Data Analytics Infrastructure',
      description: 'Set up scalable analytics platforms for real-time insights',
      icon: FaChartLine,
    },
    {
      title: 'Machine Learning Pipelines',
      description: 'End-to-end ML pipeline development for predictive analytics',
      icon: FaRobot,
    },
    {
      title: 'Cloud Data Solutions',
      description: 'Cloud-native data architecture and migration services',
      icon: FaCloud,
    },
    {
      title: 'Data Security & Governance',
      description: 'Implement data security measures and governance frameworks',
      icon: FaShieldAlt,
    },
  ]

  const technologies = [
    'Apache Spark',
    'Apache Kafka',
    'Python & PySpark',
    'AWS & Azure',
    'Snowflake',
    'dbt',
    'Airflow',
    'TensorFlow',
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
            <Heading size="lg" mb={4}>Our Data Engineering Solutions</Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              We design and implement scalable data architectures that enable organizations to harness the full
              potential of their data assets.
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
                We leverage modern data engineering tools and platforms to build efficient solutions
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
            <Heading size="lg" mb={4}>Our Data Engineering Process</Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              A systematic approach to building robust data infrastructure
            </Text>
          </Box>

          <List.Root gap={4}>
            {[
              'Data Assessment & Strategy',
              'Architecture Design & Planning',
              'Pipeline Development & Testing',
              'Data Quality & Monitoring',
              'Deployment & Maintenance',
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
            <Heading>Ready to Build Your Data Infrastructure?</Heading>
            <Text fontSize="lg" maxW="2xl">
              Let's discuss how we can help you harness the power of your data with our expert data engineering services
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
