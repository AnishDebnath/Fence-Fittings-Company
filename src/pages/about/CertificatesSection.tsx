import React from 'react';
import { FileCheck } from 'lucide-react';
import { ABOUT_PAGE_DATA, Certificate } from '../../data/about';

interface CertificatesSectionProps {
    onCertificateClick: (cert: Certificate) => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ onCertificateClick }) => {
    return (
        <section className="py-24 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Accreditations</span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-4">Certifications & Awards</h2>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        Recognized for our adherence to international quality standards and excellence in export performance.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ABOUT_PAGE_DATA.certificates.map((cert, index) => (
                        <div key={index} className="group relative bg-slate-50 rounded-xl p-4 border border-gray-100 shadow-sm cursor-pointer hover:shadow-lg transition-shadow duration-200" onClick={() => onCertificateClick(cert)}>
                            <div className="aspect-[3/4] bg-slate-100 rounded-lg overflow-hidden border border-slate-200 mb-4 relative shadow-inner">
                                {cert.image ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-contain p-1.5 bg-white group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center">
                                        <FileCheck className="w-12 h-12 text-blue-300" />
                                    </div>
                                )}
                            </div>
                            <div className="text-center">
                                <h4 className="font-bold text-slate-900 text-lg">{cert.title}</h4>
                                <p className="text-sm text-slate-500 font-medium mt-1">{cert.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
