import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
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