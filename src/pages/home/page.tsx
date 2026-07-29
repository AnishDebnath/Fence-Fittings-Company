import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from './Hero';
import { TrustSection } from './TrustSection';
import { FeaturedProducts } from './FeaturedProducts';
import { WhyChooseUs } from './WhyChooseUs';
import { ContactSection } from './ContactSection';
import { LandingOption } from '../../../types';

interface HomePageProps {
    currentOption: LandingOption;
}

export const HomePage: React.FC<HomePageProps> = ({ currentOption }) => {
    const navigate = useNavigate();

    const handleContactClick = () => navigate('/contact');
    const handleAboutClick = () => navigate('/about');
    const handleProductsClick = () => navigate('/products');
    const handleProductClick = (productId: string) => navigate(`/products/${productId}`);

    return (
        <>
            <Hero onAboutClick={handleAboutClick} onProductsClick={handleProductsClick} />
            <TrustSection />
            <FeaturedProducts onProductsClick={handleProductsClick} onProductClick={handleProductClick} />
            <WhyChooseUs onContactClick={handleContactClick} />
            <ContactSection currentOption={currentOption} />
        </>
    );
};
