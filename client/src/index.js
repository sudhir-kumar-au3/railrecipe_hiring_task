import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import './index.css';
import App from './components/App';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {store} from "./redux/store";
import {Provider} from "react-redux";

import * as serviceWorker from './serviceWorker';

function Home() {
    const doRedirect = () => {
        let loggedIn = localStorage.getItem("user");

        if(loggedIn){
            return <Redirect to="/app/home"/>;
        }
        else{
            return <Redirect to="/login"/>;
        }
    }
    return(
        <Router>
                <Route  path="/app" component={App}/>
                <Route  path='/signup' component={SignUp}/>
                <Route  path="/login" component={Login}/>
                {doRedirect()}
        </Router>
    )
}
ReactDOM.render(<Provider store = {store}><Home /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
