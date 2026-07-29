import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroSection } from '../../components/common/HeroSection';
import { ContactInfoSection } from './ContactInfoSection';

export const ContactPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white min-h-screen pt-20 animate-in fade-in duration-500">
            <HeroSection onBack={() => navigate('/')} title="Contact Us" subtitle="Global Support & Manufacturing Headquarters." />
            <ContactInfoSection />
        </div>
    );
};
