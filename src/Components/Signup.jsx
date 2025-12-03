import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import api from '../api'
import { FaExclamationTriangle, FaEye, FaEyeSlash } from 'react-icons/fa'

const Signup = () => {

  const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const API_URL = import.meta.env.VITE_API_URL;

  const handleSignup = async (event) => {
    event.preventDefault();
    setLoading(true)
    setError(false)
    try{
      const response = await api.post("/api/signup", { username, email, password });
      console.log(response.data)
      setLoading(true)
      navigate('/login');
    alert("Signup successful! You can now sign in.");
    } catch (error) {
  setError(error.response?.data?.message || 'Error signing up');
} finally {
  setLoading(false)
}
  }

  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className='login-page'>
        <div className='login-box'>
        <h1 className="logo">Renova AI</h1>
            <form action="" className='signup-form' onSubmit={handleSignup}>
                <h2>Create Account</h2>
                <label htmlFor="name">Username:</label>
                <input type="text" placeholder='name...' value={username} onChange={(event) => setUsername(event.target.value)}/>
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder='user@example.com' value={email} onChange={(event) => setEmail(event.target.value)}/>
                <label htmlFor="password">Password:</label>
                <div className='password-box'>
                  <input type={showPassword ? "text" : "password"} placeholder='*******' minLength={7}  value={password} onChange={(event) => setPassword(event.target.value)}/><button type="button" onClick={() => setShowPassword(! showPassword)}>{showPassword ? <FaEyeSlash style={{scale: '1.4'}}/> : <FaEye style={{scale: '1.4'}}/>}</button>
                </div>
                {(password.length < 7) ? <p style={{color: 'red'}}>Password must be at least 7 characters</p> : null}
                {error && <div className='signup-error'><FaExclamationTriangle className='notice-icon' style={{marginRight: '5px'}}/> {error}</div>}
                <button type='submit' className='submit-button' disabled={loading}>{loading ? <div className="spinner"></div> : "sign up" }</button>
                <p>Have an account already? <button><Link to="/login">Login</Link></button></p>
          </form>
        </div>
    </div>
  )
}

export default Signup
