import React from 'react';
import styles from '../../styles/Home.module.css';

export const LanguageTranslator = () => {
    return (
        <div className="flex text-sm py-5">
            <p className="px-2">My Trips</p>
            <div className="flex">
                <p className="px-2">|</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                </svg>
                <span>EN (S)</span>
            </div>
        </div>
    );
};
