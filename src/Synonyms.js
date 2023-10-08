import React from "react";
import "./results.css";
export default function Synonyms(props){
  if (props.synonyms){
    return (
      <div className="Synonyms text-start"> <strong>Synonyms:</strong>
{props.synonyms.map(function(synonym, index)
{return (
  <ul className="list-unstyled">
    <li key={index} className="text-start ">
      {synonym}
    </li>
  </ul>
);
})}

      </div>

    );} else{
      return null;
    }
  }
