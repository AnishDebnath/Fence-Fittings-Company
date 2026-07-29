
import React, { useState } from 'react';
import { Header } from './src/components/common/Header';
import { Footer } from './src/components/common/Footer';
import { HomePage } from './src/pages/home/page';
import { AboutPage } from './src/pages/about/page';
import { ContactPage } from './src/pages/contact/page';
import { ProductsPage } from './src/pages/products/page';
import { ProductDetailPage } from './src/pages/products/ProductDetailPage';
import { LandingOption, View } from './types';

type ViewType = 'home' | 'about' | 'contact' | 'products' | 'productDetail';

const App: React.FC = () => {
  const [currentOption, setCurrentOption] = useState<LandingOption>(LandingOption.CATALOGUE);
  const [view, setView] = useState<ViewType>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('');

  const navigateToContact = () => {
    setView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAbout = () => {
    setView('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToProducts = () => {
    setView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
    setView('productDetail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (v: ViewType) => {
    setView(v);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={navigateTo} currentView={view as View} />

      {view === 'home' && <HomePage currentOption={currentOption} onContactClick={navigateToContact} onAboutClick={navigateToAbout} onProductsClick={navigateToProducts} onProductClick={handleProductClick} />}
      {view === 'about' && <AboutPage onBack={() => navigateTo('home')} />}
      {view === 'contact' && <ContactPage onBack={() => navigateTo('home')} />}
      {view === 'products' && <ProductsPage onBack={() => navigateTo('home')} onProductClick={handleProductClick} />}
      {view === 'productDetail' && <ProductDetailPage productId={selectedProductId} onBack={() => navigateTo('products')} />}

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
