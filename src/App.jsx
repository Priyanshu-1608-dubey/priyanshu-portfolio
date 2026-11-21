import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import OfferLetters from './pages/OfferLetters';
import Certificates from './pages/Certificates';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/offer-letters" element={<OfferLetters />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}