import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Career from './pages/Career';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import PlatForms from './pages/PlatForms';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
// import Resources from './pages/Resources';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
function App() {
  return (
    <div className=" font-inter text-primary">
      <Header />
      <Router>
        {/* <div style={{marginTop: '85px'}} className="w-full p-4 container m-auto"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platforms" element={<PlatForms />} />
            <Route path="/career" element={<Career />} />
            <Route path="/pricing" element={<Pricing />} />
            {/* <Route path="/resources" element={<Resources />} /> */}
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solution" element={<Solutions />} />
            <Route path="/TermsOfUse" element={<TermsOfUse />} />
           
          </Routes>
        {/* </div> */}
      </Router>
      <Footer />
    </div>
  )
}

export default App;
