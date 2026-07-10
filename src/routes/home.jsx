import HomeLogo from "../components/HomeLogo.jsx";
import HomeMenu from "../components/HomeMenu.jsx";
import "../App.css";

export default function Home() {
  return (
    <section className="home-section">
      <HomeLogo />
      <HomeMenu />
    </section>
  );
}
