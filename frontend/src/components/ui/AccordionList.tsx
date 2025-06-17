import { Accordion, Box, Text, Icon, Container } from "@chakra-ui/react"
import { IconType } from "react-icons"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

interface Feature {
  title: string
  description: string
  icon: IconType
  details: string[]
}

interface AccordionListProps {
  features: Feature[]
}

export const AccordionList = ({ features }: AccordionListProps) => {
  return (
    <Container maxW="container.md" py={8}>
      <Accordion.Root 
        spaceY="4" 
        variant="plain" 
        collapsible 
        defaultValue={["item-0"]}
        width="100%"
      >
        {features.map((feature, index) => (
          <Accordion.Item 
            key={index} 
            value={`item-${index}`}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            mb={4}
            overflow="hidden"
            transition="all 0.2s"
            _hover={{
              borderColor: 'brand.500',
              boxShadow: 'brand.sm',
              transform: 'translateY(-2px)',
            }}
          >
            <Accordion.ItemTrigger
              py={6}
              px={6}
              _hover={{
                bg: 'gray.50',
              }}
            >
              <Box
                flex="1"
                textAlign="left"
                display="flex"
                alignItems="center"
                gap={4}
              >
                <Icon
                  as={feature.icon}
                  boxSize={7}
                  color="brand.500"
                  transition="transform 0.2s"
                  _groupHover={{
                    transform: 'scale(1.1)',
                  }}
                />
                <Box>
                  <Text
                    fontWeight="semibold"
                    fontSize="xl"
                    color="gray.800"
                    mb={1}
                  >
                    {feature.title}
                  </Text>
                  <Text
                    fontSize="md"
                    color="gray.600"
                    lineHeight="tall"
                  >
                    {feature.description}
                  </Text>
                </Box>
              </Box>
              <Accordion.ItemIndicator 
                color="brand.500"
                transition="transform 0.2s"
                _groupExpanded={{
                  transform: 'rotate(180deg)',
                }}
              />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody pb={6} px={6}>
                {feature.details.map((detail, detailIndex) => (
                  <MotionBox
                    key={detailIndex}
                    display="flex"
                    alignItems="center"
                    color="gray.600"
                    mb={3}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: detailIndex * 0.1 }}
                  >
                    <Box
                      as="span"
                      color="brand.500"
                      mr={3}
                      fontSize="md"
                    >
                      •
                    </Box>
                    <Text
                      fontSize="lg"
                      lineHeight="tall"
                    >
                      {detail}
                    </Text>
                  </MotionBox>
                ))}
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Container>
  )
}
