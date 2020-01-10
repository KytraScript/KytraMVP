import React from 'react';

const FavoriteCard = (props) => {

    return (
        <div className={'drink-favorite'} id={props.drink.idDrink}>
            <div className={'drink-favorite-name'}>{props.drink.strDrink}</div>
        </div>
    )
};

export default FavoriteCard;