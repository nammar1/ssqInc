import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Stat,
  VStack,
  Button,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { useColorModeValue } from '@/components/ui/color-mode'

const FINANCIAL_HIGHLIGHTS = [
  {
    label: 'Revenue Growth',
    value: '45%',
    helpText: 'Year over year',
  },
  {
    label: 'Active Clients',
    value: '150+',
    helpText: 'Worldwide',
  },
  {
    label: 'Market Presence',
    value: '12',
    helpText: 'Countries',
  },
  {
    label: 'Team Size',
    value: '85+',
    helpText: 'Professionals',
  },
]

export default function Investor() {
  const config = getPageConfig('investor')

  return (
    <Box>
      {/* Enhanced WebHero with 3D Text */}
      <WebHero
        title={config.title}
        tagline={config.tagline}
        showText={config.showText}
        minHeight={config.minHeight}
      />

      {/* Financial Highlights */}
      <Container maxW="1200px" py={20}>
        <Stack gap={12}>
          <Box textAlign="center">
            <Heading mb={4}>Financial Highlights</Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')}>
              Key metrics demonstrating our growth and market position
            </Text>
          </Box>
          
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={8}>
            {FINANCIAL_HIGHLIGHTS.map((stat) => (
              <Stat.Root
                key={stat.label}
                bg={useColorModeValue('white', 'gray.800')}
                p={6}
                rounded="xl"
                shadow="lg"
                textAlign="center"
              >
                <Stat.ValueText fontSize="3xl" color="brand.500">
                  {stat.value}
                </Stat.ValueText>
                <Stat.Label fontSize="lg" fontWeight="bold">
                  {stat.label}
                </Stat.Label>
                <Stat.HelpText>{stat.helpText}</Stat.HelpText>
              </Stat.Root>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Investment Opportunities */}
      <Box bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="1200px" py={20}>
          <Stack gap={12}>
            <Box textAlign="center">
              <Heading mb={4}>Investment Opportunities</Heading>
              <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')}>
                Join us in shaping the future of digital transformation
              </Text>
            </Box>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
              <VStack gap={6} align="stretch">
                <Box>
                  <Heading size="md" mb={4}>
                    Market Position
                  </Heading>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    SSQ Inc is positioned at the forefront of digital transformation, 
                    serving enterprise clients across multiple industries with innovative 
                    technology solutions.
                  </Text>
                </Box>
                <Box>
                  <Heading size="md" mb={4}>
                    Growth Strategy
                  </Heading>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    Our strategic focus on AI, cloud infrastructure, and data analytics 
                    positions us for sustainable growth in the expanding digital services market.
                  </Text>
                </Box>
              </VStack>
              
              <VStack gap={6} align="stretch">
                <Box>
                  <Heading size="md" mb={4}>
                    Investment Focus
                  </Heading>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    We are actively seeking strategic partnerships and investment opportunities 
                    to accelerate our expansion into new markets and enhance our service offerings.
                  </Text>
                </Box>
                <Box>
                  <Heading size="md" mb={4}>
                    Financial Performance
                  </Heading>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    Strong financial fundamentals with consistent revenue growth, 
                    healthy profit margins, and a robust client retention rate.
                  </Text>
                </Box>
              </VStack>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Contact CTA */}
      <Container maxW="1200px" py={20}>
        <Stack gap={8} align="center" textAlign="center">
          <Heading>Interested in Investment Opportunities?</Heading>
          <Text fontSize="lg" maxW="2xl">
            Contact our investor relations team to learn more about partnership and investment opportunities
          </Text>
          <RouterLink to="/contact">
            <Button
              colorPalette="brand"
              size="lg"
              px={8}
            >
              Contact Investor Relations
            </Button>
          </RouterLink>
        </Stack>
      </Container>
    </Box>
  )
}
