import { dadosDoSite } from "../../data/conteudo";
import fotoFundo1 from "../../assets/fotoFundo1.jpg";
import "./Hero.css";

function Hero() {
  const { hero } = dadosDoSite;

  return (
    <div className="background-image">
      <img
        src={fotoFundo1}
        alt="Pratos da culinária Sahtein"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="texto-sobre-imagem">
        {hero.eyebrow && <span className="hero-eyebrow">{hero.eyebrow}</span>}
        <h1 id="hero-title">{hero.titulo}</h1>
        <p>{hero.descricao}</p>

        {hero.chamadaDescida && (
          <a href={hero.chamadaDescida.ancora} className="hero-scroll-link">
            <span className="hero-scroll-label">
              {hero.chamadaDescida.rotulo}
            </span>
            <span className="hero-scroll-indicator" aria-hidden="true">
              <span className="hero-scroll-stem" />
              <svg
                className="hero-scroll-arrow"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 3.5V16M10 16L4.75 10.75M10 16L15.25 10.75"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        )}
      </div>
    </div>
  );
}

export default Hero;