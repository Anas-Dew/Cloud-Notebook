import React , {useContext, useEffect} from 'react'
import noteContext from '../context/noteContext'

export default function Account() {
  const user = useContext(noteContext)
  useEffect(() => {
    user.update()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div>Account</div>
      <div>{user.first.name}</div>
    </>
  )
}
