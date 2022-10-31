import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Signup(props) {
  const [log, setlog] = useState({ password: "" })
  const onChange = (e) => {
    setlog({ ...log, [e.target.name]: e.target.value })
  }

  const host = 'http://localhost:5000'
  const navigate = useNavigate();

  const signupUser = async (e) => {
    e.preventDefault()
    const response = await fetch(`${host}/api/create-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: document.getElementById('name').value, email: document.getElementById('email').value, password: document.getElementById('password').value })
    });
    const respond = await response.json()

    // REDIRECT USER
    if (respond.authToken) {
      localStorage.setItem('token', respond.authToken)
      props.showAlert('Fantastic!', 'Account Created!', 'success')
      navigate('/')

    } else {
      props.showAlert('Woah!', 'Something went wrong!', 'danger')
    }


  }
  return (
    <>
      <form onSubmit={signupUser}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" onChange={onChange} className="form-control" name='password' minLength={5} id="password" />
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="keeploggedin" />
          <label className="form-check-label" htmlFor="keeploggedin" name='keeploggedin'>Keep me logged in.</label>
        </div> */}
        <button disabled={log.password.length <= 5} type="submit" className="btn btn-primary" >Create Account</button>
      </form>
    </>
  )
}
