import React from 'react';
import ResultCard from './ResultCard.jsx';
import DrinkCard from './DrinkCard.jsx';
import axios from "axios";

class SearchDisplay extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            queryResults: []
        };

        this.createQueryString = this.createQueryString.bind(this);
    }

    createQueryString(str){
        let query = str.toLowerCase();
        let queryReturn = '';
        for(let i = 0; i < query.length; i++){
            if(query.charAt(i) === ' '){
                queryReturn += '_'
            } else {
                queryReturn += query.charAt(i);
            }
        }
        return queryReturn
    }

    categoryQuery(event){
        event.preventDefault();
        let self = this;
        let textQuery = event.currentTarget.textContent;
        textQuery = this.createQueryString(textQuery);
        axios.post('http://localhost:5170/findByCategory', {
            query: textQuery
        })
            .then(function (response) {
                self.setState({
                    queryResults: response.data.drinks
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    glasswareQuery(event){
        event.preventDefault();
        let self = this;
        let textQuery = event.currentTarget.textContent;
        textQuery = this.createQueryString(textQuery);
        axios.post('http://localhost:5170/findByGlassware', {
            query: textQuery
        })
            .then(function (response) {
                self.setState({
                    queryResults: response.data.drinks
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    ingredientQuery(event){
        event.preventDefault();
        let self = this;
        let textQuery = event.currentTarget.textContent;
        textQuery = this.createQueryString(textQuery);
        axios.post('http://localhost:5170/findByIngredient', {
            query: textQuery
        })
            .then(function (response) {
                self.setState({
                    queryResults: response.data.drinks
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        if (this.state.queryResults.length === 0) {
            return (
                <div className={'data-points'}>
                    {this.props.dataFocus.map((e, index) => {
                        if (e.strGlass) {
                            return <ResultCard result={e.strGlass} query={this.glasswareQuery.bind(this)} key={index}/>
                        } else if (e.strCategory) {
                            return <ResultCard result={e.strCategory} query={this.categoryQuery.bind(this)} key={index}/>
                        } else if (e.strIngredient1) {
                            return <ResultCard result={e.strIngredient1} query={this.ingredientQuery.bind(this)} key={index}/>
                        }
                    })}
                </div>
            )
        } else {
            return (
                <div className={'data-points-drinks'}>
                    {this.state.queryResults.map((e, index) => {
                        return <DrinkCard drink={e} key={index}/>
                    })}
                </div>
            )
        }
    }
}

export default SearchDisplay;