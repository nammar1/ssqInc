import {
  Box,
} from '@chakra-ui/react'
import { FaRocket, FaChartLine, FaCogs, FaUsers, FaShieldAlt, FaLaptopCode } from 'react-icons/fa'
import { WebHero } from '@/components/ui/WebHero'
import { QuoteBox } from '@/components/ui/QuoteBox'
import { getPageConfig } from '@/utils/pageConfigs'
import { AccordionList } from '@/components/ui/AccordionList'

export default function Digital() {
  const config = getPageConfig('digital')

  const features = [
    {
      title: 'Digital Strategy & Vision',
      description: 'Comprehensive digital transformation roadmaps tailored to your business goals',
      icon: FaRocket,
      details: [
        'Digital maturity assessments and transformation roadmaps',
        'Vision alignment and competitive benchmarking'
      ]
    },
    {
      title: 'Customer Experience Transformation',
      description: 'Enhance customer engagement through digital touchpoints and experiences',
      icon: FaUsers,
      details: [
        'Journey mapping and omnichannel strategy',
        'Implementation of digital touchpoints and personalization tools'
      ]
    },
    {
      title: 'Operational Excellence',
      description: 'Streamline operations and improve efficiency through digital solutions',
      icon: FaCogs,
      details: [
        'Workflow automation and process redesign',
        'Process mining and data-driven performance improvement'
      ]
    },
    {
      title: 'Transformation Management',
      description: 'Turn your data into actionable insights for better decision making',
      icon: FaChartLine,
      details: [
        'Program oversight and value tracking',
        'Stakeholder engagement and digital upskilling'
      ]
    },
    {
      title: 'Governance & Compliance',
      description: 'Build scalable digital platforms that adapt to changing business needs',
      icon: FaShieldAlt,
      details: [
        'Governance frameworks and policy modernization',
        'Risk mitigation and regulatory alignment'
      ]
    },
    {
      title: 'Technology Modernization',
      description: 'Build scalable digital platforms that adapt to changing business needs',
      icon: FaLaptopCode,
      details: [
        'Legacy system migration and infrastructure upgrades',
        'Digital product development and platform-based innovation'
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
