import React, { Component } from 'react';
import {getPersons} from './services/personService';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: []
    }

    this.getBlackCriaturas();
  }

  getBlackCriaturas() {
    getPersons()
    .then(data => {
      this.setState({
        results: data.results
      });
    });
  }

  render() {
    return (
      <div className="app">
      <h1 className="app__title">Lista negra de empleados 😡</h1>
        <ul className="app__list">
          {this.state.results.map(item => {
            return (
              <li className="app__list-item">
                <div className="person">
                  <h2 className="person__name">{`${item.name.first} ${item.name.last}`}</h2>
                  <img className="person__image" src={item.picture.medium} alt={`${item.name.first} ${item.name.last}`}/>
                  <div className="person__age">{item.dob.age}</div>
                  <div className="person__city">{item.location.city}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
