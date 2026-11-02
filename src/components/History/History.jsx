import { dadosDoSite } from "../../data/conteudo";
import imagemArabe from "../../assets/history-arabe.jpg";
import imagemRestaurante from "../../assets/history-restaurante.jpg";
import imagemItaliano from "../../assets/history-italiano.jpg";
import "./history.css";

function History() {
  const { history } = dadosDoSite;
  const momentos = history.subTitulo.split(/(?<=\.)\s+/);
  const imagens = [
    { src: imagemArabe, alt: "Prato grelhado com acompanhamentos" },
    { src: imagemRestaurante, alt: "Mesa posta em um restaurante" },
    { src: imagemItaliano, alt: "Massa italiana com pesto e tomates" },
  ];

  return (
    <div className="history">
      <div className="up-content">
        <span className="uptitle-owners">{history.intro}</span>
        <h2 id="historia-title">{history.titulo}</h2>
      </div>
      <div className="timeline" role="region" aria-label="Linha do tempo da história">
        {momentos.map((momento, index) => (
          <article className="timeline-item" key={momento}>
            <span className="timeline-period">{history.periodos[index]}</span>
            <h3 className="timeline-title">{history.titulos[index]}</h3>
            <p>{momento}</p>
            <img
              className="timeline-image"
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
