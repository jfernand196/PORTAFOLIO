import "./App.css";
import { Header } from "./components/header/Header";
import { useState } from "react";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Skill } from "./components/skills/Skill";
import { Qualification } from "./components/qualification/Qualification";
import { Project } from "./components/project/Project";
import { ContactMe } from "./components/contactMe/ContactMe";
import { Footer } from "./components/footer/Footer";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className="App">


      <body>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className={isDarkMode ? "app dark-mode" : "main"}>
        <Home />
        <About />
        <Skill />
        <Qualification />
        <Project />
        <ContactMe />
        <Footer />
      </main>

      </body>
    </div>
  );
}

export default App;
