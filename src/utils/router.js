import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../components/Home'
import Signup from '../components/Signup'
import Details from '../components/Details'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/details' component={Details}/>
    </Switch>
)