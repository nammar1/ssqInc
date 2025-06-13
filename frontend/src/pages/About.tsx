import {
  Box,
  Container,
  Heading,
  Text,
  useBreakpointValue,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Avatar,
} from '@chakra-ui/react'
import { FiTarget, FiHeart, FiTrendingUp, FiAward, FiUsers, FiZap } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { useColorMode } from '../components/ui/color-mode'

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

// Feature Card Component
interface FeatureCardProps {
  icon: any
  title: string
  description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const { colorMode } = useColorMode()
  const bgColor = colorMode === 'light' ? 'white' : 'gray.800'
  const borderColor = colorMode === 'light' ? 'gray.200' : 'gray.600'
  
  return (
    <Box
      bg={bgColor}
      p={6}
      rounded="xl"
      border="1px"
      borderColor={borderColor}
      shadow="lg"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-4px)', shadow: 'xl' }}
    >
      <VStack gap={4} align="start">
        <Box
          p={3}
          rounded="lg"
          bg={colorMode === 'light' ? 'blue.50' : 'blue.900'}
          color={colorMode === 'light' ? 'blue.600' : 'blue.300'}
        >
          <Icon as={icon} boxSize={6} />
        </Box>
        <Heading size="md">{title}</Heading>
        <Text color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>{description}</Text>
      </VStack>
    </Box>
  )
}

// Timeline Item Component
interface TimelineItemProps {
  year: string
  title: string
  description: string
  isLast?: boolean
}

const TimelineItem = ({ year, title, description, isLast = false }: TimelineItemProps) => {
  const { colorMode } = useColorMode()
  const accentColor = colorMode === 'light' ? 'blue.500' : 'blue.300'
  
  return (
    <HStack align="start" gap={6}>
      <VStack gap={0}>
        <Box
          w={4}
          h={4}
          rounded="full"
          bg={accentColor}
          border="4px"
          borderColor={colorMode === 'light' ? 'white' : 'gray.800'}
          shadow="lg"
        />
        {!isLast && (
          <Box
            w={0.5}
            h={20}
            bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
            mt={2}
          />
        )}
      </VStack>
      <VStack align="start" gap={2} flex={1}>
        <Text fontWeight="bold" color={accentColor} fontSize="lg">
          {year}
        </Text>
        <Heading size="md">{title}</Heading>
        <Text color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>{description}</Text>
      </VStack>
    </HStack>
  )
}

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
        minHeight={config.minHeight}
      />

      {/* Company Profile Section */}
      <Section>
        <SimpleGrid 
          columns={{ base: 1, lg: 2 }} 
          gap={{ base: 8, lg: 16 }} 
          alignItems="center"
          minH="400px"
        >
          {/* Left Column - Enhanced Heading */}
          <VStack gap={6} align={{ base: "center", lg: "start" }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              style={{ width: "100%" }}
            >
              <Box
                bg={colorMode === 'light' ? 'white' : 'gray.800'}
                borderRadius="xl"
                p={{ base: 6, md: 8 }}
                shadow="lg"
                border="1px solid"
                borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
                position="relative"
                overflow="hidden"
                _hover={{
                  shadow: 'xl',
                  borderColor: colorMode === 'light' ? 'blue.300' : 'blue.500',
                }}
                transition="all 0.3s ease"
              >
                {/* Decorative Background Element */}
                <Box
                  position="absolute"
                  top="-20px"
                  right="-20px"
                  w="80px"
                  h="80px"
                  borderRadius="full"
                  bg={colorMode === 'light' ? 'blue.50' : 'blue.900'}
                  opacity={0.5}
                  transform="rotate(45deg)"
                />
                
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                >
                  <Box
                    w="60px"
                    h="60px"
                    bg={colorMode === 'light' ? 'blue.500' : 'blue.400'}
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={4}
                    shadow="md"
                  >
                    <Icon
                      viewBox="0 0 24 24"
                      boxSize={8}
                      color="white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                      >
                        <path
                          fill="currentColor"
                          d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"
                        />
                      </svg>
                    </Icon>
                  </Box>
                </motion.div>

                {/* Heading with Animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <Heading 
                    size="2xl" 
                    textAlign={{ base: "center", lg: "left" }}
                    color={colorMode === 'light' ? 'gray.800' : 'gray.100'}
                    fontWeight="bold"
                    letterSpacing="tight"
                    lineHeight="shorter"
                    mb={3}
                  >
                    Company
                    <br />
                    Profile
                  </Heading>
                </motion.div>

                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                </motion.div>

                {/* Animated Accent Line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "60px" }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                  style={{
                    height: "3px",
                    backgroundColor: colorMode === 'light' ? '#3182CE' : '#63B3ED',
                    borderRadius: "2px",
                    marginTop: "16px",
                    marginLeft: useBreakpointValue({ base: "auto", lg: "0" }),
                    marginRight: useBreakpointValue({ base: "auto", lg: "initial" }),
                  }}
                />
              </Box>
            </motion.div>
          </VStack>

          {/* Right Column - Content in Blockquote */}
          <Box>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.2
              }}
              whileHover={{ scale: 1.02 }}
              style={{ width: "100%" }}
            >
              <Box
                bg={colorMode === 'light' ? 'gray.50' : 'gray.800'}
                borderLeft="4px solid"
                borderLeftColor={colorMode === 'light' ? 'blue.500' : 'blue.300'}
                borderRadius="lg"
                p={{ base: 6, md: 8 }}
                shadow="lg"
                border="1px solid"
                borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
                position="relative"
                _hover={{
                  shadow: 'xl',
                  borderColor: colorMode === 'light' ? 'blue.300' : 'blue.500',
                }}
                transition="all 0.3s ease"
              >
                <VStack gap={4} align="stretch">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                  >
                    <Box alignSelf="flex-start">
                      <Icon
                        viewBox="0 0 24 24"
                        boxSize={{ base: 6, md: 8 }}
                        color={colorMode === 'light' ? 'blue.500' : 'blue.300'}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                        >
                          <path
                            fill="currentColor"
                            d="M14,17h3l2-4V7h-6v6h3M6,17h3l2-4V7H5v6h3L6,17z"
                          />
                        </svg>
                      </Icon>
                    </Box>
                  </motion.div>

                  {/* Quote Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    <Text
                      as="blockquote"
                      fontSize={{ base: "lg", md: "xl" }}
                      lineHeight="tall"
                      color={colorMode === 'light' ? 'gray.700' : 'gray.200'}
                      fontStyle="italic"
                      textAlign={{ base: "left", md: "justify" }}
                      fontWeight="medium"
                    >
                      Smart Solution Quorum Inc (SSQ) is a forward thinking tech consultancy specializing in turning bold ideas into production ready technology. Because we deliver agile solutions at enterprise quality, you move from concept to market faster than ever, no matter your industry or scale.
                    </Text>
                  </motion.div>
                </VStack>
              </Box>
            </motion.div>
          </Box>
        </SimpleGrid>
      </Section>

      {/* Our Journey Section */}
      <Section bg={sectionBg}>
        <VStack gap={12}>
          <VStack gap={4} textAlign="center">
            <Heading size="xl">Our Journey</Heading>
            <Text
              fontSize="lg"
              color={colorMode === 'light' ? 'gray.600' : 'gray.400'}
              maxW="600px"
            >
              From a small startup to a thriving technology company, our journey has been 
              marked by continuous innovation and unwavering commitment to excellence.
            </Text>
          </VStack>
          
          <VStack gap={8} align="start" w="full" maxW="600px">
            <TimelineItem
              year="2020"
              title="Foundation"
              description="SSQ Inc was founded with a vision to revolutionize digital solutions and help businesses thrive in the modern world."
            />
            <TimelineItem
              year="2021"
              title="First Major Milestone"
              description="Successfully delivered our first enterprise-level project, establishing our reputation for quality and reliability."
            />
            <TimelineItem
              year="2022"
              title="Team Expansion"
              description="Grew our team of experts and expanded our service offerings to meet growing client demands."
            />
            <TimelineItem
              year="2023"
              title="Innovation Focus"
              description="Launched our innovation lab and began developing cutting-edge solutions for emerging technologies."
            />
            <TimelineItem
              year="2024"
              title="Global Reach"
              description="Expanded our operations globally and established partnerships with leading technology providers."
              isLast={true}
            />
          </VStack>
        </VStack>
      </Section>

      {/* Purpose & Values Section */}
      <Section>
        <VStack gap={12}>
          <VStack gap={4} textAlign="center">
            <Heading size="xl">Purpose & Values</Heading>
            <Text
              fontSize="lg"
              color={colorMode === 'light' ? 'gray.600' : 'gray.400'}
              maxW="600px"
            >
              Our core values guide everything we do and define who we are as a company.
            </Text>
          </VStack>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
            <FeatureCard
              icon={FiTarget}
              title="Purpose-Driven"
              description="We believe in creating solutions that make a meaningful impact and drive positive change for our clients and their customers."
            />
            <FeatureCard
              icon={FiHeart}
              title="Client-Centric"
              description="Our clients' success is our success. We go above and beyond to understand their needs and deliver exceptional results."
            />
            <FeatureCard
              icon={FiTrendingUp}
              title="Innovation"
              description="We embrace cutting-edge technologies and innovative approaches to solve complex challenges and stay ahead of the curve."
            />
            <FeatureCard
              icon={FiAward}
              title="Excellence"
              description="We maintain the highest standards of quality in everything we do, from code to customer service."
            />
            <FeatureCard
              icon={FiUsers}
              title="Collaboration"
              description="We believe in the power of teamwork and collaborative partnerships to achieve extraordinary results."
            />
            <FeatureCard
              icon={FiZap}
              title="Agility"
              description="We adapt quickly to changing market conditions and emerging technologies to deliver timely solutions."
            />
          </SimpleGrid>
        </VStack>
      </Section>

      {/* Why SSQ? Section */}
      <Section bg={sectionBg}>
        <VStack gap={12}>
          <VStack gap={4} textAlign="center">
            <Heading size="xl">Why SSQ?</Heading>
            <Text
              fontSize="lg"
              color={colorMode === 'light' ? 'gray.600' : 'gray.400'}
              maxW="600px"
            >
              Discover what sets us apart and why leading companies choose SSQ Inc 
              as their trusted technology partner.
            </Text>
          </VStack>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} w="full">
            <VStack gap={6} align="start">
              <Heading size="lg">Proven Expertise</Heading>
              <Text color={colorMode === 'light' ? 'gray.600' : 'gray.400'} lineHeight="tall">
                Our team brings years of experience and deep technical knowledge across 
                multiple industries and technologies. We understand the challenges businesses 
                face and know how to solve them effectively.
              </Text>
            </VStack>
            
            <VStack gap={6} align="start">
              <Heading size="lg">End-to-End Solutions</Heading>
              <Text color={colorMode === 'light' ? 'gray.600' : 'gray.400'} lineHeight="tall">
                From initial consultation to deployment and ongoing support, we provide 
                comprehensive solutions that cover every aspect of your digital transformation journey.
              </Text>
            </VStack>
            
            <VStack gap={6} align="start">
              <Heading size="lg">Cutting-Edge Technology</Heading>
              <Text color={colorMode === 'light' ? 'gray.600' : 'gray.400'} lineHeight="tall">
                We stay at the forefront of technological advancement, ensuring our clients 
                benefit from the latest innovations and best practices in the industry.
              </Text>
            </VStack>
            
            <VStack gap={6} align="start">
              <Heading size="lg">Dedicated Support</Heading>
              <Text color={colorMode === 'light' ? 'gray.600' : 'gray.400'} lineHeight="tall">
                Our commitment doesn't end at delivery. We provide ongoing support and 
                maintenance to ensure your solutions continue to perform at their best.
              </Text>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Section>

      {/* A Message from our Founder Section */}
      <Section>
        <VStack gap={12}>
          <VStack gap={4} textAlign="center">
            <Heading size="xl">A Message from our Founder</Heading>
          </VStack>
          
          <Box
            bg={colorMode === 'light' ? 'white' : 'gray.800'}
            p={10}
            rounded="2xl"
            shadow="xl"
            maxW="800px"
            w="full"
            position="relative"
          >
            <VStack gap={6}>
              <Avatar.Root size="xl">
                <Avatar.Fallback name="Founder Name" />
              </Avatar.Root>
              
              <Text
                fontSize="lg"
                lineHeight="tall"
                color={colorMode === 'light' ? 'gray.700' : 'gray.300'}
                textAlign="center"
                fontStyle="italic"
              >
                "At SSQ Inc, we don't just build technology solutions – we build relationships, 
                trust, and lasting partnerships. Our journey began with a simple belief: that 
                every business deserves access to world-class technology solutions that can 
                transform their operations and accelerate their growth."
              </Text>
              
              <VStack gap={1}>
                <Text fontWeight="bold" fontSize="lg">
                  [Founder Name]
                </Text>
                <Text
                  color={colorMode === 'light' ? 'gray.600' : 'gray.400'}
                  fontSize="md"
                >
                  CEO & Founder, SSQ Inc
                </Text>
              </VStack>
            </VStack>
          </Box>
        </VStack>
      </Section>
    </Box>
  )
}
