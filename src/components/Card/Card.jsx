import React, { useEffect, useState  } from 'react';
import Detail from "../Detail/Detail";
import './Card.css'

const Card = ({name, flag, flagAlt, capital, continent, officialName}) => {
    const [showDetail, setShowDetail] = useState(false);

    function show() {
        setShowDetail(true);
    }

    function hide() {
        setShowDetail(false);
    }

    return (
        <div>
            <div onClick={show}>
                <p>{name}</p>
                <img src={flag} alt={flagAlt} width="100"/>
            </div>
            <div className={showDetail ? 'show' : 'hide'}>
                <Detail capital={capital} continent={continent} officialName={officialName}/>
                <button onClick={hide}>Hide</button>
            </div>
        </div>
    );
};

export default Card;

