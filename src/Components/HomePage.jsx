import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import { Link } from 'react-router'
import FeatureCard from './FeatureCard'
import chatbot from '../assets/images/Renova Bot.png'
import { ThemeContext } from '../Context/ThemeProvider'
import Logo from '../assets/images/renova AI logo.png'
import { FaRobot } from 'react-icons/fa'
import img1 from '../assets/images/Homeimg1.jpeg'
import img2 from '../assets/images/Homeimg4.png'
import img3 from '../assets/images/Homeimg2.jpeg'
import img4 from '../assets/images/Homeimg3.jpeg'


const slides = [
  { image: img1, text: 'Research and explore new destination with Renova AI', },
  { image: img2, text: 'Get instant answers to your homework questions and learn with Renova AI'},
  { image: img3, text: 'Practice conversation and improve your language skill with our interactive Chatbot!' },
  { image: img4, text: 'Chat with our bot for fun, play games, and discover new interests!'}
  ]
const HomePage = () => {

  const [ currentIndex ,setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  const {  toggleTheme, theme, handleColor, clicked } = useContext(ThemeContext);


  return (
    <>
    <div className='homepage'>
      <button className={`home-theme ${theme}`} onClick={toggleTheme} onMouseDown={handleColor}>
        { clicked ? (
          <svg id="moon-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
        <svg id="sun-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        )
      }
      </button>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="homepage-image">
        <img className='chatbot' src={chatbot} alt="" />
      </div>
      <div className='features-container'>
      <div className='ai-features'>
        {slides.map((slide, index) => (
          <FeatureCard
            key={index}
            text={slide.text}
            image={slide.image}
            isActive={currentIndex === index}
          />
        ))
        }
      </div>
      </div>
      <div className="homepage-logo"><img src={Logo} alt="" /></div>
      <div className="info">Developed by "Renova Codes"</div>
      <Link to="/chat"><button className='enter-button'>Chat with Renova AI<FaRobot style={{marginLeft: '10px'}}/></button></Link>
    </div>
    
    </>
  )
}

export default HomePage
