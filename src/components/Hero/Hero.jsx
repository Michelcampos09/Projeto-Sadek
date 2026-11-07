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

        {hero.atalhosCasas && (
          <div className="hero-houses" aria-label="Atalhos para as duas casas">
            {hero.atalhosCasas.map((casa) => (
              <a
                key={casa.ancora}
                href={casa.ancora}
                className={`hero-house-card hero-house-card--${casa.variante}`}
              >
                <span className="hero-house-detail">{casa.detalhe}</span>
                <span className="hero-house-name">
                  {casa.rotulo} <span aria-hidden="true">↓</span>
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;