import React from 'react';
import axios from 'axios';
import SearchDisplay from './SearchDisplay.jsx';

const DrinkSearch = (props) => {

    let toDisplay = [];

    function getNames(letter){
        axios.get('http://localhost:5170/getNames')
            .then( function (response) {
                toDisplay = response.data.drinks;
            })
            .then( () => {
                console.log(toDisplay);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function getCategory(){
        axios.get('http://localhost:5170/getCategories')
            .then( function (response) {
                    toDisplay = response.data.drinks;
                })
            .then( () => {
                console.log(toDisplay);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function getIngredients(){
        axios.get('http://localhost:5170/getIngredients')
            .then( function (response) {
                toDisplay = response.data.drinks;
            })
            .then( () => {
                console.log(toDisplay);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function getGlassware(){
        axios.get('http://localhost:5170/getGlassware')
            .then( function (response) {
                toDisplay = response.data.drinks;
            })
            .then( () => {
                console.log(toDisplay);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className={'main'}>
            <div className={'viewer'}>
                <div className={'info-bar'}></div>
                <div className={'card'}>
                    <div className={'list'}>
                        <div className={'search-option'} onClick={getNames}>
                            <div id={'btn-by-name'}></div>
                            <div className={'search-option-name'}>By Name</div>
                        </div>
                        <div className={'search-option'} onClick={getCategory}>
                            <div id={'btn-by-category'}></div>
                            <div className={'search-option-name'}>By Category</div>
                        </div>
                        <div className={'search-option'} onClick={getIngredients}>
                            <div id={'btn-by-ingredients'}></div>
                            <div className={'search-option-name'}>By Ingredients</div>
                        </div>
                        <div className={'search-option'} onClick={getGlassware}>
                            <div id={'btn-by-glassware'}></div>
                            <div className={'search-option-name'}>By Glassware</div>
                        </div>
                    </div>
                    <div className={'drink-details-viewer'}>
                        <SearchDisplay dataPoints={toDisplay}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrinkSearch;