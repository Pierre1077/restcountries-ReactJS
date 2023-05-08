import React, {useState} from 'react';
import axios from "axios";

const Filter = ({ onFilter }) => {

    const [selectedContinent, setSelectedContinent] = useState(false);
    const filterContinent = ["All", "Africa", "South America", "North America" ,"Asia", "Europe", "Oceania"];

    function selectCountry(event) {
        const check = event.target.id;
        if (check === "All"){
            axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
                setSelectedContinent(response.data);
                onFilter(check);
            });
        } else {
            axios.get(`https://restcountries.com/v3.1/region/${check}`).then((response) => {
                setSelectedContinent(response.data);
                onFilter(check);
            });
        }

    }
    return (
        <div>
            {
                filterContinent.map((continent, index) =>
                    <div key={index}>
                        <label htmlFor={continent}>{continent}</label>
                        <input
                            type="radio"
                            name="continents"
                            id={continent}
                            value={continent}
                            onChange={selectCountry}
                        />
                    </div>
                )
            }
        </div>
    )
};

export default Filter;