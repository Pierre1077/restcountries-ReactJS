import React from 'react';

const Visited = ({visitedCountries}) => {



    return (
        <div>
            <h2>Components Visited Countries</h2>
            {visitedCountries?.length === 0 ? (
                <p>No countries visited yet</p>
            ) : (
                <ul>
                    {visitedCountries?.map((country, index) => (
                        <li key={index}>{country.name.common}</li>
                    ))}
                </ul>
            )}
        </div>

    );
};

export default Visited;