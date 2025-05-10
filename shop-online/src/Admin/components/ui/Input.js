import React from 'react';

export function Input({ className = '', ...props }) {
    return (
        <input
            className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${className}`}
            {...props}
        />
    );
}