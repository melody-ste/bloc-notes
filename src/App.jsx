import { useState } from 'react'
import './App.css'
import MarkdownInput from "./components/MarkdownInput";
import NoteDisplay from "./components/NoteDisplay";

function App() {

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  // Callback
  const handleMarkdownChange = (value) => {
    setNote(value);
  };

  const handleSave = () => {
    const noteData = { title, content: note };
    localStorage.setItem("blocNote", JSON.stringify(noteData));
  };

  return (
    <div>
      <h1>Bloc-Notes</h1>
      
      <NoteDisplay title={title} markdown={note} />

      <MarkdownInput
        title={title}
        value={note}
        onTitleChange={setTitle}
        onChange={handleMarkdownChange}
        onSave={handleSave}
      />
    </div>
  );
}

export default App
