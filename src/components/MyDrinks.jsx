import React from 'react';

const MyDrinks = (props) => {

    if(!props.createdDrinks.name){
        return (
            <div className={'drink-created'} id={'no-drinks'}>
                <div id={'btn-create-drink'}></div>
                <div className={'drink-created-name'}>Create A Drink</div>
            </div>
        )
    }
    return (
        <div></div>
    )
}

export default MyDrinks;