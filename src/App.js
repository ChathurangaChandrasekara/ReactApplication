import React, { Component } from 'react';
import './App.css';
import Search from './Component/Search';
import ResultList from './Component/ResultList';
import SlidList from './Component/SlidList';
class App extends Component {
  constructor(props){
    super(props);
    this.state =  {
      result: {}
    }

  }

  updateState (value){
    console.log(value);
this.setState ({
  result :value
})
  }
  render() {
    return (
      <div className="container">
       <div className="col-lg-8">
       <Search callUpdate = {this.updateState.bind(this)}/>
       <ResultList resultPlace = {this.state.result}/>
       </div>
       <div className="col-lg-4">
       <SlidList/>
       </div>
      </div>
    );
  }
}

export default App;
