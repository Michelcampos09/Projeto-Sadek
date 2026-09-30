import iconeLink from "../assets/icone.png";
import fotoFundo from "../assets/fotoFundo.jpg";
import "../hero.css";
import { dadosDoSite } from "../data/conteudo";
function Hero() {
  const { hero } = dadosDoSite;
  return (
    <div className="main">
      <section>
        <div className="background-image">
          <img src={fotoFundo} alt="Background - Food" />
          <div className="texto-sobre-imagem">
            <h1>{hero.titulo}</h1>
            <p>{hero.descricao}</p>
            <div className="links-hero">
              <a
                className="botao-hero"
                href="https://sahteinrotisseria.com.br"
                target="_blank"
              >
                <span>Visitar restaurante árabe</span>
                <img
                  style={{ width: "16px", height: "16px", objectFit: "cover" }}
                  src={iconeLink}
                  alt=""
                />
              </a>

              <a
                className="botao-hero2"
                href="https://cardapio.takeat.app/fornosahtein"
                target="_blank"
              >
                <span>Visitar restaurante italiano</span>
                <img
                  style={{ width: "16px", height: "16px", objectFit: "cover" }}
                  src={iconeLink}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Hero;
