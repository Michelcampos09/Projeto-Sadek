import { dadosDoSite } from "../../data/conteudo";
import fotoFundo1 from "../../assets/fotoFundo1.jpg";
import iconeLink from "../../assets/icone.png";
import "./Hero.css";

function Hero() {
  const { hero } = dadosDoSite;

  return (
    <div className="background-image">
      <img src={fotoFundo1} alt="Pratos da culinária Sahtein" />
      <div className="texto-sobre-imagem">
        <h1>{hero.titulo}</h1>
        <p>{hero.descricao}</p>
        <div className="links-hero">
          <a
            className="botao-hero"
            href="https://sahteinrotisseria.com.br"
            target="_blank"
            rel="noreferrer"
          >
            <span>Visitar restaurante árabe</span>
            <img className="icone" src={iconeLink} alt="" />
          </a>
          <a
            className="botao-hero2"
            href="https://cardapio.takeat.app/fornosahtein"
            target="_blank"
            rel="noreferrer"
          >
            <span>Visitar restaurante italiano</span>
            <img className="icone" src={iconeLink} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;