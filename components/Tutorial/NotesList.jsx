export default function NotesList(note) {
  return <li key={note.id}>{note.note}</li>;
}
