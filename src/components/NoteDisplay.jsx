import Showdown from "showdown";

const converter = new Showdown.Converter();

function NoteDisplay({ title, markdown }) {
  const htmlContent = converter.makeHtml(markdown);

  return (
    <div>
      <h2 className="note-title">{title || ""}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}

export default NoteDisplay;