import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import HomePage from '../components/Homepage/Homepage';
import Search from '../components/Search/Search';

{/* Importing Routes from react-router-dom to be able to have a routes to navigate between the pages */}

const Routes = () => {
    return (
        <Switch>
           <Route path='/search' component={ Search }/> 
           <Route path='/home' component={ HomePage }/> 
        </Switch>
    )
};

export default withRouter(Routes);
