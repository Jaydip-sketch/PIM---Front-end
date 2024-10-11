import React from 'react';
import "../index.css"
const BaseButton = ({ id, className, type, onClick, children,disabled }) => {
    return (
        <button id={id} className={`custom-button ${className}`} disabled={disabled} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default BaseButton;