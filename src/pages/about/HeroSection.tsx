import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface HeroSectionProps {
    onBack: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBack }) => {
    return (
        <section className="industrial-gradient py-10 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <button
                    onClick={onBack}
                    className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors mb-8 font-bold uppercase tracking-widest text-xs"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                </button>
                <div className="max-w-3xl">
                    <h1 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">About Fence Fittings Company</h1>
                    <p className="text-xl text-blue-100/80 leading-relaxed font-medium">
                        Quality Manufacturing & Global Engineering Excellence.
                    </p>
                </div>
            </div>
        </section>
    );
};
