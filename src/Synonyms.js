import React from "react";
import "./results.css";




export default function Synonyms(props){
  if (props.synonyms){
    return (
      <div className="Synonyms text-start"> <strong>Synonyms: </strong>
     <ul> 
{props.synonyms.map(function(synonym, index)
{return <li key={index}> {synonym}</li>;
})}
  </ul>
 </div>
    );
  } else{
      return null;
    }
  }
