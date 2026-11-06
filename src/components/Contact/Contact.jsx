import { dadosDoSite } from "../../data/conteudo";
import LogoSahtein from "../../assets/LogoSahtein.png";
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

  return (
    <footer className="contact">
      <div className="contact__inner">
        <div className="contact__grid">
          {/* Coluna 1: Grupo + redes sociais unificadas */}
          <div className="contact__col">
            <a
              className="contact__logo-link"
              href="/#inicio"
              aria-label={`${dadosGrupo.nome} — voltar ao início`}
            >
              <img
                className="contact__logo"
                src={LogoSahtein}
                alt={`Logo ${dadosGrupo.nome}`}
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="contact__tagline">{dadosGrupo.descricao}</p>

            <ul
              className="contact__socials"
              aria-label="Redes sociais unificadas do grupo"
            >
              {redesSociaisGrupo.map((rede) => (
                <li key={rede.id}>
                  <a
                    className="contact__social-link"
                    href={rede.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={rede.ariaLabel}
                  >
                    {ICONES_REDES_SOCIAIS[rede.id]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colunas 2 e 3: Restaurante Árabe e Restaurante Italiano */}
          {casas.map((casa) => {
            const urlRestaurante =
              casa.chave === "arabic"
                ? linksRestaurantes.arabe
                : linksRestaurantes.italiano;

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
                  aria-label={`Website e menu de ${casa.nome} (abre em nova aba)`}
                >
                  <span>Website &amp; menu</span>
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
            <h2 className="contact__heading">Contato</h2>

            <address className="contact__address">
              <ul className="contact__info-list">
                <li className="contact__info-item">
                  <span className="contact__info-label">E-mail e telefone</span>
                  <a
                    className="contact__info-link"
                    href={`mailto:${dadosGrupo.email}`}
                  >
                    {dadosGrupo.email}
                  </a>
                  <a
                    className="contact__info-link"
                    href={`tel:+55${telefoneLimpo}`}
                  >
                    {dadosGrupo.telefone}
                  </a>
                </li>

                {casas.map((casa) => (
                  <li
                    className={`contact__info-item contact__info-item--${casa.modificador}`}
                    key={casa.chave}
                  >
                    <span className="contact__info-label">{casa.nome}</span>
                    <a
                      className="contact__info-link"
                      href={casa.linkMapa}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver endereço de ${casa.nome} no Google Maps (abre em nova aba)`}
                    >
                      {casa.endereco}
                    </a>
                  </li>
                ))}
              </ul>
            </address>
          </div>
        </div>

        {/* Barra inferior: copyright à esquerda e links legais à direita */}
        <div className="contact__bottom">
          <p className="contact__copyright">
            © {ANO_ATUAL} {dadosGrupo.nome}. Todos os direitos reservados.
          </p>

          <nav aria-label="Links legais e créditos">
            <ul className="contact__legal-list">
              <li>
                <a
                  className="contact__legal-link"
                  href={dadosGrupo.linkPrivacidade}
                >
                  Privacidade
                </a>
              </li>
              <li>
                <a
                  className="contact__legal-link"
                  href={dadosGrupo.linkCreditos}
                >
                  Créditos
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
