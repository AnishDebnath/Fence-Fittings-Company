import React from 'react';
import { ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';

interface FeaturedProductsProps {
    onProductsClick?: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onProductsClick }) => {
    const featured = PRODUCTS.slice(0, 8);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-800 mb-6">
                        Our Product Range
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        Explore our comprehensive range of fence fittings — from hinges and clamps to gate hardware
                        and tension bars. Quality crafted for durability and performance.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
                    {featured.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:-translate-y-1"
                        >
                            <div className="aspect-square bg-slate-50 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-4">
                                <p className="text-xs font-bold text-blue-900/60 uppercase tracking-wider mb-1">
                                    {product.category}
                                </p>
                                <h3 className="font-bold text-slate-800 text-sm leading-snug line-clamp-2">
                                    {product.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {onProductsClick && (
                    <div className="text-center">
                        <button
                            onClick={onProductsClick}
                            className="inline-flex items-center space-x-3 bg-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200 group"
                        >
                            <span>View All Products</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};
