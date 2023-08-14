import React, { useState } from 'react'
import "../styles/project.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { Link } from "react-router-dom"

const Project = (props) => {
    const [showContent, setShowContent] = useState(false)


    const { image, live, github, title, description } = props.features;
    return (
        <div className="project__container">
            <div className="project__imageContainer">
                {showContent && (
                    <div className="project__note">
                        <p>This app is built with React, Firebase.</p>
                    </div>
                )}
                <TextSnippetIcon className="project__noteIcon" onClick={() => setShowContent(!showContent)} />
                <img className="project__image" src={image} alt="My Project" />
            </div>



            <div className="project__icons">
                <img src="https://www.datocms-assets.com/14946/1638186862-reactjs.png?auto=format&fit=max&w=1200" alt="React" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png" alt="Firebase" />
                <img src="https://pro.guslyon.fr/static/material-ui-4a66e3fd52c7ec9469f4684b68aca251.png" alt="Material UI" />
                <img src="data:image/png;base64,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" alt="Redux" />

            </div>

            <div className="project__detail">
                <h2 className="project__title">{title}</h2>

                <div className="project__links">
                    <button>
                        <Link to={github} className="project__linksIcon">
                            <span>GitHub </span>
                            <GitHubIcon />
                        </Link>

                    </button>
                    <button>
                        <Link className="project__linksIcon" to={live}>
                            <span>Live Preview</span>
                            <LanguageIcon />
                        </Link>

                    </button>


                </div>

            </div>


        </div >
    )
}

export default Project
