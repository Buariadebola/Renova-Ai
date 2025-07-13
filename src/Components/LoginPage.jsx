import React from 'react'
import { Link } from 'react-router'

function Login(){

  return (
    <>
    <div className='login-page'>
      <div className='login-box'>
        <h1 className="logo">Renova AI</h1>
          <form action="">
          <h2>Sign in</h2>
            <label htmlFor="email">Email:</label>
              <input type="email" placeholder='user@example.com'/>
            <label htmlFor="password">Password:</label>
              <input type="password" placeholder='********' minLength={7} />
            <button type='submit' className='submit-button'>Sign in</button>
          <p>Don't have an account yet? <button className='signUp-button'><Link to="/signup">Sign up</Link></button></p>
        </form>
      </div>
      </div>
    </>
  )
}

export default Login
