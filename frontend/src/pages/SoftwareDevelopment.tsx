import {
  Box,
} from '@chakra-ui/react'
import { FaCode, FaCloud, FaDatabase, FaChartLine, FaCogs, FaLaptopCode } from 'react-icons/fa'
import { WebHero } from '@/components/ui/WebHero'
  import { getPageConfig } from '@/utils/pageConfigs'
import { AccordionList } from '@/components/ui/AccordionList'
import { QuoteBox } from '@/components/ui/QuoteBox'

export default function SoftwareDevelopment() {
  const config = getPageConfig('software')

  const features = [
    {
      title: 'Product & Solution Design',
      description: 'User-centric design and architecture solutions',
      icon: FaCode,
      details: [
        'User-centric discovery and product visioning',
        'Architecture blueprints and rapid prototyping'
      ]
    },
    {
      title: 'Agile Engineering',
      description: 'Modern development practices and methodologies',
      icon: FaCogs,
      details: [
        'Iterative development with Scrum / Kanban',
        'Test-driven development, DevSecOps, and code quality automation'
      ]
    },
    {
      title: 'System Integration',
      description: 'Seamless integration of complex systems',
      icon: FaDatabase,
      details: [
        'API and micro-services orchestration',
        'Enterprise application and middleware integration'
      ]
    },
    {
      title: 'Platform Engineering',
      description: 'Cloud-native and infrastructure solutions',
      icon: FaCloud,
      details: [
        'Cloud-native and serverless architectures',
        'CI/CD pipelines and infrastructure-as-code'
      ]
    },
    {
      title: 'Performance & Reliability',
      description: 'Ensuring system performance and reliability',
      icon: FaChartLine,
      details: [
        'Load testing, tuning, and SRE practices',
        'Observability, incident response, and rollback strategies'
      ]
    },
    {
      title: 'Lifecycle Evolution',
      description: 'Continuous improvement and maintenance',
      icon: FaLaptopCode,
      details: [
        'Feature enhancement and technical-debt remediation',
        'Managed services and roadmap stewardship'
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
