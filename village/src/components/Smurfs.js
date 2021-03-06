import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Smurf from './Smurf'

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(renderSmurf)}
        </ul>
      </div>
    )
  }
}

function renderSmurf(smurf) {
  return (
    <Link to={`/`} key={smurf.id}>
      <Smurf
        name={smurf.name}
        id={smurf.id}
        age={smurf.age}
        height={smurf.height}
      />
    </Link>
  )
}

Smurf.defaultProps = {
 smurfs: [],
}

export default Smurfs
