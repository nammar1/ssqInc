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
  Icon,
  useToken,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { useColorModeValue } from '@/components/ui/color-mode'
import { QuoteBox } from '@/components/ui/QuoteBox'
import { FaBriefcase, FaUsers, FaLaptopCode, FaClipboardList } from 'react-icons/fa'

const JOB_OPENINGS = [
  {
    title: 'Chief Technology Officer',
    department: 'Executive',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'Lead our technology strategy and drive innovation across the organization. Shape the future of our tech stack and guide our engineering teams.',
    icon: FaLaptopCode,
    requirements: [
      'Proven experience as CTO or similar leadership role',
      'Strong background in software development and architecture',
      'Experience with cloud technologies and digital transformation',
      'Excellent communication and leadership skills'
    ]
  },
  {
    title: 'Project Manager',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-time',
    description: 'Oversee and deliver complex technology projects while ensuring alignment with business objectives and client expectations.',
    icon: FaClipboardList,
    requirements: [
      'PMP certification preferred',
      'Experience managing software development projects',
      'Strong stakeholder management skills',
      'Agile methodology expertise'
    ]
  },
  {
    title: 'Administrative Assistant',
    department: 'Operations',
    location: 'On-site',
    type: 'Full-time',
    description: 'Support our executive team and help maintain smooth office operations while coordinating various administrative tasks.',
    icon: FaUsers,
    requirements: [
      'Previous administrative experience',
      'Excellent organizational skills',
      'Proficiency in Microsoft Office Suite',
      'Strong communication abilities'
    ]
  },
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build and maintain scalable web applications using modern technologies while mentoring junior developers.',
    icon: FaBriefcase,
    requirements: [
      '5+ years of full stack development experience',
      'Expertise in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS/Azure)',
      'Strong system design and architecture skills'
    ]
  }
]

export default function Careers() {
  const config = getPageConfig('careers')
  const [brand500] = useToken('colors', ['brand.500'])

  return (
    <Box>
      {/* Enhanced WebHero with 3D Text */}
      <WebHero
        title={config.title}
        tagline={config.tagline}
        showText={config.showText}
      />

      <QuoteBox 
        quote={config.quote || ""}
      />

      {/* Job Openings Section */}
      <Container maxW="1200px" py={20}>
        <Stack gap={12}>
          <Box textAlign="center">
            <Heading mb={4} size="2xl" bgGradient={`linear(to-r, ${brand500}, purple.500)`} bgClip="text">
              Current Openings
            </Heading>
            <Text fontSize="xl" color={useColorModeValue('gray.600', 'gray.400')}>
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
                _hover={{ 
                  shadow: 'xl', 
                  transform: 'translateY(-4px)',
                  borderColor: 'brand.500'
                }}
                transition="all 0.3s"
                border="1px solid"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                position="relative"
                overflow="hidden"
              >
                <VStack gap={4} align="stretch">
                  <HStack>
                    <Icon 
                      as={job.icon} 
                      boxSize={6} 
                      color="brand.500"
                    />
                    <Heading size="md">
                      {job.title}
                    </Heading>
                  </HStack>
                  
                  <HStack gap={2} flexWrap="wrap">
                    <Badge colorScheme="brand" fontSize="sm">{job.department}</Badge>
                    <Badge variant="outline" colorScheme="purple" fontSize="sm">{job.location}</Badge>
                    <Badge variant="outline" colorScheme="blue" fontSize="sm">{job.type}</Badge>
                  </HStack>
                  
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    {job.description}
                  </Text>

                  <Box>
                    <Text fontWeight="medium" mb={2}>Key Requirements:</Text>
                    <VStack align="stretch" gap={1}>
                      {job.requirements.map((req, index) => (
                        <Text 
                          key={index}
                          fontSize="sm"
                          color={useColorModeValue('gray.600', 'gray.400')}
                        >
                          • {req}
                        </Text>
                      ))}
                    </VStack>
                  </Box>

                  <Button 
                    colorScheme="brand"
                    size="md"
                    alignSelf="flex-start"
                    _hover={{
                      transform: 'translateY(-2px)',
                      shadow: 'md'
                    }}
                  >
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
            <Heading 
              textAlign="center" 
              size="xl"
              bgGradient={`linear(to-r, ${brand500}, purple.500)`}
              bgClip="text"
            >
              Why Work With Us?
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
              <VStack 
                gap={4} 
                textAlign="center"
                bg={useColorModeValue('white', 'gray.800')}
                p={8}
                rounded="xl"
                shadow="lg"
                border="1px solid"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                _hover={{
                  transform: 'translateY(-4px)',
                  shadow: 'xl',
                  borderColor: 'brand.500'
                }}
                transition="all 0.3s"
              >
                <Heading size="md" color="brand.500">
                  Flexible Work
                </Heading>
                <Text color={useColorModeValue('gray.600', 'gray.400')}>
                  Remote-first culture with flexible hours and work-life balance
                </Text>
              </VStack>
              <VStack 
                gap={4} 
                textAlign="center"
                bg={useColorModeValue('white', 'gray.800')}
                p={8}
                rounded="xl"
                shadow="lg"
                border="1px solid"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                _hover={{
                  transform: 'translateY(-4px)',
                  shadow: 'xl',
                  borderColor: 'brand.500'
                }}
                transition="all 0.3s"
              >
                <Heading size="md" color="brand.500">
                  Growth Opportunities
                </Heading>
                <Text color={useColorModeValue('gray.600', 'gray.400')}>
                  Continuous learning, training, and career advancement paths
                </Text>
              </VStack>
              <VStack 
                gap={4} 
                textAlign="center"
                bg={useColorModeValue('white', 'gray.800')}
                p={8}
                rounded="xl"
                shadow="lg"
                border="1px solid"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                _hover={{
                  transform: 'translateY(-4px)',
                  shadow: 'xl',
                  borderColor: 'brand.500'
                }}
                transition="all 0.3s"
              >
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
          <Heading 
            size="xl"
            bgGradient="linear(to-r, brand.500, purple.500)"
            bgClip="text"
          >
            Don't See Your Role?
          </Heading>
          <Text fontSize="xl" maxW="2xl" color={useColorModeValue('gray.600', 'gray.400')}>
            We're always looking for talented individuals. Send us your resume!
          </Text>
          <RouterLink to="/contact">
            <Button
              colorScheme="brand"
              size="lg"
              px={8}
              _hover={{
                transform: 'translateY(-2px)',
                shadow: 'lg'
              }}
              transition="all 0.2s"
            >
              Contact Us
            </Button>
          </RouterLink>
        </Stack>
      </Container>
    </Box>
  )
}
