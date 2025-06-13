import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Inter, sans-serif' },
        body: { value: 'Inter, sans-serif' },
      },
      fontWeights: {
        light: { value: 300 },
        normal: { value: 400 },
        medium: { value: 500 },
        bold: { value: 700 },
      },
      fontSizes: {
        xs: { value: '0.875rem' },    // 14px
        sm: { value: '1rem' },        // 16px
        md: { value: '1.125rem' },    // 18px
        lg: { value: '1.25rem' },     // 20px
        xl: { value: '1.5rem' },      // 24px
        '2xl': { value: '1.875rem' }, // 30px
        '3xl': { value: '2.25rem' },  // 36px
        '4xl': { value: '3rem' },     // 48px
        '5xl': { value: '3.75rem' },  // 60px
      },
      colors: {
        brand: {
          50: { value: '#F5F3FF' },
          100: { value: '#EDE9FE' },
          200: { value: '#DDD6FE' },
          300: { value: '#C4B5FD' },
          400: { value: '#A78BFA' },
          500: { value: '#8B5CF6' },
          600: { value: '#7C3AED' },
          700: { value: '#6D28D9' },
          800: { value: '#5B21B6' },
          900: { value: '#4C1D95' },
        },
        gray: {
          50: { value: '#F9FAFB' },
          100: { value: '#F3F4F6' },
          200: { value: '#E5E7EB' },
          300: { value: '#D1D5DB' },
          400: { value: '#9CA3AF' },
          500: { value: '#6B7280' },
          600: { value: '#4B5563' },
          700: { value: '#374151' },
          800: { value: '#1F2937' },
          900: { value: '#111827' },
        },
      },
      shadows: {
        brand: {
          sm: { value: '0 2px 8px var(--chakra-colors-brand-500)' },
          md: { value: '0 4px 20px var(--chakra-colors-brand-500)' },
          lg: { value: '0 8px 32px var(--chakra-colors-brand-500)' },
          xl: { value: '0 12px 48px var(--chakra-colors-brand-500)' },
        },
      },
    },
  },
})