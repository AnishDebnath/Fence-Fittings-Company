import React from 'react';
import { MapPin, Zap, Phone, Mail } from 'lucide-react';
import { ABOUT_PAGE_DATA } from '../../data/about';

export const CompanyInfoSection: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Company Information</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-6">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-4">Office Address</h4>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                            {ABOUT_PAGE_DATA.officeInfo.office}
                        </p>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-6">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-4">Factory Address</h4>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                            {ABOUT_PAGE_DATA.officeInfo.factory}
                        </p>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm md:col-span-2 lg:col-span-1">
                        <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-6">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-4">Contact Details</h4>
                        <ul className="space-y-3 text-sm text-slate-600 font-medium">
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-900 font-bold">IN:</span>
                                <span>{ABOUT_PAGE_DATA.officeInfo.contacts.india}</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-900 font-bold">USA:</span>
                                <span>{ABOUT_PAGE_DATA.officeInfo.contacts.usa}</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-blue-400" />
                                <span className="text-xs md:text-sm">{ABOUT_PAGE_DATA.officeInfo.contacts.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
