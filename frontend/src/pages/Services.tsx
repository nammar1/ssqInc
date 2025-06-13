import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Icon,
  Button,
  VStack,
  Flex,
} from '@chakra-ui/react'
import { 
  FaCode, 
  FaDatabase, 
  FaRobot, 
  FaCloud, 
  FaGlobe,
  FaArrowRight
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { useColorMode, useColorModeValue } from '@/components/ui/color-mode'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'

const MotionBox = motion(Box)

const SERVICES = [
  {
    title: 'Digital Transformation',
    description: 'Digital Strategy for your Innovation',
    icon: FaGlobe,
    link: '/services/digital-transformation',
    color: 'brand.800',
  },
  {
    title: 'Software',
    description: 'Software Created for your Needs',
    icon: FaCode,
    link: '/services/software',
    color: 'brand.700',
  },
  {
    title: 'Data',
    description: 'Data Clarity for your Decisions',
    icon: FaDatabase,
    link: '/services/data',
    color: 'brand.600',
  },
  {
    title: 'AI & ML',
    description: 'Future Ready Intelligence for your Today',
    icon: FaRobot,
    link: '/services/ai-ml',
    color: 'brand.500',
  },
  {
    title: 'Cloud & Cybersecurity',
    description: 'Cloud Confidence for your Security',
    icon: FaCloud,
    link: '/services/cloud-security',
    color: 'brand.400',
  },
]

export default function Services() {
  const {  } = useColorMode()
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const config = getPageConfig('services')

  return (
    <Box>
      {/* Enhanced WebHero with 3D Text */}
      <WebHero
        title={config.title}
        tagline={config.tagline}
        showText={config.showText}
        minHeight={config.minHeight}
      />

      {/* Services Section */}
      <Container maxW="1200px" py={12}>
        <VStack gap={8} align="stretch">
          {SERVICES.map((service) => (
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
                  border="2px solid"
                  borderColor="transparent"
                  _hover={{
                    shadow: 'xl',
                    transform: 'translateY(-2px)',
                    borderColor: service.color,
                    '& .service-icon': {
                      transform: 'rotate(360deg)',
                      transition: 'transform 0.6s ease-in-out',
                    }
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
                      <Icon 
                        as={service.icon} 
                        w={10} 
                        h={10} 
                        className="service-icon"
                        transition="transform 0.6s ease-in-out"
                      />
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
          <Stack gap={8} align="center" textAlign="center">
            <Heading>Ready to Transform Your Business?</Heading>
            <Text fontSize="lg" maxW="2xl">
              Let's discuss how our services can help you achieve your goals
            </Text>
            <Button
              asChild
              colorPalette="brand"
              size="lg"
              px={8}
            >
              <RouterLink to="/contact">
                Get Started
                <FaArrowRight />
              </RouterLink>
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
