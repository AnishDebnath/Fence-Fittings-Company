import React from 'react';
import { ABOUT_PAGE_DATA } from '../../data/about';

export const PlantTeamSection: React.FC = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Our Facilities</span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-4">Our Plant & Team</h2>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        State-of-the-art manufacturing facility with a dedicated team committed to excellence and quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {ABOUT_PAGE_DATA.plantImages.map((item) => (
                        <div key={item.id} className="relative h-auto lg:h-80 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group">
                            <img
                                src={item.image}
                                alt={item.alt}
                                className="w-full h-auto lg:h-full lg:object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <p className="text-white font-semibold px-4 py-4 w-full text-sm">{item.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
