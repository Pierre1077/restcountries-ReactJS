import React from 'react';
import Card from "../../components/Card/Card";

const VisitedPage = () => {
    const visitedCountries = JSON.parse(localStorage.getItem('visitedCountries')) || [];

    return (
        <div>
            <h1>Visited Countries</h1>
            {visitedCountries.map((country, index) => (
                <div key={index}>
                    <div>
                        <Card key={index} {...country.props} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VisitedPage;
