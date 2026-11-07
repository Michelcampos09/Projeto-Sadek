import { useState } from "react";
import {
  dadosDoSite,
  obterUrlMapaSegura,
  obterUrlSegura,
} from "../../data/conteudo";
import "./visit.css";

const ICONES_PRATICOS = {
  estacionamento: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M9.5 16V8h3.25a2.5 2.5 0 0 1 0 5H9.5" />
    </svg>
  ),
  acessibilidade: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="4.75" r="1.75" />
      <path d="M7 8.5h10M12 8.5v5.5m0 0-2.75 5.5M12 14l2.75 5.5" />
    </svg>
  ),
  distancia: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm12-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path d="M8.5 16.5h4a3.5 3.5 0 0 0 0-7H11a3.5 3.5 0 0 1 0-7h4.5" />
    </svg>
  ),
};

function Visit() {
  const { visit } = dadosDoSite;
  const [casaAtivaId, setCasaAtivaId] = useState(visit.casas[0].id);
  const possuiDestaque =
    visit.tituloDestaque && visit.titulo.includes(visit.tituloDestaque);
  const [tituloAntes, tituloDepois] = possuiDestaque
    ? visit.titulo.split(visit.tituloDestaque)
    : [visit.titulo, ""];

  const casaAtiva =
    visit.casas.find((casa) => casa.id === casaAtivaId) || visit.casas[0];
  const urlEmbedAtiva = obterUrlMapaSegura(casaAtiva.embedUrl);
  const urlMapaAtiva = obterUrlSegura(casaAtiva.mapsUrl, "#visite");

  return (
    <div className="visit">
      <div className="visit__inner">
        <header className="visit__header">
          <span className="rotulo-secao">{visit.intro}</span>
          <h2 className="visit__title" id="visite-title">
            {tituloAntes}
            {possuiDestaque && (
              <span className="sublinhado-mao">{visit.tituloDestaque}</span>
            )}
            {tituloDepois}
          </h2>
          <p className="visit__intro">{visit.descricao}</p>
        </header>

        <div className="visit__layout">
          {/* Coluna de cartões das duas unidades */}
          <div className="visit__cards">
            {visit.casas.map((casa) => {
              const telefoneLimpo = casa.telefone.replace(/\D/g, "");
              const selecionada = casa.id === casaAtiva.id;
              const urlMaps = obterUrlSegura(casa.mapsUrl, "#visite");
              const urlWaze = obterUrlSegura(casa.wazeUrl, "#visite");
              const urlWhatsapp = obterUrlSegura(casa.whatsappUrl, "#contato");

              return (
                <article
                  key={casa.id}
                  className={`visit__card visit__card--${casa.modificador}${
                    selecionada ? " visit__card--active" : ""
                  }`}
                >
                  <div className="visit__card-top">
                    <div>
                      <span className="visit__card-eyebrow">{casa.cozinha}</span>
                      <h3 className="visit__card-title">{casa.nome}</h3>
                    </div>
                    <button
                      type="button"
                      className="visit__map-PinBtn"
                      aria-pressed={selecionada}
                      onClick={() => setCasaAtivaId(casa.id)}
                    >
                      {selecionada ? "No mapa ao lado" : "Ver no mapa"}
                    </button>
                  </div>

                  <dl className="visit__details">
                    <div className="visit__detail-row">
                      <dt className="visit__detail-term">Endereço</dt>
                      <dd className="visit__detail-desc">
                        <span>{casa.endereco}</span>
                        <span className="visit__detail-note">
                          {casa.referencia}
                        </span>
                      </dd>
                    </div>

                    <div className="visit__detail-row">
                      <dt className="visit__detail-term">Horário</dt>
                      <dd className="visit__detail-desc">
                        <span>{casa.horario}</span>
                        <span className="visit__detail-note">{casa.folga}</span>
                      </dd>
                    </div>

                    <div className="visit__detail-row">
                      <dt className="visit__detail-term">Telefone</dt>
                      <dd className="visit__detail-desc">
                        <a
                          className="visit__phone-link"
                          href={`tel:+55${telefoneLimpo}`}
                        >
                          {casa.telefone}
                        </a>
                      </dd>
                    </div>
                  </dl>

                  <div className="visit__actions">
                    <a
                      className="visit__btn visit__btn--primary"
                      href={urlMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir ${casa.nome} no Google Maps (abre em nova aba)`}
                    >
                      <span>Google Maps</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      className="visit__btn visit__btn--secondary"
                      href={urlWaze}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Traçar rota para ${casa.nome} no Waze (abre em nova aba)`}
                    >
                      <span>Ir com Waze</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      className="visit__btn visit__btn--whatsapp"
                      href={urlWhatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Conversar com ${casa.nome} no WhatsApp (abre em nova aba)`}
                    >
                      <span>WhatsApp</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Painel do mapa interativo com seletor entre as duas casas */}
          <div className="visit__map-panel">
            <div
              className="visit__map-tabs"
              role="group"
              aria-label={visit.mapaAriaLabel}
            >
              {visit.casas.map((casa) => {
                const ativa = casa.id === casaAtiva.id;
                return (
                  <button
                    key={casa.id}
                    type="button"
                    className={`visit__map-tab visit__map-tab--${casa.modificador}${
                      ativa ? " visit__map-tab--active" : ""
                    }`}
                    aria-pressed={ativa}
                    onClick={() => setCasaAtivaId(casa.id)}
                  >
                    <span className="visit__map-tab-dot" aria-hidden="true" />
                    <span>{casa.nome}</span>
                  </button>
                );
              })}
            </div>

            <div className="visit__map-frame">
              {urlEmbedAtiva && (
                <iframe
                  key={casaAtiva.id}
                  className="visit__map-iframe"
                  src={urlEmbedAtiva}
                  title={`Mapa de localização de ${casaAtiva.nome} em Itaipu, Niterói`}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                  allowFullScreen
                />
              )}
            </div>

            <div className="visit__map-caption">
              <div className="visit__map-caption-text">
                <strong>{casaAtiva.nome}:</strong> {casaAtiva.endereco}
              </div>
              <a
                className="visit__map-external"
                href={urlMapaAtiva}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ampliar mapa ↗
              </a>
            </div>
          </div>
        </div>

        {/* Faixa de informações práticas (estacionamento, acessibilidade, proximidade) */}
        <ul
          className="visit__practical"
          aria-label="Informações práticas de estacionamento e acessibilidade"
        >
          {visit.informacoesPraticas.map((item) => (
            <li className="visit__practical-item" key={item.id}>
              <span className="visit__practical-icon">
                {ICONES_PRATICOS[item.id]}
              </span>
              <div className="visit__practical-content">
                <h3 className="visit__practical-title">{item.titulo}</h3>
                <p className="visit__practical-text">{item.texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Visit;

