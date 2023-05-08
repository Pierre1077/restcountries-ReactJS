import React, { useState } from "react";
import axios from "axios";

const Search = ({ onSearch }) => {
    const [searchDataCountry, setSearchDataCountry] = useState([]);

    function searchCountry(event) {
        const query = event.target.value;
        if (query !== "") {
            axios.get(`https://restcountries.com/v3.1/name/${query}`).then((response) => {
                setSearchDataCountry(response.data);
                onSearch(query); // appelle la fonction onSearch passée en tant que prop
            });
        } else {
            setSearchDataCountry([]);
            onSearch(""); // appelle la fonction onSearch avec une chaîne vide
        }
    }

    return (
        <div>
            <input type="search" placeholder="Search..." onChange={searchCountry} />

        </div>
    );
};

export default Search;
