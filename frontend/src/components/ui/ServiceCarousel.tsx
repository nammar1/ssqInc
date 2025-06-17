'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

interface ServiceCardData {
  title: string;
  description: string;
  image: string;
  link: string;
  color: string;
}

const SERVICES: ServiceCardData[] = [
  {
    title: 'Digital Transformation',
    description: 'Digital Strategy for your Innovation',
    image: '/public/Digital.jpg',
    link: '/services/digital-transformation',
    color: 'brand.800',
  },
  {
    title: 'Software',
    description: 'Software Created for your Needs',
    image: '/public/Software.jpg',
    link: '/services/software',
    color: 'brand.700',
  },
  {
    title: 'Data',
    description: 'Data Clarity for your Decisions',
    image: '/public/Data.jpg',
    link: '/services/data',
    color: 'brand.600',
  },
  {
    title: 'AI & ML',
    description: 'Future Ready Intelligence for your Today',
    image: '/public/AI.jpg',
    link: '/services/ai-ml',
    color: 'brand.500',
  },
  {
    title: 'Cloud & Cybersecurity',
    description: 'Cloud Confidence for your Security',
    image: '/public/Cloud.jpg',
    link: '/services/cloud-security',
    color: 'brand.400',
  },
]

export const ServiceCarousel = () => {
  return (
    <Flex
      minH="40vh"
      bg="gray.50"
      p={4}
      alignItems="center"
      justifyContent="center"
    >
      <SimpleGrid
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
          xl: 'repeat(5, 1fr)'
        }}
        gap={4}
        maxW="9xl"
        w="full"
      >
        {SERVICES.map((service) => (
          <RouterLink key={service.title} to={service.link}>
            <MotionBox
              position="relative"
              w="full"
              h={{ base: '150px', md: '320px' }}
              rounded="lg"
              overflow="hidden"
              whileHover="hover"
              initial="initial"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.02 }
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Image */}
              <MotionBox
                position="absolute"
                inset="0"
                w="full"
                h="full"
                backgroundImage={`url(${service.image})`}
                backgroundSize="cover"
                backgroundPosition="center"
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.1 }
                }}
                transition={{ duration: 0.6 }}
              />

              {/* Overlay - Only visible on hover */}
              <MotionBox
                position="absolute"
                inset="0"
                w="full"
                h="full"
                bg="blackAlpha.600"
                variants={{
                  initial: { opacity: 0 },
                  hover: { opacity: 1 }
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Content */}
              <MotionFlex
                position="relative"
                direction="column"
                justify="flex-end"
                align="center"
                w="full"
                h="full"
                p={6}
                zIndex={1}
                variants={{
                  initial: { y: 0 },
                  hover: { y: '-50%' }
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Title - Moves from bottom to center on hover */}
                <MotionBox
                  variants={{
                    initial: { y: 0 },
                    hover: { y: '-50%' }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Heading
                    fontSize="xl"
                    fontWeight="bold"
                    color="white"
                    textAlign="center"
                    mb={2}
                    textShadow="0 2px 4px rgba(0,0,0,0.3)"
                  >
                    {service.title}
                  </Heading>
                </MotionBox>

                {/* Description - Only visible on hover */}
                <MotionBox
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Text
                    fontSize="md"
                    color="white"
                    textAlign="center"
                    fontStyle="italic"
                    textShadow="0 1px 2px rgba(0,0,0,0.3)"
                  >
                    {service.description}
                  </Text>
                </MotionBox>
              </MotionFlex>
            </MotionBox>
          </RouterLink>
        ))}
      </SimpleGrid>
    </Flex>
  )
}
