import React, { useState, useEffect } from 'react'
import { Title, Project } from "../components"
import "../styles/projects.css"
import db from "../utils/firebase"
import { getFirestore, collection, getDocs, query, where, deleteDoc, getDoc, doc, addDoc, updateDoc } from 'firebase/firestore/lite';


const Projects = () => {
    const [list, setList] = useState([])


    useEffect(() => {
        async function get_projects() {
            const ref = collection(db, "projects")
            const projectsList = await getDocs(ref)


            setList(
                projectsList.docs.map((doc) =>

                    ({
                        id: doc.id,
                        title: doc.data().title,
                        github: doc.data().github,
                        image: doc.data().image,
                        live: doc.data().live,
                    })

                )
            )



        }
        get_projects()

    }, [])

    return (
        <div className="projects" id="projects">
            <Title title="Unveiling Skills: Projects in Focus" />

            <p className="projects__subtitle">Every project is a canvas for my dedication to
                            mastering coding's intricacies and embracing growth.</p>
            <div className="projects__container">
                {list.map((each_project, index) => (
                    <Project features={each_project} key={index} />
                ))
                }

            </div>

        </div>
    )
}

export default Projects
