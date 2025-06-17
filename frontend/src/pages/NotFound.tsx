import {
  Box,
} from '@chakra-ui/react'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { QuoteBox } from '@/components/ui/QuoteBox'

export default function NotFound() {
  const config = getPageConfig('notfound')

  return (
    <Box>
      {/* Enhanced WebHero with 3D Text */}
      <WebHero
        title={config.title}
        tagline={config.tagline}
        showText={config.showText}
      />  

      <QuoteBox 
        quote={config.quote || ""}
      />

    </Box>
  )
}
