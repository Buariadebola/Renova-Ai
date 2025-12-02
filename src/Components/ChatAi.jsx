import '../App.css'
import React, { useContext, useEffect, useState } from 'react'
import img from '../assets/images/send.png'
import aiIcon from '../assets/images/Renova Bot2.png'
import SideBar from './SideBar'
import { ChatAiContext } from '../Context/Context'
import arrow from '../assets/images/arrow-down-sign-to-navigate.png'
import { BiBulb, BiPlus } from 'react-icons/bi'
import { RiQuestionAnswerFill } from 'react-icons/ri'
import { FaBrain } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'

const ChatAi = () => { 

  const {handleSend, messages, handleEnter, loading, showResult, input, setInput, msgEnd, dragActive, handleDragOver, handleDragLeave, handleDrop, handleFileUpload, imageInput, handleFileOpen, fileOpen} = useContext(ChatAiContext)

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
          {messages.map((message, i) => (
              <div key={i} className={message.isBot? "chat bot" : "chat"}>
                {message.isBot? ( <img src={aiIcon} alt="" />) : (<FaUserCircle className='user-img'/>)}
                    <>
                    {message.isBot && loading && i === messages.length - 1 ? (
                        <div className="loader">
                          <div className="line"></div>
                          <div className="line"></div>
                          <div className="line"></div>
                          <div className="line"></div>
                          <div className="line"></div>
                        </div>
                    ) : (
                      <>
                       {message.image && <a href={message.image}><img src={message.image} alt="sent" className="chat-image"/></a>}
                        {message.text && (
                          <p dangerouslySetInnerHTML={{ __html: message.text }} />
                        )}
                      </>
                    )}
                  </>
             </div>
            ))}
        <div ref={msgEnd}/>
        </div>
      </>
}
      <div className="message">
        {fileOpen ? (<div
  className={`upload-area ${dragActive ? "drag-active" : ""}`}
  onDragOver={handleDragOver}
  onDragLeave={handleDragLeave}
  onDrop={handleDrop}
>
  {imageInput ? (
    <img src={URL.createObjectURL(imageInput)} alt="preview" className="preview" />
  ) : (
    <p>Drag & Drop Image Here or Click to Upload</p>
  )}

  <input type="file" accept="image/*" onChange={handleFileUpload} />
</div>) : null}
        <button className='attachment-button' onClick={handleFileOpen}><BiPlus style={{scale: '1.1'}}/></button><textarea onKeyDown={handleEnter} onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder="Send a message" /><button onClick={()=> handleSend(input, imageInput)} className='send-button'><img src={img} alt="sendbutton" /></button>
      </div>
      <footer>
        <p>Renova Ai was designed and developed by RenovaCodes. &copy; copyright 2025</p>
      </footer>
    </div>
  </div>
  )
}

export default ChatAi
