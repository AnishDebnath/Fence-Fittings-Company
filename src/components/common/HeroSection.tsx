import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface HeroSectionProps {
    onBack: () => void;
    title: string;
    subtitle: string;
    children?: React.ReactNode;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBack, title, subtitle, children }) => {
    return (
        <section className="relative py-8 lg:py-10 overflow-hidden industrial-gradient">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                </svg>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/20 transform skew-x-12 translate-x-32" />
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
            }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <button
                    onClick={onBack}
                    className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6 group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold uppercase tracking-widest text-xs">Back to Home</span>
                </button>

                <div className="w-full">
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-4">{title}</h1>
                    <p className="text-lg text-blue-100/90 w-full font-medium leading-relaxed mb-6">{subtitle}</p>
                    {children}
                </div>
            </div>
        </section>
    );
};
