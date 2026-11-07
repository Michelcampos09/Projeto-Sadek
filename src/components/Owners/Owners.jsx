import { dadosDoSite } from "../../data/conteudo";
import donosFamilia from "../../assets/donos-familia.jpg";
import "./Owners.css";

function Owners() {
  const { owners } = dadosDoSite;
  const [tituloAntes, tituloDepois] = owners.titulo.split(owners.tituloDestaque);

  return (
    <div className="owners">
      <div className="owners-media">
        <div className="owners-image-frame revelar-foto">
          <img src={donosFamilia} alt="Os donos reunidos em frente ao restaurante" />
        </div>
      </div>

      <div className="owners-content">
        <span className="rotulo-secao">{owners.intro}</span>
        <h2 className="title-owners" id="donos-title">
          {tituloAntes}
          <span className="sublinhado-mao">{owners.tituloDestaque}</span>
          {tituloDepois}
        </h2>
        <p className="subtitle-owners">{owners.paragrafo1}</p>
        <p className="subtitle-owners">{owners.paragrafo2}</p>
        <p className="subtitle-owners">{owners.paragrafo3}</p>
        <hr className="owners-divider" />
        <div className="owners-links">
          <h3>Conheça as duas casas:</h3>
          {owners.linksRestaurantes.map((item) => (
            <a key={item.ancora} className={item.classe} href={item.ancora}>
              → {item.nome}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Owners;
