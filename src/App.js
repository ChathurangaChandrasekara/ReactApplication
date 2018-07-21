import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Component/Search'
import ResultList from './Component/ResultList'
class App extends Component {
  render() {
    return (
      <div className="container">
       <div className="col-lg-8">
       <Search/>
       <ResultList/>
       </div>
       <div className="col-lg-4">
       <h1 className="form-control">Saved place </h1>
       </div>
      </div>
    );
  }
}

export default App;
