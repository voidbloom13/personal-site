import { Routes, Route, useLocation } from 'react-router';
import SplashScreen from "./components/Screens/SplashScreen";
import Content from "./components/Screens/Content";
import "./index.css";
import "./App.css";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index element={<SplashScreen />} />
        <Route path="/home" element={<Content />} />
      </Routes>
    </>
  )
}
