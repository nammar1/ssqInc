import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Button,
  VStack,
  HStack,
  Badge,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { useColorModeValue } from '@/components/ui/color-mode'

const JOB_OPENINGS = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our engineering team to build cutting-edge web applications...',
  },
  {
    title: 'Data Scientist',
    department: 'Data & Analytics',
    location: 'New York',
    type: 'Full-time',
    description: 'Help us unlock insights from complex datasets...',
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build and maintain scalable cloud infrastructure...',
  },
]

export default function Careers() {
  const config = getPageConfig('careers')

  return (
    <Box>
      {/* Enhanced WebHero with 3D Text */}
      <WebHero
        title={config.title}
        tagline={config.tagline}
        showText={config.showText}
        minHeight={config.minHeight}
      />

      {/* Job Openings Section */}
      <Container maxW="1200px" py={20}>
        <Stack gap={12}>
          <Box textAlign="center">
            <Heading mb={4}>Current Openings</Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')}>
              Join our team and help shape the future of technology
            </Text>
          </Box>
          
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
            {JOB_OPENINGS.map((job) => (
              <Box
                key={job.title}
                bg={useColorModeValue('white', 'gray.800')}
                rounded="xl"
                shadow="lg"
                p={8}
                _hover={{ shadow: 'xl', transform: 'translateY(-2px)' }}
                transition="all 0.3s"
              >
                <VStack gap={4} align="stretch">
                  <Box>
                    <Heading size="md" mb={2}>
                      {job.title}
                    </Heading>
                    <HStack gap={2} mb={4}>
                      <Badge colorPalette="brand">{job.department}</Badge>
                      <Badge variant="outline">{job.location}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </HStack>
                    <Text color={useColorModeValue('gray.600', 'gray.400')}>
                      {job.description}
                    </Text>
                  </Box>
                  <Button colorPalette="brand" size="sm" alignSelf="flex-start">
                    Apply Now
                  </Button>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Benefits Section */}
      <Box bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="1200px" py={20}>
          <Stack gap={12}>
            <Heading textAlign="center">Why Work With Us?</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
              <VStack gap={4} textAlign="center">
                <Heading size="md" color="brand.500">
                  Flexible Work
                </Heading>
                <Text color={useColorModeValue('gray.600', 'gray.400')}>
                  Remote-first culture with flexible hours and work-life balance
                </Text>
              </VStack>
              <VStack gap={4} textAlign="center">
                <Heading size="md" color="brand.500">
                  Growth Opportunities
                </Heading>
                <Text color={useColorModeValue('gray.600', 'gray.400')}>
                  Continuous learning, training, and career advancement paths
                </Text>
              </VStack>
              <VStack gap={4} textAlign="center">
                <Heading size="md" color="brand.500">
                  Great Benefits
                </Heading>
                <Text color={useColorModeValue('gray.600', 'gray.400')}>
                  Competitive salary, health insurance, and comprehensive benefits
                </Text>
              </VStack>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxW="1200px" py={20}>
        <Stack gap={8} align="center" textAlign="center">
          <Heading>Don't See Your Role?</Heading>
          <Text fontSize="lg" maxW="2xl">
            We're always looking for talented individuals. Send us your resume!
          </Text>
          <RouterLink to="/contact">
            <Button
              colorPalette="brand"
              size="lg"
              px={8}
            >
              Contact Us
            </Button>
          </RouterLink>
        </Stack>
      </Container>
    </Box>
  )
}
