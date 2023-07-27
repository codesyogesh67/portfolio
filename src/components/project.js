import React from 'react'
import "../styles/project.css"

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
                    <span>{live}</span>
                    <span>{github}</span>
                </div>

            </div>

        </div>
    )
}

export default Project
