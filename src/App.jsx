import MouseGlow from "./components/MouseGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Experience from "./components/Experience";
import Photography from "./components/Photography";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <MouseGlow />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Journey />

        <Experience />

        <Photography />

        <Contact />
      </main>
    </>
  );
}

export default App;