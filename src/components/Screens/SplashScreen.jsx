import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";

function SplashScreen(props) {
  return (
    <AnimatePresence initial={true} mode="wait">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="absolute top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center gap-16 overflow-hidden">
        <h1 className="text-4xl text-zinc-200 font-bold font-[Italiana] opacity-0 animate-opacity-1">Hi, I'm Dakota</h1>
        <h2 className="text-3xl text-zinc-200 font-bold font-[Italiana] opacity-0 animate-opacity-2">Your next software developer</h2>
        <h2 className="text-2xl text-zinc-200 font-bold font-[Italiana] opacity-0 animate-opacity-3">Continue to find out more about me.</h2>
        <Link to="/home" className="transition-all ease-in duration-200 cursor-pointer bg-black text-red-600 hover:text-green-500 shadow-md hover:shadow-lg shadow-red-600 hover:shadow-green-500 px-6 py-4 text-3xl font-bold font-[Italiana] rounded-full opacity-0 animate-opacity-4" viewTransition>Continue...</Link>
      </motion.div>
    </AnimatePresence>
  )
}

export default SplashScreen;
