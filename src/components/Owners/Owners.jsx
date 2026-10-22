import { dadosDoSite } from "../../data/conteudo";
import donosFamilia from "../../assets/donos-familia.jpg";
import "./Owners.css";

function Owners() {
  const { owners } = dadosDoSite;

  return (
    <div className="owners">
      <section className="first-half">
        <div className="owners-image-frame">
          <img src={donosFamilia} alt="Os donos reunidos em frente ao restaurante" />
        </div>
      </section>

      <section className="second-half">
        <span className="uptitle-owners">{owners.intro}</span>
        <h1 className="title-owners">{owners.titulo}</h1>
        <p className="subtitle-owners">{owners.paragrafo1}</p>
        <p className="subtitle-owners">{owners.paragrafo2}</p>
        <p className="subtitle-owners">{owners.paragrafo3}</p>
        <hr className="line" />
        <div className="links-section">
          <h3>Explore cada sabor:</h3>
          <a className="link-arabic" href="#restaurantes">
            → Restaurante Árabe
          </a>
          <a className="link-italian" href="#restaurantes">
            → Restaurante Italiano
          </a>
        </div>
      </section>
    </div>
  );
}

export default Owners;
