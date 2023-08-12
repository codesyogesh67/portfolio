import React from 'react'
import "../styles/main.css"
import "../styles/about.css"
import { Title } from "../components"
import { motion } from "framer-motion";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';



const About = ({ setSelectedPage }) => {
    return (
        <motion.div id="about" className="container" onViewportEnter={() => setSelectedPage("about")}>

            <div className="about__box">


                <div className="about__section">
                    <div className="about__image">
                        <img src="./myself.jpg" alt="My Profile" />
                    </div>
                    <div className="about__text">
                        <Title title="Unearthing the Canvas : Painting My Personal Narrative" />
                        {/* <p>
                            I am a passionate React developer with a keen eye for web design and a strong background in web development.
                            With years of experience in crafting interactive and user-friendly web applications, I am adept at turning
                            complex problems into elegant solutions. My love for coding and continuous learning drives me to stay up-to-date
                            with the latest trends and best practices in the ever-evolving world of web development.
                        </p> */}
                        <p>
                            <span className="about__highlightWords">A passionate coder and problem solver, </span>

                            driven by the art of crafting elegant solutions
                            from intricate challenges.
                            <br />
                            <br />
                            My journey in programming reflects an unrelenting pursuit of excellence,
                             where I thrive on staying up-to-date with the latest industry trends.

                             <span className="about__highlightWords"> Committed to continuous learning, </span>
                             I maintain a deep proficiency that extends beyond coding,
                             enabling me to envision comprehensive solutions within the dynamic tech landscape.
                            <br />
                            <br />
                            <p className="about__descriptionPoints">
                                <ArrowRightIcon style={{ color: "var(--green)" }} /> A keen eye for web design and a strong background in web development.

                            </p>
                            <p className="about__descriptionPoints">
                                <ArrowRightIcon style={{ color: "var(--green)" }} />  Crafting interactive and user-friendly web applications.
                            </p>

                            <p className="about__descriptionPoints">
                                <ArrowRightIcon style={{ color: "var(--green)" }} /> Fully Responsive and Functional Web Applications
                            </p>


                        </p>
                    </div>

                </div>
                {/* PHoto */}
            </div>

        </motion.div>
    )
}

export default About
