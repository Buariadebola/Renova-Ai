import '../App.css'
import React, { useContext } from 'react'
import img from '../assets/images/send.png'
import aiIcon from '../assets/images/renova AI logo.png'
import SideBar from './SideBar'
import { ChatAiContext } from '../Context/Context'
import arrow from '../assets/images/arrow-down-sign-to-navigate.png'
import { BiBulb } from 'react-icons/bi'
import { RiQuestionAnswerFill } from 'react-icons/ri'
import { FaBrain } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'

const ChatAi = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(ChatAiContext)

  return (
    <div className="chat-body">
    <SideBar />
    <div className="content">
      {!showResult
      ?
      <>
        <div className="welcome">
          <h1>Welcome to renova AI</h1>
          <div className='welcome-container'>
        <div className="welcome-text animation-emphasis">
          <p>Chat with Renova AI like you're talking to a friend - it's that smart!</p><div className='welcome-icon'><FaBrain style={{scale: '1.5'}}/></div>
        </div>
        <div className="welcome-text animation-emphasis">
          <p>Ask us anything, and Renova AI got the answers!</p><div className='welcome-icon'><RiQuestionAnswerFill style={{scale: '1.5'}}/></div>
        </div>
        <div className="welcome-text animation-emphasis">
          <p>Need ideas? Renova AI got creative sparks to ignite your imagination! </p><div className='welcome-icon'><BiBulb style={{scale: '1.5'}}/></div>
        </div>
        <div className="welcome-text animation-emphasis">
          <p>Renova AI learns from you, so the more you chat, the better it gets!</p><div className='welcome-icon'><GiTeacher style={{scale: '1.5'}}/></div>
        </div>
        </div>
          <p className='arrow'>Send a message <img src={arrow} alt="" /></p>
        </div> 
      </> 
      :
      <>
        <div className="chats">
          <div className="chat">
            <FaUserCircle className='user-img'/>
            <p>{recentPrompt}</p>
          </div>
          <div className="chat bot">
            {loading
            ?
            <div className='loader'>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            :
            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
            <img src={aiIcon} alt="" />
          </div>
        </div>
      </>
        }
      <div className="message"><input onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder="Send a message" /><button><img onClick={()=> onSent()} src={img} alt="sendbutton" /></button></div>
      <footer>
        <p>Renova Ai was designed and developed by RenovaCodes. &copy; copyright 2025</p>
      </footer>
    </div>
  </div>
  )
}

export default ChatAi
