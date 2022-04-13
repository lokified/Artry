import React from 'react';
import './Button.css';

const STYLES = ['btn_primary', 'btn_secondary', 'btn_outline'];
const SIZES = [ 'btn_md', 'btn_large', 'btn_sm'];

export const Button = (
    {
        children,
        type,
        onClick,
        buttonStyle,
        buttonSize
    }
) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
        </button>
    )

}