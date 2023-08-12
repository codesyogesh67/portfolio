import React from 'react'
import { Title } from "../components"
import "../styles/contact.css"

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <Title title="Contact Me" />
            <div className="contact__container">


                <div className="contact__details">
                    <p className="contact__detailsTitle">
                        Ready to Elevate Your Business with Design?
                </p>
                    <p className="contact__detailsDescription">
                        "Empowering you with my expertise, I deliver websites and web apps that are not only
                         <span className="contact__highlightWords">
                            {" "}fully responsive</span> but also embody
                        <span className="contact__highlightWords">
                            {" "}a modern and professional aesthetic."
                            </span>

                        <p>
                            Let's have a conversation where we can discuss various design options and features to tailor your site according to your vision and requirements.
                        </p>
                        <p>Email me at: <span className="contact__highlightWords">codes.yogesh@gmail.com</span></p>
                    </p>
                </div>
                <div className="contact__form">
                    <form>
                        <div className="contact__formField">
                            <label>Name</label>
                            <input placeholder="" />
                        </div>
                        <div className="contact__formField">
                            <label>Email</label>
                            <input placeholder="" />
                        </div>
                        <div className="contact__formField">
                            <label>Message</label>
                            <textarea placeholder="" />
                        </div>
                        <button className="contact__formButton">
                            Ready for Action
                            </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
