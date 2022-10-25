import React, {useContext, useState} from 'react'
import noteContext from '../context/noteContext'
export default function AddNote() {
    const notes = useContext(noteContext)
    const {addNote } = notes

    const [note, setnote] = useState({title: "", description:"", tags: "default"})
    const submitNote = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tags)
    }

    const onChange = (e) => {
        setnote({...note, [e.target.name] : e.target.value})
    }
    return (
        <>
            <h1 className='my-3 mx-1'>Add a note</h1>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input className="form-control" id="title" name='title' placeholder="Write a title..." onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Story</label>
                    <textarea className="form-control" id="description" name='description' rows="3" placeholder='It was a starting of spring...' onChange={onChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tag</label>
                    <textarea className="form-control" id="tags" name='tags' rows="1" placeholder='Work' onChange={onChange}></textarea>
                </div>
                <button type="button" className="form-control btn btn-primary" onClick={submitNote}>Create</button>
            </form>
        </>
    )
}
