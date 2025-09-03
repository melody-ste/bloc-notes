import { useState } from 'react'
import './App.css'
import MarkdownInput from "./components/MarkdownInput";
import NoteDisplay from "./components/NoteDisplay";

function App() {

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("blocNotes");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const selectedNote = notes.find((n) => n.id === selectedNoteId);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      content: ""
    };
    setNotes([newNote, ...notes]);
    setSelectedNoteId(newNote.id);
  };

  // Callback
  const handleMarkdownChange = (newContent) => {
    setNotes(
      notes.map((n) =>
        n.id === selectedNoteId ? { ...n, content: newContent } : n
      )
    );
  };

  const handleTitleChange = (newTitle) => {
    setNotes(
      notes.map((n) =>
        n.id === selectedNoteId ? { ...n, title: newTitle } : n
      )
    );
  };


  const handleSave = () => {
    localStorage.setItem("blocNotes", JSON.stringify(notes));
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header">
          <button className="btn-new" onClick={addNote}>Ajouter une note</button>
        </div>
        <ul className="note-list">
          {notes.map((note) => (
            <li
              key={note.id}
              className={`note-item ${
                note.id === selectedNoteId ? "active" : ""
              }`}
              onClick={() => setSelectedNoteId(note.id)}
            >
              <strong>{note.title || "Sans titre"}</strong>
              <p>{note.content.split(" ").slice(0, 15).join(" ")}...</p>
            </li>
          ))}
        </ul>
      </aside>

      <main className="main">
        <div>
          <h1>Bloc-Notes</h1>

           {selectedNote ? (
          <>
            <NoteDisplay title={selectedNote.title} markdown={selectedNote.content} />

            <MarkdownInput
              title={selectedNote.title}
              value={selectedNote.content}
              onTitleChange={handleTitleChange}
              onChange={handleMarkdownChange}
              onSave={handleSave}
            />
          </>
        ) : (
          <p>Aucune note sélectionnée, crée une nouvelle note à gauche.</p>
        )}
        </div>
      </main>
    </div>
  );
}

export default App
