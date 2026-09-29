import iconeLink from "../assets/icone.png";
import "../hero.css";
import { dadosDoSite } from "../data/conteudo";
function Hero() {
  const { hero } = dadosDoSite;
  return (
    <div className="main">
      <section>
        <div className="background-image">
          <img
            src="https://media.istockphoto.com/id/632218640/pt/foto/meat-appetizer-kibbeh-closeup-on-a-plate.jpg?s=612x612&w=0&k=20&c=xXUzprGrvCv_O9r4zicmP4lRQqO_btMmxxpkQQWk6_E="
            alt="BackGround - Food"
          />
          <div className="texto-sobre-imagem">
            <h1>{hero.titulo}</h1>
            <p>{hero.descricao}</p>
            <div className="links-hero">
              <a className="botao-hero" href="#restaurantes">
                <span>Visitar restaurante árabe</span>
                <img
                  style={{ width: "16px", height: "16px", objectFit: "cover" }}
                  src={iconeLink}
                  alt=""
                />
              </a>

              <a className="botao-hero2" href="#restaurantes">
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
