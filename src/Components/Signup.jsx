import React from 'react'
import { Link } from 'react-router'

const Signup = () => {
  return (
    <div className='login-page'>
        <div className='login-box'>
        <h1 className="logo">Renova AI</h1>
            <form action="" className='signup-form'>
                <h2>Sign up</h2>
                <label htmlFor="name">Username:</label>
                <input type="text" placeholder='name...'/>
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder='user@example.com' />
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder='*******' minLength={7} />
                <button type='submit' className='submit-button'>sign up</button>
                <p>Have an account already? <button><Link to="/">Sign in</Link></button></p>
          </form>
        </div>
    </div>
  )
}

export default Signup
