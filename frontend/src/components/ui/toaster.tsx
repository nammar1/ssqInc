"use client"

import * as React from "react"
import { Toaster as Sonner, toast } from "sonner"
import { useColorMode } from './color-mode'

// Create toaster instance
export const toaster = {
  create: (options: ToastOptions) => {
    const { type = 'info', ...rest } = options
    return toast[type]?.(rest.description || rest.title || '', {
      ...rest,
      className: rest.className,
    })
  },
  success: (options: ToastOptions) => {
    return toast.success(options.description || options.title || '', {
      ...options,
    })
  },
  error: (options: ToastOptions) => {
    return toast.error(options.description || options.title || '', {
      ...options,
    })
  },
  warning: (options: ToastOptions) => {
    return toast.warning(options.description || options.title || '', {
      ...options,
    })
  },
  info: (options: ToastOptions) => {
    return toast.info(options.description || options.title || '', {
      ...options,
    })
  },
  promise: <T,>(
    promise: Promise<T>,
    options: {
      loading: ToastOptions
      success: ToastOptions
      error: ToastOptions
    }
  ) => {
    return toast.promise(promise, {
      loading: options.loading.description || options.loading.title || '',
      success: options.success.description || options.success.title || '',
      error: options.error.description || options.error.title || '',
    })
  },
  dismiss: (id?: string | number) => {
    if (id) {
      toast.dismiss(id)
    } else {
      toast.dismiss()
    }
  },
  closeAll: () => toast.dismiss(),
  close: (id: string | number) => toast.dismiss(id),
  isActive: (_id: string | number) => {
    // Sonner doesn't have isActive, so we'll always return false
    return false
  },
  update: (id: string | number, options: ToastOptions) => {
    // Sonner doesn't have update, so we'll dismiss and create new
    toast.dismiss(id)
    return toaster.create({ ...options, id })
  },
  pause: (_id: string | number) => {
    // Sonner doesn't have pause functionality
    console.warn('Pause functionality not available with Sonner')
  },
  resume: (_id: string | number) => {
    // Sonner doesn't have resume functionality
    console.warn('Resume functionality not available with Sonner')
  },
}

export type ToastId = string | number

export type ToastPosition = 
  | "top-left" 
  | "top-center" 
  | "top-right" 
  | "bottom-left" 
  | "bottom-center" 
  | "bottom-right"

export interface ToastOptions {
  id?: ToastId
  title?: string
  description?: string
  type?: 'info' | 'warning' | 'success' | 'error' | 'loading'
  duration?: number
  closable?: boolean
  action?: {
    label: string
    onClick: () => void
  }
  onClose?: () => void
  onStatusChange?: (details: { status: string }) => void
  position?: ToastPosition
  className?: string
}

export interface UseToastOptions {
  position?: ToastPosition
  duration?: number
}

export function Toaster() {
  const { colorMode } = useColorMode()

  return (
    <Sonner
      theme={colorMode}
      position="bottom-right"
      duration={5000}
      closeButton
      toastOptions={{
        classNames: {
          toast: 'chakra-toast',
          title: 'chakra-toast-title',
          description: 'chakra-toast-description',
        },
      }}
    />
  )
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

// For backwards compatibility
export const useToast = () => toaster
