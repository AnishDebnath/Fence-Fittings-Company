import React from 'react';
import { Linkedin, Facebook, Twitter } from 'lucide-react';
import { BRAND_NAME, COMPANY_DESCRIPTION } from '../../data/constants';
import logoBlue from '../../../assets/logo/fence-fittings-company logo.png';
import { Watermark } from '../Watermark';

interface FooterProps {
    onNavigate: (view: 'home' | 'about' | 'contact') => void;
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
                        <div className="w-12 h-12 bg-white rounded-lg flex flex-col items-center justify-center p-1 shadow-lg shadow-white/5">
                            <img src={logoBlue} alt="Fence Fittings Company logo" className="w-full h-full object-contain" />
                        </div>
                        <h1 className="text-2xl font-black tracking-tight uppercase text-white">{BRAND_NAME.split(' – ')[0]}</h1>
                    </div>

                    <p className="text-slate-400 max-w-lg leading-relaxed text-lg mb-10">
                        {COMPANY_DESCRIPTION.short}
                    </p>

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
