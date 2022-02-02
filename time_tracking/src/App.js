import React from 'react';
import Person from './Person'
import Work from './Work'
import Play from './Play'
import Study from './Study'
import Exercise from './Exercise'
import Social from './Social'
import SelfCare from './SelfCare'

class App extends React.Component {
  render() {

    // const customData = require ('./data.json');

    return (
      <div className="App">
        <div className="row">
          <div className="col-3" id="person">
            <Person/>
          </div>
          <div className="col-9">
            <div className="row">
              <Work/>
              <Play/>
              <Study/>
            </div>
            <div className="row">
              <Exercise/>
              <Social/>
              <SelfCare/>              
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default App;
