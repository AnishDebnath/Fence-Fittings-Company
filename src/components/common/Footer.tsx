import React from 'react';
import { Linkedin, Facebook, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND_NAME, COMPANY_DESCRIPTION } from '../../data/constants';
import mainLogo from '@/assets/logo.jpg';
import { Watermark } from '../Watermark';

export const Footer: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <footer className="bg-[#0B1120] text-white pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="flex items-center space-x-3 mb-8 cursor-pointer hover:opacity-80 transition-opacity">
                        <Link to="/" className="flex items-center space-x-3">
                            <img
                                src={mainLogo}
                                alt="Fence Fittings Company"
                                className="w-12 h-12 flex-shrink-0 transition-transform duration-300 hover:scale-105 object-contain"
                            />
                            <h1 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight uppercase text-white">{BRAND_NAME.split(' – ')[0]}</h1>
                        </Link>
                    </div>

                    <p className="text-slate-400 max-w-lg leading-relaxed text-lg mb-10">
                        {COMPANY_DESCRIPTION.short}
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        <Link
                            to="/"
                            className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                        >
                            Home
                        </Link>
                        <span className="text-slate-600">•</span>
                        <Link
                            to="/products"
                            className={`text-sm font-medium transition-colors ${isActive('/products') ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                        >
                            Products
                        </Link>
                        <span className="text-slate-600">•</span>
                        <Link
                            to="/about"
                            className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                        >
                            About Us
                        </Link>
                        <span className="text-slate-600">•</span>
                        <Link
                            to="/contact"
                            className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                        >
                            Contact Us
                        </Link>
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

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} {BRAND_NAME}. All Rights Reserved.</p>
                    <div className="flex items-center space-x-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Export</a>
                    </div>
                </div>
                <Watermark />
            </div>
        </footer>
    );
};
