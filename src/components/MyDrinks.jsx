import React from 'react';
import FavoriteCard from './FavoriteCard.jsx';
import {BrowserRouter as Router, Route, Switch, useParams, Link} from "react-router-dom";

const MyDrinks = (props) => {

    if (!props.createdDrinks.name) {
        return (
            <div>
                <Link to={'/creator'}>
                    <div className={'drink-created'} id={'no-drinks'}>
                        <div id={'btn-create-drink'}></div>
                        <div className={'drink-created-name'}>Create A Drink</div>
                    </div>
                </Link>
                {props.favorites.map((e, index) => {
                    return <FavoriteCard drink={e} key={index}/>
                })}
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default MyDrinks;