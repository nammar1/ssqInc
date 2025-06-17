import { Routes, Route } from 'react-router-dom'
import { Layout } from '@components/layout/Layout'
import Home from '@pages/Home'
import About from '@pages/About'
import Services from '@pages/Services'
import Contact from '@pages/Contact'
import NotFound from '@pages/NotFound'
import SoftwareDevelopment from '@pages/SoftwareDevelopment'
import DataEngineering from '@pages/DataEngineering'
import AISolutions from '@pages/AISolutions'
import CloudCyber from '@pages/CloudCyber'
import Digital from '@pages/Digital'
import Blog from '@pages/Blog'
import Investor from '@pages/Investor'
import Careers from '@pages/Careers'
import Privacy from '@pages/Privacy'
import OurProcess from '@/pages/OurProcess'
import Pricing from './pages/Pricing'
import Partners from './pages/Partners'
import Clients from './pages/Clients'
import Foundation from './pages/Foundation'
import Sustainability from './pages/Sustainability'
import Accelerators from './pages/Accelerators' 
import Aqira from './pages/Aqira'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/software" element={<SoftwareDevelopment />} />
        <Route path="/services/data" element={<DataEngineering />} />
        <Route path="/services/ai-ml" element={<AISolutions />} />
        <Route path="/services/cloud-cybersecurity" element={<CloudCyber />} />
        <Route path="/services/digital-transformation" element={<Digital />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/our-process" element={<OurProcess />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/accelerators" element={<Accelerators />} />
        <Route path="/aqira" element={<Aqira />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
