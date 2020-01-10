import React from "react";
import ReactDOM from "react-dom";
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';
import Creator from './components/Creator.jsx';
import DrinkSearch from './components/DrinkSearch.jsx';
import {BrowserRouter as Router, Route, Switch, useParams, Link} from "react-router-dom";
import axios from "axios";


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentSession: null,
            userValue: '',
            currentUser: 'Kytra',
            userCreatedDrinks: {},
            favoriteDrinks: [{
                dateModified: "2017-04-24 22:00:19",
                idDrink: "13938",
                strAlcoholic: "Alcoholic",
                strCategory: "Ordinary Drink",
                strCreativeCommonsConfirmed: "No",
                strDrink: "AT&T",
                strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg",
                strGlass: "Highball Glass",
                strIngredient1: "Absolut Vodka",
                strIngredient2: "Gin",
                strIngredient3: "Tonic water",
                strIngredient4: null,
                strIngredient5: null,
                strIngredient6: null,
                strIngredient7: null,
                strIngredient8: null,
                strIngredient9: null,
                strIngredient10: null,
                strIngredient11: null,
                strIngredient12: null,
                strIngredient13: null,
                strIngredient14: null,
                strIngredient15: null,
                strInstructions: "Pour Vodka and Gin over ice, add Tonic and Stir",
                strInstructionsDE: "Wodka und Gin über das Eis gießen, Tonic hinzufügen und umrühren.",
                strMeasure1: "1 oz ",
                strMeasure2: "1 oz ",
                strMeasure3: "4 oz ",
                strMeasure4: null,
                strMeasure5: null,
                strMeasure6: null,
                strMeasure7: null,
                strMeasure8: null,
                strMeasure9: null,
                strMeasure10: null,
                strMeasure11: null,
                strMeasure12: null,
                strMeasure13: null,
                strMeasure14: null,
                strMeasure15: null
            },
                {
                    idDrink: "178318",
                    strDrink: "747 Drink",
                    strDrinkAlternate: null,
                    strDrinkES: null,
                    strDrinkDE: null,
                    strDrinkFR: null,
            strTags: null,
            strVideo: null,
            strCategory: "Cocktail",
            strIBA: null,
            strAlcoholic: "Alcoholic",
            strGlass: "Highball glass",
            strInstructions: "Fill a Collins glass with ice. Pour in vodka, lime cordial, and cranberry juice. Fill up with Sprite. Garnish with a Lime wheel or some cranberries",
            strInstructionsES: null,
            strInstructionsDE: null,
            strInstructionsFR: null,
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/8ozumt1572901761.jpg",
            strIngredient1: "Vodka",
            strIngredient2: "Roses sweetened lime juice",
            strIngredient3: "Cranberry Juice",
            strIngredient4: "Sprite",
            strIngredient5: "",
            strIngredient6: "",
            strIngredient7: "",
            strIngredient8: null,
            strIngredient9: null,
            strIngredient10: null,
            strIngredient11: null,
            strIngredient12: null,
            strIngredient13: null,
            strIngredient14: null,
            strIngredient15: null,
            strMeasure1: "1 oz",
            strMeasure2: "1 oz",
            strMeasure3: "1 oz",
            strMeasure4: "Top",
            strMeasure5: "",
            strMeasure6: "",
            strMeasure7: "",
            strMeasure8: null,
            strMeasure9: null,
            strMeasure10: null,
            strMeasure11: null,
            strMeasure12: null,
            strMeasure13: null,
            strMeasure14: null,
            strMeasure15: null,
            strCreativeCommonsConfirmed: "No",
            dateModified: null
    }],
            registeredUsers: {'Kytra': {}},
        };

        this.validateUser = this.validateUser.bind(this);
        this.addFavorite = this.addFavorite.bind(this);
    }

    addFavorite(event){
        event.preventDefault();
        let favorites = this.state.favoriteDrinks;
        favorites.push({
            idDrink: "15300",
            strDrink: "3-Mile Long Island Iced Tea",
            strDrinkAlternate: null,
            strDrinkES: null,
            strDrinkDE: null,
            strDrinkFR: null,
            strTags: null,
            strVideo: null,
            strCategory: "Ordinary Drink",
            strIBA: null,
            strAlcoholic: "Alcoholic",
            strGlass: "Collins Glass",
            strInstructions: "Fill 14oz glass with ice and alcohol. Fill 2/3 glass with cola and remainder with sweet & sour. Top with dash of bitters and lemon wedge.",
            strInstructionsES: null,
            strInstructionsDE: "Füllen Sie ein 12 cl. Glas mit Eis und Alkohol. Füllen Sie 2/3 des Glases mit Cola und den Rest mit Süß-Sauer. Mit einem Schuss Bitter und Zitronenkeil garnieren.",
            strInstructionsFR: null,
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
            strIngredient1: "Gin",
            strIngredient2: "Light rum",
            strIngredient3: "Tequila",
            strIngredient4: "Triple sec",
            strIngredient5: "Vodka",
            strIngredient6: "Coca-Cola",
            strIngredient7: "Sweet and sour",
            strIngredient8: "Bitters",
            strIngredient9: "Lemon",
            strIngredient10: null,
            strIngredient11: null,
            strIngredient12: null,
            strIngredient13: null,
            strIngredient14: null,
            strIngredient15: null,
            strMeasure1: "1/2 oz ",
            strMeasure2: "1/2 oz ",
            strMeasure3: "1/2 oz ",
            strMeasure4: "1/2 oz ",
            strMeasure5: "1/2 oz ",
            strMeasure6: null,
            strMeasure7: "1-2 dash ",
            strMeasure8: "1 wedge ",
            strMeasure9: null,
            strMeasure10: null,
            strMeasure11: null,
            strMeasure12: null,
            strMeasure13: null,
            strMeasure14: null,
            strMeasure15: null,
            strCreativeCommonsConfirmed: "No",
            dateModified: "2016-08-31 19:42:52"
        });
        this.setState({
            favoriteDrinks: favorites
        })
    }

    validateUser(event){
        event.preventDefault();
        let userEntry = this.state.userValue;
        this.setState({
            currentSession: true,
            currentUser: userEntry,
        });
        console.log('submitted');
    }

    newUser(event){
        event.preventDefault();
        console.log('Signing up a new user')
    }


    handleChange(e) {
        e.preventDefault();
        this.setState({
            userValue: e.target.value
        });
        console.log(this.state.userValue);
    }

    /*componentDidMount(){
        let self = this;
        axios.get('http://localhost:5170/getUsers')
            .then( function (response) {
                self.setState({
                    registeredUsers: response.data
                })
            })
            .then( () => {
                console.log(registeredUsers);
            })
            .catch(function (error) {
                console.log(error);
            });
    }*/


    render() {

        if(!this.state.currentSession){
            return(
                <Login validate={this.validateUser} handleChange={this.handleChange.bind(this)} joinUs={this.newUser}/>
            )
        } else {
            return (
                <Router>
                    <div className={'container'}>
                        <div className={'nav-top'}>
                            <div className={'nav-title'}>Free Spirits</div>
                            <div className={'nav-menu'}>
                                <div className={'nav-link'} id={'profile'}>
                                    <Link to="/">Profile</Link>
                                </div>
                                <div className={'nav-link'} id={'creator'}>
                                    <Link to="/creator">Create Drinks</Link>
                                </div>
                                <div className={'nav-link'} id={'search'}>
                                    <Link to="/search">Search Drinks</Link>
                                </div>
                            </div>
                        </div>
                    <Switch>
                        <Route exact path="/">
                            <Profile user={this.state.currentUser} createdDrinks={this.state.userCreatedDrinks} favorites={this.state.favoriteDrinks}/>
                        </Route>
                        <Route path="/creator">
                            <Creator/>
                        </Route>
                        <Route path="/search">
                            <DrinkSearch addFavorite={this.addFavorite}/>
                        </Route>
                    </Switch>
                            <div className={'footer'}></div>
                    </div>
                </Router>
            )
        }
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));