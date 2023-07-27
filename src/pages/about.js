import React from 'react'
import "../styles/main.css"
import "../styles/about.css"
import { Title } from "../components"

const About = () => {
    return (
        <div className="container">

            <div className="about__box">
                <Title title="About Me" />

                <div className="about__section">
                    <div className="about__text">
                        I am a passionate React developer with a keen eye for web design and a strong background in web development.
                        With years of experience in crafting interactive and user-friendly web applications, I am adept at turning
                        complex problems into elegant solutions. My love for coding and continuous learning drives me to stay up-to-date
                        with the latest trends and best practices in the ever-evolving world of web development.
                    </div>
                    <div className="about__image">
                        <img src="./myself.jpg" alt="My Profile" />
                    </div>
                </div>
                {/* PHoto */}
            </div>

        </div>
    )
}

export default About
