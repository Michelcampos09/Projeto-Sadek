import { useState } from "react";
import { dadosDoSite } from "../../data/conteudo";
import miniKibe from "../../assets/arabic-mini-kibe.png";
import torreKibeCru from "../../assets/arabic-torre-kibe-cru.png";
import copinhoTeta from "../../assets/arabic-copinho-teta.png";
import ninhoGalak from "../../assets/arabic-ninho-galak.png";
import ninhoKinderBueno from "../../assets/arabic-ninho-kinder-bueno.png";
import ninhoKitKat from "../../assets/arabic-ninho-kitkat.png";
import iconeLink from "../../assets/icone.png";
import "./arabic.css";

const imagensArabe = [
  { src: miniKibe, alt: "Pôster dourado de mini kibe" },
  { src: torreKibeCru, alt: "Pôster dourado de torre de kibe cru" },
  { src: copinhoTeta, alt: "Pôster dourado do copinho da TeTa" },
  { src: ninhoGalak, alt: "Pôster do ninho Galak" },
  { src: ninhoKinderBueno, alt: "Pôster do ninho Kinder Bueno" },
  { src: ninhoKitKat, alt: "Pôster do ninho KitKat" },
];

export function Restaurante({ variante, dados, imagens, ariaGaleria }) {
  const [imagemAtual, setImagemAtual] = useState(0);

  const selecionarImagem = (indice) => {
    setImagemAtual((indice + imagens.length) % imagens.length);
  };

  const telefoneLimpo = dados.info.telefone.replace(/\D/g, "");

  return (
    <div id={dados.id} className={`restaurante ${variante}`}>
      <span className="restaurante-uptitle">{dados.intro}</span>
      <div
        className="restaurante-galeria"
        role="region"
        aria-label={ariaGaleria}
        aria-roledescription="carrossel"
      >
        <div className="restaurante-galeria-quadro">
          <img
            key={imagemAtual}
            src={imagens[imagemAtual].src}
            alt={imagens[imagemAtual].alt}
            loading="lazy"
            decoding="async"
          />
          <button
            className="restaurante-seta restaurante-seta-anterior"
            type="button"
            aria-label="Imagem anterior"
            onClick={() => selecionarImagem(imagemAtual - 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            className="restaurante-seta restaurante-seta-proxima"
            type="button"
            aria-label="Próxima imagem"
            onClick={() => selecionarImagem(imagemAtual + 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="restaurante-conteudo">
        <div>
          <h2 className="restaurante-titulo" id={`${variante}-title`}>
            {dados.titulo}
          </h2>
          <p className="restaurante-subtitulo">{dados.subTitulo}</p>
        </div>
        <hr className="restaurante-divisor" />
        <div>
          <h3 className="restaurante-secao-titulo">Sabores da nossa cozinha</h3>
          <span className="restaurante-pratos">{dados.menu}</span>
        </div>
        <hr className="restaurante-divisor" />
        <div>
          <h3 className="restaurante-secao-titulo">Informações:</h3>
          <ul className="restaurante-info-lista">
            <li>
              <span className="restaurante-info-rotulo">Endereço</span>
              <a
                className="restaurante-info-link"
                href={dados.info.linkMapa}
                target="_blank"
                rel="noreferrer"
              >
                {dados.info.endereco}
              </a>
            </li>
            <li>
              <span className="restaurante-info-rotulo">Horário</span>
              <span className="restaurante-info-texto">{dados.info.horario}</span>
            </li>
            <li>
              <span className="restaurante-info-rotulo">Telefone</span>
              <a className="restaurante-info-link" href={`tel:+55${telefoneLimpo}`}>
                {dados.info.telefone}
              </a>
            </li>
          </ul>
        </div>
        <div className="restaurante-links">
          <a
            className="restaurante-botao-primario"
            href={dados.linkRestaurante}
            target="_blank"
            rel="noreferrer"
          >
            <span>{dados.textoBotaoPrimario}</span>
            <img className="icone" src={iconeLink} alt="" />
          </a>
          <a
            className="restaurante-botao-secundario"
            href={dados.linkMenu}
            target="_blank"
            rel="noreferrer"
          >
            <span>{dados.textoBotaoSecundario}</span>
            <img className="icone" src={iconeLink} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Arabic() {
  return (
    <Restaurante
      variante="arabic"
      dados={dadosDoSite.arabic}
      imagens={imagensArabe}
      ariaGaleria="Galeria de fotos da Sahtein Rotisseria"
    />
  );
}

export default Arabic;
