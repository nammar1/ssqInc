import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Button,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { useColorModeValue } from '@/components/ui/color-mode'

const BLOG_POSTS = [
  {
    title: 'The Future of AI in Business',
    excerpt: 'Exploring how artificial intelligence is transforming modern business operations...',
    date: '2024-01-15',
    readTime: '5 min read',
  },
  {
    title: 'Cloud Security Best Practices',
    excerpt: 'Essential security measures every business should implement when moving to the cloud...',
    date: '2024-01-10',
    readTime: '7 min read',
  },
  {
    title: 'Digital Transformation Strategies',
    excerpt: 'A comprehensive guide to successful digital transformation for enterprises...',
    date: '2024-01-05',
    readTime: '6 min read',
  },
]

export default function Blog() {
  const config = getPageConfig('blog')
  
  return (
    <Box>
      {/* Enhanced WebHero with 3D Text */}
      <WebHero
        title={config.title}
        tagline={config.tagline}
        showText={config.showText}
        minHeight={config.minHeight}
      />

      {/* Blog Posts Section */}
      <Container maxW="1200px" py={20}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {BLOG_POSTS.map((post) => (
            <Box
              key={post.title}
              bg={useColorModeValue('white', 'gray.800')}
              rounded="xl"
              shadow="lg"
              overflow="hidden"
              _hover={{ shadow: 'xl', transform: 'translateY(-2px)' }}
              transition="all 0.3s"
            >
              <Box p={6}>
                <Stack gap={4}>
                  <Heading size="md">{post.title}</Heading>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    {post.excerpt}
                  </Text>
                  <Box>
                    <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.500')}>
                      {post.date} • {post.readTime}
                    </Text>
                  </Box>
                  <Button variant="outline" colorPalette="brand" size="sm">
                    Read More
                  </Button>
                </Stack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* CTA Section */}
      <Box bg={useColorModeValue('brand.50', 'brand.900')}>
        <Container maxW="1200px" py={20}>
          <Stack gap={8} align="center" textAlign="center">
            <Heading>Stay Updated</Heading>
            <Text fontSize="lg" maxW="2xl">
              Subscribe to our newsletter for the latest insights and updates
            </Text>
            <RouterLink to="/contact">
              <Button
                colorPalette="brand"
                size="lg"
                px={8}
              >
                Subscribe
              </Button>
            </RouterLink>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
