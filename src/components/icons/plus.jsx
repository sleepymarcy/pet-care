import * as React from "react";

function Plus(props) {
    return (
        <svg
            width={200}
            height={200}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx={100} cy={100} r={100} fill="#3CE6B5" />
            <rect
                x={50}
                y={117.237}
                width={34.473}
                height={100}
                rx={14}
                transform="rotate(-90 50 117.237)"
                fill="#000"
            />
            <rect x={83} y={50} width={34.473} height={100} rx={14} fill="#000" />
        </svg>
    );
}

export default Plus;