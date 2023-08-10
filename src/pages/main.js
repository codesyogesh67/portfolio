import React, { useState, useEffect } from 'react'
import { Nav } from '../components'
import Home from './home'
import About from './about'
import Projects from './projects'
import Contact from "./contact"

const MainPage = () => {
    const [selectedPage, setSelectedPage] = useState(
        "home"
    );
    const [isTopOfPage, setIsTopOfPage] = useState(true);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage("home");

            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
    }, [selectedPage])

    return (
        <div>
            <Nav isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
            <div>
                <Home setSelectedPage={setSelectedPage} />
                <About setSelectedPage={setSelectedPage} />
                <Projects setSelectedPage={setSelectedPage} />
                <Contact setSelectedPage={setSelectedPage} />
            </div>

        </div>
    )
}

export default MainPage
