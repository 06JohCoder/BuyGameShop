// File: @/components/ui/table.tsx

import React from 'react';
export const Table = ({ children, className = '' }) => (
    <table className={`table-auto w-full border-collapse ${className}`}>{children}</table>
);

export const Thead = ({ children }) => (
    <thead className="bg-gray-200 text-left uppercase text-xs tracking-wider text-gray-600">{children}</thead>
);

export const Tbody = ({ children }) => <tbody>{children}</tbody>;

export const Tr = ({ children }) => <tr className="border-b hover:bg-gray-50 transition-colors">{children}</tr>;

export const Th = ({ children }) => (
    <th className="px-4 py-3 font-semibold">{children}</th>
);

export const Td = ({ children }) => (
    <td className="px-4 py-3 text-sm text-gray-700">{children}</td>
);