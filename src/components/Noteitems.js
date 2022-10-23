import React, { useContext } from 'react'
import noteContext from '../context/noteContext'

export default function Noteitems(props) {

    const context = useContext(noteContext)
    const { deleteNote } = context
    const { note } = props
    return (
        <>
            <div className='col-md-3' style={{display: "flex", justifyContent: "center"}}>
                <div className="card my-2" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{note.tags}</h6>
                        <p className="card-text">{note.description}</p>
                        <div style={{display: "flex"}}>
                            <i className="text-danger fa-sharp fa-solid fa-trash" onClick={() => {deleteNote(note._id)}}></i>
                            <i className="mx-2 fa-sharp fa-solid fa-pen-to-square"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
