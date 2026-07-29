import React from 'react';
import { ZeroDefectBadgeSVG, FiftyYearsBadgeSVG, IsoBadgeSVG } from '../../components/common/QualityBadgesSvg';

export const CredibilityBadges: React.FC = () => {
    return (
        <section className="py-16 bg-slate-50 border-y border-slate-200/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h3 className="text-xl font-extrabold text-blue-900 uppercase tracking-widest text-center">
                        Our Commitment to Quality
                    </h3>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1">
                        International Manufacturing Standards & Assurance
                    </p>
                </div>
                
                <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap py-2">
                    <div className="flex flex-col items-center group cursor-pointer">
                        <ZeroDefectBadgeSVG className="w-24 h-24 md:w-28 md:h-28" />
                        <span className="mt-2.5 text-xs font-bold text-slate-700 uppercase tracking-wider">Zero Defect Assured</span>
                    </div>

                    <div className="flex flex-col items-center group cursor-pointer">
                        <FiftyYearsBadgeSVG className="w-24 h-24 md:w-28 md:h-28" />
                        <span className="mt-2.5 text-xs font-bold text-slate-700 uppercase tracking-wider">50 Years Excellence</span>
                    </div>

                    <div className="flex flex-col items-center group cursor-pointer">
                        <IsoBadgeSVG className="w-24 h-24 md:w-28 md:h-28" />
                        <span className="mt-2.5 text-xs font-bold text-slate-700 uppercase tracking-wider">ISO 9001:2015 Certified</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

