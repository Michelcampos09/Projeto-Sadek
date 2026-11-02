import { useEffect } from "react";
import { Link } from "react-router-dom";
import { dadosDoSite } from "../../data/conteudo";
import iconeLink from "../../assets/icone.png";
import "./notFound.css";

function NotFound() {
  const { arabic, italian } = dadosDoSite;

  useEffect(() => {
    const tituloAnterior = document.title;
    document.title = "Página não encontrada | Sahtein";

    const metaRobots = document.querySelector('meta[name="robots"]');
    const robotsAnterior = metaRobots?.getAttribute("content");
    if (metaRobots) {
      metaRobots.setAttribute("content", "noindex, nofollow");
    }

    window.scrollTo(0, 0);

    return () => {
      document.title = tituloAnterior;
      if (metaRobots && robotsAnterior) {
        metaRobots.setAttribute("content", robotsAnterior);
      }
    };
  }, []);

  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="not-found-card">
        <span className="not-found-uptitle">Erro 404 · Página não encontrada</span>

        <div className="not-found-badge" aria-hidden="true">
          <span className="not-found-number">404</span>
          <div className="not-found-dots">
            <span className="not-found-dot not-found-dot--arabic" />
            <span className="not-found-dot not-found-dot--middle" />
            <span className="not-found-dot not-found-dot--italian" />
          </div>
        </div>

        <h1 className="not-found-title" id="not-found-title">
          Esse prato não está no cardápio.
        </h1>

        <p className="not-found-text">
          O endereço que você tentou acessar não existe ou mudou de lugar. Mas a
          nossa mesa continua posta para receber você.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="not-found-btn-primary">
            Voltar ao início
          </Link>
          <a href="/#restaurantes" className="not-found-btn-secondary">
            Conhecer os restaurantes
          </a>
        </div>

        <hr className="not-found-divider" />

        <div className="not-found-houses">
          <span className="not-found-houses-label">
            Ou visite diretamente o cardápio de cada casa:
          </span>
          <div className="not-found-houses-links">
            <a
              className="not-found-house-link not-found-house-link--arabic"
              href={arabic.linkRestaurante}
              target="_blank"
              rel="noreferrer"
            >
              <span>{arabic.nome}</span>
              <img className="icone" src={iconeLink} alt="" />
            </a>
            <a
              className="not-found-house-link not-found-house-link--italian"
              href={italian.linkRestaurante}
              target="_blank"
              rel="noreferrer"
            >
              <span>{italian.nome}</span>
              <img className="icone" src={iconeLink} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;

