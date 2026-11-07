import { dadosDoSite } from "../../data/conteudo";
import imagemArabe from "../../assets/history-arabe.jpg";
import imagemRestaurante from "../../assets/history-restaurante.jpg";
import imagemItaliano from "../../assets/history-italiano.jpg";
import "./history.css";

const imagens = [
  { src: imagemArabe, alt: "Prato grelhado árabe com acompanhamentos" },
  { src: imagemRestaurante, alt: "Mesa posta para receber clientes no restaurante" },
  { src: imagemItaliano, alt: "Prato da culinária italiana preparado na casa" },
];

const CAPITULOS = ["I", "II", "III"];

function History() {
  const { history } = dadosDoSite;
  const { origemNome } = history;
  const possuiDestaque =
    history.tituloDestaque && history.titulo.includes(history.tituloDestaque);
  const [tituloAntes, tituloDepois] = possuiDestaque
    ? history.titulo.split(history.tituloDestaque)
    : [history.titulo, ""];

  return (
    <div className="history">
      <div className="up-content">
        <span className="rotulo-secao">{history.intro}</span>
        <h2 id="historia-title">
          {tituloAntes}
          {possuiDestaque && (
            <span className="sublinhado-mao">{history.tituloDestaque}</span>
          )}
          {tituloDepois}
        </h2>
      </div>

      {origemNome && (
        <aside className="history-name-origin" aria-label={origemNome.rotulo}>
          <div className="history-name-badge">
            <span className="history-name-arabic" lang="ar" dir="rtl">
              {origemNome.arabe}
            </span>
            <span className="history-name-translit">{origemNome.transliteracao}</span>
          </div>
          <div className="history-name-body">
            <span className="history-name-eyebrow">{origemNome.rotulo}</span>
            <p className="history-name-meaning">
              <strong>{origemNome.traducao}</strong> — {origemNome.explicacao}
            </p>
          </div>
        </aside>
      )}

      <div className="timeline" role="region" aria-label="Linha do tempo da história">
        {history.itens.map((item, index) => (
          <article className="timeline-item" key={item.titulo}>
            <div className="timeline-header">
              <span className="timeline-chapter" aria-hidden="true">
                {CAPITULOS[index] || index + 1}
              </span>
              <span className="timeline-period">{item.periodo}</span>
            </div>
            <div className="timeline-media">
              <img
                className="timeline-image revelar-foto"
                src={imagens[index].src}
                alt={imagens[index].alt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 className="timeline-title">{item.titulo}</h3>
            <p>{item.texto}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default History;
