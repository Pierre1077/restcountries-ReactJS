import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";

const Countries = () => {
    const [useData, setUseData] = useState([]);
    const [searched, setSearched] = useState("");
    const [checked, setChecked] = useState("");

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((countries) => {
            setUseData(countries.data);
        });
    }, []);

    function handleSearch(query) {
        setSearched(query);
    }

    function handleFilter(check) {
        console.log(check)
        setChecked(check);
    }

    return (
        <div>
            <Search onSearch={handleSearch} />
            <Filter onFilter={handleFilter}/>
            {useData
                .filter((c) => c.name.common.toLowerCase().includes(searched.toLowerCase()))
                .filter((c) => checked === "" || c.continents.includes(checked))
                .map((c, index) => (
                    <div key={index}>
                        <Card
                            name={c.name.common}
                            flag={c.flags.svg}
                            flagAlt={c.flags.alt}
                            capital={c.capital}
                            continent={c.continents}
                            officialName={c.name.official}
                        />
                    </div>
                ))}
        </div>
    );
};

export default Countries;
