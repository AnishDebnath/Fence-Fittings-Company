import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND_NAME } from '../../data/constants';
import mainLogo from '@/assets/logo.jpg';

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <Link
                        to="/"
                        className="flex items-center space-x-3 cursor-pointer group"
                    >
                        <img
                            src={mainLogo}
                            alt="Fence Fittings Company"
                            className="w-12 h-12 flex-shrink-0 transition-transform duration-300 hover:scale-105 object-contain"
                        />

                        <div>
                            <h1 className="text-xs sm:text-xl font-extrabold text-blue-900 tracking-tight leading-none uppercase group-hover:text-blue-700 transition-colors">
                                {BRAND_NAME.split(' – ')[0]}
                            </h1>
                            <p className="text-[7px] sm:text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-0.5">Manufacturing & Export Excellence</p>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`font-medium transition-colors ${isActive('/') ? 'text-blue-900 font-bold' : 'text-slate-600 hover:text-blue-900'}`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/products"
                            className={`font-medium transition-colors ${isActive('/products') ? 'text-blue-900 font-bold' : 'text-slate-600 hover:text-blue-900'}`}
                        >
                            Products
                        </Link>
                        <Link
                            to="/about"
                            className={`font-medium transition-colors ${isActive('/about') ? 'text-blue-900 font-bold' : 'text-slate-600 hover:text-blue-900'}`}
                        >
                            About Us
                        </Link>
                        <div className="flex items-center space-x-4 border-l-2 pl-8 border-slate-300">
                            <Link
                                to="/contact"
                                className={`bg-blue-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200 flex items-center ${isActive('/contact') ? 'bg-blue-800 ring-2 ring-offset-2 ring-blue-900' : ''}`}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    <div className="md:block lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:block lg:hidden bg-white border-t border-gray-100 animate-in fade-in slide-in-from-top-4">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        <Link to="/" onClick={() => setIsOpen(false)} className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50">Home</Link>
                        <Link to="/products" onClick={() => setIsOpen(false)} className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50">Products</Link>
                        <Link to="/about" onClick={() => setIsOpen(false)} className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50">About Us</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-left px-3 py-4 text-base font-semibold text-blue-900 hover:bg-slate-50">Contact Us</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};
