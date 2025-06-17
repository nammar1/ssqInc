import {
  Box,
} from '@chakra-ui/react'
import { FaDatabase, FaChartLine, FaCloud, FaShieldAlt, FaLaptopCode, FaCogs } from 'react-icons/fa'
import { WebHero } from '@/components/ui/WebHero'
import { QuoteBox } from '@/components/ui/QuoteBox'
import { getPageConfig } from '@/utils/pageConfigs'
import { AccordionList } from '@/components/ui/AccordionList'

export default function DataEngineering() {
  const config = getPageConfig('dataengineering')

  const features = [
    {
      title: 'Data Strategy & Governance',
      description: 'Comprehensive data strategy and governance solutions',
      icon: FaDatabase,
      details: [
        'Maturity assessments and roadmap definition',
        'Policies for quality, lineage, and stewardship'
      ]
    },
    {
      title: 'Modern Data Engineering',
      description: 'Advanced data pipeline and architecture solutions',
      icon: FaCloud,
      details: [
        'Real-time and batch pipeline development',
        'Lakehouse, warehouse, and delta architecture implementation'
      ]
    },
    {
      title: 'Master & Metadata Management',
      description: 'Data quality and metadata management',
      icon: FaShieldAlt,
      details: [
        'Golden-record creation and entity resolution',
        'Cataloging, discovery, and semantic layers'
      ]
    },
    {
      title: 'Analytics & Visualization',
      description: 'Business intelligence and data visualization',
      icon: FaChartLine,
      details: [
        'Self-service BI enablement and dashboarding',
        'Storytelling with data for business stakeholders'
      ]
    },
    {
      title: 'Data Products & APIs',
      description: 'Reusable data assets and services',
      icon: FaLaptopCode,
      details: [
        'Reusable data assets and domain-oriented services',
        'Monetization and consumption frameworks'
      ]
    },
    {
      title: 'DataOps & Quality Automation',
      description: 'Continuous data quality and operations',
      icon: FaCogs,
      details: [
        'Continuous integration/testing for pipelines',
        'Monitoring, alerting, and anomaly detection'
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
