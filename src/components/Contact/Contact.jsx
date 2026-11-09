import { dadosDoSite, obterUrlSegura } from "../../data/conteudo";
import LogoSahtein2 from "../../assets/LogoSahtein2.png";
import "./contact.css";

const ICONES_REDES_SOCIAIS = {
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.5 8H17V4.5h-2.9C10.9 4.5 9.5 6.3 9.5 9.1V11H7v3.5h2.5V20h3.6v-5.5h2.7l.5-3.5h-3.2V9.3c0-.9.4-1.3 1.4-1.3Z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a8.9 8.9 0 0 0-7.7 13.4L3 21l4.8-1.3A8.9 8.9 0 1 0 12 3Z" />
      <path d="M9.3 8.8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.8 2.2.9 2.6.7 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3l-1.5-.7c-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8.9-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5l-.6-1.5Z" />
    </svg>
  ),
};

const ANO_ATUAL = new Date().getFullYear();

function Contact() {
  const { dadosGrupo, linksRestaurantes, redesSociaisGrupo, casas } =
    dadosDoSite.contact;
  const telefoneLimpo = dadosGrupo.telefone.replace(/\D/g, "");
  const urlEmailSeguro = obterUrlSegura(`mailto:${dadosGrupo.email}`, "");
  const redesAtivas = redesSociaisGrupo.filter((rede) =>
    Boolean(obterUrlSegura(rede.url, ""))
  );

  return (
    <footer id="contato" className="contact">
      <div className="contact__inner">
        <div className="contact__grid">
          {/* Coluna 1: Grupo + canais oficiais ativos */}
          <div className="contact__col">
            <a
              className="contact__logo-link"
              href="/#inicio"
              aria-label={`${dadosGrupo.nome} — voltar ao início`}
            >
              <span className="contact__logo-seal" aria-hidden="true">
                <img
                  className="contact__logo"
                  src={LogoSahtein2}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="contact__brand-texts">
                <span className="contact__brand-name">
                  {dadosDoSite.nav.marca}
                </span>
                {dadosDoSite.nav.subtituloMarca && (
                  <span className="contact__brand-subtitle">
                    {dadosDoSite.nav.subtituloMarca}
                  </span>
                )}
              </span>
            </a>
            <p className="contact__tagline">{dadosGrupo.descricao}</p>

            {redesAtivas.length > 0 && (
              <ul
                className="contact__socials"
                aria-label="Canais diretos do grupo"
              >
                {redesAtivas.map((rede) => {
                  const urlRede = obterUrlSegura(rede.url, "");
                  return (
                    <li key={rede.id}>
                      <a
                        className="contact__social-link"
                        href={urlRede}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={rede.ariaLabel}
                      >
                        {ICONES_REDES_SOCIAIS[rede.id]}
                        <span className="contact__social-text">
                          {rede.rotulo}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Colunas 2 e 3: Restaurante Árabe e Restaurante Italiano */}
          {casas.map((casa) => {
            const urlRestauranteBruta =
              casa.chave === "arabic"
                ? linksRestaurantes.arabe
                : linksRestaurantes.italiano;
            const urlRestaurante = obterUrlSegura(
              urlRestauranteBruta,
              "/#restaurantes"
            );

            return (
              <div
                className={`contact__col contact__col--house contact__col--${casa.modificador}`}
                key={casa.chave}
              >
                <span className="contact__eyebrow">{casa.cozinha}</span>
                <h2 className="contact__heading contact__heading--house">
                  {casa.nome}
                </h2>
                <p className="contact__text">{casa.resumo}</p>

                <ul
                  className="contact__highlights"
                  aria-label={`Destaques de ${casa.nome}`}
                >
                  {casa.destaques.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <a
                  className="contact__btn"
                  href={urlRestaurante}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Cardápio digital de ${casa.nome} (abre em nova aba)`}
                >
                  <span>Cardápio &amp; pedidos</span>
                  <span className="contact__btn-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            );
          })}

          {/* Coluna 4: Contato e endereços das duas casas */}
          <div className="contact__col">
            <span className="contact__eyebrow">Fale conosco</span>
            <h2 className="contact__heading">Contato &amp; Endereços</h2>

            <address className="contact__address">
              <ul className="contact__info-list">
                <li className="contact__info-item">
                  <span className="contact__info-label">
                    Telefone e atendimento
                  </span>
                  {urlEmailSeguro && (
                    <a className="contact__info-link" href={urlEmailSeguro}>
                      {dadosGrupo.email}
                    </a>
                  )}
                  <a
                    className="contact__info-link"
                    href={`tel:+55${telefoneLimpo}`}
                  >
                    {dadosGrupo.telefone}
                  </a>
                </li>

                {casas.map((casa) => {
                  const urlMapa = obterUrlSegura(casa.linkMapa, "/#visite");
                  return (
                    <li
                      className={`contact__info-item contact__info-item--${casa.modificador}`}
                      key={casa.chave}
                    >
                      <span className="contact__info-label">{casa.nome}</span>
                      <a
                        className="contact__info-link"
                        href={urlMapa}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver endereço de ${casa.nome} no Google Maps (abre em nova aba)`}
                      >
                        {casa.endereco}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </address>
          </div>
        </div>

        {/* Barra inferior: copyright à esquerda e navegação rápida à direita */}
        <div className="contact__bottom">
          <p className="contact__copyright">
            © {ANO_ATUAL} {dadosGrupo.nome} · Itaipu, Niterói — RJ. Todos os
            direitos reservados.
          </p>

          <nav aria-label="Navegação rápida do rodapé">
            <ul className="contact__legal-list">
              <li>
                <a className="contact__legal-link" href="/#inicio">
                  Início
                </a>
              </li>
              <li>
                <a className="contact__legal-link" href="/#historia">
                  Nossa história
                </a>
              </li>
              <li>
                <a className="contact__legal-link" href="/#restaurantes">
                  As duas casas
                </a>
              </li>
              <li>
                <a className="contact__legal-link" href="/#visite">
                  Como chegar
                </a>
              </li>
              <li>
                <a className="contact__legal-link" href="/#faq">
                  Dúvidas
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
