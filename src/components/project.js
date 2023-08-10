import React from 'react'
import "../styles/project.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const Project = (props) => {
    const { image, live, github, title, description } = props.features;
    return (
        <div>
            <div className="project__imageContainer">
                <img className="project__image" src={image} alt="My Project" />
            </div>



            <div className="project__detail">
                <h2 className="project__title">{title}</h2>
                <p className="project__description">
                    {description}
                </p>
                <div className="project__links">
                    <GitHubIcon />
                    <LanguageIcon />

                </div>

            </div>


        </div >
    )
}

export default Project
