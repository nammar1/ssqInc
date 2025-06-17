import {
  Box,
} from '@chakra-ui/react' 
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { QuoteBox } from '@/components/ui/QuoteBox'
import { ComingSoon } from '@/components/ui/ComingSoon'
  

export default function Investor() {
  const config = getPageConfig('investor')

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

      <ComingSoon />
    </Box>
  )
}
