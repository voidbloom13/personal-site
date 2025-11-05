import { useEffect, useState } from "react";

function SplashScreen(props) {
  const [isVisible, setIsVisible] = useState(false);

  function setVisibility() {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    setVisibility();
  }, [])

  return (
    <div className={`transition-all duration-350 xl:duration-500 ease-out absolute top-0 left-0 w-screen h-screen bg-black flex flex-col items-center justify-center gap-16 overflow-hidden ${props.viewSplash ? 'scale-x-100 opacity-100 z-100' : 'scale-x-0 opacity-0 z-0'}`}>
      <h1 className={`text-4xl text-zinc-200 font-bold font-[Italiana] opacity-0 animate-opacity-1`}>Hi, I'm Dakota</h1>
      <h2 className={`text-3xl text-zinc-200 font-bold font-[Italiana] opacity-0 animate-opacity-2`}>Your next software developer</h2>
      <h2 className={`text-2xl text-zinc-200 font-bold font-[Italiana] opacity-0 animate-opacity-3`}>Continue to find out more about me.</h2>
      <button onClick={props.toggleScreen} className={`transition-all ease-in duration-200 cursor-pointer bg-black text-red-600 hover:text-green-500 shadow-md hover:shadow-lg shadow-red-600 hover:shadow-green-500 px-6 py-4 text-3xl font-bold font-[Italiana] rounded-full opacity-0 animate-opacity-4`}>Continue...</button>
    </div>
  )
}

export default SplashScreen;
