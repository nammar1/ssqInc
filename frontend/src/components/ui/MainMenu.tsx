import React from 'react'
import {
  Box,
  Flex,
  VStack,
  Heading,
  Icon,
  HStack,
  Text,
  useBreakpointValue,
  IconButton,
  Separator,
  SimpleGrid,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Tooltip } from '@/components/ui/tooltip'
import { useColorModeValue } from '@/components/ui/color-mode'
import {
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
  FaTasks,
  FaDollarSign,
  FaUsers,
  FaTree,
  FaHandshake,
  FaBuilding,
  FaBookOpen,
  FaHeart,
  FaLightbulb,
} from 'react-icons/fa'
import { useColorMode } from '@/components/ui/color-mode'

const MotionBox = motion(Box as React.ComponentType<any>)
const MotionVStack = motion(VStack as React.ComponentType<any>)
const MotionSeparator = motion(Separator as React.ComponentType<any>)
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
  const { colorMode } = useColorMode()
  const bg = colorMode === 'light' ? 'white' : 'gray.900'
  const textColor = colorMode === 'light' ? 'gray.900' : 'gray.100'
  const dividerColor = colorMode === 'light' ? 'gray.200' : 'gray.700'
  const cardBg = colorMode === 'light' ? 'gray.50' : 'gray.800'
  const hoverBg = colorMode === 'light' ? 'gray.100' : 'gray.700'
  const iconColor = colorMode === 'light' ? 'brand.500' : 'brand.400'
  const iconHoverBg = colorMode === 'light' ? 'gray.100' : 'gray.700'
  
  // Responsive values
  const isMobile = useBreakpointValue({ base: true, lg: false })
  const cardPadding = useBreakpointValue({ base: 4, lg: 6 })
  const itemPadding = useBreakpointValue({ base: 4, lg: 4 })
  const fontSize = useBreakpointValue({ base: 'lg', lg: 'xl' })
  const headingSize = useBreakpointValue({ base: 'md', lg: 'lg' })

  const navigationLinks = [
    { to: '/about', label: 'About Us', icon: FaBuilding },
    { to: '/our-process', label: 'Our Process', icon: FaTasks },
    { to: '/pricing', label: 'Pricing', icon: FaDollarSign },
    { to: '/partners', label: 'Partners', icon: FaHandshake },  
    { to: '/clients', label: 'Clients', icon: FaUsers },
    { to: '/blog', label: 'Blog', icon: FaBookOpen },
    { to: '/investor', label: 'Investor Relations', icon: FaChartLine },
    { to: '/foundation', label: 'Foundation', icon: FaHeart },
    { to: '/sustainability', label: 'Sustainability', icon: FaTree },
    { to: '/accelerators', label: 'Accelerators', icon: FaLightbulb },
    { to: '/careers', label: 'Careers', icon: FaBriefcase },
    { to: '/privacy', label: 'Privacy Policy', icon: FaShieldAlt },
    { to: '/contact', label: 'Contact Us', icon: FaEnvelope },
  ]

  const platformLinks = [
    { to: '/aqira', label: 'Aqira', icon: FaRocket, description: 'The Future of Business Management' },
  ]

  const serviceLinks = [
    { to: '/services', label: 'Our Services', icon: FaCog, isMain: true },
    { to: '/services/digital-transformation', label: 'Digital Transformation', icon: FaGlobe },
    { to: '/services/software', label: 'Software', icon: FaCode },
    { to: '/services/data', label: 'Data', icon: FaDatabase },
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
    <Tooltip content={label}>
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
        data-active={isActive ? "" : undefined}
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
        gap={4}
        bg={cardBg}
        borderRadius="xl"
        p={cardPadding}
        boxShadow="lg"
        variants={columnVariants}
      >
        <motion.div variants={itemVariants}>
          <Heading 
            as="h3" 
            size={headingSize as any} 
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
          <HStack gap={3} justify="center">
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
      gap={3}
      bg={cardBg}
      borderRadius="xl"
      p={cardPadding}
      boxShadow="lg"
      variants={columnVariants}
    >
      <motion.div variants={itemVariants}>
        <Heading 
          as="h3" 
          size={headingSize as any} 
          mb={4} 
          fontWeight="bold" 
          letterSpacing="wide"
          color={iconColor}
          textAlign="center"
        >
          {title}
        </Heading>
      </motion.div>
      
      <VStack gap={3} align="stretch">
        {links.map((link) => (
          <motion.div 
            key={link.to} 
            variants={itemVariants}
            whileTap={{ scale: 0.98 }}
          >
            <RouterLink
              to={link.to}
              onClick={onClose}
              style={{
                display: 'block',
                width: '100%',
                padding: itemPadding ? `${itemPadding * 4}px` : '16px',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                border: '2px solid transparent',
                minHeight: '48px',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = hoverBg;
                e.currentTarget.style.borderColor = iconColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              {isMainService && link.description ? (
                // Platform style for mobile
                <VStack gap={2}>
                  <Icon 
                    as={link.icon} 
                    w={6} 
                    h={6} 
                    color={iconColor}
                  />
                  <VStack gap={1}>
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
                <HStack gap={4} align="center" w="100%">
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
            </RouterLink>
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
                gap={6}
                align="stretch"
                maxW="500px"
                mx="auto"
                initial="hidden"
                animate="visible"
                variants={menuVariants}
              >
                {/* Features Section - Only on Mobile */}
                <MobileFeaturesSection />
                
                <MotionSeparator 
                  borderColor={dividerColor}
                  borderWidth="1px"
                  variants={dividerVariants}
                />
                
                <MobileMenuSection title="Platforms" links={platformLinks} isMainService={true} />
                
                <MotionSeparator 
                  borderColor={dividerColor}
                  borderWidth="1px"
                  variants={dividerVariants}
                />
                
                <MobileMenuSection title="Services" links={serviceLinks} />
                
                <MotionSeparator 
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
                gap={4}
                bg={cardBg}
                borderRadius="xl"
                p={6}
                maxH="100%"
                overflowY="auto"
                boxShadow="lg"
                variants={columnVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 8px 32px #8B5CF6',
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
                    as="h1" 
                    size="4xl" 
                    mb={4} 
                    fontWeight="bold" 
                    letterSpacing="wide"
                    color={iconColor}
                    textAlign="center"
                    w="100%"
                  >
                    Navigation
                  </Heading>
                </motion.div>
                
                <VStack gap={3} align="stretch">
                  <SimpleGrid columns={2} gap={4}>
                    {navigationLinks.map((link) => (
                      <motion.div 
                        key={link.to} 
                        initial="initial"
                        whileHover="hover"
                        animate="initial"
                        variants={{
                          initial: { scale: 1 },
                          hover: { scale: 1.02 }
                        }}
                      >
                        <RouterLink
                          to={link.to}
                          onClick={onClose}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            aspectRatio: '1',
                            padding: '16px',
                            borderRadius: '12px',
                            backgroundColor: 'transparent',
                            border: '2px solid transparent',
                            textDecoration: 'none',
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = hoverBg;
                            e.currentTarget.style.borderColor = iconColor;
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = 'var(--chakra-shadows-brand-md)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.borderColor = 'transparent';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <VStack gap={3} align="center">
                            <motion.div
                              variants={{
                                initial: { rotate: 0 },
                                hover: { rotate: 360 }
                              }}
                              transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                              <Icon 
                                as={link.icon} 
                                w={8} 
                                h={8} 
                                color={iconColor}
                                className="nav-icon"
                              />
                            </motion.div>
                            <Text 
                              fontSize="md" 
                              fontWeight="semibold" 
                              textAlign="center"
                              maxW="100%"
                              overflow="hidden"
                              textOverflow="ellipsis"
                              whiteSpace="nowrap"
                            >
                              {link.label}
                            </Text>
                          </VStack>
                        </RouterLink>
                      </motion.div>
                    ))}
                  </SimpleGrid>
                </VStack>
              </MotionVStack>

              {/* Vertical Divider */}
              <MotionSeparator 
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
                gap={4}
                bg={cardBg}
                borderRadius="xl"
                p={6}
                boxShadow="lg"
                variants={columnVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 8px 32px #8B5CF6',
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div variants={itemVariants}>
                  <Heading 
                    as="h1" 
                    size="4xl" 
                    mb={4} 
                    fontWeight="bold" 
                    letterSpacing="wide"
                    color={iconColor}
                    textAlign="center"
                    w="100%"
                  >
                    Platforms
                  </Heading>
                </motion.div>
                
                {platformLinks.map((link) => (
                  <motion.div 
                    key={link.to} 
                    initial="initial"
                    whileHover="hover"
                    animate="initial"
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 1.02 }
                    }}
                  >
                    <RouterLink
                      to={link.to}
                      onClick={onClose}
                      style={{
                        display: 'block',
                        width: '100%',
                        padding: '20px',
                        borderRadius: '12px',
                        backgroundColor: colorMode === 'light' ? 'var(--chakra-colors-gray-50)' : 'var(--chakra-colors-gray-700)',
                        border: '2px solid transparent',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = hoverBg;
                        e.currentTarget.style.borderColor = iconColor;
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = 'var(--chakra-shadows-brand-lg)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = colorMode === 'light' ? 'var(--chakra-colors-gray-50)' : 'var(--chakra-colors-gray-700)';
                        e.currentTarget.style.borderColor = 'transparent';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <VStack gap={2}>
                        <motion.div
                          variants={{
                            initial: { rotate: 0 },
                            hover: { rotate: 360 }
                          }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          <Icon 
                            as={link.icon} 
                            w={10} 
                            h={10} 
                            color={iconColor}
                          />
                        </motion.div>
                        <VStack gap={1}>
                          <Text fontSize="xl" fontWeight="bold" textAlign="center">
                            {link.label}
                          </Text>
                          <Text fontSize="sm" color={textColor} opacity={0.7} textAlign="center">
                            {link.description}
                          </Text>
                        </VStack>
                      </VStack>
                    </RouterLink>
                  </motion.div>
                ))}
              </MotionVStack>

              {/* Vertical Divider */}
              <MotionSeparator 
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
                gap={4}
                bg={cardBg}
                borderRadius="xl"
                p={6}
                maxH="100%"
                overflowY="auto"
                boxShadow="lg"
                variants={columnVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 8px 32px #8B5CF6',
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
                    as="h1" 
                    size="4xl" 
                    mb={4} 
                    fontWeight="bold" 
                    letterSpacing="wide"
                    color={iconColor}
                    textAlign="center"
                    w="100%"
                  >
                    Services
                  </Heading>
                </motion.div>
                
                <VStack gap={3} align="stretch">
                  {serviceLinks.map((link) => (
                    <motion.div 
                      key={link.to} 
                      initial="initial"
                      whileHover="hover"
                      animate="initial"
                      variants={{
                        initial: { scale: 1 },
                        hover: { scale: 1.02 }
                      }}
                    >
                      <RouterLink
                        to={link.to}
                        onClick={onClose}
                        style={{
                          display: 'block',
                          width: '100%',
                          padding: '16px',
                          borderRadius: '8px',
                          backgroundColor: 'transparent',
                          border: '2px solid transparent',
                          textDecoration: 'none',
                          transition: 'all 0.2s',
                          ...(link.isMain && {
                            backgroundColor: colorMode === 'light' ? 'var(--chakra-colors-blue-50)' : 'var(--chakra-colors-blue-900)',
                            borderColor: colorMode === 'light' ? 'var(--chakra-colors-blue-200)' : 'var(--chakra-colors-blue-700)',
                          })
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = hoverBg;
                          e.currentTarget.style.borderColor = iconColor;
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = 'var(--chakra-shadows-brand-md)';
                        }}
                        onMouseLeave={(e) => {
                          if (link.isMain) {
                            e.currentTarget.style.backgroundColor = colorMode === 'light' ? 'var(--chakra-colors-blue-50)' : 'var(--chakra-colors-blue-900)';
                            e.currentTarget.style.borderColor = colorMode === 'light' ? 'var(--chakra-colors-blue-200)' : 'var(--chakra-colors-blue-700)';
                          } else {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.borderColor = 'transparent';
                          }
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <HStack gap={4} align="center" w="100%">
                          <motion.div
                            variants={{
                              initial: { rotate: 0 },
                              hover: { rotate: 360 }
                            }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                          >
                            <Icon 
                              as={link.icon} 
                              w={6} 
                              h={6} 
                              color={link.isMain ? iconColor : iconColor}
                              className="service-icon"
                            />
                          </motion.div>
                          <Box flex={1}>
                            <Text 
                              fontSize="lg" 
                              fontWeight={link.isMain ? "bold" : "semibold"}
                              color={link.isMain ? iconColor : textColor}
                            >
                              {link.label}
                            </Text>
                          </Box>
                        </HStack>
                      </RouterLink>
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