import React from 'react';
import axios from 'axios';
import SearchDisplay from './SearchDisplay.jsx';

class DrinkSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            drinkCategories: [],
            drinkNames: [],
            drinkIngredients: [],
            drinkGlassware: [],
            dataFocus: [],
            isDrinkInFocus: false
        };
    }

    getNames() {

        this.clearDrinkFocus();

        let alpha = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
            'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ];
        let alphaArr = [];
        alpha.forEach(e => {
            alphaArr.push({letter: true, value: e});
        });
        this.setState({
            dataFocus: alphaArr
        });
    }

    getCategory() {

        this.clearDrinkFocus();

        if (this.state.drinkCategories.length) {
            this.setState({
                dataFocus: this.state.drinkCategories
            });
        } else {
            let self = this;
            axios.get('http://localhost:5170/getCategories')
                .then(function (response) {
                    self.setState({
                        drinkCategories: response.data.drinks
                    });
                })
                .then(() => {
                    console.log(this.state.drinkCategories);
                })
                .then(() => {
                    self.setState({
                        dataFocus: this.state.drinkCategories
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    getIngredients() {

        this.clearDrinkFocus();

        if (this.state.drinkIngredients.length) {
            this.setState({
                dataFocus: this.state.drinkIngredients
            });
        } else {
            let self = this;
            axios.get('http://localhost:5170/getIngredients')
                .then(function (response) {
                    self.setState({
                        drinkIngredients: response.data.drinks
                    });
                })
                .then(() => {
                    console.log(this.state.drinkIngredients);
                })
                .then(() => {
                    self.setState({
                        dataFocus: this.state.drinkIngredients
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    getGlassware() {

        this.clearDrinkFocus();

        if (this.state.drinkGlassware.length) {
            this.setState({
                dataFocus: this.state.drinkGlassware
            });
        } else {
            let self = this;
            axios.get('http://localhost:5170/getGlassware')
                .then(function (response) {
                    self.setState({
                        drinkGlassware: response.data.drinks
                    });
                })
                .then(() => {
                    console.log(this.state.drinkGlassware);
                })
                .then(() => {
                    self.setState({
                        dataFocus: this.state.drinkGlassware
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    isDrinkInFocus() {
        if (!this.state.isDrinkInFocus) {
            this.setState({
                isDrinkInFocus: true
            });
        }
    }

    clearDrinkFocus() {
        if (this.state.isDrinkInFocus) {
            this.setState({
                isDrinkInFocus: false
            });
        }
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
                                <div className={'search-option-name'}>By First Letter</div>
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
                            <SearchDisplay dataFocus={this.state.dataFocus} showDrink={this.state.isDrinkInFocus} isDrinkInFocus={this.isDrinkInFocus.bind(this)} addFavorite={this.props.addFavorite}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DrinkSearch;