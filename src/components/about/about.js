import React from "react";
import about from  "./about.module.scss";

const About = ({ showAbout }) => {
    return (
        <div className={
                showAbout === true ? 
                `${about.aboutContainer} ${about.fadeInToggle}` : 
                `${about.aboutContainer} ${about.fadeOutToggle}`
            }>
            <p>
                Hello! My name is William Berlin, and I’m a web developer. 
                I enjoy creating pretty user interfaces, writing clean and efficient backend code, 
                and learning about new things.
            </p>
            <p>
                My primary tech stack is focused around React.js for building frontends for web applications, 
                and Node.js for server side code. I also have experience working with PostgreSQL and MongoDB. 
                However, I have dedicated myself to lifelong learning, and am always excited and willing to learn about new technologies. 
                Outside of programming, I also love to play the trombone and spend time outside with my dog!    
            </p>
            <p>
                Have any questions? Want to work with me? Feel free to reach out to me at william.berlin76@gmail.com, 
                or send a message through my contact form!
            </p>

        </div>
    )
}

export default About;