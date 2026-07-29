import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '../../data/home';

interface WhyChooseUsProps {
    onContactClick: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onContactClick }) => {
    return (
        <section id="why-us" className="py-24 industrial-gradient text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">Unmatched Manufacturing Capabilities</h2>
                    <p className="text-blue-100/80">Our state-of-the-art infrastructure ensures every component meets rigorous international standards.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {WHY_CHOOSE_US.map((item, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
                            <CheckCircle2 className="w-8 h-8 text-blue-400 mb-4" />
                            <p className="font-bold text-lg leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
