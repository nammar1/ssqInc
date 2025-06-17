import {
  Box,
  Container, 
} from '@chakra-ui/react'
import { FaRocket, FaUsers, FaChartLine } from 'react-icons/fa'
import { WebHero } from '@/components/ui/WebHero'
import { getPageConfig } from '@/utils/pageConfigs'
import { useColorModeValue } from '@/components/ui/color-mode'
import { BigStepper } from '@/components/ui/BigStepper'
import { QuoteBox } from '@/components/ui/QuoteBox'
// Section Component for consistent styling
interface SectionProps {
  children: React.ReactNode
  bg?: string
  py?: number
}

const Section = ({ children, bg, py = 20 }: SectionProps) => (
  <Box bg={bg}>
    <Container maxW="1200px" py={py}>
      {children}
    </Container>
  </Box>
)

const STEPS = [
  {
    icon: FaRocket,
    title: 'Smart',
    description: `“Smart” means intelligent, strategic, and insight-driven. It’s where we uncover what truly matters before building anything. At SSQ, this is our discovery and diagnostics phase—where we conduct strategic consultations, stakeholder interviews, and technical assessments to understand the client’s challenges at their root. We define the 'why' behind the solution, ensuring that every engagement begins with clarity, alignment, and purpose.`
  },
  {
    icon: FaChartLine,
    title: 'Solution',
    description: `A “Solution” is more than a technical fix—it’s a thoughtfully engineered response to a well-understood problem. For SSQ, this is the execution phase. Here, our team designs and develops custom software, intelligent systems, or data and AI-driven platforms that are scalable, robust, and tailored to the client’s goals. We use agile methods and continuous feedback loops to ensure everything we build is not only functional—but also transformative.`
  },
  {
    icon: FaUsers,
    title: 'Quorum',
    description: `“Quorum” refers to the minimum group required to make decisions—but for us, it symbolizes collective empowerment and shared success. This is our support and enablement phase. We don’t just hand off projects—we stay engaged through ongoing training, maintenance, documentation, and advisory support. Quorum means building the internal capacity our clients need to sustain and scale what we’ve delivered. It’s how we ensure long-term resilience, not just short-term wins.`
  }
]


export default function OurProcess() {
  const config = getPageConfig('ourprocess')
  const sectionBg = useColorModeValue('gray.50', 'gray.900')
  
  return (
    <Box>
      {/* Enhanced WebHero */}
      <WebHero
        title={config.title}
        tagline={config.tagline}
        showText={config.showText}
      />

      <QuoteBox 
        quote={config.quote || ""}
      />

      {/* How It Works Section */}
      <Section bg={sectionBg}>
        <BigStepper 
          steps={STEPS}
          title="The SSQ Method: Three Steps to Transformative Tech"
          subtitle="Smart Solution Quorum Proprietary Three Step Process"
          colorScheme="purple"
        />
      </Section>
    </Box>
  )
}
