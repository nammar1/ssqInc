import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'gray.900',
        fontFamily: 'body',
      }
    })
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  fontSizes: {
    xs: '0.875rem',    // 14px
    sm: '1rem',        // 16px
    md: '1.125rem',    // 18px
    lg: '1.25rem',     // 20px
    xl: '1.5rem',      // 24px
    '2xl': '1.875rem', // 30px
    '3xl': '2.25rem',  // 36px
    '4xl': '3rem',     // 48px
    '5xl': '3.75rem',  // 60px
  },
  colors: {
    brand: {
      50: '#F5F3FF',
      100: '#EDE9FE',
      200: '#DDD6FE',
      300: '#C4B5FD',
      400: '#A78BFA',
      500: '#8B5CF6', // Primary purple
      600: '#7C3AED',
      700: '#6D28D9',
      800: '#5B21B6',
      900: '#4C1D95',
    },
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
            transform: 'translateY(-1px)',
            boxShadow: 'lg',
          },
          _active: {
            bg: 'brand.700',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
        },
      },
    },
    Heading: {
      baseStyle: (props: { colorMode: string }) => ({
        fontWeight: 'bold',
        color: props.colorMode === 'dark' ? 'white' : 'gray.900',
        letterSpacing: 'tight',
      }),
      sizes: {
        h1: { fontSize: { base: '4xl', md: '5xl' } },
        h2: { fontSize: { base: '3xl', md: '4xl' } },
        h3: { fontSize: { base: '2xl', md: '3xl' } },
        h4: { fontSize: { base: 'xl', md: '2xl' } },
        h5: { fontSize: { base: 'lg', md: 'xl' } },
        h6: { fontSize: { base: 'md', md: 'lg' } },
      },
    },
    Text: {
      baseStyle: (props: { colorMode: string }) => ({
        fontWeight: 'light',
        fontSize: { base: 'md', md: 'lg' },
        lineHeight: 'tall',
        color: props.colorMode === 'dark' ? 'gray.200' : 'gray.700',
      }),
    },
    Link: {
      baseStyle: {
        color: 'brand.500',
        fontWeight: 'medium',
        _hover: {
          textDecoration: 'none',
          color: 'brand.600',
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: '1200px',
        px: { base: 4, md: 6 },
      },
    },
    WebHero: {
      baseStyle: {
        minH: '50vh',
        position: 'relative',
        overflow: 'hidden',
      }
    },
  }
})

export default theme