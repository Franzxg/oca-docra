import { useState } from "react";
/* import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png"; */
import "./App.css";
import HomeLogo from "./HomeLogo.jsx";
import HomeMenu from "./HomeMenu.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="home-section">
        <HomeLogo> </HomeLogo>
        <HomeMenu> </HomeMenu>
      </section>
    </>
  );
}

export default App;
