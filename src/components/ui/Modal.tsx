import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    size?: 'sm' | 'md' | 'lg'; // Add size options
    children: ReactNode; // Modal content
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, size = 'md', children }) => {
    if (!isOpen) return null;

    // Determine width based on size prop
    const sizeClasses = {
        sm: 'w-[90%] md:w-[65%] lg:w-[45%]', 
        md: 'w-[95%] md:w-[75%] lg:w-[55%]',
        lg: 'w-[95%] md:w-[80%]',
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 pt-20 md:pt-0 md:flex md:justify-center md:items-center z-50 overflow-y-auto"
            onClick={onClose}
        >
            <div
                className={`bg-white rounded-lg py-6 px-6 mx-auto relative ${sizeClasses[size]}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold mb-4">{title}</h2>

                    <button
                        className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
                        onClick={onClose}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                {/* Close Button */}

                

                {/* Modal Content */}
                <div className='w-full h-[98%] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
