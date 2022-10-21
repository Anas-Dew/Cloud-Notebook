import { useContext } from 'react'
import noteContext from '../context/noteContext'
import Noteitems from './Noteitems'
export default function Notes() {

    const notes = useContext(noteContext)
    const { note, setnote } = notes

    return (
        <>
            <h2 className='my-3 mx-1'>Notes</h2>
            <div className='row'>
                {note.map((note) => {
                    return <Noteitems note={note} />
                })}
            </div>
        </>
    )
}
