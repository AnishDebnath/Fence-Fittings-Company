import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_NAME } from '../../data/constants';
import { View } from '../../../types';
import logoWhite from '../../../assets/logo/fence-fittings-company logo.png';

interface HeaderProps {
    onNavigate: (view: View) => void;
    currentView: View;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = (v: View) => {
        onNavigate(v);
        setIsOpen(false);
    };

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div
                        className="flex items-center space-x-3 cursor-pointer"
                        onClick={() => handleNav('home')}
                    >
                        <div className="w-14 h-14  rounded-lg flex flex-col items-center justify-center p-1 shadow-md hover:shadow-lg transition-all">
                            <img src={logoWhite} alt="Fence Fittings Company logo" className="w-full h-full object-contain" />
                        </div>

                        <div>
                            <h1 className="text-xl font-extrabold text-blue-900 tracking-tight leading-none uppercase">
                                {BRAND_NAME.split(' – ')[0]}
                            </h1>
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Manufacturing & Export Excellence</p>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => handleNav('home')}
                            className={`font-medium transition-colors ${currentView === 'home' ? 'text-blue-900 font-bold' : 'text-slate-600 hover:text-blue-900'}`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => handleNav('about')}
                            className={`font-medium transition-colors ${currentView === 'about' ? 'text-blue-900 font-bold' : 'text-slate-600 hover:text-blue-900'}`}
                        >
                            About Us
                        </button>
                        <div className="flex items-center space-x-4 border-l-2 pl-8 border-slate-300">
                            <button
                                onClick={() => handleNav('contact')}
                                className={`bg-blue-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200 flex items-center ${currentView === 'contact' ? 'bg-blue-800 ring-2 ring-offset-2 ring-blue-900' : ''}`}
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 animate-in fade-in slide-in-from-top-4">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        <button onClick={() => handleNav('home')} className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50">Home</button>
                        <button onClick={() => handleNav('about')} className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50">About Us</button>
                        <button onClick={() => handleNav('contact')} className="block w-full text-left px-3 py-4 text-base font-semibold text-blue-900 hover:bg-slate-50">Contact Us</button>
                    </div>
                </div>
            )}
        </nav>
    );
};
