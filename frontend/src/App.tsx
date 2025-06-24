import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ComingSoonPage from './pages/Home'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoonPage />} />
      </Routes>
    </Router>
  )
}

export default App
