import {
  Box,
  Button,
  VStack,
  Text,
  Input,
  Container,
} from '@chakra-ui/react'
import { FaSignInAlt } from 'react-icons/fa'
import { useColorModeValue } from '@/components/ui/color-mode'
import { useState } from 'react'

interface ClientPartnerLoginProps {
  type: 'client' | 'partner'
}

export function ClientPartnerLogin({ type }: ClientPartnerLoginProps) {
  const [id, setId] = useState('')
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const shadowColor = useColorModeValue('rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)')

  const handleLogin = () => {
    // TODO: Implement login functionality with id
    console.log(`${type} login clicked with ID:`, id)
  }

  return (
    <Container maxW="container.md" py={8}>
      <Box
        bg={bg}
        border="1px solid"
        borderColor={borderColor}
        borderRadius="xl"
        boxShadow={`0 8px 25px ${shadowColor}`}
        p={6}
        backdropFilter="blur(8px)"
      >
        <VStack gap={6} align="stretch">
          <Text
            fontSize="xl"
            fontWeight="semibold"
            color={textColor}
            textAlign="center"
          >
            {type === 'client' ? 'Client' : 'Partner'} Login
          </Text>
          
          <Box>
            <Text fontSize="sm" mb={2} fontWeight="medium">
              {type === 'client' ? 'Client' : 'Partner'} ID
            </Text>
            <Input
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder={`Enter your ${type} ID`}
              size="lg"
              borderRadius="lg"
              _focus={{
                borderColor: 'brand.500',
                boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
              }}
            />
          </Box>
          
          <Button
            colorPalette="brand"
            variant="solid"
            size="lg"
            borderRadius="lg"
            fontWeight="semibold"
            onClick={handleLogin}
            _hover={{ transform: 'translateY(-1px)' }}
            transition="all 0.2s"
          >
            <FaSignInAlt style={{ marginRight: '8px' }} />
            Login
          </Button>
        </VStack>
      </Box>
    </Container>
  )
} 