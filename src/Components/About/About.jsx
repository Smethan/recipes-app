import React, { useState } from 'react'


const About = () => {
  const [about, setAbout ] = useState("")
  const handleEthan = () => {
    setAbout()
  }
  const handleTaylor = () => {
    setAbout()
  }
  const handleAaron = () => {
    setAbout()
  }
  return (
    <>
      <div>
        <img src="" alt="" />
        <h2>Ethan</h2>
        <button>About Ethan</button>
      </div>
      <div>
        <img src="" alt="" />
        <h2>Taylor</h2>
        <button>About Taylor </button>
      </div>
    
      <div>
        <img src="" alt="" />
        <h2>Aaron</h2>
        <button>About Aaron</button>
      </div>
      <div>
        <h1>About</h1>
        <p> {about} </p>
      </div>
    </>
 )
}

export default About