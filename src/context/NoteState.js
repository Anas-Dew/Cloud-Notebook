import { useState } from 'react'
import NoteContext from './noteContext'
const NoteState = (props) => {
    return(
        < NoteContext.Provider value={{obj: 'fish'}}>
            { props.children }
        </NoteContext.Provider >
    )
}

export default NoteState