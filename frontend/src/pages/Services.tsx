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
  Flex,
  useColorMode,
} from '@chakra-ui/react'
import { 
  FaCode, 
  FaDatabase, 
  FaRobot, 
  FaCloud, 
  FaDigitalTachograph,
  FaArrowRight
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'

const MotionBox = motion(Box)

const SERVICES = [
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs',
    icon: FaCode,
    link: '/services/software-development',
    color: 'brand.500',
  },
  {
    title: 'Data Engineering',
    description: 'Build robust data pipelines and analytics infrastructure',
    icon: FaDatabase,
    link: '/services/data-engineering',
    color: 'brand.600',
  },
  {
    title: 'AI & ML Solutions',
    description: 'Intelligent solutions powered by cutting-edge AI and machine learning',
    icon: FaRobot,
    link: '/services/ai-ml',
    color: 'brand.700',
  },
  {
    title: 'Cloud & Cybersecurity',
    description: 'Secure cloud infrastructure and comprehensive security solutions',
    icon: FaCloud,
    link: '/services/cloud-security',
    color: 'brand.400',
  },
  {
    title: 'Digital Transformation',
    description: 'Transform your business with modern digital solutions',
    icon: FaDigitalTachograph,
    link: '/services/digital-transformation',
    color: 'brand.300',
  },
]

export default function Services() {
  const { colorMode } = useColorMode()
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.200')

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
              Our Services
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              Empowering businesses with cutting-edge technology solutions
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxW="1200px" py={12}>
        <VStack spacing={8} align="stretch">
          {SERVICES.map((service, index) => (
            <MotionBox
              key={service.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <RouterLink to={service.link}>
                <Box
                  bg={bgColor}
                  rounded="xl"
                  shadow="lg"
                  p={8}
                  position="relative"
                  overflow="hidden"
                  _hover={{
                    shadow: 'xl',
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.3s"
                >
                  <Flex
                    direction={{ base: 'column', md: 'row' }}
                    align="center"
                    gap={8}
                  >
                    <Box
                      p={4}
                      rounded="full"
                      bg={`${service.color}10`}
                      color={service.color}
                    >
                      <Icon as={service.icon} w={10} h={10} />
                    </Box>
                    <Box flex="1">
                      <Heading size="lg" mb={2}>
                        {service.title}
                      </Heading>
                      <Text color={textColor} fontSize="lg">
                        {service.description}
                      </Text>
                    </Box>
                    <Icon
                      as={FaArrowRight}
                      w={6}
                      h={6}
                      color={service.color}
                      opacity={0.7}
                    />
                  </Flex>
                </Box>
              </RouterLink>
            </MotionBox>
          ))}
        </VStack>
      </Container>

      {/* CTA Section */}
      <Box bg={useColorModeValue('brand.50', 'brand.900')}>
        <Container maxW="1200px" py={20}>
          <Stack spacing={8} align="center" textAlign="center">
            <Heading>Ready to Transform Your Business?</Heading>
            <Text fontSize="lg" maxW="2xl">
              Let's discuss how our services can help you achieve your goals
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
