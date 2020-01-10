import React from 'react';
import axios from 'axios';
import SearchDisplay from './SearchDisplay.jsx';

class DrinkSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            drinkCategories: {},
            drinkNames: {},
            drinkIngredients: {},
            drinkGlassware: {},
            dataFocus: [],
        };
    }

    getNames(letter){
        let self = this;
        axios.get('http://localhost:5170/getNames')
            .then( function (response) {
                self.setState({
                    drinkNames: response.data.drinks
                })
            })
            .then( () => {
                console.log(this.state.drinkNames);
            })
            .then( () => {
                self.setState({
                    dataFocus: this.state.drinkNames
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getCategory(){
        let self = this;
        axios.get('http://localhost:5170/getCategories')
            .then( function (response) {
                    self.setState({
                        drinkCategories: response.data.drinks
                    })
                })
            .then( () => {
                console.log(this.state.drinkCategories);
            })
            .then( () => {
                self.setState({
                    dataFocus: this.state.drinkCategories
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getIngredients(){
        let self = this;
        axios.get('http://localhost:5170/getIngredients')
            .then( function (response) {
                self.setState({
                    drinkIngredients: response.data.drinks
                })
            })
            .then( () => {
                console.log(this.state.drinkIngredients);
            })
            .then( () => {
                self.setState({
                    dataFocus: this.state.drinkIngredients
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getGlassware(){
        let self = this;
        axios.get('http://localhost:5170/getGlassware')
            .then( function (response) {
                self.setState({
                    drinkGlassware: response.data.drinks
                })
            })
            .then( () => {
                console.log(this.state.drinkGlassware);
            })
            .then( () => {
                self.setState({
                    dataFocus: this.state.drinkGlassware
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    render() {
        return (
            <div className={'main'}>
                <div className={'viewer'}>
                    <div className={'info-bar'}></div>
                    <div className={'card'}>
                        <div className={'list'}>
                            <div className={'search-option'} onClick={this.getNames.bind(this)}>
                                <div id={'btn-by-name'}></div>
                                <div className={'search-option-name'}>By Name</div>
                            </div>
                            <div className={'search-option'} onClick={this.getCategory.bind(this)}>
                                <div id={'btn-by-category'}></div>
                                <div className={'search-option-name'}>By Category</div>
                            </div>
                            <div className={'search-option'} onClick={this.getIngredients.bind(this)}>
                                <div id={'btn-by-ingredients'}></div>
                                <div className={'search-option-name'}>By Ingredients</div>
                            </div>
                            <div className={'search-option'} onClick={this.getGlassware.bind(this)}>
                                <div id={'btn-by-glassware'}></div>
                                <div className={'search-option-name'}>By Glassware</div>
                            </div>
                        </div>
                        <div className={'drink-details-viewer'}>
                            <SearchDisplay dataFocus={this.state.dataFocus} addFavorite={this.props.addFavorite}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DrinkSearch;