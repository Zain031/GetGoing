import React from "react";

const Button = ({ logo, color, label, HovarBgColor,borderColor,hovarText }) => {
    return (
        <button
            className={`w-full gap-48 p-5 mb-4 border font-bold text-sm py-3 ${borderColor} ${color} rounded-3xl flex items-center justify-left transition-colors ${HovarBgColor} ${hovarText}`}
        >
            <span>
                <img src={logo} alt="" className="w-6" />
            </span>
            {label}
        </button>
    );
};

export default Button;
