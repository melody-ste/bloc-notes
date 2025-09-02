function MarkdownInput({ value, onChange, onSave }) {
  return (
    <div className="markdown-input">
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
