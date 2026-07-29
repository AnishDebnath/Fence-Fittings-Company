import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { PRODUCTS, PRODUCT_CATEGORIES, ProductEntry } from '../../data/products';

export const ProductGrid: React.FC = () => {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const categories = useMemo(() => {
        return ['All', ...PRODUCT_CATEGORIES.map(c => c.name)];
    }, []);

    const filtered = useMemo(() => {
        return PRODUCTS.filter(p => {
            const matchCategory = activeCategory === 'All' || p.category === activeCategory;
            const matchSearch = !search ||
                p.name.toLowerCase().includes(search.toLowerCase()) ||
                p.category.toLowerCase().includes(search.toLowerCase()) ||
                p.description.toLowerCase().includes(search.toLowerCase());
            return matchCategory && matchSearch;
        });
    }, [activeCategory, search]);

    return (
        <section className="py-16 lg:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Search & Filter */}
                <div className="mb-12 space-y-6">
                    {/* Search bar */}
                    <div className="relative max-w-md mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full pl-12 pr-10 py-3 rounded-xl border border-slate-200 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                        {search && (
                            <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </div>

                    {/* Category pills */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                        ? 'bg-blue-900 text-white shadow-lg shadow-blue-200'
                                        : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results count */}
                <p className="text-sm text-slate-500 mb-6">
                    Showing {filtered.length} of {PRODUCTS.length} products
                    {activeCategory !== 'All' && ` in ${activeCategory}`}
                </p>

                {/* Product grid */}
                {filtered.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-slate-400 text-lg font-medium">No products found</p>
                        <p className="text-slate-400 text-sm mt-2">Try adjusting your search or filter</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filtered.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

const ProductCard: React.FC<{ product: ProductEntry }> = ({ product }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1">
            <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                {!imgError ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImgError(true)}
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                        <div className="text-center">
                            <svg className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xs">Image not available</span>
                        </div>
                    </div>
                )}
                <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-900/80 text-white px-2.5 py-1 rounded-full">
                        {product.category}
                    </span>
                </div>
            </div>
            <div className="p-5">
                <h3 className="font-bold text-slate-800 text-sm leading-snug mb-2 line-clamp-2">
                    {product.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {product.description}
                </p>
            </div>
        </div>
    );
};
