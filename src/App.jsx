import { Routes, Route } from 'react-router-dom'
import FitnessLeadPage from './components/FitnessLeadPage'
import ThankYou from './components/ThankYou'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FitnessLeadPage />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  )
}

export default App
