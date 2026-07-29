
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './src/components/common/Header';
import { Footer } from './src/components/common/Footer';

// Lazy load page components for code splitting
const HomePage = React.lazy(() => import('./src/pages/home/page').then(m => ({ default: m.HomePage })));
const AboutPage = React.lazy(() => import('./src/pages/about/page').then(m => ({ default: m.AboutPage })));
const ContactPage = React.lazy(() => import('./src/pages/contact/page').then(m => ({ default: m.ContactPage })));
const ProductsPage = React.lazy(() => import('./src/pages/products/page').then(m => ({ default: m.ProductsPage })));
const ProductDetailPage = React.lazy(() => import('./src/pages/products/ProductDetailPage').then(m => ({ default: m.ProductDetailPage })));

// Loading fallback
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-900 border-t-transparent" />
  </div>
);

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:productId" element={<ProductDetailPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
