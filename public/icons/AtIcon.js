import React from 'react';

const AtIcon = ({ color }) => (
    <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
        <g
            style={{
                stroke: color, // Use the color prop for stroke color
                strokeWidth: 1.7,
                fill: 'none',
                fillRule: 'evenodd',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
            }}
            transform="translate(-2 -2)"
        >
            <circle cx="12.05" cy="12.05" r="4.05" />
            <path d="m20.7743017 14.0117821c.1476927-.6468292.2256983-1.3201961.2256983-2.0117821 0-4.97056275-4.0294373-9-9-9-4.97056275 0-9 4.02943725-9 9 0 4.9705627 4.02943725 9 9 9h3" />
            <path d="m15.6 14c.8666585 1.3333333 1.7 1.915 2.7 1.915s2.1597061-.5641287 2.4743017-1.9032179" />
        </g>
    </svg>
);

export default AtIcon;
