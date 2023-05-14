import logo from './logo.svg';
import './App.css';
import Home from "./page/Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import VisitedPage from "./page/Visited/VisitedPage";
import Navigation from "./components/Navigation/Navigation";
import React, {useState} from "react";

function App() {

    const [visitedCountry, setVisitedCountry] = useState([]);

    function handleCountryVisited(country) {
        if (visitedCountry.some(c => c.props.name === country.props.name)) {
            // Le pays est déjà dans la liste des pays visités, on le retire
            const updatedVisitedCountries = visitedCountry.filter(
                c => c.props.name !== country.props.name
            );
            setVisitedCountry(updatedVisitedCountries);
            localStorage.setItem('visitedCountries', JSON.stringify(updatedVisitedCountries));
        } else {
            // Le pays n'est pas dans la liste des pays visités, on l'ajoute
            const updatedVisitedCountries = [...visitedCountry, country];
            setVisitedCountry(updatedVisitedCountries);
            localStorage.setItem('visitedCountries', JSON.stringify(updatedVisitedCountries));
        }
    }




    return (
        <div className="App">
            <BrowserRouter>
                <Navigation visitedCountries={visitedCountry} />
                <Routes>
                    <Route path="/" element={<Home handleCountryVisited={handleCountryVisited} />} />
                    <Route path="/visited" element={ <VisitedPage visitedCountries={visitedCountry}  /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
