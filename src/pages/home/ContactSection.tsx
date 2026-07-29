import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { InquiryForm } from '../../components/ui';
import { HOME_CONTACT_INFO as CONTACT_INFO } from '../../data/home';
import { LandingOption } from '../../../types';

interface ContactSectionProps {
    currentOption: LandingOption;
}

const ICON_MAP = {
    MapPin,
    Mail,
    Phone
};

export const ContactSection: React.FC<ContactSectionProps> = ({ currentOption }) => {
    return (
        <section id="contact" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Connect with Global Experts</h2>
                            <p className="text-slate-600 leading-relaxed">Our dedicated export desk is available to discuss your specific requirements, project timelines, and custom engineering needs.</p>
                        </div>

                        <div className="space-y-6">
                            {[CONTACT_INFO.office, CONTACT_INFO.factory, CONTACT_INFO.exportSales, CONTACT_INFO.phone].map((info, idx) => {
                                const IconComponent = ICON_MAP[info.icon as keyof typeof ICON_MAP];
                                return (
                                    <div key={idx} className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-900 shrink-0">
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{info.title}</h4>
                                            <p className="text-sm text-slate-500">{info.detail}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="pt-6 border-t border-gray-200">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Business Hours</p>
                            <p className="text-sm text-slate-600 font-medium">{CONTACT_INFO.businessHours}</p>
                        </div>
                    </div>

                    <div id="contact-form">
                        <InquiryForm type={currentOption} />
                    </div>
                </div>
            </div>
        </section>
    );
};
