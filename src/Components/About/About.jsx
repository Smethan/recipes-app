import React, { useState } from 'react'


const About = () => {
  const [about, setAbout ] = useState("_nology's best developing chefs")
  const handleEthan = () => {
    setAbout("I am an awesome chef")
  }
  const handleTaylor = () => {
    setAbout("I am an amazing chef")
  }
  const handleAaron = () => {
    setAbout(" I am a cool chef")
  }
  return (
    <>
      <div>
        <img src="" alt="" />
        <h2>Ethan</h2>
        <button onclick={handleEthan}>About Ethan</button>
      </div>
      <div>
        <img src="" alt="" />
        <h2>Taylor</h2>
        <button onClick={handleTaylor}>About Taylor </button>
      </div>
    
      <div>
        <img src="" alt="" />
        <h2>Aaron</h2>
        <button onClick={handleAaron}>About Aaron</button>
      </div>
      <div>
        <h1>About</h1>
        <p> {about} </p>
      </div>
    </>
 )
}

export default About