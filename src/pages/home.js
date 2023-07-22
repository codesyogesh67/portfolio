import React from 'react'
import "../styles/home.css"
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <div className="home__container">
            <div className="home__box">
                <p className="home__title">Yogesh Pradhan</p>

                <Typewriter
                    className="home__typewriter"
                    options={{
                        strings: ["Web Developer", "Web Designer"],
                        autoStart: true,
                        loop: true,
                    }}
                />
                <p className="home__description"> I specialize in creating advanced and professional websites that harmoniously blend innovative design,
                        robust functionality, and seamless user interactions.</p>
                <button className="home__button">Hire me</button>
            </div>
        </div>
    )
}

export default Home