import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import LeadModal from './components/LeadModal';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ServiceDetail from './pages/ServiceDetail';
import CaseStudyDetail from './pages/CaseStudyDetail';
import PakamCaseStudy from './pages/PakamCaseStudy';
import CraftsquarreCaseStudy from './pages/CraftsquarreCaseStudy';
import MenoHavenCaseStudy from './pages/MenoHavenCaseStudy';
import Legal from './pages/Legal';
import Fellowship from './pages/Fellowship';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="services/:slug" element={<ServiceDetail />} />
            <Route path="work/pakam" element={<PakamCaseStudy />} />
            <Route path="work/craftsquarre" element={<CraftsquarreCaseStudy />} />
            <Route path="work/meno-haven" element={<MenoHavenCaseStudy />} />
            <Route path="work/:slug" element={<CaseStudyDetail />} />
            <Route path="fellowship" element={<Fellowship />} />
            <Route path="privacy" element={<Legal />} />
            <Route path="terms" element={<Legal />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <LeadModal />
    </ModalProvider>
  );
}

export default App;
