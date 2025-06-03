import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
  VStack,
  Text,
  Button,
  HStack,
  Icon,
  Kbd,
} from '@chakra-ui/react'
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome, FaInfoCircle, FaCog, FaEnvelope, FaBlog, FaUsers, FaShieldAlt, FaCode, FaDatabase, FaRobot, FaCloud, FaDigitalTachograph } from 'react-icons/fa'



interface SearchResult {
  title: string
  path: string
  description: string
  icon: any
  category: string
}

const searchData: SearchResult[] = [
  { title: 'Home', path: '/', description: 'Welcome to Smart Solution Quorum', icon: FaHome, category: 'Main' },
  { title: 'About', path: '/about', description: 'Learn about our company and mission', icon: FaInfoCircle, category: 'Main' },
  { title: 'Services', path: '/services', description: 'Explore our comprehensive service offerings', icon: FaCog, category: 'Main' },
  { title: 'Contact', path: '/contact', description: 'Get in touch with our team', icon: FaEnvelope, category: 'Main' },
  { title: 'Blog', path: '/blog', description: 'Read our latest insights and articles', icon: FaBlog, category: 'Content' },
  { title: 'Careers', path: '/careers', description: 'Join our growing team', icon: FaUsers, category: 'Company' },
  { title: 'Investor Relations', path: '/investor', description: 'Information for investors', icon: FaShieldAlt, category: 'Company' },
  { title: 'Privacy Policy', path: '/privacy', description: 'Our privacy and data protection policy', icon: FaShieldAlt, category: 'Legal' },
  { title: 'Software Development', path: '/services/software', description: 'Custom software solutions and development', icon: FaCode, category: 'Services' },
  { title: 'Data Engineering', path: '/services/data', description: 'Data pipeline and analytics solutions', icon: FaDatabase, category: 'Services' },
  { title: 'AI & ML Solutions', path: '/services/ai-ml', description: 'Artificial intelligence and machine learning', icon: FaRobot, category: 'Services' },
  { title: 'Cloud & Cybersecurity', path: '/services/cloud-cybersecurity', description: 'Cloud infrastructure and security services', icon: FaCloud, category: 'Services' },
  { title: 'Digital Transformation', path: '/services/digital-transformation', description: 'Digital transformation consulting', icon: FaDigitalTachograph, category: 'Services' },
]

interface SearchBarProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const placeholderColor = useColorModeValue('gray.500', 'gray.400')
  const shadowColor = useColorModeValue('rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)')
  const hoverBg = useColorModeValue('gray.50', 'gray.700')
  const selectedBg = useColorModeValue('blue.50', 'blue.900')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const categoryColor = useColorModeValue('gray.500', 'gray.400')

  const filteredResults = useMemo(() => {
    if (!searchValue.trim()) return searchData.slice(0, 6) // Show top 6 when no search
    
    return searchData.filter(item =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.category.toLowerCase().includes(searchValue.toLowerCase())
    ).slice(0, 8) // Limit to 8 results
  }, [searchValue])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
    if (!isOpen) {
      setSearchValue('')
      setSelectedIndex(-1)
    }
  }, [isOpen])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => (prev < filteredResults.length - 1 ? prev + 1 : prev))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (selectedIndex >= 0 && filteredResults[selectedIndex]) {
        handleResultClick(filteredResults[selectedIndex])
      } else if (filteredResults.length > 0) {
        handleResultClick(filteredResults[0])
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      setSelectedIndex(prev => (prev < filteredResults.length - 1 ? prev + 1 : 0))
    }
  }

  const handleResultClick = (result: SearchResult) => {
    navigate(result.path)
    onClose()
  }

  const clearSearch = () => {
    setSearchValue('')
    setSelectedIndex(-1)
    inputRef.current?.focus()
  }

  // Highlight search terms in text
  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm.trim()) return text
    
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    const parts = text.split(regex)
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <Text as="span" key={index} bg={useColorModeValue('yellow.200', 'yellow.800')} px={1} borderRadius="sm">
          {part}
        </Text>
      ) : part
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4000,
          }}
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Box
            minW="400px"
            maxW="500px"
            w={{ base: "90vw", md: "450px" }}
            bg={bg}
            border="1px solid"
            borderColor={borderColor}
            borderRadius="xl"
            boxShadow={`0 12px 40px ${shadowColor}`}
            backdropFilter="blur(12px)"
            overflow="hidden"
          >
            {/* Search Input */}
            <Box p={4} borderBottom="1px solid" borderColor={borderColor}>
              <InputGroup size="lg">
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color={placeholderColor} boxSize={4} />
                </InputLeftElement>
                <Input
                  ref={inputRef}
                  placeholder="Search pages, services..."
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value)
                    setSelectedIndex(-1)
                  }}
                  onKeyDown={handleKeyDown}
                  bg="transparent"
                  border="1px solid"
                  borderColor={borderColor}
                  borderRadius="lg"
                  _focus={{
                    borderColor: 'blue.400',
                    boxShadow: '0 0 0 1px var(--chakra-colors-blue-400)',
                  }}
                  _placeholder={{ color: placeholderColor }}
                  fontSize="md"
                  fontWeight="medium"
                  pr={searchValue ? "40px" : "16px"}
                />
                {searchValue && (
                  <InputRightElement>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={clearSearch}
                      borderRadius="full"
                      minW="auto"
                      h="24px"
                      w="24px"
                      p={0}
                    >
                      <CloseIcon boxSize={3} />
                    </Button>
                  </InputRightElement>
                )}
              </InputGroup>
            </Box>

            {/* Search Results */}
            {filteredResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <VStack
                  spacing={0}
                  align="stretch"
                  maxH="300px"
                  overflowY="auto"
                  css={{
                    '&::-webkit-scrollbar': {
                      width: '4px',
                    },
                    '&::-webkit-scrollbar-track': {
                      width: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: useColorModeValue('gray.200', 'gray.600'),
                      borderRadius: '24px',
                    },
                  }}
                >
                  {filteredResults.map((result, index) => (
                    <motion.div
                      key={result.path}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <Button
                        variant="ghost"
                        size="md"
                        borderRadius="none"
                        fontWeight="normal"
                        onClick={() => handleResultClick(result)}
                        bg={selectedIndex === index ? selectedBg : 'transparent'}
                        _hover={{ bg: selectedIndex === index ? selectedBg : hoverBg }}
                        transition="all 0.2s"
                        justifyContent="flex-start"
                        p={4}
                        h="auto"
                        minH="60px"
                        onMouseEnter={() => setSelectedIndex(index)}
                        borderLeft={selectedIndex === index ? "3px solid" : "3px solid transparent"}
                        borderLeftColor={selectedIndex === index ? "blue.400" : "transparent"}
                        w="100%"
                      >
                        <HStack spacing={3} width="100%" align="flex-start">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            style={{ flexShrink: 0 }}
                          >
                            <Box
                              p={2}
                              borderRadius="lg"
                              bg={useColorModeValue('gray.100', 'gray.700')}
                              color={useColorModeValue('gray.600', 'gray.300')}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <Icon as={result.icon} boxSize={4} />
                            </Box>
                          </motion.div>
                          <VStack align="flex-start" spacing={1} flex={1} minW={0}>
                            <HStack justify="space-between" w="100%" align="center" spacing={2}>
                              <Text
                                fontWeight="semibold"
                                color={textColor}
                                fontSize="sm"
                                flex={1}
                                noOfLines={1}
                                overflow="hidden"
                                textOverflow="ellipsis"
                              >
                                {highlightText(result.title, searchValue)}
                              </Text>
                              <Text
                                fontSize="xs"
                                color={categoryColor}
                                fontWeight="medium"
                                bg={useColorModeValue('gray.100', 'gray.700')}
                                px={2}
                                py={1}
                                borderRadius="full"
                                flexShrink={0}
                                whiteSpace="nowrap"
                              >
                                {result.category}
                              </Text>
                            </HStack>
                            <Text
                              fontSize="xs"
                              color={categoryColor}
                              textAlign="left"
                              noOfLines={2}
                              w="100%"
                              overflow="hidden"
                              textOverflow="ellipsis"
                            >
                              {highlightText(result.description, searchValue)}
                            </Text>
                          </VStack>
                        </HStack>
                      </Button>
                    </motion.div>
                  ))}
                </VStack>
              </motion.div>
            )}

            {/* No Results */}
            {searchValue && filteredResults.length === 0 && (
              <Box p={6} textAlign="center">
                <Text color={categoryColor} fontSize="sm">
                  No results found for "{searchValue}"
                </Text>
              </Box>
            )}

            {/* Footer with shortcuts */}
            <Box
              p={3}
              borderTop="1px solid"
              borderColor={borderColor}
              bg={useColorModeValue('gray.50', 'gray.900')}
            >
              <HStack justify="space-between" fontSize="xs" color={categoryColor}>
                <HStack spacing={2}>
                  <HStack spacing={1}>
                    <Kbd>↑</Kbd>
                    <Kbd>↓</Kbd>
                    <Text>navigate</Text>
                  </HStack>
                  <HStack spacing={1}>
                    <Kbd>↵</Kbd>
                    <Text>select</Text>
                  </HStack>
                </HStack>
                <HStack spacing={1}>
                  <Kbd>esc</Kbd>
                  <Text>close</Text>
                </HStack>
              </HStack>
            </Box>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 