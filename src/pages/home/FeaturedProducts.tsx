import React from 'react';
import { ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../../components/product/ProductCard';

interface FeaturedProductsProps {
    onProductsClick?: () => void;
    onProductClick?: (productId: string) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onProductsClick, onProductClick }) => {
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    {featured.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onClick={() => onProductClick?.(product.id)}
                        />
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

