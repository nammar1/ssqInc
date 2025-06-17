import {
  Box,
  Text,
  VStack,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {useColorMode } from '@/components/ui/color-mode'

interface QuoteBoxProps {
  quote: string;
  delay?: number;
}

export const QuoteBox = ({ quote, delay = 0.2 }: QuoteBoxProps) => {
  const { colorMode } = useColorMode()

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      px={10}
      height="40vh"
      alignItems="center"
    >
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay
        }}
        whileHover={{ scale: 1.02 }}
        style={{ width: "100%", maxWidth: "1200px" }}
      >
        <Box
          bg={colorMode === 'light' ? 'gray.50' : 'gray.800'}
          borderLeft="4px solid"
          borderLeftColor={colorMode === 'light' ? 'blue.500' : 'blue.300'}
          borderRadius="lg"
          p={{ base: 4, md: 6 }}
          shadow="lg"
          border="1px solid"
          borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
          position="relative"
          _hover={{
            shadow: 'xl',
            borderColor: colorMode === 'light' ? 'blue.300' : 'blue.500',
            transform: 'translateY(-5px)',
          }}
          transition="all 0.3s ease"
          backdropFilter="blur(10px)"
          bgGradient={colorMode === 'light' 
            ? 'linear(to-r, gray.50, white)' 
            : 'linear(to-r, gray.800, gray.700)'}
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
                {quote}
              </Text>
            </motion.div>
          </VStack>
        </Box>
      </motion.div>
    </Box>
  )
} 