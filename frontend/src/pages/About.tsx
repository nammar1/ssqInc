import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  SimpleGrid,
  Image,
} from '@chakra-ui/react'

const TEAM_MEMBERS = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer',
    image: 'https://via.placeholder.com/150',
  },
]

export default function About() {
  return (
    <Box>
      {/* Mission Section */}
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        <Container maxW="1200px" py={20}>
          <Stack spacing={8}>
            <Heading textAlign="center">About SSQ Inc</Heading>
            <Text fontSize="xl" color={useColorModeValue('gray.600', 'gray.400')} textAlign="center">
              Learn more about our mission, values, and the team behind SSQ Inc
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Values Section */}
      <Container maxW="1200px" py={20}>
        <Stack spacing={12}>
          <Heading textAlign="center">Our Values</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading size="md" mb={4}>
                Our Mission
              </Heading>
              <Text color={useColorModeValue('gray.600', 'gray.400')}>
                Founded in 2020, SSQ Inc has been at the forefront of digital innovation, helping businesses transform and thrive in the digital age.
              </Text>
            </Box>
            <Box>
              <Heading size="md" mb={4}>
                Our Vision
              </Heading>
              <Text color={useColorModeValue('gray.600', 'gray.400')}>
                We believe in the power of technology to solve complex problems and create meaningful impact for our clients and their customers.
              </Text>
            </Box>
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Team Section */}
      <Box bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="1200px" py={20}>
          <Stack spacing={12}>
            <Heading textAlign="center">Our Team</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {TEAM_MEMBERS.map((member) => (
                <Box
                  key={member.name}
                  bg={useColorModeValue('white', 'gray.800')}
                  rounded="xl"
                  shadow="lg"
                  overflow="hidden"
                  textAlign="center"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    w="full"
                    h="200px"
                    objectFit="cover"
                  />
                  <Box p={6}>
                    <Heading size="md" mb={2}>
                      {member.name}
                    </Heading>
                    <Text color={useColorModeValue('gray.600', 'gray.400')}>{member.role}</Text>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
