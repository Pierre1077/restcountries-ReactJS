import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css'

const Navigation = ({visitedCountries}) => {
    const [selectedCountry, setSelectedCountry] = useState(visitedCountries);

    return (
        <div>

            <ul>
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/visited">
                    <li>Visited</li>
                </NavLink>

            </ul>
        </div>
    );
};

export default Navigation;