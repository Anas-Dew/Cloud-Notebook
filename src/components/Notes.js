import { useContext } from 'react'
import noteContext from '../context/noteContext'
import Noteitems from './Noteitems'
export default function Notes() {

    const notes = useContext(noteContext)
    const { note, addNote } = notes

    return (
        <>
            <h2 className='my-3 mx-1'>Notes</h2>
            <div className='row'>
                {note.map((note) => {
                    return <Noteitems key={note._id} note={note} />
                })}
            </div>
        </>
    )
}
