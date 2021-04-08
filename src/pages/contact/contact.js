import React from 'react';
import contact from "./contact.module.scss";

import ContactForm from "../../components/contactForm/contactForm.js";

const Contact = () => {
    return (
        <section className={contact.pageContainer}>
            <div className={contact.colorOverlay}></div>
            <div className={contact.titleText}>Contact Me</div>
            <ContactForm />
        </section>
    )
};

export default Contact;