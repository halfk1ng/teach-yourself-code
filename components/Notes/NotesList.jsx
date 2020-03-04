import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

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
  const { loading, error, data, refetch } = useQuery(FETCH_NOTES, {
    variables: {
      user_id: user.sub,
      video_id: selection.snippet.resourceId.videoId
    }
  });

  console.log(data);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      <div className="notes-title has-text-left">
        <h3>
          <b>Your Notes</b>
        </h3>
      </div>
      <div className="notes-container ">
        <ul className="notes-list has-text-left">
          {data.notes.map(note => (
            <li key={note.id} className="note">
              {note.note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
