import React from 'react'

const AboutSection = () => {
  return (
    <div>
        <section className="about-section">
        <div className="about-content">
            <h1>About Me</h1> <hr />

            <br /><br /><br />
            <p>
            Hi, I’m <span>Oumer Jemal</span> — a passionate front-end developer who loves
            turning creative ideas into interactive digital experiences.
            I focus on crafting clean, efficient, and responsive designs
            that make the web more beautiful and user-friendly.
            </p>

            <p>
            When I’m not coding, I’m usually learning new technologies, exploring UI/UX design trends,
            or experimenting with projects that push my skills forward.
            </p>

            <div className="skills">
            <h3>Tech Stack</h3>
            <ul>
                <li>⚛️ React</li>
                <li>💻 JavaScript (ES6+)</li>
                <li>🎨 HTML / CSS </li>
                <li>🧠 Git & GitHub</li>
                <li>⚡ REST APIs</li>
            </ul>
            </div>
        </div>
        </section>

    </div>
  )
}

export default AboutSection