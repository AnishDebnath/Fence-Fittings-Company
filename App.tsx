
import React, { useState } from 'react';
import { Header } from './src/components/common/Header';
import { Footer } from './src/components/common/Footer';
import { HomePage } from './src/pages/home/page';
import { AboutPage } from './src/pages/about/page';
import { ContactPage } from './src/pages/contact/page';
import { ProductsPage } from './src/pages/products/page';
import { LandingOption, View } from './types';

type ViewType = 'home' | 'about' | 'contact' | 'products';

const App: React.FC = () => {
  const [currentOption, setCurrentOption] = useState<LandingOption>(LandingOption.CATALOGUE);
  const [view, setView] = useState<ViewType>('home');

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

  const navigateTo = (v: ViewType) => {
    setView(v);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={navigateTo} currentView={view as View} />

      {view === 'home' && <HomePage currentOption={currentOption} onContactClick={navigateToContact} onAboutClick={navigateToAbout} onProductsClick={navigateToProducts} />}
      {view === 'about' && <AboutPage onBack={() => navigateTo('home')} />}
      {view === 'contact' && <ContactPage onBack={() => navigateTo('home')} />}
      {view === 'products' && <ProductsPage onBack={() => navigateTo('home')} />}

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
