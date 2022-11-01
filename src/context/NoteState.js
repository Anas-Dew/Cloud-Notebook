import { useState } from 'react'
import NoteContext from './noteContext'
const NoteState = (props) => {
  const host = 'http://localhost:5000'
  
  const fetchAllNotes = async() => {
    const response = await fetch(`${host}/api/notes/fetch-all-notes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authToken': localStorage.getItem('token')
      }
    });
    const allFetchedNotes = await response.json()
    setnote(allFetchedNotes)
    // console.log(allFetchedNotes);
    // props.showAlert('Hi!', 'Welcome back!', 'success')

  }

  const notes = []


  const [note, setnote] = useState(notes)
  // ADD A NOTE
  const addNote = async(title, description, tags) => {
  
    const response = await fetch(`${host}/api/notes/add-note`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authToken': localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tags})
    });

    const noteNEW = await response.json();
    setnote(note.concat(noteNEW))
  }
  // DELETE A NOTE
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authToken': localStorage.getItem('token')
      }
    });
    const newNote = note.filter((note) => { return note._id !== id })
    setnote(newNote)
  }
  // UPDATE A NOTE
  const updateNote = async (id, title, description, tags) => {
    const response = await fetch(`${host}/api/notes/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authToken': localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tags})
    });
    for (let index = 0; index < note.length; index++) {
      const element = note[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tags = tags;
      }

    }
  }
  return (
    < NoteContext.Provider value={{ note, setnote, addNote, deleteNote, updateNote, fetchAllNotes }}>
      {props.children}
    </NoteContext.Provider >
  )
}

export default NoteState