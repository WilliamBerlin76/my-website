import React from 'react';
import contact from "./contact.module.scss";

import ContactForm from "../../components/contactForm/contactForm.js";

const Contact = () => {
    return (
        <section className={contact.pageContainer} id="contact">
            <div className={contact.colorOverlay}></div>
            <div className={contact.titleText}>Contact Me</div>
            <div className={contact.actionText}>
                <span className={contact.questionText}>Interested in working with me?</span>
                <span className={contact.instructionText}>Reach out using the form below or send me an email at william.berlin76@gmail.com!</span>
            </div>
            <ContactForm />
        </section>
    )
};

export default Contact;