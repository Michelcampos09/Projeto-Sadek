import { dadosDoSite } from "../../data/conteudo";
import fotoFundo1 from "../../assets/fotoFundo1.jpg";
import "./Hero.css";

function Hero() {
  const { hero } = dadosDoSite;

  return (
    <div className="background-image">
      <img src={fotoFundo1} alt="Pratos da culinária Sahtein" />
      <div className="texto-sobre-imagem">
        <h1 id="hero-title">{hero.titulo}</h1>
        <p>{hero.descricao}</p>
      </div>
    </div>
  );
}

export default Hero;