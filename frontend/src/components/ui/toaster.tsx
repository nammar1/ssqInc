"use client"

import {
  useToast,
  ToastId,
  UseToastOptions,
  Box,
  CloseButton,
  Text,
  Flex,
  Spinner,
  ToastPosition,
  useColorModeValue,
} from "@chakra-ui/react"
import { createContext, useContext, ReactNode } from "react"

interface ToastContextType {
  toast: (options: UseToastOptions) => ToastId
  close: (id: ToastId) => void
  closeAll: () => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const toast = useToast()

  const value = {
    toast: (options: UseToastOptions) => {
      return toast({
        position: "bottom-end" as ToastPosition,
        duration: 5000,
        isClosable: true,
        ...options,
      })
    },
    close: (id: ToastId) => toast.close(id),
    closeAll: () => toast.closeAll(),
  }

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToastContext() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToastContext must be used within a ToastProvider")
  }
  return context
}

export function Toast({
  title,
  description,
  status = "info",
  isClosable = true,
  onClose,
}: {
  title?: string
  description?: string
  status?: "info" | "warning" | "success" | "error" | "loading"
  isClosable?: boolean
  onClose?: () => void
}) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const hoverBg = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box
      p={3}
      bg={bgColor}
      borderRadius="md"
      boxShadow="lg"
      maxW="sm"
      w="full"
    >
      <Flex align="center" justify="space-between">
        <Flex align="center">
          {status === "loading" && <Spinner size="sm" mr={2} />}
          <Box>
            {title && (
              <Text fontWeight="bold" fontSize="sm">
                {title}
              </Text>
            )}
            {description && (
              <Text fontSize="sm" color={textColor}>
                {description}
              </Text>
            )}
          </Box>
        </Flex>
        {isClosable && (
          <CloseButton
            size="sm"
            onClick={onClose}
            _hover={{ bg: hoverBg }}
          />
        )}
      </Flex>
    </Box>
  )
}
