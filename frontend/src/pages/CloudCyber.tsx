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
import { FaArrowRight, FaCheck, FaCloud, FaShieldAlt, FaLock, FaServer, FaUserShield } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

export default function CloudCyber() {
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const bgColor = useColorModeValue('white', 'gray.800')
  const cardBg = useColorModeValue('gray.50', 'gray.700')

  const features = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with minimal disruption',
      icon: FaCloud,
    },
    {
      title: 'Security Assessment',
      description: 'Comprehensive security audits and vulnerability assessments',
      icon: FaShieldAlt,
    },
    {
      title: 'Data Protection',
      description: 'Advanced encryption and data security solutions',
      icon: FaLock,
    },
    {
      title: 'Cloud Architecture',
      description: 'Scalable and secure cloud infrastructure design',
      icon: FaServer,
    },
    {
      title: 'Identity Management',
      description: 'Robust identity and access management solutions',
      icon: FaUserShield,
    },
  ]

  const technologies = [
    'AWS',
    'Azure',
    'GCP',
    'Kubernetes',
    'Terraform',
    'SIEM',
    'WAF',
    'Zero Trust',
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
              Cloud & Cybersecurity
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              Secure cloud infrastructure and comprehensive security solutions for your business
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="1200px" py={12}>
        <VStack spacing={12} align="stretch">
          <Box textAlign="center" mb={8}>
            <Heading size="lg" mb={4}>Our Cloud & Security Solutions</Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              We provide end-to-end cloud solutions and robust security measures to protect your digital assets
              and ensure business continuity.
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
                We leverage industry-leading cloud and security technologies to protect your business
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
            <Heading size="lg" mb={4}>Our Security Process</Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              A comprehensive approach to securing your digital assets
            </Text>
          </Box>

          <List spacing={4}>
            {[
              'Security Assessment & Planning',
              'Infrastructure Design & Implementation',
              'Security Controls & Monitoring',
              'Compliance & Governance',
              'Continuous Security Improvement',
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
            <Heading>Ready to Secure Your Digital Assets?</Heading>
            <Text fontSize="lg" maxW="2xl">
              Let's discuss how we can help protect your business with our expert cloud and security solutions
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
