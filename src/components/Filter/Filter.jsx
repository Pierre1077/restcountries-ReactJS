import React, {useState} from 'react';
import axios from "axios";
import './Filter.css'

const Filter = ({ onFilter }) => {

    const [selectedContinent, setSelectedContinent] = useState(false);
    const filterContinent = ["All", "Africa", "South America", "North America" ,"Asia", "Europe", "Oceania"];

    const [showFilter, setShowFilter] = useState(false);

    function toggleFilter() {
        setShowFilter(!showFilter);
    }


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
        <div className={'filter__container'}>
            <div onClick={toggleFilter} className={'toggleFilter'}>
                {showFilter ? <i class="fa-solid fa-chevron-down"></i> : <i class="fa-solid fa-chevron-up"></i> }
            </div>
            {showFilter ?
                <div className={'filter__wrapper'}>
                    {
                        filterContinent.map((continent, index) =>
                            <div key={index} className={'filter__item'}>
                               <div className={'filter__input'}>
                                   <input
                                       type="radio"
                                       name="continents"
                                       id={continent}
                                       value={continent}
                                       onChange={selectCountry}
                                   />
                               </div>
                                <div className={'filter__label'}>
                                    <label htmlFor={continent}>{continent}</label>
                                </div>

                            </div>
                        )
                    }
                </div>: ''}
        </div>
    )
};

export default Filter;