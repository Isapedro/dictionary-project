import React from "react";
import Meaning from "./Meaning";
import "./results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="text-capitalize">{props.results.word}</h2>
        <h3>{props.results.phonetic}</h3>

        <Meaning meaning={props.results.meanings} />
      </div>
    );
       
     
  } else {
    return null;
  }
}
