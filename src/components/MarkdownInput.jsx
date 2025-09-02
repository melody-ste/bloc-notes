function MarkdownInput({ title, onTitleChange, value, onChange, onSave }) {
  return (
    <div className="markdown-input">
      <input
        type="text"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="Titre de la note..."
      />

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Écris ton texte en markdown ici..."
      />
      <button onClick={onSave}>Sauvegarder</button>
    </div>
  );
}

export default MarkdownInput;
