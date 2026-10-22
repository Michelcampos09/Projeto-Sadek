import { dadosDoSite } from "../../data/conteudo";
import imagemArabe from "../../assets/history-arabe.jpg";
import imagemRestaurante from "../../assets/history-restaurante.jpg";
import imagemItaliano from "../../assets/history-italiano.jpg";
import "./history.css";

function History() {
  const { history } = dadosDoSite;
  const momentos = history.subTitulo.split(/(?<=\.)\s+/);
  const periodos = ["Year 1", "Years 2-N", "This year"];
  const titulos = [
    "Uma tradição árabe",
    "Uma nova cozinha",
    "Duas culturas à mesa",
  ];
  const imagens = [
    { src: imagemArabe, alt: "Prato grelhado com acompanhamentos" },
    { src: imagemRestaurante, alt: "Mesa posta em um restaurante" },
    { src: imagemItaliano, alt: "Massa italiana com pesto e tomates" },
  ];

  return (
    <div className="history">
      <section className="up-content">
        <span className="uptitle-owners">{history.intro}</span>
        <h1>{history.titulo}</h1>
      </section>
      <section className="timeline" aria-label="Linha do tempo da história">
        {momentos.map((momento, index) => (
          <article className="timeline-item" key={momento}>
            <span className="timeline-period">{periodos[index]}</span>
            <h2 className="timeline-title">{titulos[index]}</h2>
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
      </section>
    </div>
  );
}

export default History;
