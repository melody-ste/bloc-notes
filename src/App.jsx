import { useState } from 'react'
import './App.css'
import MarkdownInput from "./components/MarkdownInput";
import NoteDisplay from "./components/NoteDisplay";

function App() {

  const [note, setNote] = useState(() => {
    return localStorage.getItem("blocNote") || "";
  });

  // Callback
  const handleMarkdownChange = (value) => {
    setNote(value);
  };

  const handleSave = () => {
    localStorage.setItem("blocNote", note);
  };

  return (
    <div>
      <h1>Bloc-Notes</h1>
      
      <MarkdownInput
        value={note}
        onChange={handleMarkdownChange}
        onSave={handleSave}
      />
    </div>
  );
}

export default App
