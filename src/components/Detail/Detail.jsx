import React from 'react';

const Detail = ({capital, continent, officialName}) => {
    return (
        <div>
            <p>{capital}</p>
            <p>{continent}</p>
            <p>{officialName}</p>
        </div>
    );
};

export default Detail;