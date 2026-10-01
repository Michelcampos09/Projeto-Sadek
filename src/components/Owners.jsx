import { dadosDoSite } from "../data/conteudo";
import donosExemplo from "../assets/donosExemplo.webp";
import "../owners.css";
function Owners() {
  const { owners } = dadosDoSite;
  return (
    <div className="owners">
      <section className="first-half">
        <img src={donosExemplo} alt="Foto dos donos na cozinha" />
      </section>

      <section className="second-half">
        <span className="uptitle-owners">{owners.intro}</span>
        <h1 className="title-owners">{owners.titulo}</h1>
        <p className="subtitle-owners">{owners.paragrafo1}</p>
        <p className="subtitle-owners">{owners.paragrafo2}</p>
        <p className="subtitle-owners">{owners.paragrafo3}</p>
        <hr className="line" />
      </section>
    </div>
  );
}
export default Owners;
