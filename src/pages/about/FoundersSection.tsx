import React from 'react';
import { ABOUT_PAGE_DATA } from '../../data/about';

export const FoundersSection: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 sm:mb-20">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Visionary Leadership</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-4">Our Founders</h2>
                </div>

                <div className="space-y-12 sm:space-y-16 lg:space-y-24">
                    {ABOUT_PAGE_DATA.founders.map((founder, index) => (
                        <div key={founder.id} className={`flex flex-col md:flex-row lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 ${index === 0 ? '' : 'md:flex-row-reverse lg:flex-row-reverse'}`}>
                            <div className="w-full md:w-2/3 lg:w-2/3 order-2 md:order-1 lg:order-1">
                                <h3 className="text-xl sm:text-2xl font-black text-blue-900 mb-1">{founder.name}</h3>
                                <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 sm:mb-6">{founder.role}</p>
                                <div className="space-y-3 sm:space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
                                    <p>
                                        {founder.bio}
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-1/3 order-1 md:order-2 lg:order-2 flex justify-center">
                                <div className="w-64 sm:w-70 aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative">
                                    <img
                                        src={founder.image}
                                        className="w-full h-full object-cover object-center"
                                        alt={founder.name}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 border-[12px] sm:border-[16px] border-white/10 m-4 sm:m-6 rounded-2xl pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
