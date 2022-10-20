import { useState } from 'react'
import NoteContext from './noteContext'
const NoteState = (props) => {
    const information = {
        "name": "agent07",
        "id": "12-353",
        "age": "89",
    }
    const [first, setfirst] = useState(information)
    const update = () => {
        setTimeout(()=>{
            setfirst({
                "name": "Anas",
                "id": "0123",
                "age": "20",
            })
        }, 1500)
    }
    return(
        < NoteContext.Provider value={{first, update}}>
            { props.children }
        </NoteContext.Provider >
    )
}

export default NoteState