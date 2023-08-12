import React from 'react'
import "../styles/home.css"
import "../styles/main.css"
import Typewriter from "typewriter-effect";
import { Layout, Nav } from "../components"
import { motion } from "framer-motion";
import HandshakeIcon from '@mui/icons-material/Handshake';
import BackHandIcon from '@mui/icons-material/BackHand';

const Home = ({ setSelectedPage }) => {
    return (
        // <Layout>

        <motion.div className="container" id="home"
            onViewportEnter={() => setSelectedPage("home")}>

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
                <button className="home__button">

                    <span>Collaborate with Me
                        <HandshakeIcon className="home__icon handshake" />
                        <BackHandIcon className="home__icon backhand" />
                    </span>


                </button>
            </div>
        </motion.div>
        // </Layout>
    )
}

export default Home
