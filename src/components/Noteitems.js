import React, { useContext } from 'react'
import noteContext from '../context/noteContext'

export default function Noteitems(props) {
    const context = useContext(noteContext)
    const { deleteNote } = context
    const { note, updateNote, note_style } = props
    // const note_style = ['blue', 'black']
    const emotion_filter = () => {
        const thatTag = note.tags;
        const noteCard = document.getElementById('note-card')

        const emotion_filters = new Map()
        // First item in ARR is text color and second one is BackgroundColor of Card.
        emotion_filters.set('class', ['black', 'yellow'])
        emotion_filters.set('love', ['white', 'red'])
        emotion_filters.set('work', ['white', 'blue'])

        const emotion_filters_key = ['love', 'class', 'work']

        emotion_filters_key.map((filter) => {
            if (filter == thatTag.toLowerCase()){
                const stylies = emotion_filters.get(filter)
                // noteCard.style.color = stylies[0]
                // noteCard.style.backgroundColor = stylies[1];
                return stylies
            }
        })
    }

    
    return (
        <>
            <div className='col-md-3' style={{display: "flex", justifyContent: "center"}}>
                <div id='note-card' className="card my-2" style={{ width: "18rem" , color: note_style[0], backgroundColor: note_style[1]}}>
                {/* <div id='note-card' className="card my-2" style={{ width: "18rem"}}> */}
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <h6 className="card-subtitle mb-2">{note.tags.toUpperCase()}</h6>
                        <p className="card-text">{note.description}</p>
                        <div style={{display: "flex"}}>
                            <i className="text-danger fa-sharp fa-solid fa-trash" onClick={() => {deleteNote(note._id)}}></i>
                            <i className="mx-2 fa-sharp fa-solid fa-pen-to-square" onClick={() => {updateNote(note)}}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
