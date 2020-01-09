import React from 'react';
import MyDrinks from './MyDrinks.jsx'

const Profile = (props) => {
    return (
        <div className={'main'}>
            <div className={'viewer'}>
                <div className={'info-bar'}>{props.user}</div>
                <div className={'card'}>
                    <div className={'list'}>
                        <MyDrinks createdDrinks={props.createdDrinks}/>
                    </div>
                    <div className={'drink-details-viewer'}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;