import React, { useState } from 'react'
import aaron from "../../Images/aaron.jpg"
import ethan from "../../Images/CA64097A-4B2E-42D2-9C4C-A9210EC6D08B.JPG";
import taylor from "../../Images/IMG_7716.jpg";
import aboutPic from "../../Images/simply.png";
import "./About.scss";


const About = () => {
  // const [about, setAbout ] = useState("Meet _nology's best developing chefs")
  // const handleEthan = () => {
  //   setAbout("I am an awesome chef")
  // }
  // const handleTaylor = () => {
  //   setAbout("I spent most of my childhood in the kitchen learning proper cooking and baking techniques from my grandma. I later worked at a bakery and created wedding cakes!")
  // }
  // const handleAaron = () => {
  //   setAbout("As a child my dad was a chef in the Army. He used to take me and my brothers to work with him and I enjoyed seeing the preparation, cooking, and serving flow of the kitchen. That is when I fell in love with cooking. My go to dish is Bulgogi, thinly sliced beef marinated in a soy sauce mixture and stir fried. I love it! ")
  // }
  return (
    <>
      <img id="about-pic" src={aboutPic} />
      <p id="about-title"> Meet _nology's best developing chefs</p>
      <div className="ethan-container">
        <div className="name">Ethan</div>
        <img className="ethan-pic" src={ethan} alt="picture of ethan" />
        <div className='info-container'>
        <p className="name-info">"My name's Ethan, I've enjoyed cooking for quite a while. I was inspired by my dad and his baking, but my mom was the one who actually taught me everything I know. My favorite thing to make is currently our homemade chili, always good in winter."</p>
        </div>
        {/* <button onclick={handleEthan}>About Ethan</button> */}
      </div>
      <div className="ethan-container">
        <h3 className="name">Taylor</h3>
        <img className="ethan-pic" src={taylor} alt="picture of taylor" />
        <div className='info-container'>
        <p className="name-info">"I spent most of my childhood in the kitchen learning cooking and baking techniques from my grandma. To this day I often find myself in her kitchen experimenting recipes with her. I also worked at a bakery and created wedding cakes for about 5 years!"</p>
        </div>
        {/* <button onClick={handleTaylor}>About Taylor </button> */}
      
      </div>
    
      <div className="ethan-container">
        <h3 className="name">Aaron</h3>
        <img className="ethan-pic" src={aaron} alt="picture of aaron" />
        <div className='info-container'>
        <p className="name-info">"As a child my dad was a chef in the Army. He used to take me and my brothers to work with him and I enjoyed seeing the preparation, cooking, and serving flow of the kitchen. That is when I fell in love with cooking. My go to dish is Bulgogi, thinly sliced beef marinated in a soy sauce mixture and stir fried. I love it! "</p>
        </div>
        {/* <button onClick={handleAaron}>About Aaron</button> */}
      </div>
      <div>
      </div>
      </>
      )
      }

export default About;