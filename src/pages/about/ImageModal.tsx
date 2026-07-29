import React from 'react';
import { X } from 'lucide-react';
import { Certificate } from '../../data/about';

interface ImageModalProps {
    selectedImage: Certificate | null;
    onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ selectedImage, onClose }) => {
    if (!selectedImage) return null;

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200" onClick={onClose}>
            <div className="relative max-w-4xl my-auto" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-50"
                >
                    <X className="w-8 h-8" />
                </button>
                <div className="bg-white rounded-lg overflow-hidden">
                    {selectedImage.image && (
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="w-full h-full object-contain"
                            loading="eager"
                            decoding="sync"
                        />
                    )}
                    <div className="p-6 bg-slate-50 border-t border-gray-200">
                        <h3 className="text-xl font-bold text-slate-900">{selectedImage.title}</h3>
                        <p className="text-slate-600 mt-2">{selectedImage.subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
