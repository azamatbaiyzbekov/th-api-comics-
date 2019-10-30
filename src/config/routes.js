import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import HomePage from '../components/Homepage/Homepage';
import Search from '../components/Search/Search';


const Routes = () => {
    return (
        <Switch>
           <Route path='/search' component={ Search }/> 
           <Route path='/home' component={ HomePage }/> 
        </Switch>
    )
};

export default withRouter(Routes);
