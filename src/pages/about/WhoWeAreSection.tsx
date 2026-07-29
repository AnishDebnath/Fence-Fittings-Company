import React from 'react';
import { ABOUT_PAGE_DATA } from '../../data/about';
import aboutUsImage from '../../assets/images/about-us-facility.jpg';

export const WhoWeAreSection: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
                    <div className="space-y-6 sm:space-y-8">
                        <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-widest">
                            {ABOUT_PAGE_DATA.legacy}
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                            {ABOUT_PAGE_DATA.whoWeAre}
                        </h2>
                        <div className="space-y-4 sm:space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed">
                            <p>
                                {ABOUT_PAGE_DATA.description}
                            </p>
                            <p>
                                {ABOUT_PAGE_DATA.additionalInfo}
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={aboutUsImage}
                                className="w-full h-full object-cover"
                                alt="Industrial Precision"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 bg-white p-4 sm:p-8 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                            <p className="text-3xl sm:text-4xl font-black text-blue-900 leading-none">20+</p>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Years of Manufacturing Excellence</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
