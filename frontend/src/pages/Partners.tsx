import {
    Box,
  } from '@chakra-ui/react'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { QuoteBox } from '@/components/ui/QuoteBox'
import { ClientPartnerLogin } from '@/components/features/ClientPartnerLogin'

export default function Partners() {
    const config = getPageConfig('partners')

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

            <ClientPartnerLogin type="partner" />
        </Box>
    )
}