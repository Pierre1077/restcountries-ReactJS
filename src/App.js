import logo from './logo.svg';
import './App.css';
import Home from "./page/Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import VisitedPage from "./page/Visited/VisitedPage";
import Navigation from "./components/Navigation/Navigation";
import React, {useState} from "react";

function App() {

    const [visitedCountry, setVisitedCountry] = useState([]);

    const handleCountryVisited = (country) => {
        setVisitedCountry([...visitedCountry, country]);
        console.log(country.length)
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home handleCountryVisited={handleCountryVisited} />} />
                    <Route path="/visited" element={ <VisitedPage visitedCountries={visitedCountry}  /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
