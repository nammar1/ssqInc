import React from 'react'
import {
  Box,
  Flex,
  VStack,
  Heading,
  Link as ChakraLink,
  useColorModeValue,
  Divider,
  Icon,
  HStack,
  Text,
  useBreakpointValue,
  IconButton,
  Tooltip,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaInfoCircle,
  FaBlog,
  FaChartLine,
  FaBriefcase,
  FaShieldAlt,
  FaEnvelope,
  FaRocket,
  FaCode,
  FaDatabase,
  FaRobot,
  FaCloud,
  FaCog,
  FaGlobe,
  FaUserCircle,
  FaLanguage,
  FaSearch,
  FaSun,
  FaMoon,
} from 'react-icons/fa'

const MotionBox = motion(Box as React.ComponentType<any>)
const MotionVStack = motion(VStack as React.ComponentType<any>)
const MotionDivider = motion(Divider as React.ComponentType<any>)
const MotionFlex = motion(Flex as React.ComponentType<any>)
const MotionIconButton = motion(IconButton as React.ComponentType<any>)

interface FeatureControls {
  search: { isOpen: boolean; toggle: () => void }
  account: { isOpen: boolean; toggle: () => void }
  language: { isOpen: boolean; toggle: () => void }
  colorMode: { current: string; toggle: () => void }
}

interface MainMenuProps {
  isOpen: boolean
  onClose: () => void
  featureControls?: FeatureControls
}

// Enhanced animation variants with mobile optimization
const menuVariants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    transition: { duration: 0.2, ease: "easeInOut" }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.3, 
      ease: "easeOut",
      when: 'beforeChildren', 
      staggerChildren: 0.05 
    } 
  },
  exit: { 
    opacity: 0, 
    x: -50,
    transition: { duration: 0.2, ease: "easeInOut" } 
  },
}

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.05
    }
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" }
  },
}

const dividerVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: { 
    scaleY: 1, 
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
}

export const MainMenu: React.FC<MainMenuProps> = ({ isOpen, onClose, featureControls }) => {
  const bg = useColorModeValue('white', 'gray.900')
  const textColor = useColorModeValue('gray.900', 'gray.100')
  const dividerColor = useColorModeValue('gray.200', 'gray.700')
  const cardBg = useColorModeValue('gray.50', 'gray.800')
  const hoverBg = useColorModeValue('gray.100', 'gray.700')
  const iconColor = useColorModeValue('brand.500', 'brand.400')
  const iconHoverBg = useColorModeValue('gray.100', 'gray.700')
  
  // Responsive values
  const isMobile = useBreakpointValue({ base: true, lg: false })
  const cardPadding = useBreakpointValue({ base: 4, lg: 6 })
  const itemPadding = useBreakpointValue({ base: 4, lg: 4 })
  const fontSize = useBreakpointValue({ base: 'lg', lg: 'xl' })
  const headingSize = useBreakpointValue({ base: 'md', lg: 'lg' })

  const navigationLinks = [
    { to: '/about', label: 'About Us', icon: FaInfoCircle },
    { to: '/blog', label: 'Blog', icon: FaBlog },
    { to: '/investors', label: 'Investor Relations', icon: FaChartLine },
    { to: '/careers', label: 'Careers', icon: FaBriefcase },
    { to: '/privacy', label: 'Privacy Policy', icon: FaShieldAlt },
    { to: '/contact', label: 'Contact Us', icon: FaEnvelope },
  ]

  const platformLinks = [
    { to: '/platforms/ballie', label: 'Ballie', icon: FaRocket, description: 'Our flagship platform' },
  ]

  const serviceLinks = [
    { to: '/services', label: 'Our Services', icon: FaCog, isMain: true },
    { to: '/services/digital-transformation', label: 'Digital Transformation', icon: FaGlobe },
    { to: '/services/software', label: 'Software Development', icon: FaCode },
    { to: '/services/data', label: 'Data Solutions', icon: FaDatabase },
    { to: '/services/ai-ml', label: 'AI & ML', icon: FaRobot },
    { to: '/services/cloud-cybersecurity', label: 'Cloud & CyberSecurity', icon: FaCloud },
  ]

  // Mobile Feature Button Component
  const MobileFeatureButton = ({ icon, label, onClick, isActive }: {
    icon: React.ReactElement
    label: string
    onClick: () => void
    isActive?: boolean
  }) => (
    <Tooltip label={label} placement="top">
      <MotionIconButton
        aria-label={label}
        icon={icon}
        variant="ghost"
        size="lg"
        borderRadius="full"
        color={textColor}
        _hover={{ bg: iconHoverBg }}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        isActive={isActive}
        _active={{ bg: useColorModeValue('blue.100', 'blue.800') }}
        minW="56px"
        minH="56px"
        flex={1}
      />
    </Tooltip>
  )

  // Mobile Features Section Component
  const MobileFeaturesSection = () => {
    if (!featureControls || !isMobile) return null
    
    return (
      <MotionVStack
        w="100%"
        align="stretch"
        spacing={4}
        bg={cardBg}
        borderRadius="xl"
        p={cardPadding}
        boxShadow="lg"
        variants={columnVariants}
      >
        <motion.div variants={itemVariants}>
          <Heading 
            as="h3" 
            size={headingSize} 
            mb={4} 
            fontWeight="bold" 
            letterSpacing="wide"
            color={iconColor}
            textAlign="center"
          >
            Features
          </Heading>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <HStack spacing={3} justify="center">
            <MobileFeatureButton
              icon={<FaSearch size={20} />}
              label="Search"
              onClick={featureControls.search.toggle}
              isActive={featureControls.search.isOpen}
            />
            
            <MobileFeatureButton
              icon={<FaUserCircle size={22} />}
              label="Account"
              onClick={featureControls.account.toggle}
              isActive={featureControls.account.isOpen}
            />
            
            <MobileFeatureButton
              icon={<FaLanguage size={20} />}
              label="Language"
              onClick={featureControls.language.toggle}
              isActive={featureControls.language.isOpen}
            />
            
            <MobileFeatureButton
              icon={featureControls.colorMode.current === 'light' ? <FaSun size={20} /> : <FaMoon size={20} />}
              label="Toggle theme"
              onClick={featureControls.colorMode.toggle}
            />
          </HStack>
        </motion.div>
      </MotionVStack>
    )
  }

  // Mobile single-column layout component
  const MobileMenuSection = ({ title, links, isMainService = false }: { title: string; links: any[]; isMainService?: boolean }) => (
    <MotionVStack
      w="100%"
      align="stretch"
      spacing={3}
      bg={cardBg}
      borderRadius="xl"
      p={cardPadding}
      boxShadow="lg"
      variants={columnVariants}
    >
      <motion.div variants={itemVariants}>
        <Heading 
          as="h3" 
          size={headingSize} 
          mb={4} 
          fontWeight="bold" 
          letterSpacing="wide"
          color={iconColor}
          textAlign="center"
        >
          {title}
        </Heading>
      </motion.div>
      
      <VStack spacing={3} align="stretch">
        {links.map((link) => (
          <motion.div 
            key={link.to} 
            variants={itemVariants}
            whileTap={{ scale: 0.98 }}
          >
            <ChakraLink
              as={RouterLink}
              to={link.to}
              onClick={onClose}
              display="block"
              w="100%"
              p={itemPadding}
              borderRadius="lg"
              bg="transparent"
              border="2px solid"
              borderColor="transparent"
              _hover={{
                bg: hoverBg,
                borderColor: iconColor,
                transition: 'all 0.2s',
              }}
              _active={{
                transform: 'scale(0.98)',
              }}
              minH="48px" // Better touch target
            >
              {isMainService && link.description ? (
                // Platform style for mobile
                <VStack spacing={2}>
                  <Icon 
                    as={link.icon} 
                    w={6} 
                    h={6} 
                    color={iconColor}
                  />
                  <VStack spacing={1}>
                    <Text fontSize={fontSize} fontWeight="bold" textAlign="center">
                      {link.label}
                    </Text>
                    <Text fontSize="sm" color={textColor} opacity={0.7} textAlign="center">
                      {link.description}
                    </Text>
                  </VStack>
                </VStack>
              ) : (
                // Regular navigation style
                <HStack spacing={4} align="center" w="100%">
                  <Icon 
                    as={link.icon} 
                    w={5} 
                    h={5} 
                    color={iconColor}
                  />
                  <Text fontSize={fontSize} fontWeight="semibold" flex={1}>
                    {link.label}
                  </Text>
                </HStack>
              )}
            </ChakraLink>
          </motion.div>
        ))}
      </VStack>
    </MotionVStack>
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionBox
          key="menu-overlay"
          position="fixed"
          top="72px"
          left={0}
          w="100vw"
          h="calc(100vh - 72px)"
          zIndex={2000}
          bg={bg}
          color={textColor}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          style={{ backdropFilter: 'blur(8px)' }}
        >
          {isMobile ? (
            // Mobile Layout: Single column, scrollable
            <Box
              h="100%"
              w="100%"
              overflowY="auto"
              px={4}
              py={6}
              css={{
                '&::-webkit-scrollbar': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-track': {
                  background: 'transparent',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: useColorModeValue('#CBD5E0', '#4A5568'),
                  borderRadius: '3px',
                },
              }}
            >
              <MotionVStack
                spacing={6}
                align="stretch"
                maxW="500px"
                mx="auto"
                initial="hidden"
                animate="visible"
                variants={menuVariants}
              >
                {/* Features Section - Only on Mobile */}
                <MobileFeaturesSection />
                
                <MotionDivider 
                  borderColor={dividerColor}
                  borderWidth="1px"
                  variants={dividerVariants}
                />
                
                <MobileMenuSection title="Platforms" links={platformLinks} isMainService={true} />
                
                <MotionDivider 
                  borderColor={dividerColor}
                  borderWidth="1px"
                  variants={dividerVariants}
                />
                
                <MobileMenuSection title="Services" links={serviceLinks} />
                
                <MotionDivider 
                  borderColor={dividerColor}
                  borderWidth="1px"
                  variants={dividerVariants}
                />
                
                <MobileMenuSection title="Navigation" links={navigationLinks} />
                
                {/* Extra spacing at bottom for better scrolling */}
                <Box h={8} />
              </MotionVStack>
            </Box>
          ) : (
            // Desktop Layout: Original three-column design
            <MotionFlex
              h="100%"
              maxW="1400px"
              mx="auto"
              px={{ base: 4, md: 8 }}
              py={8}
              gap={8}
              initial="hidden"
              animate="visible"
              variants={menuVariants}
            >
              {/* Navigation Column - 2x larger, scrollable */}
              <MotionVStack
                flex={2}
                align="stretch"
                spacing={4}
                bg={cardBg}
                borderRadius="xl"
                p={6}
                maxH="100%"
                overflowY="auto"
                boxShadow="lg"
                variants={columnVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: 'brand.lg',
                  transition: { duration: 0.2 }
                }}
                css={{
                  '&::-webkit-scrollbar': {
                    width: '6px',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: 'transparent',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: useColorModeValue('#CBD5E0', '#4A5568'),
                    borderRadius: '3px',
                  },
                }}
              >
                <motion.div variants={itemVariants}>
                  <Heading 
                    as="h3" 
                    size="lg" 
                    mb={4} 
                    fontWeight="bold" 
                    letterSpacing="wide"
                    color={iconColor}
                  >
                    Navigation
                  </Heading>
                </motion.div>
                
                <VStack spacing={3} align="stretch">
                  {navigationLinks.map((link) => (
                    <motion.div 
                      key={link.to} 
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ChakraLink
                        as={RouterLink}
                        to={link.to}
                        onClick={onClose}
                        display="block"
                        w="100%"
                        p={4}
                        borderRadius="lg"
                        bg="transparent"
                        border="2px solid"
                        borderColor="transparent"
                        _hover={{
                          bg: hoverBg,
                          transform: 'translateY(-2px)',
                          boxShadow: 'brand.md',
                          borderColor: iconColor,
                          transition: 'all 0.2s',
                          '& .nav-icon': {
                            transform: 'rotate(360deg)',
                            transition: 'transform 0.6s ease-in-out',
                          }
                        }}
                        _active={{
                          transform: 'translateY(0px)',
                        }}
                      >
                        <HStack spacing={4} align="center" w="100%">
                          <Icon 
                            as={link.icon} 
                            w={6} 
                            h={6} 
                            color={iconColor}
                            className="nav-icon"
                            transition="transform 0.6s ease-in-out"
                          />
                          <Text fontSize="xl" fontWeight="semibold" flex={1}>
                            {link.label}
                          </Text>
                        </HStack>
                      </ChakraLink>
                    </motion.div>
                  ))}
                </VStack>
              </MotionVStack>

              {/* Vertical Divider */}
              <MotionDivider 
                orientation="vertical" 
                h="auto" 
                borderColor={dividerColor}
                borderWidth="2px"
                variants={dividerVariants}
              />

              {/* Platforms Column */}
              <MotionVStack
                flex={1}
                align="stretch"
                spacing={4}
                bg={cardBg}
                borderRadius="xl"
                p={6}
                boxShadow="lg"
                variants={columnVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: 'brand.lg',
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div variants={itemVariants}>
                  <Heading 
                    as="h3" 
                    size="lg" 
                    mb={4} 
                    fontWeight="bold" 
                    letterSpacing="wide"
                    color={iconColor}
                  >
                    Platforms
                  </Heading>
                </motion.div>
                
                {platformLinks.map((link) => (
                  <motion.div 
                    key={link.to} 
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.08,
                      rotate: -1,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChakraLink
                      as={RouterLink}
                      to={link.to}
                      onClick={onClose}
                      display="block"
                      p={6}
                      borderRadius="xl"
                      bg="transparent"
                      border="2px solid"
                      borderColor="transparent"
                      _hover={{
                        bg: hoverBg,
                        borderColor: iconColor,
                        transform: 'translateY(-4px)',
                        boxShadow: 'brand.lg',
                        transition: 'all 0.3s',
                        '& .platform-icon': {
                          transform: 'rotate(360deg) scale(1.2)',
                          transition: 'transform 0.6s ease-in-out',
                        }
                      }}
                      textAlign="center"
                    >
                      <VStack spacing={3}>
                        <Icon 
                          as={link.icon} 
                          w={8} 
                          h={8} 
                          color={iconColor}
                          className="platform-icon"
                          transition="transform 0.6s ease-in-out"
                        />
                        <VStack spacing={1}>
                          <Text fontSize="2xl" fontWeight="bold">
                            {link.label}
                          </Text>
                          <Text fontSize="sm" color={textColor} opacity={0.7}>
                            {link.description}
                          </Text>
                        </VStack>
                      </VStack>
                    </ChakraLink>
                  </motion.div>
                ))}
              </MotionVStack>

              {/* Vertical Divider */}
              <MotionDivider 
                orientation="vertical" 
                h="auto" 
                borderColor={dividerColor}
                borderWidth="2px"
                variants={dividerVariants}
              />

              {/* Services Column */}
              <MotionVStack
                flex={1}
                align="stretch"
                spacing={4}
                bg={cardBg}
                borderRadius="xl"
                p={6}
                maxH="100%"
                overflowY="auto"
                boxShadow="lg"
                variants={columnVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: 'brand.lg',
                  transition: { duration: 0.2 }
                }}
                css={{
                  '&::-webkit-scrollbar': {
                    width: '6px',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: 'transparent',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: useColorModeValue('#CBD5E0', '#4A5568'),
                    borderRadius: '3px',
                  },
                }}
              >
                <motion.div variants={itemVariants}>
                  <Heading 
                    as="h3" 
                    size="lg" 
                    mb={4} 
                    fontWeight="bold" 
                    letterSpacing="wide"
                    color={iconColor}
                  >
                    Services
                  </Heading>
                </motion.div>
                
                <VStack spacing={3} align="stretch">
                  {serviceLinks.map((link) => (
                    <motion.div 
                      key={link.to} 
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        x: 4,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ChakraLink
                        as={RouterLink}
                        to={link.to}
                        onClick={onClose}
                        display="block"
                        p={4}
                        borderRadius="lg"
                        bg="transparent"
                        border="2px solid"
                        borderColor="transparent"
                        _hover={{
                          bg: hoverBg,
                          transform: 'translateX(8px)',
                          boxShadow: 'brand.md',
                          borderColor: iconColor,
                          transition: 'all 0.2s',
                          '& .service-icon': {
                            transform: 'rotate(-360deg)',
                            transition: 'transform 0.6s ease-in-out',
                          }
                        }}
                      >
                        <HStack spacing={3} align="center">
                          <Icon 
                            as={link.icon} 
                            w={link.isMain ? 6 : 5} 
                            h={link.isMain ? 6 : 5} 
                            color={iconColor}
                            className="service-icon"
                            transition="transform 0.6s ease-in-out"
                          />
                          <Text 
                            fontSize={link.isMain ? "xl" : "lg"} 
                            fontWeight={link.isMain ? "bold" : "medium"}
                          >
                            {link.label}
                          </Text>
                        </HStack>
                      </ChakraLink>
                    </motion.div>
                  ))}
                </VStack>
              </MotionVStack>
            </MotionFlex>
          )}
        </MotionBox>
      )}
    </AnimatePresence>
  )
} 