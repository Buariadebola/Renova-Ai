import React from 'react'

const FeatureCard = ({text, isActive, image}) => {
  return (
    <div>
        <div className={`feature ${isActive ? 'active' : ''}`}>
          <img src={image} alt="" />
          <p>{text}</p>
        </div>
    </div>
  )
}

export default FeatureCard
