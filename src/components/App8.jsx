import React from 'react'

import axios from 'axios'

export default class App8 extends React.Component{
    constructor(){
        super()

        this.state = {
          pokemon : '',
          imgURL: ''
        }
       
    }
    
    getPokemon(){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random()*151)}`).then(res => {
        this.setState({
            pokemon : res.data,
            imgURL: res.data.sprites.front_default
            })
        })
    }

    render(){
        
        return(
          
                  <div>
                      <h2>App-8</h2>
                      <p>Create an app hitting an API of your choice (swapi.co, birdapi.com, pokeapi, smurfs, marvel api, etc). The API should be hit as soon as the component is finished rendering. The app should set value(s) on state based on results from the API and then show the propertie(s) on state in the DOM.</p>
                      <button onClick={()=> this.getPokemon()}>Get Pokemon</button>
                      <h3>Name: {this.state.pokemon.name}</h3>
                      <img className="pokemon-img" src={this.state.imgURL} alt=""/>
                      <h3>Order: {this.state.pokemon.order}</h3>
                      <h3>Height: {this.state.pokemon.height}</h3>
                      <h3>Weight: {this.state.pokemon.weight}</h3>
                      <h3>Base Experience: {this.state.pokemon.base_experience}</h3>
                  </div>
                
        
        )
    }
}