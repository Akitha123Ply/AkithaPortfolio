import React from 'react';

export const Card = ({ children, className = '', hover = false }) => {
  return (
    <div className={`
      bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 
      ${hover ? 'hover:shadow-xl hover:scale-105 transition-all duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};