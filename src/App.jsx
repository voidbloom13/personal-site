import { useState } from "react";
import SplashScreen from "./components/Screens/SplashScreen";
import Content from "./components/Screens/Content";
import "./index.css";
import "./App.css";

export default function App() {
  const [viewSplash, setViewSplash] = useState(true);

  function displayContent() {
    setViewSplash(!viewSplash);
  }

  return (
    <>
      <SplashScreen toggleScreen={() => displayContent()} viewSplash={viewSplash} />
      <Content viewSplash={viewSplash} />
    </>
  )
}
