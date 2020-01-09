import React from 'react';
import MyDrinks from './MyDrinks.jsx'

const Profile = (props) => {
    return (
        <div className={'main'}>
            <div className={'profile-viewer'}>
                <div className={'user-info'}>{props.user}</div>
                <div className={'profile-card'}>
                    <div className={'drink-list'}>
                        <MyDrinks createdDrinks={props.createdDrinks}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;