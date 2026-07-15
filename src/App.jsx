import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider, LanguageContext } from './LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Borewell from './pages/Borewell';
import Solar from './pages/Solar';
import Geotechnical from './pages/Geotechnical';

import whatsappIcon from './logo/whatsapp.png';

const WhatsAppButton = () => {
  const { t } = useContext(LanguageContext);
  return (
    <a aria-label="WhatsApp" className="wa" href={t('phone1_href')} target="_blank" rel="noreferrer">
      <img src={whatsappIcon} style={{ width: '38px', height: '38px', objectFit: 'contain' }} alt="WhatsApp" />
    </a>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <WhatsAppButton />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/borewell" element={<Borewell />} />
          <Route path="/solar" element={<Solar />} />
          <Route path="/geotechnical" element={<Geotechnical />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
