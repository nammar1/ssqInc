import {
  Box,
  Button,
  VStack,
  Text,
  HStack,
  Separator,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { useColorModeValue } from '@/components/ui/color-mode'

const MotionBox = motion(Box)

interface Language {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
]

interface LanguageSelectorProps {
  isOpen: boolean
  onClose: () => void
}

export function LanguageSelector({ isOpen, onClose }: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en')
  
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const shadowColor = useColorModeValue('rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)')
  const hoverBg = useColorModeValue('gray.50', 'gray.700')

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode)
    // TODO: Implement language change functionality
    console.log('Language changed to:', languageCode)
    onClose()
  }

  const selectedLang = languages.find(lang => lang.code === selectedLanguage)

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionBox
          position="absolute"
          top="calc(100% + 10px)"
          right="0"
          zIndex={4000}
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Box
            bg={bg}
            border="1px solid"
            borderColor={borderColor}
            borderRadius="xl"
            boxShadow={`0 8px 25px ${shadowColor}`}
            p={4}
            minW="220px"
            backdropFilter="blur(8px)"
          >
            <VStack gap={3} align="stretch">
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color={textColor}
                textAlign="center"
                mb={1}
              >
                Select Language
              </Text>
              
              <Separator />
              
              {languages.map((language) => (
                <Button
                  key={language.code}
                  variant="ghost"
                  size="md"
                  borderRadius="lg"
                  fontWeight="medium"
                  onClick={() => handleLanguageSelect(language.code)}
                  _hover={{ 
                    bg: hoverBg,
                    transform: 'translateY(-1px)'
                  }}
                  transition="all 0.2s"
                  justifyContent="flex-start"
                  position="relative"
                >
                  <HStack gap={3} width="100%">
                    <Text fontSize="lg">{language.flag}</Text>
                    <Text flex={1} textAlign="left">
                      {language.name}
                    </Text>
                    {selectedLanguage === language.code && (
                      <FaCheck color="green" size={14} />
                    )}
                  </HStack>
                </Button>
              ))}
              
              <Separator />
              
              <Text
                fontSize="xs"
                color={useColorModeValue('gray.500', 'gray.400')}
                textAlign="center"
              >
                Current: {selectedLang?.flag} {selectedLang?.name}
              </Text>
            </VStack>
          </Box>
        </MotionBox>
      )}
    </AnimatePresence>
  )
} 