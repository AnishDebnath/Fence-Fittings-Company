import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface InquiryFormProps {
    type: 'CATALOGUE' | 'CONTACT';
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ type }) => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100 text-center animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                <p className="text-slate-600 mb-8">
                    {type === 'CATALOGUE'
                        ? "Your catalogue download link has been sent to your email. Our export team will reach out shortly."
                        : "Thank you for your inquiry. Our technical sales team will review your requirements and respond within 24 hours."}
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 font-bold hover:underline"
                >
                    Send another inquiry
                </button>
            </div>
        );
    }

    // Consistent styling for all inputs
    const inputClasses = "w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900 transition-all outline-none placeholder:text-gray-400 shadow-sm";

    return (
        <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 pointer-events-none" />

            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {type === 'CATALOGUE' ? 'Get the Complete Catalogue' : 'Submit Business Inquiry'}
                </h3>
                <p className="text-slate-500 mb-8 text-sm">
                    {type === 'CATALOGUE'
                        ? 'Detailed specifications, product codes, and material grades.'
                        : 'Fill out the form below and our export specialists will assist you.'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Full Name</label>
                            <input required type="text" className={inputClasses} placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Company Name</label>
                            <input required type="text" className={inputClasses} placeholder="Global Fencing Inc." />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Email Address</label>
                            <input required type="email" className={inputClasses} placeholder="john@company.com" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Country</label>
                            <select required className={inputClasses}>
                                <option value="">Select Country</option>
                                <option>United States</option>
                                <option>United Kingdom</option>
                                <option>Australia</option>
                                <option>Canada</option>
                                <option>Germany</option>
                                <option>UAE</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Phone / WhatsApp</label>
                        <input required type="tel" className={inputClasses} placeholder="+1 (555) 000-0000" />
                    </div>

                    {type === 'CONTACT' && (
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Requirement / Message</label>
                            <textarea rows={4} className={inputClasses} placeholder="Describe your specific engineering requirements or project details..." />
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-3 transition-all ${loading ? 'bg-slate-200 cursor-not-allowed text-slate-400' : 'bg-blue-900 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20'}`}
                    >
                        {loading ? (
                            <span className="animate-pulse">Processing...</span>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                <span>{type === 'CATALOGUE' ? 'Connect Now' : 'Send Inquiry'}</span>
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};
