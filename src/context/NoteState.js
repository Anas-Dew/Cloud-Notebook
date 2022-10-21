import { useState } from 'react'
import NoteContext from './noteContext'
const NoteState = (props) => {
    const notes = [
        {
          "_id": "6346630afbabce61752ad7fc",
          "user": "6344eac5b01184567d81c939",
          "title": "Hell yeah",
          "description": "this is new description",
          "tags": "work",
          "date": "1665557258907",
          "__v": 0
        },
        {
          "_id": "6346630bfbabce61752ad7fe",
          "user": "6344eac5b01184567d81c939",
          "title": "Hell yeah",
          "description": "this is new description",
          "tags": "work",
          "date": "1665557259617",
          "__v": 0
        },
        {
          "_id": "6346630bfbabce61752ad7fe",
          "user": "6344eac5b01184567d81c939",
          "title": "Hell yeah",
          "description": "this is new description",
          "tags": "work",
          "date": "1665557259617",
          "__v": 0
        },
        {
          "_id": "6346630bfbabce61752ad7fe",
          "user": "6344eac5b01184567d81c939",
          "title": "Hell yeah",
          "description": "this is new description",
          "tags": "work",
          "date": "1665557259617",
          "__v": 0
        },
        {
          "_id": "6346630bfbabce61752ad7fe",
          "user": "6344eac5b01184567d81c939",
          "title": "Hell yeah",
          "description": "this is new description",
          "tags": "work",
          "date": "1665557259617",
          "__v": 0
        },
        {
          "_id": "6346630bfbabce61752ad7fe",
          "user": "6344eac5b01184567d81c939",
          "title": "Hell yeah",
          "description": "this is new description",
          "tags": "work",
          "date": "1665557259617",
          "__v": 0
        },
        {
          "_id": "6346630bfbabce61752ad7fe",
          "user": "6344eac5b01184567d81c939",
          "title": "Hell yeah",
          "description": "this is new description",
          "tags": "work",
          "date": "1665557259617",
          "__v": 0
        },
        {
          "_id": "6346630bfbabce61752ad7fe",
          "user": "6344eac5b01184567d81c939",
          "title": "Hell yeah",
          "description": "this is new description",
          "tags": "work",
          "date": "1665557259617",
          "__v": 0
        },
        {
          "_id": "6346630bfbabce61752ad7fe",
          "user": "6344eac5b01184567d81c939",
          "title": "Hell yeah",
          "description": "this is new description",
          "tags": "work",
          "date": "1665557259617",
          "__v": 0
        },
        {
          "_id": "6346630bfbabce61752ad7fe",
          "user": "6344eac5b01184567d81c939",
          "title": "Hell yeah",
          "description": "this is new description",
          "tags": "work",
          "date": "1665557259617",
          "__v": 0
        },
        {
          "_id": "6346630bfbabce61752ad7fe",
          "user": "6344eac5b01184567d81c939",
          "title": "Hell yeah",
          "description": "this is new description",
          "tags": "work",
          "date": "1665557259617",
          "__v": 0
        },
        {
          "_id": "6346630bfbabce61752ad7fe",
          "user": "6344eac5b01184567d81c939",
          "title": "Hell yeah",
          "description": "this is new description",
          "tags": "work",
          "date": "1665557259617",
          "__v": 0
        }
      ]

    const [note, setnote] = useState(notes)
    return(
        < NoteContext.Provider value={{note, setnote}}>
            { props.children }
        </NoteContext.Provider >
    )
}

export default NoteState