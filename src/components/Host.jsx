import React from 'react';

const Host = ({ name, imgUrl }) => {
    return (
        <div>
            <h3>{name}</h3>
            <img src={imgUrl} alt={name} />
        </div>
    );
};

export default Host;