import { Link } from "react-router";

function HomeMenu() {
  return (
    <div className="home-menu">
      <Link to="/illustrazioni">Illustrazioni</Link>
      <Link to="/racconti">Almanacco dell'oca</Link>
      <Link to="/contatti">Contatti</Link>
      <Link to="/biografia">Biografia</Link>
    </div>
  );
}

export default HomeMenu;
