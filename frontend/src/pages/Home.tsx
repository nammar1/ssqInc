import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  HStack,
  Button,
  Flex,
  Card,
  Badge,
  Grid,
  Circle,
} from '@chakra-ui/react'
import { Avatar, Progress } from '@chakra-ui/react'
import { FaShieldAlt, FaCode, FaDatabase, FaBrain, FaGlobe, FaQuoteLeft } from 'react-icons/fa'
import { FiZap, FiCpu, FiCloud, FiLock } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { useRef } from 'react'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { useColorModeValue } from '@/components/ui/color-mode'

const MotionBox = motion(Box)
const MotionCard = motion(Card.Root)

// Technology Stack Data
const techStack = [
  { name: 'React & Next.js', icon: FaCode, proficiency: 95, color: 'blue.500' },
  { name: 'AI & Machine Learning', icon: FaBrain, proficiency: 92, color: 'purple.500' },
  { name: 'Cloud Infrastructure', icon: FiCloud, proficiency: 98, color: 'green.500' },
  { name: 'Cybersecurity', icon: FiLock, proficiency: 90, color: 'red.500' },
  { name: 'Data Engineering', icon: FaDatabase, proficiency: 88, color: 'orange.500' },
  { name: 'DevOps & Automation', icon: FiZap, proficiency: 94, color: 'yellow.500' },
]

// Innovation Areas
const innovationAreas = [
  {
    title: 'Quantum-Ready Architecture',
    description: 'Building systems today that can adapt to quantum computing tomorrow',
    icon: FiCpu,
    gradient: 'linear(to-r, purple.400, pink.400)',
    stats: '15+ Projects'
  },
  {
    title: 'Edge AI Computing',
    description: 'Bringing intelligence to the edge for real-time decision making',
    icon: FaBrain,
    gradient: 'linear(to-r, blue.400, cyan.400)',
    stats: '30+ Models'
  },
  {
    title: 'Zero-Trust Security',
    description: 'Never trust, always verify - security architecture for modern threats',
    icon: FaShieldAlt,
    gradient: 'linear(to-r, green.400, teal.400)',
    stats: '100% Secure'
  },
  {
    title: 'Sustainable Tech',
    description: 'Green computing solutions that reduce carbon footprint',
    icon: FaGlobe,
    gradient: 'linear(to-r, green.400, lime.400)',
    stats: '40% Less Energy'
  }
]

// Client Success Stories
const successStories = [
  {
    company: 'TechCorp',
    industry: 'FinTech',
    challenge: 'Legacy system modernization',
    solution: 'Cloud-native microservices architecture',
    result: '300% performance improvement',
    avatar: '/api/placeholder/60/60',
    quote: 'SSQ transformed our entire infrastructure in just 3 months.'
  },
  {
    company: 'HealthFirst',
    industry: 'Healthcare',
    challenge: 'AI-powered diagnostics',
    solution: 'Custom ML models for medical imaging',
    result: '95% accuracy in early detection',
    avatar: '/api/placeholder/60/60',
    quote: 'Their AI solution is saving lives every day.'
  },
  {
    company: 'EcoLogistics',
    industry: 'Supply Chain',
    challenge: 'Real-time tracking & optimization',
    solution: 'IoT sensors with predictive analytics',
    result: '45% reduction in delivery time',
    avatar: '/api/placeholder/60/60',
    quote: 'Game-changing technology that revolutionized our operations.'
  }
]

// Interactive Timeline Data
const milestones = [
  { year: '2025', title: 'Founded', description: 'SSQ Inc. launched with a vision to democratize enterprise technology' },
  { year: '2025', title: 'First AI Project', description: 'Delivered our first machine learning solution for healthcare' },
  { year: '2025', title: 'Cloud Expansion', description: 'Became certified partners with major cloud providers' },
  { year: '2025', title: 'Global Reach', description: 'Expanded operations to serve clients across 5 continents' },
]

// Real-time Metrics (simulated)
const liveMetrics = [
  { label: 'Active Projects', value: '42', trend: '+12%' },
  { label: 'Lines of Code', value: '2.3M', trend: '+8.5%' },
  { label: 'AI Models Deployed', value: '156', trend: '+23%' },
  { label: 'Cloud Services', value: '89', trend: '+15%' },
]

export default function Home() {
  const config = getPageConfig('home')
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const headingColor = useColorModeValue('gray.800', 'white')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  
  const ref = useRef<HTMLElement>(null)
  
  // Custom welcome message
  const welcomeMessage = "Welcome to the future of technology consulting. At SSQ Inc., we don't just build software—we craft digital experiences that transform industries, empower communities, and create lasting impact. Whether you're a startup with a bold vision or an enterprise ready to innovate, we're here to turn your most ambitious ideas into reality."
  
  return (
    <Box ref={ref}>
      {/* Enhanced WebHero */}
      <WebHero
        title={config.title}
        tagline={config.tagline}
        showText={config.showText}
      />

      {/* Welcome Message with Interactive Elements */}
      <Container maxW="1200px" py={20}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <VStack gap={8} textAlign="center">
            <Box position="relative">
              <Icon as={FaQuoteLeft} boxSize={16} color="brand.300" opacity={0.3} position="absolute" top="-10" left="-10" />
              <Heading size="3xl" color={headingColor} maxW="4xl" lineHeight="tall">
                Welcome to the Future
              </Heading>
            </Box>
            <Text
              fontSize="2xl"
              color={textColor}
              maxW="5xl"
              lineHeight="tall"
              fontStyle="italic"
              position="relative"
              p={8}
              borderLeft="4px solid"
              borderLeftColor="brand.400"
              bg={cardBg}
              borderRadius="lg"
              shadow="lg"
            >
              {welcomeMessage}
            </Text>
            <HStack gap={6}>
              <Button
                size="lg"
                colorScheme="brand"

                _hover={{ transform: 'scale(1.05)' }}
              >
                Watch Our Story
              </Button>
              <Button
                size="lg"
                variant="outline"
                colorScheme="brand"
                _hover={{ transform: 'scale(1.05)' }}
              >
                Explore Innovation
              </Button>
            </HStack>
          </VStack>
        </MotionBox>
      </Container>

      {/* Live Metrics Dashboard */}
      <Box bg={bgColor} py={16}>
        <Container maxW="1200px">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <VStack gap={8} mb={12}>
              <Badge colorScheme="green" fontSize="lg" px={6} py={3} borderRadius="full">
                🟢 LIVE METRICS
              </Badge>
              <Heading size="2xl" color={headingColor} textAlign="center">
                Real-Time Innovation Dashboard
              </Heading>
            </VStack>

            <SimpleGrid columns={{ base: 2, md: 4 }} gap={8}>
              {liveMetrics.map((metric, index) => (
                <MotionCard
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card.Body p={6} bg={cardBg} textAlign="center">
                    <VStack gap={3}>
                      <Text fontSize="3xl" fontWeight="bold" color="brand.500">
                        {metric.value}
                      </Text>
                      <Text color={textColor} fontWeight="medium">
                        {metric.label}
                      </Text>
                      <Badge colorScheme="green" borderRadius="full">
                        {metric.trend}
                      </Badge>
                    </VStack>
                  </Card.Body>
                </MotionCard>
              ))}
            </SimpleGrid>
          </MotionBox>
        </Container>
      </Box>

      {/* Innovation Areas Grid */}
      <Container maxW="1400px" py={20}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <VStack gap={8} mb={16} textAlign="center">
            <Badge colorScheme="purple" fontSize="lg" px={6} py={3} borderRadius="full">
              INNOVATION LABS
            </Badge>
            <Heading size="3xl" color={headingColor}>
              Pioneering Tomorrow's Technology
            </Heading>
            <Text fontSize="xl" color={textColor} maxW="4xl">
              We're not just keeping up with the future—we're building it. Explore our cutting-edge 
              research and development initiatives that are shaping the next decade of technology.
            </Text>
          </VStack>

          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
            {innovationAreas.map((area, index) => (
              <MotionCard
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
              >
                <Card.Body p={8} bg={cardBg} position="relative" overflow="hidden">
                  <Box
                    position="absolute"
                    top={0}
                    right={0}
                    w="100px"
                    h="100px"
                    bgGradient={area.gradient}
                    opacity={0.1}
                    borderRadius="full"
                    transform="translate(30px, -30px)"
                  />
                  <VStack align="start" gap={6}>
                    <HStack justify="space-between" w="full">
                      <Circle size="60px" bgGradient={area.gradient} color="white">
                        <Icon as={area.icon} boxSize={8} />
                      </Circle>
                      <Badge colorScheme="cyan" variant="subtle">
                        {area.stats}
                      </Badge>
                    </HStack>
                    <VStack align="start" gap={3}>
                      <Heading size="lg" color={headingColor}>
                        {area.title}
                      </Heading>
                      <Text color={textColor} lineHeight="tall">
                        {area.description}
                      </Text>
                    </VStack>
                    <Button
                      size="sm"
                      variant="ghost"
                      colorScheme="brand"
 
                    >
                      Learn More
                    </Button>
                  </VStack>
                </Card.Body>
              </MotionCard>
            ))}
          </Grid>
        </MotionBox>
      </Container>

      {/* Technology Expertise */}
      <Box bg={bgColor} py={20}>
        <Container maxW="1200px">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <VStack gap={8} mb={16} textAlign="center">
              <Badge colorScheme="blue" fontSize="lg" px={6} py={3} borderRadius="full">
                TECHNICAL MASTERY
              </Badge>
              <Heading size="3xl" color={headingColor}>
                Our Technology DNA
              </Heading>
              <Text fontSize="xl" color={textColor} maxW="4xl">
                Built on decades of collective experience and powered by cutting-edge expertise 
                across the entire technology spectrum.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
              {techStack.map((tech, index) => (
                <MotionCard
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, shadow: '2xl' }}
                >
                  <Card.Body p={6} bg={cardBg}>
                    <VStack gap={4}>
                      <Circle size="60px" bg={tech.color} color="white">
                        <Icon as={tech.icon} boxSize={8} />
                      </Circle>
                      <Text fontWeight="bold" color={headingColor}>
                        {tech.name}
                      </Text>
                      <Box w="full">
                        <Flex justify="space-between" mb={2}>
                          <Text fontSize="sm" color={textColor}>Proficiency</Text>
                          <Text fontSize="sm" color={tech.color} fontWeight="bold">
                            {tech.proficiency}%
                          </Text>
                        </Flex>
                        <Progress.Root value={tech.proficiency} borderRadius="full" h={2}>
                          <Progress.Track>
                            <Progress.Range />
                          </Progress.Track>
                        </Progress.Root>
                      </Box>
                    </VStack>
                  </Card.Body>
                </MotionCard>
              ))}
            </SimpleGrid>
          </MotionBox>
        </Container>
      </Box>

      {/* Client Success Stories */}
      <Container maxW="1400px" py={20}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <VStack gap={8} mb={16} textAlign="center">
            <Badge colorScheme="orange" fontSize="lg" px={6} py={3} borderRadius="full">
              SUCCESS STORIES
            </Badge>
            <Heading size="3xl" color={headingColor}>
              Transforming Visions into Reality
            </Heading>
            <Text fontSize="xl" color={textColor} maxW="4xl">
              Every project tells a story of innovation, collaboration, and breakthrough results. 
              Here are just a few examples of how we've helped our clients achieve the impossible.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 3 }} gap={8}>
            {successStories.map((story, index) => (
              <MotionCard
                key={index}
                initial={{ opacity: 0, rotateY: -15 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ rotateY: 5, scale: 1.02 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card.Body p={8} bg={cardBg} h="full">
                  <VStack gap={6} h="full">
                    <HStack w="full">
                      <Avatar.Root size="lg">
                        <Avatar.Image src={story.avatar} />
                        <Avatar.Fallback name={story.company} />
                      </Avatar.Root>
                      <VStack align="start" gap={1}>
                        <Text fontWeight="bold" color={headingColor}>
                          {story.company}
                        </Text>
                        <Badge colorScheme="teal">{story.industry}</Badge>
                      </VStack>
                    </HStack>
                    
                    <VStack align="start" gap={4} flex={1}>
                      <Box>
                        <Text fontSize="sm" color={textColor} fontWeight="bold" mb={1}>
                          Challenge:
                        </Text>
                        <Text color={textColor}>{story.challenge}</Text>
                      </Box>
                      
                      <Box>
                        <Text fontSize="sm" color={textColor} fontWeight="bold" mb={1}>
                          Solution:
                        </Text>
                        <Text color={textColor}>{story.solution}</Text>
                      </Box>
                      
                      <Box
                        p={4}
                        bg="brand.50"
                        borderRadius="lg"
                        w="full"
                        _dark={{ bg: 'brand.900' }}
                      >
                        <Text fontSize="sm" color="brand.600" fontWeight="bold" mb={1}>
                          Result:
                        </Text>
                        <Text color="brand.700" fontWeight="bold" fontSize="lg">
                          {story.result}
                        </Text>
                      </Box>
                    </VStack>
                    
                    <Box>
                      <Icon as={FaQuoteLeft} color="brand.300" mb={2} />
                      <Text fontStyle="italic" color={textColor}>
                        "{story.quote}"
                      </Text>
                    </Box>
                  </VStack>
                </Card.Body>
              </MotionCard>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>

      {/* Interactive Timeline */}
      <Box bg={bgColor} py={20}>
        <Container maxW="1200px">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <VStack gap={8} mb={16} textAlign="center">
              <Badge colorScheme="pink" fontSize="lg" px={6} py={3} borderRadius="full">
                OUR JOURNEY
              </Badge>
              <Heading size="3xl" color={headingColor}>
                Building the Future, One Milestone at a Time
              </Heading>
            </VStack>

            <VStack gap={8} position="relative">
              <Box
                position="absolute"
                left="50%"
                top="0"
                bottom="0"
                w="2px"
                bg="brand.300"
                transform="translateX(-50%)"
                opacity={0.3}
              />
              
              {milestones.map((milestone, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  w="full"
                  display="flex"
                  justifyContent={index % 2 === 0 ? 'flex-start' : 'flex-end'}
                >
                  <Box
                    maxW="400px"
                    p={6}
                    bg={cardBg}
                    borderRadius="lg"
                    shadow="lg"
                    position="relative"
                    border="2px solid"
                    borderColor={borderColor}
                  >
                    <Circle
                      size="40px"
                      bg="brand.500"
                      color="white"
                      position="absolute"
                      top="50%"
                      {...(index % 2 === 0 ? { right: '-21px' } : { left: '-21px' })}
                      transform="translateY(-50%)"
                      fontSize="sm"
                      fontWeight="bold"
                    >
                      {milestone.year}
                    </Circle>
                    <VStack align="start" gap={3}>
                      <Heading size="md" color={headingColor}>
                        {milestone.title}
                      </Heading>
                      <Text color={textColor}>{milestone.description}</Text>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </VStack>
          </MotionBox>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <Container maxW="1200px" py={20}>
        <MotionCard
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -10, rotateX: 5 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Card.Body
            p={16}
            bg="linear-gradient(135deg, brand.500 0%, brand.600 100%)"
            color="white"
            textAlign="center"
            borderRadius="2xl"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="-50%"
              right="-50%"
              w="200%"
              h="200%"
              opacity={0.1}
              bgGradient="radial(circle, white 2px, transparent 2px)"
              bgSize="20px 20px"
            />
            <VStack gap={8} position="relative" zIndex={1}>
              <VStack gap={4}>
                <Heading size="3xl">Ready to Shape the Future?</Heading>
                <Text fontSize="xl" maxW="3xl" opacity={0.9}>
                  Join the innovators, disruptors, and visionaries who are already building tomorrow 
                  with SSQ Inc. Your breakthrough moment starts with a single conversation.
                </Text>
              </VStack>
              
              <HStack gap={6} flexWrap="wrap" justify="center">
                <RouterLink to="/contact">
                  <Button
                    size="xl"
                    bg="white"
                    color="brand.600"
                    px={12}
                    py={8}
                    fontSize="lg"
                    _hover={{ transform: 'scale(1.05)', shadow: '2xl' }}
                    transition="all 0.2s"

                  >
                    Start Your Innovation Journey
                  </Button>
                </RouterLink>
                <RouterLink to="/services">
                  <Button
                    size="xl"
                    variant="outline"
                    borderColor="white"
                    color="white"
                    px={12}
                    py={8}
                    fontSize="lg"
                    _hover={{ bg: 'whiteAlpha.200', transform: 'scale(1.05)' }}
                    transition="all 0.2s"

                  >
                    Explore Our Solutions
                  </Button>
                </RouterLink>
              </HStack>
            </VStack>
          </Card.Body>
        </MotionCard>
      </Container>
    </Box>
  )
}
