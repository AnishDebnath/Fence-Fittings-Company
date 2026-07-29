import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { HeroSection } from '../../components/common/HeroSection';
import { ProductGrid } from './ProductGrid';

export const ProductsPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white min-h-screen pt-20 animate-in fade-in duration-500">
            <HeroSection
                onBack={() => navigate('/')}
                title="Our Products"
                subtitle="Premium fence fittings for every application. Quality crafted for durability and performance."
            >
                <div className="flex flex-wrap gap-6">
                    {["58 Products", "6 Categories", "Global Quality"].map(tag => (
                        <div key={tag} className="flex items-center text-blue-200 text-sm font-medium">
                            <CheckCircle2 className="w-4 h-4 mr-2 text-blue-400" />
                            {tag}
                        </div>
                    ))}
                </div>
            </HeroSection>
            <ProductGrid onProductClick={(productId) => navigate(`/products/${productId}`)} />
        </div>
    );
};
