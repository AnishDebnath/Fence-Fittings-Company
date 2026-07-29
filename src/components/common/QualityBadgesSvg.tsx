import React from 'react';

// Badge 1: Zero Defect Quality Assured
export const ZeroDefectBadgeSVG: React.FC<{ className?: string }> = ({ className = "w-36 h-36" }) => {
    return (
        <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} transition-transform duration-300 hover:scale-105 filter drop-shadow-md`}
        >
            <defs>
                <linearGradient id="goldGrad1" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="50%" stopColor="#D97706" />
                    <stop offset="100%" stopColor="#B45309" />
                </linearGradient>
                <linearGradient id="blueGrad1" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#1E3A8A" />
                </linearGradient>
                <path id="circlePathZeroDefect" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
            </defs>

            {/* Outer Scalloped / Starburst Ring */}
            <circle cx="100" cy="100" r="92" stroke="url(#goldGrad1)" strokeWidth="3" strokeDasharray="6 3" />
            <circle cx="100" cy="100" r="86" fill="url(#blueGrad1)" />

            {/* Inner Gold Border Ring */}
            <circle cx="100" cy="100" r="82" stroke="url(#goldGrad1)" strokeWidth="3" fill="none" />
            <circle cx="100" cy="100" r="62" stroke="url(#goldGrad1)" strokeWidth="1.5" fill="none" />

            {/* Circular Text */}
            <text fill="#FFFFFF" fontSize="11" fontWeight="800" letterSpacing="2.5">
                <textPath href="#circlePathZeroDefect" startOffset="50%" textAnchor="middle">
                    • ZERO DEFECT • QUALITY ASSURED
                </textPath>
            </text>

            {/* Central Shield Graphic */}
            <path
                d="M100 52 L124 64 V88 C124 104 114 118 100 124 C86 118 76 104 76 88 V64 L100 52 Z"
                fill="url(#goldGrad1)"
            />
            
            {/* Checkmark in Shield */}
            <path
                d="M90 88 L97 95 L110 80"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Sub-banner Text */}
            <rect x="52" y="132" width="96" height="20" rx="10" fill="url(#goldGrad1)" />
            <text x="100" y="146" fill="#1E3A8A" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="1">
                100% TESTED
            </text>
        </svg>
    );
};

// Badge 2: 50 Years Manufacturing Excellence
export const FiftyYearsBadgeSVG: React.FC<{ className?: string }> = ({ className = "w-36 h-36" }) => {
    return (
        <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} transition-transform duration-300 hover:scale-105 filter drop-shadow-md`}
        >
            <defs>
                <linearGradient id="goldGrad2" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FBBF24" />
                    <stop offset="50%" stopColor="#D97706" />
                    <stop offset="100%" stopColor="#92400E" />
                </linearGradient>
                <linearGradient id="blueGrad2" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1E3A8A" />
                    <stop offset="100%" stopColor="#0F172A" />
                </linearGradient>
                <path id="circlePath50Years" d="M 100, 100 m -68, 0 a 68,68 0 1,1 136,0 a 68,68 0 1,1 -136,0" />
            </defs>

            {/* Outer Decorative Gear/Laurel Ring */}
            <circle cx="100" cy="100" r="92" fill="none" stroke="url(#goldGrad2)" strokeWidth="4" />
            <circle cx="100" cy="100" r="85" fill="url(#blueGrad2)" />
            <circle cx="100" cy="100" r="81" stroke="url(#goldGrad2)" strokeWidth="2" strokeDasharray="8 4" fill="none" />

            {/* Circular Text */}
            <text fill="#F3F4F6" fontSize="10.5" fontWeight="800" letterSpacing="2">
                <textPath href="#circlePath50Years" startOffset="50%" textAnchor="middle">
                    ★ 50 YEARS ★ EXCELLENCE
                </textPath>
            </text>

            {/* Big "50" Center */}
            <text x="100" y="102" fill="url(#goldGrad2)" fontSize="52" fontWeight="900" textAnchor="middle" dominantBaseline="middle" letterSpacing="-1">
                50
            </text>

            <text x="100" y="128" fill="#FFFFFF" fontSize="9" fontWeight="800" textAnchor="middle" letterSpacing="3">
                YEARS
            </text>

            {/* Curved Ribbon at Bottom */}
            <path d="M 45 140 Q 100 168 155 140 L 150 162 Q 100 186 50 162 Z" fill="url(#goldGrad2)" />
            <text x="100" y="160" fill="#0F172A" fontSize="8.5" fontWeight="900" textAnchor="middle" letterSpacing="1.5">
                EST. 1974 - 2024
            </text>
        </svg>
    );
};

// Badge 3: ISO 9001:2015 Certified
export const IsoBadgeSVG: React.FC<{ className?: string }> = ({ className = "w-36 h-36" }) => {
    return (
        <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} transition-transform duration-300 hover:scale-105 filter drop-shadow-md`}
        >
            <defs>
                <linearGradient id="silverGrad3" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#E2E8F0" />
                    <stop offset="50%" stopColor="#94A3B8" />
                    <stop offset="100%" stopColor="#475569" />
                </linearGradient>
                <linearGradient id="blueGrad3" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1E40AF" />
                    <stop offset="100%" stopColor="#1E3A8A" />
                </linearGradient>
                <path id="circlePathIso" d="M 100, 100 m -68, 0 a 68,68 0 1,1 136,0 a 68,68 0 1,1 -136,0" />
            </defs>

            {/* Outer ISO Seal Frame */}
            <circle cx="100" cy="100" r="92" stroke="url(#silverGrad3)" strokeWidth="4" fill="none" />
            <circle cx="100" cy="100" r="85" fill="url(#blueGrad3)" />
            <circle cx="100" cy="100" r="80" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="10 3" fill="none" />

            {/* Outer Ring Text */}
            <text fill="#FFFFFF" fontSize="9.5" fontWeight="800" letterSpacing="2">
                <textPath href="#circlePathIso" startOffset="50%" textAnchor="middle">
                    • ISO 9001:2015 • CERTIFIED
                </textPath>
            </text>

            {/* Center Box for ISO */}
            <rect x="52" y="70" width="96" height="42" rx="6" fill="#FFFFFF" />
            <text x="100" y="98" fill="#1E3A8A" fontSize="24" fontWeight="900" textAnchor="middle" letterSpacing="1">
                ISO
            </text>

            {/* Quality Management Text */}
            <text x="100" y="132" fill="#E2E8F0" fontSize="8" fontWeight="800" textAnchor="middle" letterSpacing="1">
                QUALITY MANAGEMENT
            </text>
            <text x="100" y="144" fill="#93C5FD" fontSize="7.5" fontWeight="700" textAnchor="middle" letterSpacing="1.5">
                SYSTEM REGISTERED
            </text>
        </svg>
    );
};
