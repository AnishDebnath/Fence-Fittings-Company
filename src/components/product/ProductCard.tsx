import React, { useState } from 'react';
import { ProductEntry } from '../../data/products';

export const ProductCard: React.FC<{ product: ProductEntry; onClick?: () => void }> = ({ product, onClick }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 cursor-pointer"
            onClick={onClick}
        >
            <div className="aspect-square bg-slate-100 overflow-hidden relative">
                {!imgError ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
