import React from 'react';
import { Hero } from './Hero';
import { TrustSection } from './TrustSection';
import { WhyChooseUs } from './WhyChooseUs';
import { ContactSection } from './ContactSection';
import { LandingOption } from '../../../types';

interface HomePageProps {
    currentOption: LandingOption;
    onContactClick: () => void;
    onAboutClick: () => void;
    onProductsClick?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ currentOption, onContactClick, onAboutClick, onProductsClick }) => {
    return (
        <>
            <Hero onCtaClick={onContactClick} onAboutClick={onAboutClick} onProductsClick={onProductsClick} />
            <TrustSection />
            <WhyChooseUs onContactClick={onContactClick} />
            <ContactSection currentOption={currentOption} />
        </>
    );
};
