import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Certificate } from '../../data/about';
import { HeroSection } from '../../components/common/HeroSection';
import { WhoWeAreSection } from './WhoWeAreSection';
import { CredibilityBadges } from './CredibilityBadges';
import { FoundersSection } from './FoundersSection';
import { CertificatesSection } from './CertificatesSection';
import { PlantTeamSection } from './PlantTeamSection';
import { CompanyInfoSection } from './CompanyInfoSection';
import { ImageModal } from './ImageModal';

export const AboutPage: React.FC = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState<Certificate | null>(null);

    React.useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    return (
        <div className="bg-white min-h-screen pt-20 animate-in fade-in duration-500">
            <HeroSection onBack={() => navigate('/')} title="About Fence Fittings Company" subtitle="Quality Manufacturing & Global Engineering Excellence." />
            <WhoWeAreSection />
            <CredibilityBadges />
            <FoundersSection />
            <CertificatesSection onCertificateClick={setSelectedImage} />
            <PlantTeamSection />
            <CompanyInfoSection />
            <ImageModal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
        </div>
    );
};
