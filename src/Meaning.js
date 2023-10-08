import React from "react";
import Synonyms from "./Synonyms"

export default function Meaning(props){
  if (props.meaning){
  return (
    <div className="Meaning text-capitalize text-start">
      
        {props.meaning.map(function(meaning,index){
      
        return (
          <div key={index}>
            <h3 className="PartOfSpeech text-decoration-underline mt-5">
              <strong>{meaning.partOfSpeech}</strong>
            </h3>
            <p className="text-start">
              <strong>Definition: </strong>
              {meaning.definition}
            </p>
            <p className="text-start">
              <strong>Example: </strong>
              {meaning.example}
            </p>
            <Synonyms synonyms={meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
}