import "./App.css";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Theme from "./Theme/Theme";
import Projects from "./Projects/Projects";
import config from "./config";
import mailgo from "mailgo";
import React from "react";

function App() {
  React.useEffect(() => {
    mailgo({
      dark: true,
      showFooter: false,
    });
  }, []);
  return (
    <Theme>
      <div className="App">
        <Navbar navItems={config.navItems} />
        <Banner banner={config.banner} />
        <About about={config.about} />
        <Projects projects={config.projects} />
      </div>
    </Theme>
  );
}

export default App;
