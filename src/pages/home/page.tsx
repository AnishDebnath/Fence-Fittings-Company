import React from 'react';
import { Hero } from './Hero';
import { TrustSection } from './TrustSection';
import { FeaturedProducts } from './FeaturedProducts';
import { WhyChooseUs } from './WhyChooseUs';
import { ContactSection } from './ContactSection';
import { LandingOption } from '../../../types';

interface HomePageProps {
    currentOption: LandingOption;
    onContactClick: () => void;
    onAboutClick: () => void;
    onProductsClick?: () => void;
    onProductClick?: (productId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ currentOption, onContactClick, onAboutClick, onProductsClick, onProductClick }) => {
    return (
        <>
            <Hero onAboutClick={onAboutClick} onProductsClick={onProductsClick} />
            <TrustSection />
            <FeaturedProducts onProductsClick={onProductsClick} onProductClick={onProductClick} />
            <WhyChooseUs onContactClick={onContactClick} />
            <ContactSection currentOption={currentOption} />
        </>
    );
};
