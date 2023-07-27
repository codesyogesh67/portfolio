import React, { useState, useEffect } from 'react'
import { Title, Project } from "../components"
import "../styles/projects.css"
import db from "../utils/firebase"
import { getFirestore, collection, getDocs, query, where, deleteDoc, getDoc, doc, addDoc, updateDoc } from 'firebase/firestore/lite';


const Projects = () => {
    const [list, setList] = useState([])
    // console.log(db)

    useEffect(() => {
        async function get_projects() {
            const ref = collection(db, "projects")
            const projectsList = await getDocs(ref)
            console.log(projectsList)

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
    console.log("projects", list)
    return (
        <div className="projects">
            <Title title="Projects" />
            <div className="projects__container">
                {list.map((each_project) => (
                    <Project features={each_project} />
                ))
                }

            </div>

        </div>
    )
}

export default Projects