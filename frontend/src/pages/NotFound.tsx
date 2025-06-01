import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      bg={useColorModeValue('gray.50', 'gray.900')}
    >
      <Container maxW="1200px">
        <VStack spacing={8} textAlign="center">
          <Heading
            fontSize="6xl"
            fontWeight="bold"
            color="brand.500"
            mb={4}
          >
            404
          </Heading>
          <Heading size="lg" mb={4}>
            Page Not Found
          </Heading>
          <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')} maxW="md">
            The page you're looking for doesn't exist or has been moved.
          </Text>
          <Button
            as={RouterLink}
            to="/"
            colorScheme="brand"
            size="lg"
            mt={6}
          >
            Go Home
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}
