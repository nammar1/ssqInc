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
import { FaArrowRight, FaCheck, FaCloud, FaShieldAlt, FaServer, FaLock, FaNetworkWired } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { useColorModeValue } from '@/components/ui/color-mode'

export default function CloudCyber() {
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const bgColor = useColorModeValue('white', 'gray.800')
  const cardBg = useColorModeValue('gray.50', 'gray.700')
  const config = getPageConfig('cloudcyber')

  const features = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration of your infrastructure to leading cloud platforms',
      icon: FaCloud,
    },
    {
      title: 'Security Assessment',
      description: 'Comprehensive security audits and vulnerability assessments',
      icon: FaShieldAlt,
    },
    {
      title: 'Infrastructure Management',
      description: 'Scalable cloud infrastructure design and management solutions',
      icon: FaServer,
    },
    {
      title: 'Data Protection',
      description: 'Advanced encryption and data protection strategies',
      icon: FaLock,
    },
    {
      title: 'Network Security',
      description: 'Robust network security architecture and monitoring systems',
      icon: FaNetworkWired,
    },
  ]

  const technologies = [
    'AWS & Azure',
    'Kubernetes',
    'Terraform',
    'Docker',
    'Cloudflare',
    'Vault by HashiCorp',
    'Splunk & ELK Stack',
    'Zero Trust Architecture',
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
            <Heading size="lg" mb={4}>Our Cloud & Cybersecurity Services</Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              Secure your digital assets and optimize your cloud infrastructure with our comprehensive solutions.
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
              <Heading size="lg" mb={4}>Technologies & Platforms</Heading>
              <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
                We leverage industry-leading cloud and security technologies
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
            <Heading size="lg" mb={4}>Our Security & Cloud Implementation Process</Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              A comprehensive approach to securing and optimizing your cloud infrastructure
            </Text>
          </Box>

          <List.Root gap={4}>
            {[
              'Security Assessment & Risk Analysis',
              'Cloud Strategy & Architecture Design',
              'Implementation & Migration Planning',
              'Security Controls & Monitoring Setup',
              'Ongoing Support & Threat Management',
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
            <Heading>Ready to Secure Your Cloud Infrastructure?</Heading>
            <Text fontSize="lg" maxW="2xl">
              Let's discuss how we can help protect your business and optimize your cloud operations
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
