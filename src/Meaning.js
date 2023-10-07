import React from "react";


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
        <br />
        <p className="text-start pt-0">
          <strong>Example: </strong>
          {props.meaning.example}
        </p>
        <p className="text-start">
          <strong>Synonyms:</strong>
          {props.meaning.synonyms}
        </p>
      </div>
    </div>
  );
}
}