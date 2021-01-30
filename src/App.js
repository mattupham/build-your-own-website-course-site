import "./App.css";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Theme from "./Theme/Theme";
import Projects from "./Projects/Projects";

function App() {
  return (
    <Theme>
      <div className="App">
        <Navbar />
        <Banner />
        <About />
        <Projects />
      </div>
    </Theme>
  );
}

export default App;
