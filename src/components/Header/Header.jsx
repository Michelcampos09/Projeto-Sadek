import { useState } from "react";
import LogoSahtein from "../../assets/LogoSahtein.png";
import "./Header.css";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="principal">
      <div className="topo">
        <nav className="nav-left" aria-label="Navegação principal">
          <ul>
            <li>
              <a href="#inicio">Início</a>
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
            <img src={LogoSahtein} alt="Logo Sahtein" />
          </a>
        </div>

        <nav className="nav-right" aria-label="Outras páginas">
          <ul>
            <li>
              <a href="#restaurantes">Restaurantes</a>
            </li>
            <li>
              <a href="#avaliacao">Avaliações</a>
            </li>
            <li>
              <a className="nav-reservas" href="#contato">
                Reservas
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="botao-menu"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="menu-mobile"
          aria-label="Navegação mobile"
          className={menuAberto ? "menu-mobile aberta" : "menu-mobile"}
        >
          <ul>
            <li>
              <a href="#inicio" onClick={() => setMenuAberto(false)}>
                Início
              </a>
            </li>
            <li>
              <a href="#donos" onClick={() => setMenuAberto(false)}>
                Conheça os donos
              </a>
            </li>
            <li>
              <a href="#historia" onClick={() => setMenuAberto(false)}>
                História
              </a>
            </li>
            <li>
              <a href="#restaurantes" onClick={() => setMenuAberto(false)}>
                Restaurantes
              </a>
            </li>
            <li>
              <a href="#avaliacao" onClick={() => setMenuAberto(false)}>
                Avaliações
              </a>
            </li>
            <li>
              <a
                className="nav-reservas"
                href="#contato"
                onClick={() => setMenuAberto(false)}
              >
                Reservas
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;