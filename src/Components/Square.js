import React from 'react';

const Square = ({ value, onClick }) => {
    return (
        <button className="btn btn-outline-dark square" onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;