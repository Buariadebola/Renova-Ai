import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import api from '../api'
import { FaExclamationTriangle, FaEye, FaEyeSlash } from 'react-icons/fa'

function Login(){

  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

        const handleSignin = async (event) => {
        event.preventDefault();
        try{
          const response = await api.post("/api/signin", { username, password });
          const token = response.data.token;
          localStorage.setItem('token', token)
          localStorage.setItem('username', username);
          navigate('/chat');
        } catch (error) {
  setError(error.response?.data?.message || 'Error signing in');
}
      }

        const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <div className='login-page'>
      <div className='login-box'>
        <h1 className="logo">Renova AI</h1>
          <form action="" onSubmit={handleSignin}>
          <h2>Login</h2>
            <label htmlFor="email">Email:</label>
              <input type='text' placeholder='John Doe' value={username} onChange={(event) => setUsername(event.target.value)}/>
            <label htmlFor="password">Password:</label>
            <div className='password-box'>
              <input type={showPassword ? "text" : "password"} placeholder='********' minLength={7} value={password} onChange={(event) => setPassword(event.target.value)} /><button type="button" onClick={() => setShowPassword(! showPassword)}>{showPassword ? <FaEyeSlash style={{scale: '1.4'}}/> : <FaEye style={{scale: '1.4'}}/>}</button>
            </div>
              {error && <div className='signup-error'><FaExclamationTriangle className='notice-icon' style={{marginRight: '5px'}}/> {error}</div>}
            <button type='submit' className='submit-button'>Sign in</button>
          <p>Don't have an account yet? <button className='signUp-button'><Link to="/signup">Create account</Link></button></p>
        </form>
      </div>
      </div>
    </>
  )
}

export default Login
