import React from 'react'
import { Link } from 'react-router'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <div className='nfp'>
        <div className='error-message'>
            <p className='fof'><FaExclamationTriangle style={{color: 'white'}}/>404</p>
            <p style={{fontSize: '30px'}}>Page Not Found</p>
        </div>
      <Link to="/"><button>Go Back Home</button></Link>
    </div>
  )
}

export default NotFoundPage