import React from 'react';
import { TRUST_BADGES } from '../../data/badges';

export const TrustSection: React.FC = () => {
    return (
        <section className="bg-white py-12 border-b border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile Marquee View */}
                <div className="md:hidden marquee-mask overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap gap-12 w-fit py-4">
                        {[...TRUST_BADGES, ...TRUST_BADGES].map((badge, idx) => {
                            const IconComponent = badge.icon;
                            return (
                                <div key={idx} className="flex flex-col items-center text-center space-y-3 shrink-0">
                                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-900">
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-600 uppercase tracking-tight whitespace-normal max-w-[120px]">
                                        {badge.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Desktop Grid View */}
                <div className="hidden md:grid grid-cols-5 gap-8 items-center justify-center">
                    {TRUST_BADGES.map((badge, idx) => {
                        const IconComponent = badge.icon;
                        return (
                            <div key={idx} className="flex flex-col items-center text-center space-y-3 group">
                                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                                    <IconComponent className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-bold text-slate-600 uppercase tracking-tight max-w-[120px]">
                                    {badge.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
