// src/components/ui/card.js
import React from "react";

export const Card = ({ className = "", children }) => (
    <div className={`rounded-xl bg-white shadow-md ${className}`}>{children}</div>
);

export const CardContent = ({ className = "", children }) => (
    <div className={`p-4 ${className}`}>{children}</div>
);
