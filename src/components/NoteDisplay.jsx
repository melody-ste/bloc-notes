import Showdown from "showdown";

const converter = new Showdown.Converter();

function NoteDisplay({ markdown }) {
  const htmlContent = converter.makeHtml(markdown);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

export default NoteDisplay;