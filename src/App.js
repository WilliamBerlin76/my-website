import './App.scss';

import Nav from "./components/nav/nav.js";
import Home from "./pages/home/home.js";
import Skills from "./pages/skills/skills.js";
import Projects from "./pages/projects/projects.js";
import Contact from "./pages/contact/contact.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="background-image"></div>
      <section>
        <Home/>
        <Skills/>
        <Projects />
        <Contact />
      </section>
      
    </div>
  );
}

export default App;
