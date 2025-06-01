import { Container, Heading, Text, SimpleGrid, Box, VStack, Card, CardBody, Stat, StatLabel, StatNumber, useColorModeValue } from '@chakra-ui/react'

const Investor = () => {
  const textColor = useColorModeValue('gray.600', 'gray.400')

  const financialHighlights = [
    {
      title: 'Revenue Growth',
      value: '25%',
      description: 'Year-over-year growth in 2023'
    },
    {
      title: 'Market Cap',
      value: '$500M',
      description: 'Current market capitalization'
    },
    {
      title: 'Global Presence',
      value: '15+',
      description: 'Countries with active operations'
    }
  ]

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={6} mb={12}>
        <Heading as="h1" size="2xl">
          Investor Relations
        </Heading>
        <Text fontSize="xl" color={textColor} textAlign="center">
          Building value for our shareholders and stakeholders
        </Text>
      </VStack>

      <VStack spacing={12} align="stretch">
        <Box>
          <Heading size="xl" color="brand.500">
            Financial Highlights
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={6}>
            <Stat>
              <StatLabel>Revenue Growth</StatLabel>
              <StatNumber>+45%</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Market Cap</StatLabel>
              <StatNumber>$2.5B</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Employees</StatLabel>
              <StatNumber>1,200+</StatNumber>
            </Stat>
          </SimpleGrid>
          <Text color={textColor} textAlign="center">
            Year-over-year growth demonstrates our commitment to excellence
          </Text>
        </Box>

        <Box>
          <Heading size="xl" mb={4}>
            Our Mission
          </Heading>
          <Text fontSize="lg" color={textColor}>
            At SSQ Inc., we are committed to delivering innovative solutions that drive business transformation and create lasting value for our clients, employees, and shareholders.
          </Text>
        </Box>

        <Box>
          <Heading size="xl" mb={4}>
            Investment Opportunities
          </Heading>
          <Text fontSize="lg" color={textColor} mb={4}>
            We offer various investment opportunities for qualified investors:
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={12}>
            {financialHighlights.map((highlight, index) => (
              <Card key={index} variant="outline">
                <CardBody>
                  <VStack spacing={4} align="center">
                    <Heading size="xl" color="brand.500">
                      {highlight.value}
                    </Heading>
                    <Heading size="md">
                      {highlight.title}
                    </Heading>
                    <Text color={textColor} textAlign="center">
                      {highlight.description}
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>

      <Box mb={12}>
        <Heading as="h2" size="xl" mb={4}>
          Financial Reports
        </Heading>
        <Text fontSize="lg" color={textColor}>
          Access our latest financial reports, presentations, and regulatory filings.
        </Text>
        {/* Add download links or PDF viewers here */}
      </Box>

      <Box>
        <Heading as="h2" size="xl" mb={4}>
          Contact Investor Relations
        </Heading>
        <Text fontSize="lg" color={textColor} mb={4}>
          For investor inquiries, please contact our Investor Relations team at:
        </Text>
        <VStack align="start" spacing={2}>
          <Text>Email: investors@ssqinc.com</Text>
          <Text>Phone: +1 (555) 123-4567</Text>
        </VStack>
      </Box>
    </Container>
  )
}

export default Investor
