import React from "react";
import Synonyms from "./Synonyms"

export default function Meaning(props){
  if (props.meaning){
  return (
    <div className="Meaning">
      <h3 className="text-capitalize text-start text-decoration-underline">
        <strong>{props.meaning.partOfSpeech}</strong>
      </h3>
      <div>
        <p className="text-start">
          <strong>Definition: </strong>
          {props.meaning.definition}
        </p>
        
        <p className="text-start">
          <strong>Example: </strong>
          {props.meaning.example}
        </p>
        <Synonyms synonyms={props.meaning.synonyms}/>
        
      </div>
    </div>
  );
}
}