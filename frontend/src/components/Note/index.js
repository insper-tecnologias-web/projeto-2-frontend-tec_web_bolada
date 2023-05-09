import React from "react";
import "./index.css";
import axios from "axios";

const addNode = (nome) => {
  axios
  .post("http://127.0.0.1:8000/games/", {name: nome})
  .then((response) => {
  })
}

export default function Note(props) {
  return (
    <div className="geral">
        <h3>
            {props.nome} 
        </h3>
            <button className="botao" onClick={() => addNode(props.nome)}>Joguei!</button> 
        
    </div>
  );
}
  