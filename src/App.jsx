import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Donate from './pages/Donation/Donate';
import Landingpage from './pages/Landingpage';
import Footer from './components/Footer';
import Service from './pages/Services/Service';
import Contact from './pages/Contact/Contact';
import Form from './pages/Contact/Form';
import Gallery from './pages/Gallery/Gallery';
import Team from './pages/OurTeam/Team';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
