import React from 'react';
import { ABOUT_PAGE_DATA } from '../../data/about';

export const CredibilityBadges: React.FC = () => {
    return (
        <section className="py-20 bg-slate-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest text-center">Our Commitment to Quality</h3>
                </div>
                <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
                    {[
                        { image: ABOUT_PAGE_DATA.credentials.satisfaction.image },
                        { image: ABOUT_PAGE_DATA.credentials.years.image },
                        { image: ABOUT_PAGE_DATA.credentials.iso.image }
                    ].map((badge, i) => (
                        <div key={i} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow p-6">
                            {badge.image && (
                                <div className="bg-gray-50 w-40 h-40 rounded-2xl flex items-center justify-center overflow-hidden">
                                    <img
                                        src={badge.image}
                                        alt="Badge"
                                        className="w-4/5 h-4/5 object-contain"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
