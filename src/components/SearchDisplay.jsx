import React from 'react';
import ResultCard from './ResultCard.jsx';
import axios from "axios";

const SearchDisplay = (props) => {

    function createQueryString(str){
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

    function categoryQuery(event){
        event.preventDefault();
        let textQuery = event.currentTarget.textContent;
        textQuery = createQueryString(textQuery);
        axios.post('http://localhost:5170/findByCategory', {
            query: textQuery
        })
            .then(function (response) {
                console.log(response.data.drinks);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function glasswareQuery(event){
        event.preventDefault();
        let textQuery = event.currentTarget.textContent;
        textQuery = createQueryString(textQuery);
        axios.post('http://localhost:5170/findByGlassware', {
            query: textQuery
        })
            .then(function (response) {
                console.log(response.data.drinks);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function ingredientQuery(event){
        event.preventDefault();
        let textQuery = event.currentTarget.textContent;
        textQuery = createQueryString(textQuery);
        axios.post('http://localhost:5170/findByIngredient', {
            query: textQuery
        })
            .then(function (response) {
                console.log(response.data.drinks);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
       <div className={'data-points'}>
           {props.dataFocus.map(( e, index) => {
               if(e.strGlass){
                   return <ResultCard result={e.strGlass} query={glasswareQuery} key={index}/>
               } else if (e.strCategory){
                   return <ResultCard result={e.strCategory} query={categoryQuery} key={index}/>
               } else if (e.strIngredient1){
                   return <ResultCard result={e.strIngredient1} query={ingredientQuery} key={index}/>
               }
           })}
       </div>
    )
};

export default SearchDisplay;