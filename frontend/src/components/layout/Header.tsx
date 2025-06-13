import {
  Box,
  Flex,
  Button,
  IconButton,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Menu, X } from 'lucide-react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { LetsTalk } from './LetsTalk'
import { useDisclosure } from '@chakra-ui/react'
import { MainMenu } from '../ui/MainMenu'
import { FaUserCircle, FaLanguage, FaSearch, FaSun, FaMoon } from 'react-icons/fa'
import { useColorMode, useColorModeValue } from '../ui/color-mode'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SearchBar, AccountPopup, LanguageSelector } from '../features'
import { Tooltip } from '@/components/ui/tooltip'

const MotionIconButton = motion(IconButton as React.ComponentType<any>)

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const textColor = colorMode === 'light' ? 'gray.900' : 'white'
  const pillShadow = colorMode === 'light' ? '0 4px 24px rgba(0,0,0,0.10)' : '0 4px 24px rgba(0,0,0,0.40)'
  const iconHoverBg = colorMode === 'light' ? 'gray.100' : 'gray.700'
  
  // Responsive values
  const isMobile = useBreakpointValue({ base: true, lg: false })
  const headerPadding = useBreakpointValue({ base: 2, md: 6 })
  const logoHeight = useBreakpointValue({ base: '40px', md: '48px' })
  const buttonSize = useBreakpointValue({ base: 'md', lg: 'lg' })
  const buttonPadding = useBreakpointValue({ base: 4, lg: 5 })
  
  const {
    open: isLetsTalkOpen,
    onOpen: onLetsTalkOpen,
    onClose: onLetsTalkClose
  } = useDisclosure()
  const {
    open: isMenuOpen,
    onOpen: onMenuOpen,
    onClose: onMenuClose
  } = useDisclosure()
  
  // Individual toggles for each feature
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  
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

  const MobileFeatureButton = ({ icon, label, onClick, isActive, className }: {
    icon: React.ReactElement
    label: string
    onClick: () => void
    isActive?: boolean
    className?: string
  }) => (
    <Tooltip content={label}>
      <MotionIconButton
        aria-label={label}
        variant="ghost"
        size={buttonSize as any}
        borderRadius="full"
        color={textColor}
        bg={isActive ? useColorModeValue('blue.100', 'blue.800') : 'transparent'}
        _hover={{ bg: iconHoverBg }}
        onClick={onClick}
        className={className}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        minW="44px" // Better touch target
        minH="44px"
      >
        {icon}
      </MotionIconButton>
    </Tooltip>
  )

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
          px={headerPadding}
          py={2}
          alignItems="center"
          justifyContent="space-between"
          borderRadius="full"
          boxShadow={pillShadow}
          bg="transparent"
          backdropFilter="blur(8px)"
        >
          {/* Left: Logo */}
          <RouterLink 
            to="/" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              textDecoration: 'none',
              minWidth: logoHeight
            }}
          >
            <Image 
              src="/SSQlogo-02.png" 
              alt="Smart Solution Quorum Logo" 
              height={logoHeight} 
              objectFit="contain" 
            />
          </RouterLink>
          
          {/* Center: Feature icons (only on desktop when menu is open) */}
          {isMenuOpen && !isMobile && (
            <Flex alignItems="center" gap={4} flex={1} justify="center">
              <Box position="relative" className="search-container">
                <MobileFeatureButton
                  icon={<FaSearch size={18} />}
                  label="Search"
                  onClick={handleSearchToggle}
                  isActive={isSearchOpen}
                  className="search-button"
                />
                <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
              </Box>
              
              <Box position="relative">
                <MobileFeatureButton
                  icon={<FaUserCircle size={20} />}
                  label="Account"
                  onClick={handleAccountToggle}
                  isActive={isAccountOpen}
                  className="account-button"
                />
                <Box className="account-popup">
                  <AccountPopup isOpen={isAccountOpen} onClose={() => setIsAccountOpen(false)} />
                </Box>
              </Box>
              
              <Box position="relative">
                <MobileFeatureButton
                  icon={<FaLanguage size={18} />}
                  label="Language"
                  onClick={handleLanguageToggle}
                  isActive={isLanguageOpen}
                  className="language-button"
                />
                <Box className="language-popup">
                  <LanguageSelector isOpen={isLanguageOpen} onClose={() => setIsLanguageOpen(false)} />
                </Box>
              </Box>
              
              <MobileFeatureButton
                icon={colorMode === 'light' ? <FaSun size={18} /> : <FaMoon size={18} />}
                label="Toggle color mode"
                onClick={toggleColorMode}
              />
            </Flex>
          )}
          
          {/* Right: Let's Talk + Hamburger/Close */}
          <Flex alignItems="center" gap={2}>
            <Button
              colorPalette="gray"
              bg={useColorModeValue('gray.100', 'gray.700')}
              color={textColor}
              borderRadius="full"
              px={buttonPadding}
              fontWeight="semibold"
              size={buttonSize as any}
              _hover={{ 
                bg: useColorModeValue('gray.200', 'gray.600'),
                transform: 'translateY(-1px)'
              }}
              boxShadow="sm"
              onClick={onLetsTalkOpen}
              transition="all 0.2s"
              minH="44px" // Better touch target on mobile
            >
              Let's Talk
            </Button>
            <MotionIconButton
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              variant="ghost"
              size={buttonSize}
              borderRadius="full"
              color={textColor}
              _hover={{ bg: iconHoverBg }}
              onClick={isMenuOpen ? onMenuClose : onMenuOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              minW="44px" // Better touch target
              minH="44px"
            >
              {isMenuOpen ? <X size={isMobile ? 20 : 24} /> : <Menu size={isMobile ? 24 : 28} />}
            </MotionIconButton>
          </Flex>
        </Flex>
      </Box>
      
      {/* Feature Components */}
      <LetsTalk isOpen={isLetsTalkOpen} onClose={onLetsTalkClose} />
      <MainMenu 
        isOpen={isMenuOpen} 
        onClose={onMenuClose}
        // Pass feature controls to MainMenu for mobile integration
        featureControls={{
          search: { isOpen: isSearchOpen, toggle: handleSearchToggle },
          account: { isOpen: isAccountOpen, toggle: handleAccountToggle },
          language: { isOpen: isLanguageOpen, toggle: handleLanguageToggle },
          colorMode: { current: colorMode, toggle: toggleColorMode }
        }}
      />
    </>
  )
}
