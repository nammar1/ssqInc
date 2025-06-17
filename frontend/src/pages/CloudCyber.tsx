import {
  Box,
} from '@chakra-ui/react'
import { FaCloud, FaShieldAlt, FaServer, FaLock, FaNetworkWired, FaChartLine } from 'react-icons/fa'
import { WebHero } from '@/components/ui/WebHero'
import { QuoteBox } from '@/components/ui/QuoteBox'
import { getPageConfig } from '@/utils/pageConfigs'
import { AccordionList } from '@/components/ui/AccordionList'

export default function CloudCyber() {
  const config = getPageConfig('cloudcyber')

  const features = [
    {
      title: 'Cloud Strategy & Migration',
      description: 'Comprehensive cloud transformation and migration services',
      icon: FaCloud,
      details: [
        'Portfolio assessment and TCO analysis',
        'Lift-and-shift, refactor, and greenfield deployments'
      ]
    },
    {
      title: 'Platform & DevOps Engineering',
      description: 'Modern infrastructure and automation solutions',
      icon: FaServer,
      details: [
        'Kubernetes, serverless, and infrastructure-as-code',
        'Automated build, release, and environment management'
      ]
    },
    {
      title: 'Security Architecture & Zero-Trust',
      description: 'Advanced security architecture and implementation',
      icon: FaShieldAlt,
      details: [
        'Identity, access, and micro-segmentation design',
        'Encryption, key management, and secure SDLC practices'
      ]
    },
    {
      title: 'Threat Detection & Incident Response',
      description: 'Comprehensive security monitoring and response',
      icon: FaNetworkWired,
      details: [
        '24 × 7 monitoring, SIEM/SOAR integration',
        'Playbooks, forensics, and continuous improvement'
      ]
    },
    {
      title: 'Compliance & Risk Management',
      description: 'Regulatory compliance and risk mitigation',
      icon: FaLock,
      details: [
        'Framework alignment (ISO 27001, SOC 2, GDPR, etc.)',
        'Audit readiness and policy automation',
        'Testing and Testing'
      ]
    },
    {
      title: 'Resilience & Cost Optimization',
      description: 'Business continuity and cloud cost management',
      icon: FaChartLine,
      details: [
        'High-availability, backup, and disaster recovery',
        'FinOps governance for cloud spend efficiency'
      ]
    },
  ]

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

      <AccordionList features={features} />

    </Box>
  )
}
