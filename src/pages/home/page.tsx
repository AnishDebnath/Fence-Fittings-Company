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
}

export const HomePage: React.FC<HomePageProps> = ({ currentOption, onContactClick, onAboutClick }) => {
    return (
        <>
            <Hero onCtaClick={onContactClick} onAboutClick={onAboutClick} />
            <TrustSection />
            <WhyChooseUs onContactClick={onContactClick} />
            <ContactSection currentOption={currentOption} />
        </>
    );
};
