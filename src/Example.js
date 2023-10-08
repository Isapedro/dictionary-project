import React from "react";
import "./results.css";




export default function Example(props){
if (props.example){
  return (
    <div className="Example text-start"> 
    
      <p><strong>Example: </strong>{props.example} </p>
    </div>
  );
} else {
  return null;
}
}
