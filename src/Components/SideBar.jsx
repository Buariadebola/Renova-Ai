import React, {useState, useContext} from 'react'
import menuBtn from '../assets/images/menu1.png'
import Back from '../assets/images/back.png'
import whatsappicon from '../assets/images/whatsapp (1).png'
import mailicon from '../assets/images/gmail.png'
import { HiHome } from 'react-icons/hi2'
import { FaInfoCircle } from 'react-icons/fa'
import { BiSave } from 'react-icons/bi'
import { BiPlus } from 'react-icons/bi'
import settingicon from '../assets/images/settingspng.png'
import { BiPhone } from 'react-icons/bi'
import { Link } from 'react-router'
import { ChatAiContext } from '../Context/Context'
import logo from '../assets/images/renova AI logo.png'
import { ThemeContext} from '../Context/ThemeProvider'

const SideBar = () => {
      const [showSidebar, setShowSidebar] = useState(false);
      const [showContent1, setShowContent1] = useState(true);
      const [showDropdown, setShowDropdown] = useState(false);
    
      const handleBar = () => {
        setShowSidebar(! showSidebar);
      };
      const handleClick = () => {
        setShowContent1(! showContent1);
      };
      const handleDropdown = () => {
        setShowDropdown(! showDropdown);
      };


      const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(ChatAiContext);

      const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
      }

      const { theme, toggleTheme, handleColor, clicked} = useContext(ThemeContext)

  return (
    <>
      <button className="sidebar-toggle" onClick={handleBar}><img src={menuBtn} alt="" /></button>
            <div className="bar">
            <div className={ `sidebar ${showSidebar ? 'show' : 'hide'}`}>
              {showContent1 ? (
                        <div className="sidebar-content content-1" >
                        <div className="sidebar-top">
                          <div className="head"><img src={logo} alt="" /><button className="settingsBtn" onClick={handleClick}><img src={settingicon} alt="" /></button></div>
                          <button onClick={newChat} className="newchat-button">New Chat<BiPlus style={{marginLeft: '5px', scale: '1.2'}}/></button>
                          <div className="query-section">
                            {prevPrompts.map((item,index)=> {
                              return(<button key={index} onClick={()=>loadPrompt(item)} className="query">{item.slice(0,30)}</button>)
                            })}
                          </div>

                        </div>
                        <div className="sidebar-bottom">
                          <Link to="/"><button><HiHome style={{marginRight: '5px', scale: '1.2'}}/>Home</button></Link>
                          <button><BiSave style={{marginRight: '5px', scale: '1.2'}}/>Saved</button>
                          <Link to="/about"><button><FaInfoCircle style={{marginRight: '5px', scale: '1.2'}}/>About</button></Link>
                        </div>
                        </div>
              ): (
                <div className={`sidebar-content content-2 ${theme}`}>
                  <div className="head">
                  <button className="back-btn" onClick={handleClick}><img src={Back} alt="" /></button>
                <h1>Settings</h1>
                </div>
                <div className="settings-list">
                <button className="toggle-btn" onClick={toggleTheme} onMouseDown={handleColor}>
                  <p> Change Theme
                    { clicked ? (
                      <svg id="moon-icon" style={{marginLeft: '5px'}} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    ) : (
                    <svg id="sun-icon" style={{marginLeft: '5px'}} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    )
                  }
                  </p>
                </button>
            <hr />
            <button className="dropdown-btn" onClick={handleDropdown}><p>Contact<BiPhone style={{marginLeft: '5px', scale: '1.2'}}/></p></button>
            <div className={ `dropdown-menu ${showDropdown ? 'showdropdown' : 'hidedropdown'}`}>
              <ul>
              <li><img src={whatsappicon} alt="" />+234 811 532 9375</li>
              <hr />
              <li><img src={mailicon} alt="" />buariadebola@gmail.com</li>
              </ul>
            </div>
            <hr />
            <button className="home-btn">
              <p><Link>Sign up / sign in</Link></p>
            </button>
            <hr />
            </div>
              </div>
              )}
              </div>
            </div>
    </>
  )
}

export default SideBar