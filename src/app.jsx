import React from "react";
import ReactDOM from "react-dom";
import Login from './components/Login.jsx'
import {BrowserRouter as Router, Route, Switch, useParams, Link} from "react-router-dom";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentSession: null,
            userValue: '',
            currentUser: '',

        };

        this.validateUser = this.validateUser.bind(this);
    }

    validateUser(event){
        event.preventDefault();
        let self = this;
        let userEntry = this.state.userValue;
        console.log(userEntry);
        console.log('submitted');
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            userValue: e.target.value
        })
        console.log(this.state.userValue);
    }

    render() {

        if(!this.state.currentSession){
            return(
                <Login validate={this.validateUser} handleChange={this.handleChange.bind(this)}/>
            )
        } else {
            return (
                <Router>
                    <Switch>
                    </Switch>
                </Router>
            )
        }
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));