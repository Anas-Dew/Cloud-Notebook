import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='m-3 d-flex justify-content-center'>
      <p className='m-2'>&copy; Anas Dew 2022</p>
      <Link className='m-2' to={'https://www.getrevue.co/profile/ananasraza'}>Tech newsletter (it's free)</Link>
    </footer>
  )
}

export default Footer