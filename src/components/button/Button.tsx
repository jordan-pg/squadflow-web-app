import React from 'react';

interface ButtonProps {
    text: string;
}

const Button = ({ text }: ButtonProps) => {
    return (
        <button className='button' type="button">
            {text}
        </button>
    );
};

export default Button;
