import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, CheckCircle2, ChevronRight, Send } from 'lucide-react';
import { PRODUCTS, getProductSpecTable } from '../../data/products';
import { PackagingSpecChart } from '../../components/product/PackagingSpecChart';
import { ProductCard } from '../../components/product/ProductCard';

export const ProductDetailPage: React.FC = () => {
    const navigate = useNavigate();
    const [imgError, setImgError] = useState(false);

    const gridStyle = {
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
    };

    const productId = window.location.pathname.split('/products/')[1];
    const product = PRODUCTS.find(p => p.id === productId);

    if (!product) {
        return (
            <div className="bg-white min-h-screen pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <Package className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-slate-700 mb-2">Product Not Found</h2>
                    <p className="text-slate-500 mb-8">The product you're looking for doesn't exist.</p>
                    <button
                        onClick={() => navigate('/products')}
                        className="inline-flex items-center space-x-2 bg-blue-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-800 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Products</span>
                    </button>
                </div>
            </div>
        );
    }

    const specTable = getProductSpecTable(product.id, product.name);

    const related = PRODUCTS
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="bg-white min-h-screen pt-20 animate-in fade-in duration-500">
            {/* Hero section with product title */}
            <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden industrial-gradient">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/20 transform skew-x-12 translate-x-32" />
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={gridStyle} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <button
                        onClick={() => navigate('/products')}
                        className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold uppercase tracking-widest text-xs">Back to Products</span>
                    </button>
                    <div className="w-full">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3">
                            {product.name}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
                        {/* Product image */}
                        <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100 min-w-0">
                            <div className="bg-slate-100 overflow-hidden">
                                {!imgError ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full max-w-full h-auto object-contain"
                                        onError={() => setImgError(true)}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                ) : (
                                    <div className="w-full h-64 flex items-center justify-center text-slate-300">
                                        <div className="text-center">
                                            <Package className="w-16 h-16 mx-auto mb-2" />
                                            <span className="text-sm">Image not available</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Product details */}
                        <div className="space-y-6 sm:space-y-8 min-w-0">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Product Details</h2>
                                <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                                    {product.description}
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-100">
                                <h3 className="font-bold text-slate-800 mb-3 sm:mb-4 text-base sm:text-lg">Product Information</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center text-sm">
                                        <span className="text-slate-400 w-24 font-medium">Product ID</span>
                                        <span className="text-slate-700 font-bold">{product.id}</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="text-slate-400 w-24 font-medium">Category</span>
                                        <span className="inline-flex items-center space-x-1.5">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full" />
                                            <span className="text-slate-700 font-medium">{product.category}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Packaging & Size Specification Chart */}
                            <PackagingSpecChart specData={specTable} productName={product.name} />

                            {/* Features */}
                            <div className="bg-blue-50 rounded-2xl p-4 sm:p-6 border border-blue-100">
                                <h3 className="font-bold text-slate-800 mb-3 sm:mb-4 text-base sm:text-lg">Key Features</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Premium quality material",
                                        "Durable construction",
                                        "Industry standard compliance",
                                        "Global quality certified"
                                    ].map((feature, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-600 text-sm sm:text-base">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <div className="bg-blue-900 rounded-2xl p-6 sm:p-8 text-white text-center">
                                <h3 className="text-lg sm:text-xl font-bold mb-2">Interested in this product?</h3>
                                <p className="text-blue-200 mb-6 text-sm sm:text-base">Contact us for pricing, bulk orders, and custom requirements.</p>
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="inline-flex items-center space-x-2 bg-white text-blue-900 px-6 sm:px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all"
                                >
                                    <Send className="w-4 h-4" />
                                    <span>Request a Quote</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    {related.length > 0 && (
                        <div className="mt-12 sm:mt-16">
                            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 sm:mb-8">Related Products</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                                {related.map(relatedProduct => (
                                    <ProductCard
                                        key={relatedProduct.id}
                                        product={relatedProduct}
                                        onClick={() => navigate(`/products/${relatedProduct.id}`)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};
