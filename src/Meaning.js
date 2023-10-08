import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./results.css"

export default function Meaning(props){
  if (props.meaning){
  return (
    <div className="Meaning text-capitalize text-start">
      
        {props.meaning.map(function(meaning,index){
      if (index < 5) {
        return (
          <section>
            <div key={index} className="m-3 p-1">
              <p className=" mt-4">
                <strong className="PartOfSpeech">{meaning.partOfSpeech}</strong>
              </p>
              <p className="text-start">
                <strong>Definition: </strong>
                {meaning.definition}
              </p>
              <Example example={meaning.example} />
              <Synonyms synonyms={meaning.synonyms} />
            </div>
          </section>
        );
      } else {
        return null;
      }
      })}
    </div>
  );
}
}