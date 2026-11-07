import { useEffect } from "react";
import { Link } from "react-router-dom";
import { dadosDoSite, obterUrlSegura } from "../../data/conteudo";
import "./notFound.css";

function NotFound() {
  const { arabic, italian } = dadosDoSite;
  const urlArabe = obterUrlSegura(arabic.linkRestaurante, "/#restaurantes");
  const urlItaliano = obterUrlSegura(italian.linkRestaurante, "/#restaurantes");

  useEffect(() => {
    const tituloAnterior = document.title;
    document.title = "Página não encontrada | Sahtein";

    const metaRobots = document.querySelector('meta[name="robots"]');
    const robotsAnterior = metaRobots?.getAttribute("content");
    if (metaRobots) {
      metaRobots.setAttribute("content", "noindex, nofollow");
    }

    window.scrollTo({ top: 0, behavior: "instant" });

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
        <span className="not-found-uptitle rotulo-secao">
          Erro 404 · Página não encontrada
        </span>

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
              href={urlArabe}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{arabic.nome}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="not-found-house-link not-found-house-link--italian"
              href={urlItaliano}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{italian.nome}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;

