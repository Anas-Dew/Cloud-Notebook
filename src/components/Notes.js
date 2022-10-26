import { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/noteContext'
// import EditModal from './EditModal'
import NoNotes from './NoNotes'
import Noteitems from './Noteitems'
export default function Notes() {

    const notes = useContext(noteContext)
    const { note, setnote, fetchAllNotes, updateNote } = notes
    useEffect(() => {
        fetchAllNotes();
    }, [])
    
    const [enote, setenote] = useState({eid: null, etitle: '', edescription: '', etags: ''})

    const updateNoteUi = (currentNote) => {
        ref.current.click()
        setenote({eid: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etags: currentNote.tags})
    }

    const submitNote = (e) => {
        e.preventDefault();
        updateNote(enote.eid, enote.etitle, enote.edescription, enote.etags)
        document.getElementById('submitButton').innerText = 'Saved!'
        
        // setnote(enote)
    }

    const onChange = (e) => {
        setenote({...enote, [e.target.name] : e.target.value})
    }
    const ref = useRef(null)
    return (
        <>
            <h2 className='my-3 mx-1'>Notes</h2>
            <div className='row'>
                {note.map((note) => {
                    return <Noteitems key={note._id} note={note} updateNote={updateNoteUi} />
                })}
                {/* <NoNotes/> */}
            </div>
            <button type="button" ref={ref} className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input className="form-control" id="etitle" name='etitle' placeholder="Write a title..." value={enote.etitle} onChange={onChange}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Story</label>
                                    <textarea className="form-control" id="edescription" name='edescription' rows="3" placeholder='It was a starting of spring...' value={enote.edescription} onChange={onChange}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etags" className="form-label">Tag</label>
                                    <textarea className="form-control" id="etags" name='etags' rows="1" placeholder='Work' value={enote.etags} onChange={onChange}></textarea>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn bg-danger btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn bg-primary btn-primary" id='submitButton' onClick={submitNote}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
