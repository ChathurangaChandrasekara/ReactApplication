import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
       <div className="col-lg-8">
       <form >
  <div className="form-group">
    <label htmlFor="email">Search Place</label>
    <input type="text" className="form-control" id="email"/>
  </div>
  
  <button type="submit" className="btn btn-default">Search</button>
</form>
<ul>
<li> Kandy </li>
<li> Colombo </li>
  </ul>
       </div>
       <div className="col-lg-4">
       <h1 className="form-control">Saved place </h1>
       </div>
      </div>
    );
  }
}

export default App;
