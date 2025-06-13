import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  SimpleGrid,
  Heading,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useColorModeValue } from '@/components/ui/color-mode'

const FOOTER_LINKS = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

// Custom component that combines Chakra UI Link with React Router
const NavLink = ({ to, children, ...props }: { to: string; children: React.ReactNode }) => (
  <Link
    asChild
    _hover={{ textDecoration: 'underline' }}
    display="block"
    {...props}
  >
    <RouterLink to={to}>
      {children}
    </RouterLink>
  </Link>
)

export function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      mt="auto"
    >
      <Container as={Stack} maxW="1200px" py={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          <Stack gap={6}>
            <Box>
              <Text fontWeight="bold" fontSize="lg">
                SSQ Inc
              </Text>
            </Box>
            <Text fontSize="sm">
              Providing exceptional services to help your business grow
            </Text>
          </Stack>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <Stack key={title} align="flex-start">
              <Heading size="sm" mb={2}>
                {title}
              </Heading>
              {links.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                >
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          ))}

          <Stack align="flex-start">
            <Heading size="sm" mb={2}>
              Contact Us
            </Heading>
            <Text>Email: contact@ssqinc.com</Text>
            <Text>Phone: (123) 456-7890</Text>
            <Text>Address: Your Business Address</Text>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTop={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container maxW="1200px" py={4}>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            gap={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}
          >
            <Text>© 2024 SSQ Inc. All rights reserved</Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
