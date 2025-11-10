import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";

function SplashScreen(props) {
  return (
    <AnimatePresence initial={true} mode="wait">
      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: 0.2 }} className="absolute top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center gap-16 overflow-hidden">
        <h1 className="text-4xl text-white font-bold font-[Italiana] opacity-0 animate-opacity-1">Hi, I'm Dakota</h1>
        <h2 className="text-3xl text-white font-bold font-[Italiana] opacity-0 animate-opacity-2">Your next software developer</h2>
        <h2 className="text-2xl text-white font-bold font-[Italiana] opacity-0 animate-opacity-3">Continue to find out more about me.</h2>
        <Link to="/home" className="transition-all ease-in duration-200 cursor-pointer bg-linear-to-b from-black via-white/30 to-black text-white border border-solid border-white hover:border-purple-400 hover:text-purple-400 px-6 py-2 text-3xl font-bold font-[Italiana] rounded-full opacity-0 animate-opacity-4" viewTransition>Continue...</Link>
      </motion.div>
    </AnimatePresence>
  )
}

export default SplashScreen;
