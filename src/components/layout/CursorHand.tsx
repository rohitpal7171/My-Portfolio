import React from 'react';

const CursorHand = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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
      d="M19.93,9.58A1.18,1.18,0,0,0,18.75,8.4H15.34V4.5a1.18,1.18,0,0,0-2.36,0V8.4H11.8V2.78a1.18,1.18,0,0,0-2.36,0V8.4H8.26V5.68a1.18,1.18,0,0,0-2.36,0V9.58H5.08a1.18,1.18,0,0,0-1.1,1.25,1.13,1.13,0,0,0,.64,1l6.7,6.72a3.5,3.5,0,0,0,2.47.93h4.3a1.18,1.18,0,0,0,1.18-1.18V10.68a1.18,1.18,0,0,0-.93-1.1Z"
      transform="translate(-1.4 -0.5)"
      stroke="url(#cursor-gradient)"
      strokeWidth="1.5"
      fill="url(#cursor-gradient)"
      fillOpacity="0.7"
      filter="url(#glow)"
    />
  </svg>
);

export default CursorHand;
