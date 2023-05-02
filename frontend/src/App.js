import { useEffect, useState } from "react";
import Note from "./components/Note";
import axios from "axios";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
  axios 
    .get("https://zelda.fanapis.com/api/games")
    .then((response) => { 
      setNotes(response.data.data); 
      console.log(response.data.data);
    })
  }, []);

  return (
    <div className="App">
      {notes.map((note) => 
      <Note nome = {note.name}> </Note>)}
    </div>
  );
}

export default App;
