import React from 'react';
import { Mail, MapPin, Phone, Clock, Globe, Building2, Smartphone } from 'lucide-react';
import { InquiryForm } from '../../components/ui/InquiryForm';
import { CONTACT_PAGE_INFO } from '../../data/contact';

export const ContactInfoSection: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Contact Information Column */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                                <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                                Headquarters
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Registered Office</p>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {CONTACT_PAGE_INFO.headquarters.office}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Factory Unit</p>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {CONTACT_PAGE_INFO.headquarters.factory}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-900 p-8 rounded-2xl shadow-lg text-white">
                            <h3 className="text-lg font-bold mb-6 flex items-center">
                                <Globe className="w-5 h-5 text-blue-300 mr-2" />
                                Global Reach
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">India Contact</p>
                                    <div className="flex items-center space-x-2">
                                        <Phone className="w-4 h-4 text-blue-300" />
                                        <span className="font-medium">{CONTACT_PAGE_INFO.phone.india}</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">USA Support</p>
                                    <div className="flex items-center space-x-2">
                                        <Smartphone className="w-4 h-4 text-blue-300" />
                                        <span className="font-medium">{CONTACT_PAGE_INFO.phone.usa}</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-blue-800">
                                    <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">Email Us</p>
                                    <div className="flex items-center space-x-2">
                                        <Mail className="w-4 h-4 text-blue-300" />
                                        <span className="font-medium">{CONTACT_PAGE_INFO.phone.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
                            <Clock className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                                <h4 className="font-bold text-slate-900">Business Hours</h4>
                                <p className="text-sm text-slate-500 mt-1">{CONTACT_PAGE_INFO.businessHours.days}</p>
                                <p className="text-sm text-slate-900 font-medium">{CONTACT_PAGE_INFO.businessHours.time}</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="lg:col-span-2">
                        <InquiryForm type="CONTACT" />
                    </div>

                </div>
            </div>
        </section>
    );
};
