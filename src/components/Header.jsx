import { useState } from "react";
import "../header.css";
import LogoSahtein from "../assets/LogoSahtein.png";
function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  return (
    <div className="principal">
      <section className="topo">
        <div className="marca">
          <a href="#inicio">
            <img
              src={LogoSahtein}
              alt="Logo - Sahtein"
              title="Logo - Sahtein"
            />
          </a>
        </div>
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
      </section>

      <section>
        <div className={menuAberto ? "sec-one aberta" : "sec-one"}>
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
          </ul>
        </div>
      </section>
    </div>
  );
}
export default Header;
