import React from 'react';
import MyDrinks from './MyDrinks.jsx'
import SearchDisplay from "./SearchDisplay.jsx";

const Profile = (props) => {
    return (
        <div className={'main'}>
            <div className={'viewer'}>
                <div className={'info-bar'}><span className={'info-bar-profile'}>{props.user}</span></div>
                <div className={'card'}>
                    <div className={'list'}>
                        <MyDrinks createdDrinks={props.createdDrinks} favorites={props.favorites}/>
                    </div>
                    <div className={'drink-details-viewer'}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;