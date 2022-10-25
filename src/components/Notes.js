import { useContext, useEffect, useRef } from 'react'
import noteContext from '../context/noteContext'
import EditModal from './EditModal'
import NoNotes from './NoNotes'
import Noteitems from './Noteitems'
export default function Notes() {

    const notes = useContext(noteContext)
    const { note, fetchAllNotes } = notes
    useEffect(() => {
        fetchAllNotes();
    }, [])


    const updateNote = (note) => {
        ref.current.click()
    }
    const ref = useRef(null)
    return (
        <>
            <h2 className='my-3 mx-1'>Notes</h2>
            <div className='row'>
                {note.map((note) => {
                    return <Noteitems key={note._id} note={note} updateNote={updateNote} />
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
                            <EditModal />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn bg-danger btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn bg-primary btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
