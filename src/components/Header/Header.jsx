import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { dadosDoSite } from "../../data/conteudo";
import LogoSahtein2 from "../../assets/LogoSahtein2.png";
import "./Header.css";

function Header() {
  const { nav } = dadosDoSite;
  const { pathname } = useLocation();
  const [menuAberto, setMenuAberto] = useState(false);
  const [secaoAtiva, setSecaoAtiva] = useState(null);
  const menuRef = useRef(null);
  const botaoMenuRef = useRef(null);

  // O item ativo só faz sentido na home, onde as seções existem
  const itemAtivo = pathname === "/" ? secaoAtiva : null;

  // Marca o item da navbar correspondente à seção que está na leitura (scroll-spy)
  useEffect(() => {
    if (pathname !== "/") return;

    let quadro = 0;

    const atualizar = () => {
      quadro = 0;
      const linhaDeLeitura = window.innerHeight * 0.35;
      const noFimDaPagina =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let atual = null;

      nav.secoes.forEach((id) => {
        const secao = document.getElementById(id);
        if (secao && secao.getBoundingClientRect().top <= linhaDeLeitura) {
          atual = id;
        }
      });

      setSecaoAtiva(noFimDaPagina ? nav.secoes[nav.secoes.length - 1] : atual);
    };

    const agendar = () => {
      if (!quadro) quadro = window.requestAnimationFrame(atualizar);
    };

    agendar();
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);

    return () => {
      window.cancelAnimationFrame(quadro);
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
    };
  }, [pathname, nav.secoes]);

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
      <a className="pular-conteudo" href="#conteudo-principal">
        {nav.pularConteudo}
      </a>

      <div className="topo">
        <div className="marca">
          <a href="/#inicio" aria-label={nav.marcaAriaLabel}>
            <span className="marca-selo" aria-hidden="true">
              <img src={LogoSahtein2} alt="" />
            </span>
            <span className="marca-textos">
              <span className="marca-nome">{nav.marca}</span>
              {nav.subtituloMarca && (
                <span className="marca-subtitulo">{nav.subtituloMarca}</span>
              )}
            </span>
          </a>
        </div>

        <nav className="nav-principal" aria-label={nav.ariaLabel}>
          <ul>
            {nav.itens.map((item) => (
              <li key={item.id}>
                <a
                  className={item.destaque ? "nav-destaque" : undefined}
                  href={`/#${item.id}`}
                  aria-current={itemAtivo === item.id ? "location" : undefined}
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={botaoMenuRef}
          type="button"
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
          aria-label={nav.ariaLabelMobile}
          aria-modal={menuAberto ? "true" : undefined}
          role={menuAberto ? "dialog" : undefined}
          className={menuAberto ? "menu-mobile aberta" : "menu-mobile"}
        >
          <ul>
            {nav.itens.map((item) => (
              <li key={item.id}>
                <a
                  className={item.destaque ? "menu-mobile-destaque" : undefined}
                  href={`/#${item.id}`}
                  aria-current={itemAtivo === item.id ? "location" : undefined}
                  onClick={() => setMenuAberto(false)}
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
