import React, { Component } from 'react';

class Search extends Component{
render(){
return(
    <form >
    <div className="form-group">
      <label htmlFor="email">Search Place</label>
      <input type="text" className="form-control" id="email"/>
    </div>
    
    <button type="submit" className="btn btn-default">Search</button>
  </form>
 
);
}
}

export default Search;