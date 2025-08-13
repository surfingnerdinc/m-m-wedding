import GreenButton from '../components/GreenButton';
import React, { useState } from 'react';

const PhotoSection = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleLoadPhotos = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    // Custom Modal Component
    const ApologyModal = ({ isOpen, onClose }) => {
        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
                    <div className="p-8 text-center">    
                        <h3 className="text-2xl font-wedding font-bold text-gray-800 mb-4">Ups! 😅</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">Nie miałem czasu na dokończenie tego, wybaczcie :)</p>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 mx-auto mb-6"></div>
                        <p className="text-sm text-gray-500 mb-6">Galeria zdjęć będzie dostępna wkrótce! 📸</p>
                        <GreenButton 
                        onClick={onClose}
                        content={'Rozumiem ❤️'}/>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-wedding text-center my-8 text-gray-800">
                Podziel się z Nami Swoimi Wspomnieniami
            </h1>
            
            <div className="max-w-4xl mx-auto py-16">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 text-center">
                        <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Galeria Zdjęć</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Zobacz wszystkie magiczne chwile z naszego wielkiego dnia
                        </p>
                    </div>

                    <div className="p-8 text-center">
                        <div className="space-y-4">
                            <button
                                onClick={handleLoadPhotos}
                                className="bg-[#d8d1ba] hover:bg-[#bbaf87] text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
                            >
                                <div className="flex items-center space-x-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>Załaduj Galerię Zdjęć</span>
                                </div>
                            </button>
                            
                            <p className="text-sm text-gray-500">
                                Galeria zostanie otwarta w nowym oknie
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <ApologyModal isOpen={showModal} onClose={closeModal} />
        </div>
    );
};

export default PhotoSection;
