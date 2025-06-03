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
import { FaArrowRight, FaCheck, FaRocket, FaChartLine, FaCogs, FaUsers, FaGlobe } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'

export default function Digital() {
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const bgColor = useColorModeValue('white', 'gray.800')
  const cardBg = useColorModeValue('gray.50', 'gray.700')
  const config = getPageConfig('digital')

  const features = [
    {
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation roadmaps tailored to your business goals',
      icon: FaRocket,
    },
    {
      title: 'Process Optimization',
      description: 'Streamline operations and improve efficiency through digital solutions',
      icon: FaCogs,
    },
    {
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights for better decision making',
      icon: FaChartLine,
    },
    {
      title: 'Customer Experience',
      description: 'Enhance customer engagement through digital touchpoints and experiences',
      icon: FaUsers,
    },
    {
      title: 'Digital Platforms',
      description: 'Build scalable digital platforms that adapt to changing business needs',
      icon: FaGlobe,
    },
  ]

  const technologies = [
    'Cloud Platforms',
    'API Integration',
    'Microservices',
    'DevOps & CI/CD',
    'Analytics Platforms',
    'CRM & ERP Systems',
    'Mobile Solutions',
    'IoT Connectivity',
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
            <Heading size="lg" mb={4}>Our Digital Transformation Services</Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              Transform your business for the digital age with strategic planning and innovative technology solutions.
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
              <Heading size="lg" mb={4}>Digital Technologies & Solutions</Heading>
              <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
                We leverage modern technologies to drive your digital transformation journey
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
            <Heading size="lg" mb={4}>Our Digital Transformation Process</Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              A structured approach to successful digital transformation
            </Text>
          </Box>

          <List spacing={4}>
            {[
              'Digital Readiness Assessment',
              'Strategy Development & Roadmap',
              'Technology Implementation & Integration',
              'Change Management & Training',
              'Performance Monitoring & Optimization',
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
            <Heading>Ready to Transform Your Business Digitally?</Heading>
            <Text fontSize="lg" maxW="2xl">
              Let's create a digital transformation strategy that positions your business for future success
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
