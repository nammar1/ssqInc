import {
  Box,
} from '@chakra-ui/react'
import { FaBrain, FaRobot, FaEye, FaChartLine, FaDatabase, FaUsers } from 'react-icons/fa'
import { WebHero } from '@/components/ui/WebHero'
import { QuoteBox } from '@/components/ui/QuoteBox'
import { getPageConfig } from '@/utils/pageConfigs'
import { AccordionList } from '@/components/ui/AccordionList'

export default function AISolutions() {
  const config = getPageConfig('aisolutions')

  const features = [
    {
      title: 'ML Strategy & Use-Case Prioritization',
      description: 'Strategic AI planning and implementation',
      icon: FaBrain,
      details: [
        'Opportunity framing and ROI modelling',
        'Ethical AI and responsible innovation guidance'
      ]
    },
    {
      title: 'Model Development & MLOps',
      description: 'End-to-end machine learning solutions',
      icon: FaRobot,
      details: [
        'End-to-end pipelines for training, validation, and deployment',
        'Feature stores, experiment tracking, and continuous retraining'
      ]
    },
    {
      title: 'Natural Language & Generative AI',
      description: 'Advanced NLP and generative AI solutions',
      icon: FaDatabase,
      details: [
        'NLP, conversational interfaces, and RAG architectures',
        'Custom LLM fine-tuning and prompt engineering'
      ]
    },
    {
      title: 'Computer Vision & IoT Analytics',
      description: 'Visual intelligence and IoT solutions',
      icon: FaEye,
      details: [
        'Image/video recognition, object tracking, edge inference',
        'Sensor fusion and real-time event processing'
      ]
    },
    {
      title: 'Predictive & Prescriptive Analytics',
      description: 'Advanced analytics and decision support',
      icon: FaChartLine,
      details: [
        'Time-series forecasting and optimization models',
        'Scenario simulation and decision support tools'
      ]
    },
    {
      title: 'AI Adoption & Change Enablement',
      description: 'Organizational AI transformation',
      icon: FaUsers,
      details: [
        'Center-of-Excellence setup and capability upskilling',
        'Governance, monitoring, and bias mitigation frameworks'
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
