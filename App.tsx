import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import AnimatePresence from 'framer-motion/dist/es/components/AnimatePresence/index.mjs';

// Import Page Components
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import CurriculumPage from './pages/CurriculumPage';
import InstructorsPage from './pages/InstructorsPage';
import PricingPage from './pages/PricingPage';
import FaqPage from './pages/FaqPage';

// A wrapper to handle loading screen logic
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // On route change, show loading screen
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 1000); // 1 second loading simulation

    return () => clearTimeout(timer);
  }, [location.pathname]); // Trigger on path change

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        {children}
      </div>
    </>
  );
};


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/features" element={<PageWrapper><FeaturesPage /></PageWrapper>} />
        <Route path="/curriculum" element={<PageWrapper><CurriculumPage /></PageWrapper>} />
        <Route path="/instructors" element={<PageWrapper><InstructorsPage /></PageWrapper>} />
        <Route path="/pricing" element={<PageWrapper><PricingPage /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FaqPage /></PageWrapper>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;