import React from "react";

function ProjectCard(props){
    return(
       <div className="project-card-container">
         <img src={props.image} alt="myportfolio " id="myportfolio" />
         <h1>{props.title}</h1>
         <p>{props.description}</p>
         <p>Using {props.tool}</p>

         
       </div>
    )
}
export default ProjectCard