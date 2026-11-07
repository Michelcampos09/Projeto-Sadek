import { dadosDoSite, obterUrlSegura } from "../../data/conteudo";
import "./faq.css";

function Faq() {
  const { faq, arabic, italian } = dadosDoSite;
  const possuiDestaque =
    faq.tituloDestaque && faq.titulo.includes(faq.tituloDestaque);
  const [tituloAntes, tituloDepois] = possuiDestaque
    ? faq.titulo.split(faq.tituloDestaque)
    : [faq.titulo, ""];

  const urlMenuArabe = obterUrlSegura(arabic.linkMenu, "#sahtein-rotisseria");
  const urlMenuItaliano = obterUrlSegura(italian.linkMenu, "#forno-sahtein");
  const urlCtaWhatsapp = obterUrlSegura(faq.ctaUrl, "#contato");

  return (
    <div className="faq">
      <div className="faq__inner">
        <div className="faq__sidebar">
          <header className="faq__header">
            <span className="rotulo-secao">{faq.intro}</span>
            <h2 className="faq__title" id="faq-title">
              {tituloAntes}
              {possuiDestaque && (
                <span className="sublinhado-mao">{faq.tituloDestaque}</span>
              )}
              {tituloDepois}
            </h2>
            <p className="faq__intro">{faq.descricao}</p>
          </header>

          <footer className="faq__footer">
            <p className="faq__footer-text">{faq.ctaTexto}</p>
            <a
              className="faq__cta"
              href={urlCtaWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{faq.ctaRotulo}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </footer>
        </div>

        <div className="faq__list">
          {faq.itens.map((item, index) => (
            <details
              className="faq__item"
              key={item.id}
              open={index === 0}
            >
              <summary className="faq__question">
                <div className="faq__question-content">
                  <span className="faq__badge">{item.escopo}</span>
                  <span className="faq__question-text">{item.pergunta}</span>
                </div>
                <span className="faq__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>

              <div className="faq__answer">
                <p>{item.resposta}</p>

                {item.id === "delivery-retirada" && (
                  <div className="faq__answer-links">
                    <a
                      className="faq__menu-link faq__menu-link--arabic"
                      href={urlMenuArabe}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Cardápio {arabic.nome}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      className="faq__menu-link faq__menu-link--italian"
                      href={urlMenuItaliano}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Cardápio {italian.nome}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;

