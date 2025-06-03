import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'

export default function Privacy() {
  const config = getPageConfig('privacy')

  return (
    <Box>
      {/* Enhanced WebHero with 3D Text */}
      <WebHero
        title={config.title}
        tagline={config.tagline}
        showText={config.showText}
        minHeight={config.minHeight}
      />

      {/* Privacy Policy Content */}
      <Container maxW="1200px" py={20}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading size="lg" mb={4}>
              Information We Collect
            </Heading>
            <Text color={useColorModeValue('gray.600', 'gray.400')}>
              We collect information you provide directly to us, such as when you create an account, 
              subscribe to our newsletter, or contact us for support. This may include your name, 
              email address, phone number, and any other information you choose to provide.
            </Text>
          </Box>

          <Box>
            <Heading size="lg" mb={4}>
              How We Use Your Information
            </Heading>
            <Text color={useColorModeValue('gray.600', 'gray.400')}>
              We use the information we collect to provide, maintain, and improve our services, 
              process transactions, send you technical notices and support messages, and communicate 
              with you about products, services, offers, and events.
            </Text>
          </Box>

          <Box>
            <Heading size="lg" mb={4}>
              Information Sharing
            </Heading>
            <Text color={useColorModeValue('gray.600', 'gray.400')}>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share your information 
              with trusted service providers who assist us in operating our website and conducting our business.
            </Text>
          </Box>

          <Box>
            <Heading size="lg" mb={4}>
              Data Security
            </Heading>
            <Text color={useColorModeValue('gray.600', 'gray.400')}>
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction.
            </Text>
          </Box>

          <Box>
            <Heading size="lg" mb={4}>
              Contact Us
            </Heading>
            <Text color={useColorModeValue('gray.600', 'gray.400')}>
              If you have any questions about this Privacy Policy, please contact us at privacy@ssqinc.com 
              or through our contact page.
            </Text>
          </Box>

          <Box pt={8} borderTop="1px solid" borderColor={useColorModeValue('gray.200', 'gray.700')}>
            <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.500')}>
              Last updated: January 1, 2024
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
