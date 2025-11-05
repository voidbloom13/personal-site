import { AnimatePresence, motion } from "motion/react";
import Nav from "../Navbar/Nav";
import Intro from "../Intro/Intro";
import WorkHist from "../WorkHist/WorkHist";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";

function Content(props) {
  return (
    <AnimatePresence initial={true} mode="wait">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .4 }}>
        <Nav />
        <Intro />
        <WorkHist />
        <Education />
        <Skills />
      </motion.div>
    </AnimatePresence>
  )
}

export default Content;
