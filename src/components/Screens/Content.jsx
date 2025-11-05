import Nav from "../Navbar/Nav";
import Intro from "../Intro/Intro";
import WorkHist from "../WorkHist/WorkHist";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";

function Content(props) {
  return (
    <div className={`transition-all duration-350 xl:duration-500 ease-out absolute top-0 left-0 w-screen h-screen overflow-x-hidden ${!props.viewSplash ? 'scale-x-100 opacity-100 z-100' : 'scale-x-0 opacity-0 z-0'}`}>
      <Nav />
      <Intro />
      <WorkHist />
      <Education />
      <Skills />
    </div>
  )
}

export default Content;
