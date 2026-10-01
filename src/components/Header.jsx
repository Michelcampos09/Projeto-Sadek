import { useState } from "react";
import "../header.css";
import LogoSahtein from "../assets/LogoSahtein.png";
function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  return (
    <header className="principal">
      <div className="topo">
        <nav className="nav-left">
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#donos">Conheça os donos</a>
            </li>
            <li>
              <a href="#historia">História</a>
            </li>
          </ul>
        </nav>

        <div className="marca">
          <a href="#inicio">
            <img
              src={LogoSahtein}
              alt="Logo - Sahtein"
              title="Logo - Sahtein"
            />
          </a>
        </div>

        <nav className="nav-right">
          <ul>
            <li>
              <a href="restaurantes">Restaurantes</a>
            </li>
            <li>
              <a href="avaliacao">Avaliações</a>
            </li>
            <li>
              <a href="avaliacao">Reservas</a>
            </li>
          </ul>
        </nav>

        <button
          className="botao-menu"
          style={{}}
          onClick={() => {
            setMenuAberto(!menuAberto);
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/10080/10080458.png"
            alt="Nav button"
          />
        </button>

        <nav className={menuAberto ? "menu-mobile aberta" : "menu-mobile"}>
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#donos">Conheça os donos</a>
            </li>
            <li>
              <a href="#historia">História</a>
            </li>
            <li>
              <a href="restaurantes">Restaurantes</a>
            </li>
            <li>
              <a href="avaliacao">Avaliações</a>
            </li>
            <li>
              <a href="avaliacao">Reservas</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
