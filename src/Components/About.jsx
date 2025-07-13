import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const About = () => {

    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const typingSpeed = 10;
    const textToType = `
    <h1>About Renova AI</h1>
    <p>Welcome to Renova AI, your source for innovative artificial 
    intelligence solution. Our chatbot was developed in 2025 by Renova 
    Codes (Buari Adebola) out of passion for leverging cutting-edge 
    technology to drive meaningful impact.</p>
    <h2>Our Mission</h2>
    <p>Our mission is to empower businesses and individuals with the 
    latest advancement in AI. We strive to provide innovative solutions 
    that enhances efficiency, productivity, and decision-making.</p>
    <h2>Our values:</h2>
    <ul>
      <li><span>Innovation: </span>We believe in pushing the boundaries of what's possible with AI.</li>
      <li><span>Excellence: </span>We strive for exceptional quality in everything we do.</li>
      <li><span>Customer-centricity: </span>We're dedicated to delivering solutions that meet the unique needs of our clients.</li>
    </ul>
    <h2>Get in Touch</h2>
    <p>Ready to explore the possibilities of AI? Contact us today to learn more about our solutions and services</p>
    <br />
      <li>Email: buariadebola@gmail.com</li>
      <li>Whatsapp: +234 913 621 7111</li>
    </ul>
    `;

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (index < textToType.length) {
                setText(textToType.substring(0, index + 1));
                setIndex(index + 1);
            } else {
                clearInterval(intervalId);
            }
        }, typingSpeed);

        return () => clearInterval(intervalId);
    }, [index, textToType]);


  return (
    <div className='about-page'>
      <Link to="/chat"><FaArrowAltCircleLeft style={{position: 'absolute', left: '10px', top: '20px', scale: '2', zIndex: '99', color: 'white'}}/></Link>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="about-content">
      <span dangerouslySetInnerHTML={{__html: text}}/>
      </div>
      
    </div>
  )
}

export default About
