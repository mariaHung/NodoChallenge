// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Home layout
import DigitalAgency from './home/DigitalAgency';
import Contact from "./elements/Contact";
import Ready from "./elements/Ready";
import error404 from "./elements/error404";

import AlertState from './context/alerts/alertState'
import AuthState from './context/authentication/authState';
import tokenAuth from './config/tokenAuth';
// import PrivateRoute from './elements/routes/PrivateRoute';

import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

//Check for a token
const token = localStorage.getItem('token');
if(token) {
    tokenAuth(token);
}

class Root extends Component{
    render(){
        return(
            <AlertState>
                <AuthState>
                    <BrowserRouter basename={'/'}>
                        <Switch>
                            <Route exact path={`${process.env.PUBLIC_URL}/`} component={DigitalAgency}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/ready`} component={Ready}/>

                            <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                            <Route component={error404}/>

                        </Switch>
                    </BrowserRouter>
                </AuthState>
            </AlertState>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();