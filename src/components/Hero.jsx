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
              <button
                style={{
                  backgroundColor: "rgb(75, 60, 10)",
                  border: "none",
                  padding: "5px",
                  borderRadius: "3px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                <a
                  style={{
                    textDecoration: "none",
                    color: "rgb(255, 255, 255)",
                  }}
                  href=""
                >
                  Visitar restaurante árabe
                </a>
              </button>
              <button
                style={{
                  backgroundColor: "rgb(14, 46, 10)",
                  border: "none",
                  padding: "5px",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                <a
                  style={{
                    textDecoration: "none",
                    color: "rgb(252, 255, 251)",
                  }}
                  href="#restaurantes"
                >
                  Visitar restaurante árabe
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Hero;
