import "./index.css";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Intro from "./components/Intro/Intro";
import WorkHist from "./components/WorkHist/WorkHist";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";

export default function App() {
  return (
    <>
      <Nav />
      <Intro />
      <WorkHist />
      <Education />
      <Skills />
    </>
  )
}
