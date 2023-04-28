import React from 'react';

interface ButtonProps {
    text: string;
}

const Button = ({ text }: ButtonProps) => {
    return (
        <div style={{height: '100vh'}}>
        <button type="button">
            hello
        </button>

        </div>
    );
};

export default Button;
