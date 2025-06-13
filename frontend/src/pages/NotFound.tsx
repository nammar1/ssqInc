import {
  Box,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { useColorModeValue } from '@/components/ui/color-mode'

export default function NotFound() {
  const config = getPageConfig('notfound')

  return (
    <Box>
      {/* Enhanced WebHero with 3D Text */}
      <WebHero
        title={config.title}
        tagline={config.tagline}
        showText={config.showText}
        minHeight={config.minHeight}
      >
        <Container maxW="1200px" py={20}>
          <Stack gap={8} align="center" textAlign="center">
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')} maxW="2xl">
              The page you're looking for seems to have gotten caught in our web. 
              Let's help you find your way back.
            </Text>
            <Stack direction={{ base: 'column', sm: 'row' }} gap={4}>
              <RouterLink to="/">
                <Button
                  colorPalette="brand"
                  size="lg"
                  px={8}
                >
                  Go Home
                </Button>
              </RouterLink>
              <RouterLink to="/contact">
                <Button
                  variant="outline"
                  colorPalette="brand"
                  size="lg"
                  px={8}
                >
                  Contact Support
                </Button>
              </RouterLink>
            </Stack>
          </Stack>
        </Container>
      </WebHero>
    </Box>
  )
}
