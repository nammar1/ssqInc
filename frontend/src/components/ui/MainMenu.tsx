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
} from 'react-icons/fa'

const MotionBox = motion(Box as React.ComponentType<any>)
const MotionVStack = motion(VStack as React.ComponentType<any>)
const MotionDivider = motion(Divider as React.ComponentType<any>)
const MotionFlex = motion(Flex as React.ComponentType<any>)

interface MainMenuProps {
  isOpen: boolean
  onClose: () => void
}

// Enhanced animation variants
const menuVariants = {
  hidden: { 
    opacity: 0, 
    x: -100,
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
      when: 'beforeChildren', 
      staggerChildren: 0.1 
    } 
  },
  exit: { 
    opacity: 0, 
    x: -100,
    transition: { duration: 0.3, ease: "easeInOut" } 
  },
}

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4,
      when: 'beforeChildren',
      staggerChildren: 0.08
    }
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
}

const dividerVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: { 
    scaleY: 1, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
}

export const MainMenu: React.FC<MainMenuProps> = ({ isOpen, onClose }) => {
  const bg = useColorModeValue('white', 'gray.900')
  const textColor = useColorModeValue('gray.900', 'gray.100')
  const dividerColor = useColorModeValue('gray.200', 'gray.700')
  const cardBg = useColorModeValue('gray.50', 'gray.800')
  const hoverBg = useColorModeValue('gray.100', 'gray.700')
  const iconColor = useColorModeValue('brand.500', 'brand.400')

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
    { to: '/services/software', label: 'Software ', icon: FaCode },
    { to: '/services/data', label: 'Data ', icon: FaDatabase },
    { to: '/services/ai-ml', label: 'AI & ML ', icon: FaRobot },
    { to: '/services/cloud-cybersecurity', label: 'Cloud & CyberSecurity', icon: FaCloud },
  ]

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
              display={{ base: 'none', lg: 'block' }}
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
              display={{ base: 'none', lg: 'block' }}
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
        </MotionBox>
      )}
    </AnimatePresence>
  )
} 