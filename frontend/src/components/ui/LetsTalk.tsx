import React from 'react'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Box,
  useDisclosure,
  VStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export function LetsTalk({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const inputBg = useColorModeValue('white', 'gray.800')
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
      <DrawerOverlay />
      <DrawerContent maxW={{ base: '100vw', md: '50vw' }}>
        <DrawerCloseButton mt={2} />
        <DrawerHeader fontSize="2xl" fontWeight="bold" mt={6}>
          Interested in solving your problems with SSQ software?
        </DrawerHeader>
        <DrawerBody>
          <VStack spacing={5} align="stretch">
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input bg={inputBg} placeholder="Enter your first name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input bg={inputBg} placeholder="Enter your last name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Business Email Address</FormLabel>
              <Input type="email" bg={inputBg} placeholder="Enter your business email" />
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input type="tel" bg={inputBg} placeholder="Enter your phone number" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Job Title</FormLabel>
              <Input bg={inputBg} placeholder="Enter your job title" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Company / Institution</FormLabel>
              <Input bg={inputBg} placeholder="Enter your company or institution" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Country</FormLabel>
              <Select bg={inputBg} placeholder="Select...">
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="GB">United Kingdom</option>
                <option value="IN">India</option>
                {/* Add more countries as needed */}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Tell us about your project</FormLabel>
              <Textarea bg={inputBg} placeholder="A bit of context will allow us to connect you to the right team faster." rows={4} />
            </FormControl>
            <Button colorScheme="gray" w="full" borderRadius="full" fontWeight="semibold">
              Submit
            </Button>
            <Box mt={2}>
              {/* Placeholder for reCAPTCHA */}
              <Box border="1px solid" borderColor={useColorModeValue('gray.200', 'gray.600')} borderRadius="md" p={4} textAlign="center" color={useColorModeValue('gray.500', 'gray.400')}>
                <Text fontSize="sm">Drag and drop files here or click to browse</Text>
              </Box>
            </Box>
            <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')} mt={2}>
              Maximum file size: 10MB
            </Text>
            <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')} mt={2}>
              Please see our <a href="#" style={{ textDecoration: 'underline' }}>Privacy Policy</a> regarding how we will handle this information.
            </Text>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
} 