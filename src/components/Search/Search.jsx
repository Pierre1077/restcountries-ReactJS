import React, { useState } from "react";
import axios from "axios";
import './Search.css'

const Search = ({ onSearch }) => {
    const [searchDataCountry, setSearchDataCountry] = useState([]);

    function searchCountry(event) {
        const query = event.target.value;
        if (query !== "") {
            axios.get(`https://restcountries.com/v3.1/name/${query}`).then((response) => {

                    setSearchDataCountry(response.data);
                    onSearch(query);

            })
                .catch((error) => {
                    setSearchDataCountry([]);
                });
        } else {
            setSearchDataCountry([]);
            onSearch(""); // appelle la fonction onSearch avec une chaîne vide
        }
    }

    return (
        <div className={'search__container'}>
            <input type="search" placeholder="Search a specific country..." onChange={searchCountry} />
        </div>
    );
};

export default Search;
