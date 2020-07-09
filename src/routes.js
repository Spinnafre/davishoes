import React from 'react';
import {Switch,Route} from 'react-router-dom'

import Home from './pages/Home/Home'
import Cart from './pages/Cart/cart'

function routes() {
    return (
        <Switch>
            <Route exact path="/"  component={Home}/>
            <Route path="/cart" exact component={Cart}/>
        </Switch>
    )
}

export default routes;
