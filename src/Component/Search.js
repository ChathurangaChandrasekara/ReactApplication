import React, { Component } from 'react';

class Search extends Component{

 SearchHadelar = (e) => {
e.preventDefault();
console.log("clicked");
const keyType = this.refs.inputword.value;
console.log(keyType);
 }   

render(){
return(
    <form >
    <div className="form-group">
      <label htmlFor="email">Search Place</label>
      <input type="text" className="form-control" ref="inputword"/>
    </div>
    
    <button onClick={this.SearchHadelar.bind(this)} className="btn btn-default">Search</button>
  </form>
 
);
}
}

export default Search;