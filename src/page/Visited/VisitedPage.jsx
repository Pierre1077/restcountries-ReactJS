import React, {useState} from "react";
import Visited from "../../components/Visited/Visited";
import Button from "../../components/Button/Button";


const VisitedPage = ({ visitedCountries, buttons }) => {

    const [selectedCountry, setSelectedCountry] = useState(visitedCountries);

    return (
        <div>
            <h2>Page Visited Countries</h2>

            {/*<Visited visitedCountries={visitedCountries} />*/}
            {selectedCountry.map((button, index) => (
                <div key={index}>{button}</div>
            ))}

        </div>
    );
};

export default VisitedPage;
