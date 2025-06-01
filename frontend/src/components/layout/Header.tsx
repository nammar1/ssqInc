import {
  Box,
  Flex,
  Button,
  IconButton,
  Text,
  useColorModeValue,
  Image,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { LetsTalk } from '../ui/LetsTalk'
import { useDisclosure } from '@chakra-ui/react'
import { MainMenu } from '../ui/MainMenu'
import { FaUserCircle, FaGlobe, FaSearch, FaSun, FaMoon } from 'react-icons/fa'
import { useColorMode } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SearchBar, AccountPopup, LanguageSelector } from '../features'

const MotionIconButton = motion(IconButton)

export function Header() {
  const pillBg = useColorModeValue('white', 'gray.900')
  const textColor = useColorModeValue('gray.900', 'white')
  const pillShadow = useColorModeValue('0 4px 24px rgba(0,0,0,0.10)', '0 4px 24px rgba(0,0,0,0.40)')
  const iconHoverBg = useColorModeValue('gray.100', 'gray.700')
  
  const {
    isOpen: isLetsTalkOpen,
    onOpen: onLetsTalkOpen,
    onClose: onLetsTalkClose
  } = useDisclosure()
  const {
    isOpen: isMenuOpen,
    onOpen: onMenuOpen,
    onClose: onMenuClose
  } = useDisclosure()
  
  // Individual toggles for each feature
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  
  const { colorMode, toggleColorMode } = useColorMode()
  const location = useLocation()

  useEffect(() => {
    if (isMenuOpen) {
      onMenuClose()
    }
    // Close all feature popups when route changes
    setIsSearchOpen(false)
    setIsAccountOpen(false)
    setIsLanguageOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  // Close other popups when one opens
  const handleSearchToggle = () => {
    setIsAccountOpen(false)
    setIsLanguageOpen(false)
    setIsSearchOpen(!isSearchOpen)
  }

  const handleAccountToggle = () => {
    setIsSearchOpen(false)
    setIsLanguageOpen(false)
    setIsAccountOpen(!isAccountOpen)
  }

  const handleLanguageToggle = () => {
    setIsSearchOpen(false)
    setIsAccountOpen(false)
    setIsLanguageOpen(!isLanguageOpen)
  }

  // Close popups when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      
      // Check for search bar
      if (!target.closest('.search-container') && !target.closest('.search-button')) {
        setIsSearchOpen(false)
      }
      
      // Check for account and language popups
      if (!target.closest('.account-popup') && !target.closest('.language-popup') && 
          !target.closest('.account-button') && !target.closest('.language-button')) {
        setIsAccountOpen(false)
        setIsLanguageOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <Box
        as="header"
        position="fixed"
        top={0}
        left={0}
        w="100%"
        zIndex={3000}
        bg="transparent"
        px={0}
        py={3}
      >
        <Flex
          maxW={{ base: '98vw', md: '1650px' }}
          mx="auto"
          px={{ base: 2, md: 6 }}
          py={2}
          alignItems="center"
          justifyContent="space-between"
          borderRadius="full"
          boxShadow={pillShadow}
          bg="transparent"
          backdropFilter="blur(8px)"
        >
          {/* Left: Logo */}
          <ChakraLink as={RouterLink} to="/" display="flex" alignItems="center" _hover={{ textDecoration: 'none' }}>
            <Image src="/SSQlogo-02.png" alt="Smart Solution Quorum Logo" height="48px" objectFit="contain" />
          </ChakraLink>
          
          {/* Center: 4 icons when menu is open */}
          {isMenuOpen && (
            <Flex alignItems="center" gap={6} flex={1} justify="center">
              <Box position="relative" className="search-container">
                <MotionIconButton
                  aria-label="Toggle search bar"
                  icon={<FaSearch size={20} />}
                  variant="ghost"
                  size="lg"
                  borderRadius="full"
                  color={textColor}
                  _hover={{ bg: iconHoverBg }}
                  onClick={handleSearchToggle}
                  className="search-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  isActive={isSearchOpen}
                  _active={{ bg: useColorModeValue('blue.100', 'blue.800') }}
                />
                <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
              </Box>
              
              <Box position="relative">
                <MotionIconButton
                  aria-label="Account controls"
                  icon={<FaUserCircle size={22} />}
                  variant="ghost"
                  size="lg"
                  borderRadius="full"
                  color={textColor}
                  _hover={{ bg: iconHoverBg }}
                  onClick={handleAccountToggle}
                  className="account-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  isActive={isAccountOpen}
                  _active={{ bg: useColorModeValue('green.100', 'green.800') }}
                />
                <Box className="account-popup">
                  <AccountPopup isOpen={isAccountOpen} onClose={() => setIsAccountOpen(false)} />
                </Box>
              </Box>
              
              <Box position="relative">
                <MotionIconButton
                  aria-label="Toggle language menu"
                  icon={<FaGlobe size={20} />}
                  variant="ghost"
                  size="lg"
                  borderRadius="full"
                  color={textColor}
                  _hover={{ bg: iconHoverBg }}
                  onClick={handleLanguageToggle}
                  className="language-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  isActive={isLanguageOpen}
                  _active={{ bg: useColorModeValue('purple.100', 'purple.800') }}
                />
                <Box className="language-popup">
                  <LanguageSelector isOpen={isLanguageOpen} onClose={() => setIsLanguageOpen(false)} />
                </Box>
              </Box>
              
              <MotionIconButton
                aria-label="Toggle color mode"
                icon={colorMode === 'light' ? <FaSun size={20} /> : <FaMoon size={20} />}
                variant="ghost"
                size="lg"
                borderRadius="full"
                color={textColor}
                _hover={{ bg: iconHoverBg }}
                onClick={toggleColorMode}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
            </Flex>
          )}
          
          {/* Right: Let's Talk + Hamburger/Close */}
          <Flex alignItems="center" gap={2}>
            <Button
              colorScheme="gray"
              bg={useColorModeValue('gray.100', 'gray.700')}
              color={textColor}
              borderRadius="full"
              px={5}
              fontWeight="semibold"
              _hover={{ 
                bg: useColorModeValue('gray.200', 'gray.600'),
                transform: 'translateY(-1px)'
              }}
              boxShadow="sm"
              onClick={onLetsTalkOpen}
              transition="all 0.2s"
            >
              Let's Talk
            </Button>
            <MotionIconButton
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              icon={isMenuOpen ? <CloseIcon boxSize={6} /> : <HamburgerIcon boxSize={7} />}
              variant="ghost"
              size="lg"
              borderRadius="full"
              color={textColor}
              _hover={{ bg: iconHoverBg }}
              onClick={isMenuOpen ? onMenuClose : onMenuOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            />
          </Flex>
        </Flex>
      </Box>
      
      {/* Feature Components */}
      <LetsTalk isOpen={isLetsTalkOpen} onClose={onLetsTalkClose} />
      <MainMenu isOpen={isMenuOpen} onClose={onMenuClose} />
    </>
  )
}
