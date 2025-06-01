import {
  Container,
  Heading,
  Text,
  Box,
  VStack,
  SimpleGrid,
  Card,
  CardBody,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Careers = () => {
  const textColor = useColorModeValue('gray.600', 'gray.400')
  
  const openPositions = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY',
      type: 'Full-time'
    },
    {
      title: 'UX Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time'
    }
  ]

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={6} mb={12}>
        <Heading as="h1" size="2xl">
          Careers at SSQ Inc
        </Heading>
        <Text fontSize="xl" color={textColor} textAlign="center">
          Join our team and help shape the future of technology
        </Text>
      </VStack>

      <VStack spacing={12} align="stretch">
        <Box>
          <Heading size="xl" mb={4}>
            Why Work With Us?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box>
              <Heading size="md" mb={2}>
                Innovation
              </Heading>
              <Text color={textColor}>
                Work on cutting-edge projects that push the boundaries of technology
              </Text>
            </Box>
            <Box>
              <Heading size="md" mb={2}>
                Growth
              </Heading>
              <Text color={textColor}>
                Continuous learning opportunities and career advancement
              </Text>
            </Box>
            <Box>
              <Heading size="md" mb={2}>
                Culture
              </Heading>
              <Text color={textColor}>
                Collaborative environment with talented and passionate people
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading size="xl" mb={6}>
            Open Positions
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {openPositions.map((position, index) => (
              <Card key={index} variant="outline">
                <CardBody>
                  <VStack align="start" spacing={3}>
                    <Heading size="md">{position.title}</Heading>
                    <Text color={textColor}>
                      {position.department} • {position.location}
                    </Text>
                    <Text color={textColor}>
                      {position.type}
                    </Text>
                    <Button colorScheme="brand" size="sm">
                      Apply Now
                    </Button>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  )
}

export default Careers
