import React from "react";
import ReactDOM from "react-dom";
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';
import Creator from './components/Creator.jsx';
import DrinkSearch from './components/DrinkSearch.jsx';
import {BrowserRouter as Router, Route, Switch, useParams, Link} from "react-router-dom";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentSession: null,
            userValue: '',
            currentUser: 'Kytra',
            userCreatedDrinks: {},
            favoriteDrinks: [],
            registeredUsers: {'Kytra': {}},
        };

        this.validateUser = this.validateUser.bind(this);
        this.addFavorite = this.addFavorite.bind(this);
    }

    addFavorite(event){
        event.preventDefault();
        let favorites = this.state.favoriteDrinks;
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