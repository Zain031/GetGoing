import React from "react";

const Button = ({
    logo,
    color,
    label,
    HovarBgColor,
    borderColor,
    hovarText,
}) => {
    return (
        <button
            className={`w-full gap-48 p-5 mb-4 border font-bold text-sm py-4 ${borderColor} ${color} rounded-full flex items-center justify-left transition-colors ${HovarBgColor} ${hovarText} font-poppins`}
        >
            <span className="text-3xl">{logo}</span>
            {label}
        </button>
    );
};

export default Button;
