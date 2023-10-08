import React from "react";


export default function Example(props){
if (props.example){
  return(
    <div className="Example text-start"> <strong>Example:</strong> {props.example.example}
    </div>
  )
}
}