import React from 'react';

const CursorArrow = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: 'rotate(-10deg)' }}
  >
    <defs>
      <linearGradient id="cursor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FDE047', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#D946EF', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#6F2DBD', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      d="M4.21,3.42L18.1,11.2a2.33,2.33,0,0,1,0,4.06L4.21,23.08a2.33,2.33,0,0,1-3.48-2.04V5.46A2.33,2.33,0,0,1,4.21,3.42Z"
      transform="translate(-0.73 -1.75)"
      stroke="url(#cursor-gradient)"
      strokeWidth="1.5"
      fill="url(#cursor-gradient)"
      fillOpacity="0.7"
      filter="url(#glow)"
    />
  </svg>
);

export default CursorArrow;
