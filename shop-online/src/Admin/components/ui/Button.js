import React from 'react';

export function Button({ children, onClick, className = '', variant = 'default', size = 'md', ...props }) {
    const base = 'rounded px-3 py-1.5 font-medium transition-colors duration-200';
    const variants = {
        default: 'bg-blue-600 text-white hover:bg-blue-700',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
    };
    const sizes = {
        sm: 'text-sm',
        md: 'text-base',
    };
    return (
        <button onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    );
}