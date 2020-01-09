import React from 'react';
import ResultCard from './ResultCard.jsx';
import axios from "axios";

const SearchDisplay = (props) => {

    function categoryQuery(event){
        event.preventDefault();
        axios.post('http://localhost:5170/categoryQuery', {})
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

    return (
       <div className={'data-points'}>
           {props.dataFocus.map(( e, index) => {
               if(e.strGlass){
                   return <ResultCard result={e.strGlass} key={index}/>
               } else if (e.strCategory){
                   return <ResultCard result={e.strCategory} onClick={categoryQuery} key={index}/>
               } else if (e.strIngredient1){
                   return <ResultCard result={e.strIngredient1} key={index}/>
               }
           })}
       </div>
    )
};

export default SearchDisplay;