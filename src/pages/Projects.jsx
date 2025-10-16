import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = ()=>{
    return (
        <div className="projects-container">
            <h1>Here are some of the projects i have been working on:</h1>
            <div className="cards-container" >
                <ProjectCard image ={"./myportfolio.png"} title ="Portfolio" description = "A little about me " tool = "React" />
                <ProjectCard image = {"./taskmanagement.png"} title ="Task Management dashboard" description = "A little projects to start with " tool = "React"/>
                <ProjectCard image = {"./dreamstayhotel.png"} title ="Hotel Reservation " description = "tried my best as a beginner " tool = "Html and Css"/>
            </div>
            
        </div>
    )
}

export default Projects