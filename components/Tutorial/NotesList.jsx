import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

const FETCH_NOTES = gql`
  query fetchNotes($user_id: String, $video_id: String) {
    notes(where: { user_id: { _eq: $user_id }, video_id: { _eq: $video_id } }) {
      note
    }
  }
`;

const ADD_NOTE = gql`
  mutation MyMutation($note: String, $user_id: String, $video_id: String) {
    insert_notes(
      objects: { note: $note, user_id: $user_id, video_id: $video_id }
    ) {
      returning {
        id
        note
        video_id
        user_id
      }
    }
  }
`;

export default function NotesList({ user, selection }) {
  const [noteToggled, toggleNoteInput] = useState(false);
  const [note, setNote] = useState("");

  const { loading, error, data, refetch } = useQuery(FETCH_NOTES, {
    variables: {
      user_id: user.sub,
      video_id: selection.snippet.resourceId.videoId
    }
  });
  const [addNote] = useMutation(ADD_NOTE);

  console.log(data);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      {!noteToggled ? (
        <button
          className="add-note-btn button"
          onClick={() => toggleNoteInput(true)}
        >
          add a note
        </button>
      ) : (
        <button
          className="add-note-btn button"
          onClick={() =>
            addNote({
              variables: {
                note: note,
                user_id: user.sub,
                video_id: selection.snippet.resourceId.videoId
              }
            }).then(() => {
              toggleNoteInput(false);
              refetch();
            })
          }
        >
          save note
        </button>
      )}
      <ul className="notes-list">
        {data.notes.map(note => (
          <li key={note.id}>{note.note}</li>
        ))}
      </ul>
      {noteToggled ? (
        <input type="textarea" onChange={e => setNote(e.target.value)} />
      ) : null}
    </div>
  );
}
