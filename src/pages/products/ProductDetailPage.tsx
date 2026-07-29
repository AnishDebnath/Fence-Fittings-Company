import React, { useState } from 'react';
import { ArrowLeft, Package, CheckCircle2, ChevronRight, Send } from 'lucide-react';
import { PRODUCTS, ProductEntry } from '../../data/products';

interface ProductDetailPageProps {
    productId: string;
    onBack: () => void;
    onProductClick?: (productId: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId, onBack, onProductClick }) => {
    const product = PRODUCTS.find(p => p.id === productId);
    const [imgError, setImgError] = useState(false);

    if (!product) {
        return (
            <div className="bg-white min-h-screen pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <Package className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-slate-700 mb-2">Product Not Found</h2>
                    <p className="text-slate-500 mb-8">The product you're looking for doesn't exist.</p>
                    <button
                        onClick={onBack}
                        className="inline-flex items-center space-x-2 bg-blue-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-800 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Products</span>
                    </button>
                </div>
            </div>
        );
    }

    const related = PRODUCTS
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="bg-white min-h-screen pt-20 animate-in fade-in duration-500">
            {/* Hero section with product title */}
            <section className="relative py-12 lg:py-16 overflow-hidden industrial-gradient">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/20 transform skew-x-12 translate-x-32" />
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <button
                        onClick={onBack}
                        className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold uppercase tracking-widest text-xs">Back to Products</span>
                    </button>
                    <div className="w-full">
                        <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-3">
                            {product.name}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Product image */}
                        <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                            <div className="aspect-square bg-slate-100">
                                {!imgError ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                        onError={() => setImgError(true)}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                                        <div className="text-center">
                                            <Package className="w-16 h-16 mx-auto mb-2" />
                                            <span className="text-sm">Image not available</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Product details */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-800 mb-4">Product Details</h2>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {product.description}
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <h3 className="font-bold text-slate-800 mb-4">Product Information</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center text-sm">
                                        <span className="text-slate-400 w-28 font-medium">Product ID</span>
                                        <span className="text-slate-700 font-bold">{product.id}</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="text-slate-400 w-28 font-medium">Category</span>
                                        <span className="inline-flex items-center space-x-1.5">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full" />
                                            <span className="text-slate-700 font-medium">{product.category}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                                <h3 className="font-bold text-slate-800 mb-4">Key Features</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Premium quality material",
                                        "Durable construction",
                                        "Industry standard compliance",
                                        "Global quality certified"
                                    ].map((feature, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <div className="bg-blue-900 rounded-2xl p-8 text-white text-center">
                                <h3 className="text-xl font-bold mb-2">Interested in this product?</h3>
                                <p className="text-blue-200 mb-6 text-sm">Contact us for pricing, bulk orders, and custom requirements.</p>
                                <button
                                    onClick={onBack}
                                    className="inline-flex items-center space-x-3 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg group"
                                >
                                    <Send className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                    <span>Contact Us for Inquiry</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related products */}
            {related.length > 0 && (
                <section className="pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="border-t border-slate-200 pt-16">
                            <h2 className="text-2xl font-bold text-slate-800 mb-8">Related Products</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                {related.map(rp => (
                                    <div
                                        key={rp.id}
                                        className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 cursor-pointer"
                                        onClick={() => {
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                            // Force page re-render by navigating away and back
                                            onBack();
                                        }}
                                    >
                                        <div className="aspect-square bg-slate-50 overflow-hidden">
                                            <img
                                                src={rp.image}
                                                alt={rp.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <p className="text-xs font-bold text-blue-900/60 uppercase tracking-wider mb-1">{rp.category}</p>
                                            <h3 className="font-bold text-slate-800 text-sm leading-snug line-clamp-2">{rp.name}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};
