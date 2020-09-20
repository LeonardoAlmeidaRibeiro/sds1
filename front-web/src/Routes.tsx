import React from 'react';
import{ BrowserRouter, Switch, Route} from 'react-router-dom'
import Records from './pages/Records';
import Home from './pages/Records'
const Routes = () => (

    <BrowserRouter>
    <Routes/>
    <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path ="/records">
          <Records/>
        </Route>
    </Switch>
    </BrowserRouter>

);

export default Routes;