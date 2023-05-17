import React, { useEffect, useState  } from 'react';
import Detail from "../Detail/Detail";
import './Card.css'

const Card = ({name, flag, flagAlt, capital, continent, officialName, buttonText, onVisited }) => {


    return (
        <div  className={'card__container'}>
            <img
                src={flag}
                alt={flagAlt}
                className={'flag'}
            />
            <div className={'card__content'}>
                <h2 className={'name'}>{name}</h2>
                {buttonText !== '' ?
                    <button onClick={onVisited}>
                        {buttonText}
                    </button>
                    : ''}
            </div>
        </div>
    );
};

export default Card;

