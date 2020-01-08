import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch, useParams, Link} from "react-router-dom";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Router>
                <Switch>

                </Switch>
            </Router>

        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));