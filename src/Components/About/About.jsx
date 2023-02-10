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
    setAbout("As a child my dad was a chef in the Army. He used to take me and my brothers to work with him and I enjoyed seeing the preparation, cooking, and serving flow of the kitchen. That is when I fell in love with cooking. My go to dish is Bulgogi, thinly sliced beef marinated in a soy sauce mixture and stir fried. I love it! ")
  }
  return (
    <>
      <div>
        <img src="" alt="Ethan" />
        <h2>Ethan</h2>
        <button onclick={handleEthan}>About Ethan</button>
      </div>
      <div>
        <img src="" alt="Taylor" />
        <h2>Taylor</h2>
        <button onClick={handleTaylor}>About Taylor </button>
      </div>
    
      <div>
        <img src="" alt="Aaron" />
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