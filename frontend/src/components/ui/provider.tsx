"use client"

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import { ToastProvider } from "./toaster"
import theme from '@/theme'

interface ProviderProps {
  children: React.ReactNode
}

export function Provider({ children }: ProviderProps) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </ChakraProvider>
    </>
  )
}
