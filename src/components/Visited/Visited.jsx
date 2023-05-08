import React, {useState} from 'react';

const Visited = ({onVisited}) => {

    const [visitedCountry, setVisitedCountry] = useState([])

    function addVisited(country) {
        setVisitedCountry(country)
    }
    return (
        <div>
            <div>
                <button onClick={() => addVisited(visitedCountry)}>FLAG</button>
            </div>
        </div>

    );
};

export default Visited;