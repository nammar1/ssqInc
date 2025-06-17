import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Blockquote,
  Float,
} from '@chakra-ui/react'
import { FiTarget, FiHeart, FiTrendingUp, FiAward, FiUsers } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { useColorMode } from '../components/ui/color-mode'
import { BigStepper } from '@/components/ui/BigStepper'
import { QuoteBox } from '@/components/ui/QuoteBox'

// Section Component for consistent styling
interface SectionProps {
  children: React.ReactNode
  bg?: string
  py?: number
}

const Section = ({ children, bg, py = 20 }: SectionProps) => (
  <Box bg={bg}>
    <Container maxW="1200px" py={py}>
      {children}
    </Container>
  </Box>
)


const steps = [
  {
    icon: FiTarget,
    title: "Problem",
    description: `Innovation is turning into an exclusive club. Enterprise quality technology is priced for giants, leaving most visionaries stuck with ideas they can't afford to build.`,
  },
  {
    icon: FiHeart,
    title: "Spark",
    description: `SSQ began with a daring "what if": What if world class engineers could bring Fortune-500 tech to anyone with a bold idea fast, secure, and affordably?`,
  },
  {
    icon: FiTrendingUp,
    title: "Journey",
    description: `Since 2025 we've chased one North Star: deliver future-ready solutions at startup speed and cost, collapsing the gap between inspiration and execution for every client.`,
  },
  {
    icon: FiAward,
    title: "Today",
    description: `A nimble, profitable consultancy, SSQ partners with SMEs and mission-driven initiatives across the globe, rolling out projects that prove elite engineering can be both accessible and ethical.`,
  },
  {
    icon: FiUsers,
    title: "Tomorrow",
    description: ` We're scaling our promise worldwide, and becoming the go-to innovation engine that turns any great idea into impact, no matter the budget or sector.`,
  },
]

export default function About() {
  const config = getPageConfig('about')
  const { colorMode } = useColorMode()
  const sectionBg = colorMode === 'light' ? 'gray.50' : 'gray.900'
  
  return (
    <Box>
      {/* Enhanced WebHero */}
      <WebHero
        title={config.title}
        tagline={config.tagline}
        showText={config.showText}
      />

      <QuoteBox 
        quote={config.quote || ""}
      />

      {/* Our Journey Section */}
      <Section bg={sectionBg}>
        <BigStepper 
          steps={steps}
          title="Our Journey"
          subtitle="SSQ is on Track to become a Global Leader in Tech Consultancy."
          colorScheme="purple"
        />
      </Section>

      {/* Purpose & Values Section */}
      <Section>
        <Box maxW="6xl" mx="auto" py="20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <VStack gap={4} textAlign="center" mb="12">
              <Heading size="3xl" color={colorMode === 'light' ? 'brand.600' : 'brand.400'}>
                Our Purpose & Values
              </Heading>
            </VStack>
          </motion.div>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mb="12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box
                p={8}
                borderWidth="1px"
                borderRadius="xl"
                bg={colorMode === 'light' ? 'white' : 'gray.800'}
                shadow="lg"
                _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }}
                transition="all 0.3s"
              >
                <VStack gap={4} align="start">
                  <Heading size="3xl" color={colorMode === 'light' ? 'brand.600' : 'brand.400'}>
                    Our Mission
                  </Heading>
                  <Text color={colorMode === 'light' ? 'gray.600' : 'gray.400'} fontSize="lg">
                    What drives us every day
                  </Text>
                  <Text fontSize="xl" lineHeight="tall" color={colorMode === 'light' ? 'gray.700' : 'gray.300'}>
                    Our mission is to democratize advanced technology, by equipping anyone who seeks it with user friendly,
                    future proof tools and expertise that turn ideas into impact and empower them to thrive in the digital era.
                  </Text>
                </VStack>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Box
                p={8}
                borderWidth="1px"
                borderRadius="xl"
                bg={colorMode === 'light' ? 'white' : 'gray.800'}
                shadow="lg"
                _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }}
                transition="all 0.3s"
              >
                <VStack gap={4} align="start">
                  <Heading size="3xl" color={colorMode === 'light' ? 'brand.600' : 'brand.400'}>
                    Our Vision
                  </Heading>
                  <Text color={colorMode === 'light' ? 'gray.600' : 'gray.400'} fontSize="lg">
                    Where we're headed
                  </Text>
                  <Text fontSize="xl" lineHeight="tall" color={colorMode === 'light' ? 'gray.700' : 'gray.300'}>
                    Our vision is to become the world's most trusted technology partner for visionaries, creators, and
                    changemakers, by empowering anyone with a bold idea to build the future.
                  </Text>
                </VStack>
              </Box>
            </motion.div>
          </SimpleGrid>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Box
              p={8}
              borderWidth="1px"
              borderRadius="xl"
              bg={colorMode === 'light' ? 'white' : 'gray.800'}
              _hover={{
                shadow: 'xl',
                transform: 'translateY(-4px)',
              }}
              transition="all 0.3s"
              shadow="lg"
            >
              <VStack gap={6} align="start">
                <Heading size="3xl" color={colorMode === 'light' ? 'brand.600' : 'brand.400'}>
                  Our Guiding Values
                </Heading>
                <Text color={colorMode === 'light' ? 'gray.600' : 'gray.400'} fontSize="lg">
                  The foundation of everything we do
                </Text>

                <SimpleGrid columns={{ base: 1, sm: 2 }} gap={8}>
                  {[
                    {
                      title: "Client Centered Commitment",
                      description: "We work for you, with your goal, and success at the heart of every solution.",
                    },
                    {
                      title: "Integrity in Action",
                      description: "We operate with full respect for the law and the highest ethical standards.",
                    },
                    {
                      title: "People First",
                      description: "We care deeply about the well-being of our clients, employees, and service providers.",
                    },
                    {
                      title: "Shared Success",
                      description: "We believe in creating value that benefits everyone. When you succeed, we succeed.",
                    },
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <VStack gap={3} align="start">
                        <Heading size="3xl" fontWeight="semibold" color={colorMode === 'light' ? 'gray.800' : 'gray.200'}>
                          {value.title}
                        </Heading>
                        <Box w="full" h="1px" bg={colorMode === 'light' ? 'gray.200' : 'gray.600'} />
                        <Text color={colorMode === 'light' ? 'gray.600' : 'gray.400'} fontSize="xl">
                          {value.description}
                        </Text>
                      </VStack>
                    </motion.div>
                  ))}
                </SimpleGrid>
              </VStack>
            </Box>
          </motion.div>
        </Box>
      </Section>

      {/* A Message from our Founder Section */}
      <Section bg={sectionBg}>
        <VStack gap={12}>
          <VStack gap={4} textAlign="center">
            <Heading size="5xl">A Message from our Founder</Heading>
          </VStack>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ width: "100%", maxWidth: "800px" }}
          >
            <Box
              bg={colorMode === 'light' ? 'white' : 'gray.800'}
              p={10}
              rounded="2xl"
              shadow="xl"
              w="full"
            >
              <Blockquote.Root>
                  <Float placement="top-start" offsetY="2">
                    <Blockquote.Icon />
                  </Float>
                <Blockquote.Content
                  fontSize="3xl"
                  lineHeight="tall"
                  color={colorMode === 'light' ? 'gray.700' : 'gray.300'}
                  textAlign="center"
                  fontStyle="italic"
                >
                  The future doesn't wait, it's built by those fearless enough to shape it. SSQ exists to ensure no visionary is left behind, and every creator is equipped to turn vision into reality.
                </Blockquote.Content>
                <Float placement="bottom-end" offsetY="2">
                    <Blockquote.Icon rotate="180"/>
                  </Float>
                <Blockquote.Caption
                  textAlign="center"
                  mt={6}
                  fontSize="2xl"
                >
                  — <cite>Saji Nammari</cite>, Founder & CEO
                </Blockquote.Caption>
              </Blockquote.Root>
            </Box>
          </motion.div>
        </VStack>
      </Section>
    </Box>
  )
}
