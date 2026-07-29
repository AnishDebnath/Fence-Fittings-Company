import React from 'react';
import { Package, ChevronRight, CheckCircle2 } from 'lucide-react';
import aboutUsImg from '../../assets/images/about-us-facility.jpg';

interface HeroProps {
    onAboutClick?: () => void;
    onProductsClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onAboutClick, onProductsClick }) => {

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden industrial-gradient">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                </svg>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/20 transform skew-x-12 translate-x-32" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 order-1 lg:order-1">
                        <div className="inline-flex items-center space-x-2 bg-blue-800/40 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full whitespace-nowrap">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse flex-shrink-0" />
                            <span className="text-blue-100 text-[9px] sm:text-xs font-bold uppercase tracking-widest">Trusted Fence Fitting Manufacturer</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                            Manufacturers of Fence Fittings
                        </h1>

                        <p className="text-lg text-blue-100/90 max-w-xl font-medium leading-relaxed">
                            Manufacturers & exporters of pressed steel, malleable, and aluminum fence fittings with a commitment to quality and manufacturing excellence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={onProductsClick}
                                className="flex items-center justify-center space-x-3 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-2xl shadow-blue-900/40 group"
                            >
                                <Package className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span>Our Products</span>
                            </button>

                            <button
                                onClick={onAboutClick}
                                className="flex items-center justify-center space-x-3 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
                            >
                                <span>About us</span>
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-6 pt-4">
                            {["Premium Quality", "Global Delivery"].map((tag) => (
                                <div key={tag} className="flex items-center text-blue-200 text-sm font-medium">
                                    <CheckCircle2 className="w-4 h-4 mr-2 text-blue-400" />
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative order-2 lg:order-2">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                            <img
                                src={aboutUsImg}
                                alt="Fence Fittings Manufacturing Plant"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 max-h-[420px]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/20 to-transparent flex items-end p-6 hidden sm:flex">
                                <div className="text-white">
                                    <p className="font-bold text-lg">State-of-the-Art Manufacturing Plant</p>
                                    <p className="text-xs text-blue-200 mt-1">In-house galvanizing, die & mold development, and quality laboratory</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};
