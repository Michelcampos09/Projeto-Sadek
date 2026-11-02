import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import LogoSahtein from "../../assets/LogoSahtein.png";
import "./Header.css";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef(null);
  const botaoMenuRef = useRef(null);

  // Fecha o menu com tecla Esc, clique fora e implementa Focus Trap
  useEffect(() => {
    if (!menuAberto) return;

    // Travar scroll da página enquanto o menu mobile está aberto
    const scrollOriginal = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focar no primeiro item do menu ao abrir
    const elementosFocaveis = menuRef.current?.querySelectorAll(
      'a[href], button:not([disabled])'
    );
    if (elementosFocaveis && elementosFocaveis.length > 0) {
      elementosFocaveis[0].focus();
    }

    const lidarKeyDown = (evento) => {
      // 1. Fechar com tecla Esc
      if (evento.key === "Escape") {
        evento.preventDefault();
        setMenuAberto(false);
        botaoMenuRef.current?.focus();
        return;
      }

      // 2. Focus Trap: manter navegação por Tab restrita ao menu e botão de alternância
      if (evento.key === "Tab") {
        const itens = [
          botaoMenuRef.current,
          ...(menuRef.current
            ? Array.from(
                menuRef.current.querySelectorAll(
                  'a[href], button:not([disabled])'
                )
              )
            : []),
        ].filter(Boolean);

        if (itens.length === 0) return;

        const primeiroItem = itens[0];
        const ultimoItem = itens[itens.length - 1];

        if (evento.shiftKey && document.activeElement === primeiroItem) {
          evento.preventDefault();
          ultimoItem.focus();
        } else if (!evento.shiftKey && document.activeElement === ultimoItem) {
          evento.preventDefault();
          primeiroItem.focus();
        }
      }
    };

    // 3. Fechar ao clicar fora do menu e do botão hambúrguer
    const lidarCliqueFora = (evento) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(evento.target) &&
        botaoMenuRef.current &&
        !botaoMenuRef.current.contains(evento.target)
      ) {
        setMenuAberto(false);
      }
    };

    document.addEventListener("keydown", lidarKeyDown);
    document.addEventListener("mousedown", lidarCliqueFora);
    document.addEventListener("touchstart", lidarCliqueFora);

    return () => {
      document.body.style.overflow = scrollOriginal;
      document.removeEventListener("keydown", lidarKeyDown);
      document.removeEventListener("mousedown", lidarCliqueFora);
      document.removeEventListener("touchstart", lidarCliqueFora);
    };
  }, [menuAberto]);

  return (
    <header className="principal">
      <div className="topo">
        <nav className="nav-left" aria-label="Navegação principal">
          <ul>
            <li>
              <a href="/#inicio">Início</a>
            </li>
            <li>
              <a href="/#donos">Conheça os donos</a>
            </li>
            <li>
              <a href="/#historia">História</a>
            </li>
          </ul>
        </nav>

        <div className="marca">
          <a href="/#inicio" aria-label="Ir para o início">
            <img src={LogoSahtein} alt="Logo Sahtein" />
          </a>
        </div>

        <nav className="nav-right" aria-label="Outras páginas">
          <ul>
            <li>
              <a href="/#restaurantes">Restaurantes</a>
            </li>
            <li>
              <a href="/#avaliacao">Avaliações</a>
            </li>
            <li>
              <Link to="/reservas" className="nav-reservas">
                Reservas
              </Link>
            </li>
          </ul>
        </nav>

        {/* Barra de ações mobile com CTA "Reservar" e botão hambúrguer */}
        <div className="acoes-mobile">
          <Link to="/reservas" className="nav-reservas-mobile">
            Reservar
          </Link>
          <button
            ref={botaoMenuRef}
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
        </div>

        {/* Fundo escurecido clicável para fechar o menu mobile */}
        {menuAberto && (
          <div
            className="menu-backdrop"
            onClick={() => setMenuAberto(false)}
            aria-hidden="true"
          />
        )}

        <nav
          ref={menuRef}
          id="menu-mobile"
          aria-label="Navegação mobile"
          aria-modal={menuAberto ? "true" : undefined}
          role={menuAberto ? "dialog" : undefined}
          className={menuAberto ? "menu-mobile aberta" : "menu-mobile"}
        >
          <ul>
            <li>
              <a href="/#inicio" onClick={() => setMenuAberto(false)}>
                Início
              </a>
            </li>
            <li>
              <a href="/#donos" onClick={() => setMenuAberto(false)}>
                Conheça os donos
              </a>
            </li>
            <li>
              <a href="/#historia" onClick={() => setMenuAberto(false)}>
                História
              </a>
            </li>
            <li>
              <a href="/#restaurantes" onClick={() => setMenuAberto(false)}>
                Restaurantes
              </a>
            </li>
            <li>
              <a href="/#avaliacao" onClick={() => setMenuAberto(false)}>
                Avaliações
              </a>
            </li>
            <li>
              <Link
                className="nav-reservas"
                to="/reservas"
                onClick={() => setMenuAberto(false)}
              >
                Reservas
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
