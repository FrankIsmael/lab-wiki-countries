import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import countries from './countries.json'

class App extends Component {
  render() {
    console.log(countries)
    return (
      <div className="App container">
        <div className="row">
          <div class="col-5" style={{ height:'80vh', overflow: 'scroll' }}>
            <div className="list-group">
              {countries.map((eachCountry, index) => {
                return (
                  <div className="list-group-item list-group-item-action" key={eachCountry.index} >
                    <h3>
                      {eachCountry.name.common}
                    </h3>
                    <h4>{eachCountry.cca3}</h4>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* <Switch>
        <Route exact path='/' component={CountryDetail} />
      </Switch> */}
      </div>
    );
  }
}

export default App;
