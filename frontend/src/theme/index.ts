import { extendTheme } from '@chakra-ui/theme-utils'


const theme = extendTheme({
  styles: {
    global: {
      // Add your global styles here
    }
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  components: {
    // Add your component styles here
  }
})

export default theme