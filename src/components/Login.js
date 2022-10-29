import React from 'react'
import {Navigate} from 'react-router-dom'
export default function Login() {
    const host = 'http://localhost:5000'
    // let history = Navigate();
    const loginUser = async(e) => {
        e.preventDefault()
        const response = await fetch(`${host}/api/login-user`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({email: document.getElementById('email').value, password: document.getElementById('password').value})
          });
        const respond = await response.json()
        console.log(respond);

        // REDIRECT USER
        if (respond.authToken) {
            localStorage.setItem('token', respond.authToken)
            // history('/')
            window.location.href = "/";
            
        } else {
            alert('You Suck!')
        }
    }

    return (
        <>
            <form onSubmit={loginUser}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp"/>
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="password"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="keeploggedin"/>
                        <label className="form-check-label" htmlFor="keeploggedin" name='keeploggedin'>Keep me logged in.</label>
                </div>
                <button type="submit" className="btn btn-primary" >Login</button>
            </form>
        </>
    )
}
