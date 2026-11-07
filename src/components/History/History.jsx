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

function History() {
  const { history } = dadosDoSite;
  const [tituloAntes, tituloDepois] = history.titulo.split(history.tituloDestaque);

  return (
    <div className="history">
      <div className="up-content">
        <span className="rotulo-secao">{history.intro}</span>
        <h2 id="historia-title">
          {tituloAntes}
          <span className="sublinhado-mao">{history.tituloDestaque}</span>
          {tituloDepois}
        </h2>
      </div>
      <div className="timeline" role="region" aria-label="Linha do tempo da história">
        {history.itens.map((item, index) => (
          <article className="timeline-item" key={item.titulo}>
            <span className="timeline-period">{item.periodo}</span>
            <h3 className="timeline-title">{item.titulo}</h3>
            <p>{item.texto}</p>
            <img
              className="timeline-image revelar-foto"
              src={imagens[index].src}
              alt={imagens[index].alt}
              loading="lazy"
              decoding="async"
            />
          </article>
        ))}
      </div>
    </div>
  );
}

export default History;
