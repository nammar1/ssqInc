import { Container, Heading, Text, Box, VStack, List, ListItem, useColorModeValue } from '@chakra-ui/react'

const Privacy = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={6} mb={12}>
        <Heading as="h1" size="2xl">
          Privacy Policy
        </Heading>
        <Text fontSize="xl" color={textColor} textAlign="center">
          Last updated: March 15, 2024
        </Text>
      </VStack>

      <Box bg={bgColor} p={8} borderRadius="lg" shadow="sm">
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Introduction
            </Heading>
            <Text fontSize="lg" color={textColor}>
              At SSQ Inc., we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Information We Collect
            </Heading>
            <Text fontSize="lg" color={textColor} mb={4}>
              We collect information that you provide directly to us, including:
            </Text>
            <List spacing={2} styleType="disc" pl={6}>
              <ListItem>Name and contact information</ListItem>
              <ListItem>Account credentials</ListItem>
              <ListItem>Payment information</ListItem>
              <ListItem>Communication preferences</ListItem>
            </List>
          </Box>

          <Box>
            <Heading as="h2" size="xl" mb={4}>
              How We Use Your Information
            </Heading>
            <Text fontSize="lg" color={textColor} mb={4}>
              We use the information we collect to:
            </Text>
            <List spacing={2} styleType="disc" pl={6}>
              <ListItem>Provide and maintain our services</ListItem>
              <ListItem>Process your transactions</ListItem>
              <ListItem>Send you technical notices and support messages</ListItem>
              <ListItem>Communicate with you about products, services, and events</ListItem>
            </List>
          </Box>

          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Data Security
            </Heading>
            <Text fontSize="lg" color={textColor}>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Contact Us
            </Heading>
            <Text fontSize="lg" color={textColor} mb={4}>
              If you have any questions about this Privacy Policy, please contact us at:
            </Text>
            <VStack align="start" spacing={2}>
              <Text>Email: privacy@ssqinc.com</Text>
              <Text>Phone: +1 (555) 123-4567</Text>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Container>
  )
}

export default Privacy
