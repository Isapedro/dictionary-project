import React,{useState} from "react";
import "./dictionary.css"
import "bootstrap/dist/css/bootstrap.css";

export default function Dictionary(){
  let [keyword, setKeyword]= useState("");




  function search(event){
  event.preventDefault();
alert (`Searching for ${keyword} definition`)
  }
function handlekeywordchange(event){
  setKeyword(event.target.value);
}


  return (
    <div className="Dictionary">
    <form onSubmit={search}>
      <input type="search" placeholder="Look up..."onChange={handlekeywordchange} className="input"/>
      <input type="submit" value="Search" className="search"/>
    </form>
    </div>
  )
}