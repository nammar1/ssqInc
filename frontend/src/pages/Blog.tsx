import {
  Container,
  Heading,
  Text,
  Box,
  VStack,
  SimpleGrid,
  Card,
  CardBody,
  useColorModeValue,
} from '@chakra-ui/react'

const Blog = () => {
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const metaColor = useColorModeValue('gray.500', 'gray.500')
  
  const blogPosts = [
    {
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations...',
      date: 'March 15, 2024',
      author: 'John Smith'
    },
    {
      title: 'Cloud Security Best Practices',
      excerpt: 'Essential security measures for protecting your cloud infrastructure...',
      date: 'March 10, 2024',
      author: 'Sarah Johnson'
    },
    {
      title: 'Digital Transformation Strategies',
      excerpt: 'Key strategies for successful digital transformation in enterprise...',
      date: 'March 5, 2024',
      author: 'Mike Davis'
    }
  ]

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={6} mb={12}>
        <Heading as="h1" size="2xl">
          Our Blog
        </Heading>
        <Text fontSize="xl" color={textColor} textAlign="center">
          Insights, trends, and thought leadership from our team
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {blogPosts.map((post, index) => (
          <Card key={index} variant="outline">
            <CardBody>
              <VStack align="start" spacing={4}>
                <Heading size="md">
                  {post.title}
                </Heading>
                <Text color={textColor}>
                  {post.excerpt}
                </Text>
                <Text fontSize="sm" color={metaColor}>
                  {post.date} • {post.author}
                </Text>
              </VStack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Blog
