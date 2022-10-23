import { useState } from 'react'
import NoteContext from './noteContext'
const NoteState = (props) => {
    const notes = [
        {
          "_id": "63466030afbabce61752ad7fc",
          "user": "6344eac5b01184567d81c939",
          "title": "Hell yeah",
          "description": "this is new description",
          "tags": "work",
          "date": "1665557258907",
          "__v": 0
        },
        {
          "_id": "6346630b0fbabce61752ad7fe",
          "user": "6344eac5b01184567d81c939",
          "title": "Hell yeah",
          "description": "this is new description",
          "tags": "work",
          "date": "1665557259617",
          "__v": 0
        },
        {
          "_id": "6346630bf0babce61752ad7fe",
          "user": "6344eac5b01184567d81c939",
          "title": "Hell yeah",
          "description": "this is new description",
          "tags": "work",
          "date": "1665557259617",
          "__v": 0
        },
        {
          "_id": "6346630bfbabc0e61752ad7fe",
          "user": "6344eac5b01184567d81c939",
          "title": "Hell yeah",
          "description": "this is new description",
          "tags": "work",
          "date": "1665557259617",
          "__v": 0
        },
        {
          "_id": "6346630bfbabce61752ad07fe",
          "user": "6344eac5b01184567d81c939",
          "title": "Hell yeah",
          "description": "this is new description",
          "tags": "work",
          "date": "1665557259617",
          "__v": 0
        }
      ]


    // ADD A NOTE
    const addNote = (title, description, tags) => {
      console.log('adding a note');
      const note = {
        "_id": "6346630bfce61752ad07fe",
        "user": "6344eac5b01184567d81c939",
        "title": title,
        "description": description,
        "tags": tags,
        "date": "1665557259617",
        "__v": 0
      }
      setnote(notes.concat(note))
    }
    // DELETE A NOTE
    const deleteNote = () => {

    }
    // UPDATE A NOTE
      const updateNote = () => {
      }
    const [note, setnote] = useState(notes)
    return(
        < NoteContext.Provider value={{note, setnote, addNote, deleteNote, updateNote}}>
            { props.children }
        </NoteContext.Provider >
    )
}

export default NoteState