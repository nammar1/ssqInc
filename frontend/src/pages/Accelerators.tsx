import {
    Box,
  } from '@chakra-ui/react'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { useColorModeValue } from '@/components/ui/color-mode'
import { QuoteBox } from '@/components/ui/QuoteBox' 
import { ComingSoon } from '@/components/ui/ComingSoon'

export default function Accelerators() {
    const config = getPageConfig('accelerators')
    const sectionBg = useColorModeValue('gray.50', 'gray.900')

    return (
        <Box>
            <WebHero
                title={config.title}
                tagline={config.tagline}
                showText={config.showText}
            />

            <QuoteBox 
                quote={config.quote || ""}
            />

            <Box bg={sectionBg}>
                <ComingSoon />
            </Box>
        </Box>
    )
}   