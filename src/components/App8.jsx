import React from 'react'

import axios from 'axios'

export default class App8 extends React.Component{
    constructor(){
        super()

        this.state = {
          planet : ''
        }
       
    }
    
    componentDidMount(){
    axios.get('https://cors-anywhere.herokuapp.com/https://swapi.co/api/planets/1').then(res => {
        this.setState({
            planet : res.data
            })
        })
    }

    render(){
        
        return(
          
                  <div>
                      <h2>App8</h2>
                      <p>Create an app hitting an API of your choice (swapi.co, birdapi.com, pokeapi, smurfs, marvel api, etc). The API should be hit as soon as the component is finished rendering. The app should set value(s) on state based on results from the API and then show the propertie(s) on state in the DOM.</p>
                      <h3>Name: {this.state.planet.name}</h3>
                      <h3>Population: {this.state.planet.population}</h3>
                      <h3>Terrain: {this.state.planet.terrain}</h3>
                      <h3>Climate: {this.state.planet.climate}</h3>
                      <h3>Gravity: {this.state.planet.gravity}</h3>
                      <h3>Diameter: {this.state.planet.diameter}</h3>
                  </div>
                
        
        )
    }
}