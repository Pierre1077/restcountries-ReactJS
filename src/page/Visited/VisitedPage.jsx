import React from 'react';
import Card from "../../components/Card/Card";
import './VisitedPage.css'

const VisitedPage = () => {
    const visitedCountries = JSON.parse(localStorage.getItem('visitedCountries')) || [];

    return (
        <div>
            <h2>Visited Countries</h2>
            <div className={'visitedCountry__container'}>
                {visitedCountries.map((country, index) => (
                    <div key={index}>
                        <div>
                            <Card key={index} {...country.props} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VisitedPage;
