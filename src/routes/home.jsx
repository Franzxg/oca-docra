import HomeLogo from "../HomeLogo.jsx";
import HomeMenu from "../HomeMenu.jsx";
import "../App.css";

export default function Home() {
  return (
    <section className="home-section">
      <HomeLogo />
      <HomeMenu />
    </section>
  );
}
