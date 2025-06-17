import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Button,
  Icon,
} from '@chakra-ui/react'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { useColorModeValue } from '@/components/ui/color-mode'
import { QuoteBox } from '@/components/ui/QuoteBox'
import { FiClock, FiCalendar, FiArrowRight } from 'react-icons/fi'
import { BlogPostModal } from '@/components/features/BlogPostModal'
import { useState } from 'react'

const BLOG_POSTS = [
  {
    title: 'A Letter from the Founder: Why SSQ Exists?',
    excerpt: 'A letter from the founder of SSQ, explaining why we exist and what we do.',
    content: `Dear valued partners and friends,

At SSQ, we believe in the transformative power of technology to solve real-world problems. Our journey began with a simple yet powerful vision: to bridge the gap between innovative ideas and their successful implementation.

In today's rapidly evolving digital landscape, businesses face unprecedented challenges in staying competitive and relevant. We recognized that many organizations struggle not because they lack vision, but because they need a trusted technology partner who can transform their ideas into reality.

SSQ exists to be that partner. We combine deep technical expertise with a profound understanding of business needs to deliver solutions that drive real value. Our approach is not just about writing code or implementing systems; it's about creating lasting partnerships and delivering outcomes that matter.

We're committed to:
• Excellence in every line of code we write
• Transparent and honest communication
• Continuous innovation and learning
• Building lasting relationships with our clients

As we continue to grow and evolve, our core mission remains unchanged: to empower businesses through technology and help them achieve their fullest potential.

Thank you for being part of our journey.

Best regards,
The SSQ Team`,
    date: '2025-06-17',
    readTime: '3 min read',
  },
  {
    title: 'From Idea to Impact: What Every Visionary Needs in a Tech Partner',
    excerpt: 'What every visionary needs in a tech partner.',
    content: `In the fast-paced world of technology and business, having the right technical partner can make the difference between success and stagnation. This post explores the essential qualities to look for in a technology partner and how to build a productive, lasting relationship.

Key Qualities of an Ideal Tech Partner:

1. Technical Excellence
- Deep expertise in relevant technologies
- Strong focus on code quality and best practices
- Commitment to staying current with industry trends

2. Business Understanding
- Ability to translate technical concepts into business value
- Understanding of your industry and challenges
- Strategic thinking beyond just coding

3. Communication and Collaboration
- Clear and regular communication
- Transparent project management
- Collaborative problem-solving approach

4. Scalability and Future-Proofing
- Architecture that supports growth
- Forward-thinking technology choices
- Flexible and adaptable solutions

5. Security and Reliability
- Strong security practices
- Robust testing procedures
- Reliable support and maintenance

How to Build a Successful Partnership:

1. Clear Goals and Expectations
- Define success metrics
- Set realistic timelines
- Establish communication protocols

2. Regular Check-ins
- Schedule regular progress reviews
- Address concerns early
- Celebrate successes together

3. Long-term Vision
- Plan for scalability
- Consider future integrations
- Build with growth in mind

Remember, the best technical partnerships are built on trust, communication, and shared success. Choose a partner who not only understands your technical needs but is also invested in your long-term success.`,
    date: '2025-06-17',
    readTime: '3 min read',
  },
]

export default function Blog() {
  const config = getPageConfig('blog')
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const metaColor = useColorModeValue('gray.500', 'gray.500')
  
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null)
  
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

      {/* Blog Posts Section */}
      <Container maxW="1200px" py={20}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          {BLOG_POSTS.map((post) => (
            <Box
              key={post.title}
              bg={bgColor}
              rounded="xl"
              borderWidth="1px"
              borderColor={borderColor}
              overflow="hidden"
              position="relative"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'brand.md',
                borderColor: 'brand.500',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Stack p={6} h="full" direction="column" gap={4}>
                <Stack direction="column" flex="1" gap={4}>
                  <Heading 
                    size="md"
                    _hover={{ color: 'brand.500' }}
                    transition="color 0.2s"
                  >
                    {post.title}
                  </Heading>
                  <Text color={textColor} fontSize="md">
                    {post.excerpt}
                  </Text>
                </Stack>

                <Stack gap={4}>
                  <Stack direction="row" gap={4} fontSize="sm" color={metaColor}>
                    <Stack direction="row" align="center">
                      <Icon as={FiCalendar} />
                      <Text>{post.date}</Text>
                    </Stack>
                    <Stack direction="row" align="center">
                      <Icon as={FiClock} />
                      <Text>{post.readTime}</Text>
                    </Stack>
                  </Stack>

                  <Button
                    variant="ghost"
                    colorScheme="brand"
                    size="md"
                    _hover={{
                      transform: 'translateX(4px)',
                      bg: 'brand.50',
                    }}
                    transition="all 0.2s"
                    w="full"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read More
                    <Icon as={FiArrowRight} ml={2} />
                  </Button>
                </Stack>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Blog Post Modal */}
      <BlogPostModal
        isOpen={selectedPost !== null}
        onClose={() => setSelectedPost(null)}
        post={selectedPost || BLOG_POSTS[0]} // Fallback to first post to satisfy TypeScript
      />
    </Box>
  )
}
