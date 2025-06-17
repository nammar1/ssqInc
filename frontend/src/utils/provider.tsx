"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { Toaster } from "../components/ui/toaster"
import { ColorModeProvider } from "../components/ui/color-mode"
import { system } from '@/theme'

interface ProviderProps {
  children: React.ReactNode
}

export function Provider({ children }: ProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>
        {children}
        <Toaster />
      </ColorModeProvider>
    </ChakraProvider>
  )
}
