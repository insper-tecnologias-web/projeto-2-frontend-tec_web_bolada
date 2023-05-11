import { useState, React } from "react";
import "./index.css";
import axios from "axios";




export default function Note(props) {

  const [hidden, setHidden] = useState(false); 
  const addNode = (nome) => {

    
    setHidden(true);
    
    axios
    .post("https://projeto-2-backend-tecwebbolada-production.up.railway.app/games/ ", {name: nome})
    .then((response) => {
    })
  }

  return (
    <div className="geral">
        <h3>
            {props.nome} 
        </h3>
        {
          hidden ? (
            <></>
          ) : (
            <button className="botao" onClick={() => addNode(props.nome)} >Joguei!</button> 
          )
        }        
    </div>
  );
}
  