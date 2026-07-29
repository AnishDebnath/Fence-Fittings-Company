import React from 'react';
import { HeroSection } from './HeroSection';
import { ContactInfoSection } from './ContactInfoSection';

interface ContactPageProps {
    onBack: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
    return (
        <div className="bg-white min-h-screen pt-20 animate-in fade-in duration-500">
            <HeroSection onBack={onBack} />
            <ContactInfoSection />
        </div>
    );
};
