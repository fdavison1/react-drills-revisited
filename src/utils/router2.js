import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ProductDetails from '../components/ProductDetails'
import Products from '../components/Products'

export default (
    <Switch>
        <Route path='/products' component={Products}/>
        <Route path='/productdetails/:name' component={ProductDetails}/>
    </Switch>
)