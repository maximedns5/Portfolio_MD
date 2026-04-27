import { LazyMotion, domMax } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const ProjectNodePage = lazy(() => import('./pages/ProjectNodePage'));

const baseName = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function App() {
  return (
    <BrowserRouter basename={baseName}>
      <LazyMotion features={domMax}>
      <Layout>
        <Suspense fallback={<div className="pageShell">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectNodePage />} />
            <Route path="/projects/:groupId/:projectId" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Layout>
      </LazyMotion>
    </BrowserRouter>
  );
}
