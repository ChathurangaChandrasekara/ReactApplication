import React, { Component } from 'react';

class ResultList extends Component{
render(){
    console.log(this.props.resultPlace);
    if(this.props.resultPlace.results !== undefined){
        alert("AAAA")
        console.log(this.props.resultPlace);
     var placeList = this.props.resultPlace.results.map(name =>{
         console.log(placeList);
    return(
            <li key={name.id}> {name.name} </li>
    )
     })
    }
    
return(
<ul>
   {placeList}
</ul>
 
);
}
}

export default ResultList;