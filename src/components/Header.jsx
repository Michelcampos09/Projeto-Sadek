import { useState } from "react";
import "../header.css";
function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  return (
    <div className="principal">
      <section className="topo">
        <div className="marca">
          <a href="#">
            <img
              src="https://d3im3awbb0qs95.cloudfront.net/eyJidWNrZXQiOiJtaXN0ZXJzMyIsImtleSI6Im1jX3NhaHRlaW5yb3Rpc3NlcmlhXzAxNDA0MVwvbWVyY2hhbnRcL3NhaHRlaW5fcm90aXNzZXJpYS0yMDIzMDgxMDE0MTk1Ni5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI1MCwiZml0IjoiY292ZXIifX19"
              alt="Logo - Sahtein"
              title="Logo - Sahtein"
            />
          </a>
          <span className="title">
            <a className="title" href="#inicio">
              Sahtein
            </a>
          </span>
        </div>
        <button
          className="botao-menu"
          style={{}}
          onClick={() => {
            setMenuAberto(!menuAberto);
          }}
        >
          ☰
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
