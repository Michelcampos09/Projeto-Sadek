import { dadosDoSite } from "../../data/conteudo";
import donosFamilia from "../../assets/donos-familia.jpg";
import "./Owners.css";

function Owners() {
  const { owners } = dadosDoSite;
  const possuiDestaque =
    owners.tituloDestaque && owners.titulo.includes(owners.tituloDestaque);
  const [tituloAntes, tituloDepois] = possuiDestaque
    ? owners.titulo.split(owners.tituloDestaque)
    : [owners.titulo, ""];

  return (
    <div className="owners">
      <figure className="owners-media">
        <div className="owners-image-frame revelar-foto">
          <img
            src={donosFamilia}
            alt="Os donos reunidos em frente ao forno do restaurante"
          />
        </div>
        {owners.legendaFoto && (
          <figcaption className="owners-caption">
            {owners.legendaFoto}
          </figcaption>
        )}
      </figure>

      <div className="owners-content">
        <span className="rotulo-secao">{owners.intro}</span>
        <h2 className="title-owners" id="donos-title">
          {tituloAntes}
          {possuiDestaque && (
            <span className="sublinhado-mao">{owners.tituloDestaque}</span>
          )}
          {tituloDepois}
        </h2>
        <p className="subtitle-owners subtitle-owners--lead">
          {owners.paragrafo1}
        </p>
        <p className="subtitle-owners">{owners.paragrafo2}</p>
        <p className="subtitle-owners">{owners.paragrafo3}</p>
        <hr className="owners-divider" />
        <div className="owners-links">
          <h3 className="owners-links-title">Conheça as duas casas:</h3>
          <div className="owners-links-grid">
            {owners.linksRestaurantes.map((item) => (
              <a key={item.ancora} className={item.classe} href={item.ancora}>
                <span className="owners-link-name">
                  {item.nome} <span aria-hidden="true">→</span>
                </span>
                {item.cozinha && (
                  <span className="owners-link-cuisine">{item.cozinha}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Owners;
