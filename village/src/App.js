import React, { Component } from 'react'
import axios from 'axios'
import { Route, NavLink } from 'react-router-dom'

import './App.css'

import SmurfForm from './components/SmurfForm'
import Smurfs from './components/Smurfs'
import Smurf from './components/Smurf'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      smurfs: [],
    }
    this.gatherVillage = this.gatherVillage.bind(this)
  }

  componentDidMount() {
    this.gatherVillage()
  }

  gatherVillage() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(console.error.bind(console))
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <main className="App">
        <nav>
          <NavLink to="/">Back to the village!</NavLink>
          <NavLink to="/smurf-form">Add new villager</NavLink>
        </nav>

        <Route exact path="/" render={(props) => (
          <Smurfs smurfs={this.state.smurfs} {...props} />
        )} />

        <Route path="/smurf-form" render={(props) => (
          <SmurfForm gatherVillage={this.gatherVillage} {...props} />
        )} />

        <Route path="/smurfs/:id" render={(props) => (
          <Smurf smurfs={this.state.smurfs} {...props} />
        )} />
      </main>
    )
  }
}

export default App
