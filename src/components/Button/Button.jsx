import React from 'react';

const Button = ({ content, onClick }) => {
    return (
        <div>
            <button type="text" onClick={onClick}>
                {content}
            </button>
        </div>
    );
};

export default Button;
