import React from 'react';
import { Linkedin, Facebook, Twitter } from 'lucide-react';
import { BRAND_NAME, COMPANY_DESCRIPTION } from '../../data/constants';
import mainLogo from '@/assets/logo.jpg';
import { Watermark } from '../Watermark';

interface FooterProps {
    onNavigate: (view: 'home' | 'about' | 'contact' | 'products') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-[#0B1120] text-white pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-16">
                    <div
                        className="flex items-center space-x-3 mb-8 cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => onNavigate('home')}
                    >
                        <img
                            src={mainLogo}
                            alt="Fence Fittings Company"
                            className="w-12 h-12 flex-shrink-0 transition-transform duration-300 hover:scale-105 object-contain"
                        />
                        <h1 className="text-2xl font-black tracking-tight uppercase text-white">{BRAND_NAME.split(' – ')[0]}</h1>
                    </div>

                    <p className="text-slate-400 max-w-lg leading-relaxed text-lg mb-10">
                        {COMPANY_DESCRIPTION.short}
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        <button onClick={() => onNavigate('home')} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Home</button>
                        <span className="text-slate-600">•</span>
                        <button onClick={() => onNavigate('products')} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Products</button>
                        <span className="text-slate-600">•</span>
                        <button onClick={() => onNavigate('about')} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">About Us</button>
                        <span className="text-slate-600">•</span>
                        <button onClick={() => onNavigate('contact')} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Contact Us</button>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="group p-3 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 ring-1 ring-white/10">
                            <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white" />
                        </a>
                        <a href="#" className="group p-3 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 ring-1 ring-white/10">
                            <Facebook className="w-5 h-5 text-slate-400 group-hover:text-white" />
                        </a>
                        <a href="#" className="group p-3 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 ring-1 ring-white/10">
                            <Twitter className="w-5 h-5 text-slate-400 group-hover:text-white" />
                        </a>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} {BRAND_NAME}. All Rights Reserved.</p>
                    <div className="flex items-center space-x-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Export</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
                <Watermark />
            </div>
        </footer>
    );
};
