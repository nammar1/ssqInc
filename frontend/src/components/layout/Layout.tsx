import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { LetsTalk } from './LetsTalk'
import { CTABanner } from './CTABanner'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [isLetsTalkOpen, setIsLetsTalkOpen] = useState(false)

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <LetsTalk isOpen={isLetsTalkOpen} onClose={() => setIsLetsTalkOpen(false)} />
      <Header />
      <Box as="main" flex="1" pt="16">
        {children}
      </Box>
      <CTABanner />
      <Footer />
    </Box>
  )
}
