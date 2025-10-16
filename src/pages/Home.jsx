import React from "react";
import Projects from "./Projects";

const Home = ()=>{
    return (
        
         <div >
            <div className="Hero-section">
            <h1> Hi, I'm Oumer Jemal. </h1><br />
            <p>A front-end developer passionate about crafting modern, responsive, and elegant web experiences.
                I build digital products that are fast, intuitive, and user-focused.</p>
            
           </div>
       
            <div className="image-container">
                <h1>SKILLS:</h1>
                
                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
          <br />
               
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
          <br />
              
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
          
         
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
          <br />
           
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          <br />
        
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
          <br />
          <br />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
          
            </div>
            <button className="home-button" onClick={Projects}>View My Work</button>
             
        </div>
    )
}

export default Home