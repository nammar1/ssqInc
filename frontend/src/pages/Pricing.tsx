import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    Icon,
    useBreakpointValue,
    Flex,
    Badge,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { useColorModeValue } from '@/components/ui/color-mode'
import { QuoteBox } from '@/components/ui/QuoteBox'
import { FaBox, FaUserTie, FaUsers, FaCheckCircle, FaHandshake, FaArrowRight } from 'react-icons/fa'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

const engagementModels = [
    {
        title: "Fixed-Price Projects",
        description: "Milestone-Based Billing for Predictable Delivery",
        icon: FaBox,
        features: [
            "Perfect for well-defined initiatives with clear goals",
            "Detailed scope and transparent milestones",
            "Predictable costs and timelines",
            "Regular progress updates and check-ins"
        ],
        color: "blue"
    },
    {
        title: "Flexible Retainers",
        description: "Ongoing Advisory & Fractional Expertise On-Demand",
        icon: FaUserTie,
        features: [
            "Ideal for scaling fast or navigating change",
            "Access to high-impact expertise without full-time hires",
            "Adaptable focus based on your needs",
            "Monthly rhythm with consistent support"
        ],
        color: "purple"
    },
    {
        title: "Embedded Talent",
        description: "Scalable Team Augmentation for Full Integration",
        icon: FaUsers,
        features: [
            "Direct integration with your teams",
            "Aligned with your culture and KPIs",
            "Hands-on daily collaboration",
            "Seamless knowledge transfer"
        ],
        color: "teal"
    }
]

const transparencyFeatures = [
    {
        title: "Clear Estimates & Scope",
        description: "Detailed project planning and scope definition",
        icon: FaCheckCircle,
        features: [
            "Comprehensive project breakdowns",
            "Transparent cost structures",
            "Clear deliverable definitions",
            "Risk assessment and mitigation plans"
        ],
        color: "green"
    },
    {
        title: "Aligned Incentives",
        description: "Your Success Is Our Success",
        icon: FaHandshake,
        features: [
            "Value-based outcome measurements",
            "Success metrics aligned with your goals",
            "Regular ROI assessments",
            "Long-term partnership focus"
        ],
        color: "orange"
    }
]

const PricingCard = ({ model }: { model: typeof engagementModels[0] }) => {
    const cardBg = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.200', 'gray.700')
    const iconColor = useColorModeValue(`${model.color}.500`, `${model.color}.300`)

    return (
        <MotionBox
            bg={cardBg}
            borderRadius="xl"
            p={8}
            border="1px solid"
            borderColor={borderColor}
            position="relative"
            overflow="hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ 
                y: -5,
                boxShadow: 'xl',
                borderColor: iconColor,
            }}
            transition={{ duration: 0.3 }}
        >
            <VStack align="start" gap={4}>
                <Flex align="center" gap={3}>
                    <Icon as={model.icon} boxSize={8} color={iconColor} />
                    <Heading size="md" color={useColorModeValue('gray.800', 'white')}>
                        {model.title}
                    </Heading>
                </Flex>
                
                <Text color={useColorModeValue('gray.600', 'gray.300')}>
                    {model.description}
                </Text>

                <VStack align="start" gap={3} w="full">
                    {model.features.map((feature, index) => (
                        <Flex key={index} align="center" gap={2}>
                            <Icon as={FaArrowRight} color={iconColor} />
                            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')}>
                                {feature}
                            </Text>
                        </Flex>
                    ))}
                </VStack>

                <Badge
                    colorScheme={model.color}
                    px={3}
                    py={1}
                    borderRadius="full"
                    position="absolute"
                    top={4}
                    right={4}
                >
                    Learn More
                </Badge>
            </VStack>
        </MotionBox>
    )
}

const FeatureCard = ({ feature }: { feature: typeof transparencyFeatures[0] }) => {
    const cardBg = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.200', 'gray.700')
    const iconColor = useColorModeValue(`${feature.color}.500`, `${feature.color}.300`)

    return (
        <MotionBox
            bg={cardBg}
            borderRadius="xl"
            p={6}
            border="1px solid"
            borderColor={borderColor}
            position="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ 
                scale: 1.02,
                boxShadow: 'lg',
                borderColor: iconColor,
            }}
            transition={{ duration: 0.3 }}
        >
            <VStack align="start" gap={4}>
                <Flex align="center" gap={3}>
                    <Icon as={feature.icon} boxSize={6} color={iconColor} />
                    <Heading size="sm" color={useColorModeValue('gray.800', 'white')}>
                        {feature.title}
                    </Heading>
                </Flex>
                
                <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')}>
                    {feature.description}
                </Text>

                <SimpleGrid columns={2} gap={2} w="full">
                    {feature.features.map((item, index) => (
                        <Flex key={index} align="center" gap={2}>
                            <Icon as={FaCheckCircle} color={iconColor} boxSize={4} />
                            <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.300')}>
                                {item}
                            </Text>
                        </Flex>
                    ))}
                </SimpleGrid>
            </VStack>
        </MotionBox>
    )
}

export default function Pricing() {
    const config = getPageConfig('pricing')
    const sectionBg = useColorModeValue('gray.50', 'gray.900')
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const headingColor = useColorModeValue('gray.800', 'white')
    
    const containerWidth = useBreakpointValue({ base: "100%", md: "90%", lg: "80%" })
    const spacing = useBreakpointValue({ base: 8, md: 12, lg: 16 })

    return (
        <Box>
            <WebHero
                title={config.title}
                tagline={config.tagline}
                showText={config.showText}
            />

            <QuoteBox quote={config.quote || ""} />

            {/* Philosophy Section */}
            <Box bg={sectionBg} py={spacing}>
                <Container maxW={containerWidth}>
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <VStack gap={6} align="center" textAlign="center">
                            <MotionHeading
                                as="h2"
                                size="xl"
                                color={headingColor}
                                fontWeight="bold"
                            >
                                Our Pricing Philosophy: B2B + B2C = B2E
                            </MotionHeading>
                            <MotionText
                                fontSize="lg"
                                color={textColor}
                                maxW="800px"
                            >
                                At SSQ Inc., we believe that empowering our clients starts with clarity and fairness in how we work together. Our B2E model blends the best of B2B and B2C thinking—designed to serve ambitious startups, visionary entrepreneurs, and enterprise leaders alike.
                            </MotionText>
                        </VStack>
                    </MotionBox>
                </Container>
            </Box>

            {/* Engagement Models Section */}
            <Box py={spacing}>
                <Container maxW={containerWidth}>
                    <VStack gap={12}>
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            textAlign="center"
                            mb={8}
                        >
                            <Heading
                                as="h2"
                                size="xl"
                                color={headingColor}
                                mb={4}
                            >
                                Flexible Engagement Models
                            </Heading>
                            <Text
                                fontSize="lg"
                                color={textColor}
                            >
                                We offer three flexible engagement models to fit your needs
                            </Text>
                        </MotionBox>

                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
                            {engagementModels.map((model, index) => (
                                <PricingCard key={index} model={model} />
                            ))}
                        </SimpleGrid>
                    </VStack>
                </Container>
            </Box>

            {/* Transparency Section */}
            <Box bg={sectionBg} py={spacing}>
                <Container maxW={containerWidth}>
                    <VStack gap={12}>
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            textAlign="center"
                            mb={8}
                        >
                            <Heading
                                as="h2"
                                size="xl"
                                color={headingColor}
                                mb={4}
                            >
                                Built-in Transparency
                            </Heading>
                            <Text
                                fontSize="lg"
                                color={textColor}
                            >
                                We never leave you in the dark
                            </Text>
                        </MotionBox>

                        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
                            {transparencyFeatures.map((feature, index) => (
                                <FeatureCard key={index} feature={feature} />
                            ))}
                        </SimpleGrid>
                    </VStack>
                </Container>
            </Box>
        </Box>  
    )
}