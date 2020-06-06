import React from 'react';
import NAV from './nav';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Create from './create';
import Update from './update';


function app(){
    return(
        <div>          
            <Router>
                <NAV />
                <Switch>
                    <Route path='/create' exact component={Create} />
                    <Route path='/update' exact component={Update} />
                </Switch>
            </Router>
        </div>
    )
};

export default app;