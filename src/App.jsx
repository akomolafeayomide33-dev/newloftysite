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
import GrowthSprint from './pages/GrowthSprint';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <section className="pt-36 pb-24 bg-white min-h-[75vh] flex items-center justify-center">
      <div className="container mx-auto px-6 text-center max-w-xl">
        <span className="inline-block py-2 px-4 bg-primary text-white font-black uppercase tracking-widest text-xs mb-6">
          404 Error
        </span>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-black">
          Page Not <span className="text-primary">Found</span>
        </h1>
        <p className="text-gray-600 font-bold mb-8 text-base">
          The page you are looking for doesn't exist or has moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-black uppercase tracking-widest text-sm hover:bg-primary transition-colors"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="sprint" element={<GrowthSprint />} />
          <Route path="growth-sprint" element={<GrowthSprint />} />
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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <LeadModal />
    </ModalProvider>
  );
}

export default App;
