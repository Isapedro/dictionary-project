import React,{useState} from "react";
import axios from "axios";
import "./dictionary.css"
import "bootstrap/dist/css/bootstrap.css";

export default function Dictionary(){
  let [keyword, setKeyword]= useState("");


function handleResponse(response){
  console.log(response.data[0]);
}

  function search(event){
  event.preventDefault();
alert (`Searching for ${keyword} definition`)
let key = `3o10257bf2td10cc46640fa6c8aad2c3`;
let apiUrl =
  `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
  axios.get(apiUrl).then(handleResponse);
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