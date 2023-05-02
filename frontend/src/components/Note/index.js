import React from "react";
import "./index.css";


export default function Note(props) {
  return (
    <div>
        <h3>
            {props.nome} 
            <button className="nome">Joguei!</button> 
        </h3>
    </div>
  );
}
  