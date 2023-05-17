import React, {useEffect, useState} from 'react';
import Countries from "../../components/Countries/Countries";
import Button from "../../components/Button/Button";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";
import Card from "../../components/Card/Card";
import axios from "axios";
import './Home.css'

const Home = ({handleCountryVisited, handleButtonClick}) => {

    const [useData, setUseData] = useState([]);
    const [searched, setSearched] = useState("");
    const [checked, setChecked] = useState("");


    useEffect(() => {
        const storedData = localStorage.getItem('useData');
        if (storedData) {
            setUseData(JSON.parse(storedData));
        } else {
            axios.get("https://restcountries.com/v3.1/all").then((countries) => {
                const dataWithVisited = countries.data.map((c) => ({ ...c, visited: false }));
                setUseData(dataWithVisited);
            });
        }
    }, []);



    function handleSearch(query) {
        setSearched(query);
    }

    function handleFilter(check) {
        console.log(check);
        setChecked(check);
    }

    function toggleVisited(country) {
        const updatedData = useData.map((c) =>
            c.name.common === country.name.common ? { ...c, visited: !c.visited } : c
        );
        setUseData(updatedData);
        localStorage.setItem('useData', JSON.stringify(updatedData)); // Stocke l'état useData dans localStorage
    }





    return (

        <div>
            {localStorage.clear}
            <div className={'navigation__container'}>
                <Search onSearch={handleSearch} />
                <Filter onFilter={handleFilter} />
            </div>
            <div className={'countries__container'}>
                {useData
                    .filter((c) => c.name.common.toLowerCase().includes(searched.toLowerCase()))
                    .filter((c) => checked === "" || checked === "All" || c.continents.includes(checked))
                    .map((c, index) => (
                        <div key={index}>
                            <Card

                                name={c.name.common}
                                flag={c.flags.svg}
                                flagAlt={c.flags.alt}
                                capital={c.capital}
                                continent={c.continents}
                                officialName={c.name.official}
                                visited={c.visited}
                                buttonText={c.visited ? <i class="fa-solid fa-flag visited-flag"></i> : <i class="fa-solid fa-flag unvisited-flag"></i>}
                                onVisited={
                                    () =>{
                                        handleCountryVisited(
                                            <Card
                                                name={c.name.common}
                                                flag={c.flags.svg}
                                                flagAlt={c.flags.alt}
                                                capital={c.capital}
                                                continent={c.continents}
                                                officialName={c.name.official}
                                                visited={c.visited}
                                                buttonText={''}
                                            />
                                        );
                                        toggleVisited(c)
                                    }
                                }
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Home;