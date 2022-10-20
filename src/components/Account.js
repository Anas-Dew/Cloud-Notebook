import React , {useContext, useEffect} from 'react'
import noteContext from '../context/noteContext'

export default function Account() {
  const user = useContext(noteContext)
  

  return (
    <>
      <div>Account</div>
    </>
  )
}
