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

function Arabic() {
  const { arabic } = dadosDoSite;
  const [imagemAtual, setImagemAtual] = useState(0);
  const imagens = [
    {
      src: miniKibe,
      alt: "Pôster dourado de mini kibe",
    },
    {
      src: torreKibeCru,
      alt: "Pôster dourado de torre de kibe cru",
    },
    {
      src: copinhoTeta,
      alt: "Pôster dourado do copinho da TeTa",
    },
    {
      src: ninhoGalak,
      alt: "Pôster do ninho Galak",
    },
    {
      src: ninhoKinderBueno,
      alt: "Pôster do ninho Kinder Bueno",
    },
    {
      src: ninhoKitKat,
      alt: "Pôster do ninho KitKat",
    },
  ];

  return (
    <div className="arabic">
      <span className="uptitle-arabic">{arabic.intro}</span>
      <div
        className="first-half"
        role="region"
        aria-label="Galeria de fotos do restaurante árabe"
        aria-roledescription="carrossel"
      >
        <img
          key={imagemAtual}
          src={imagens[imagemAtual].src}
          alt={imagens[imagemAtual].alt}
          loading="lazy"
          decoding="async"
        />
        <button
          className="gallery-arrow gallery-arrow-previous"
          type="button"
          aria-label="Imagem anterior"
          onClick={() =>
            setImagemAtual((imagemAtual - 1 + imagens.length) % imagens.length)
          }
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          className="gallery-arrow gallery-arrow-next"
          type="button"
          aria-label="Próxima imagem"
          onClick={() => setImagemAtual((imagemAtual + 1) % imagens.length)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
      <div className="second-half">
        <div>
          <h2 className="title-arabic" id="arabic-title">{arabic.titulo}</h2>
          <p className="subtitle-arabic">{arabic.subTitulo}</p>
        </div>
        <hr className="line-arabic" />
        <div>
          <h3 className="dishes-title">Sabores da nossa cozinha</h3>
          <span className="dishes">{arabic.menu}</span>
        </div>
        <hr className="line-arabic" />
        <div>
          <h3 className="title-info">Informações:</h3>
          <ul className="info-list">
            <li>
              <span className="info-label">Endereço</span>
              <a
                className="info-link"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(arabic.info.endereco)}`}
                target="_blank"
                rel="noreferrer"
              >
                {arabic.info.endereco}
              </a>
            </li>
            <li>
              <span className="info-label">Horário</span>
              <span className="info">{arabic.info.horario}</span>
            </li>
            <li>
              <span className="info-label">Telefone</span>
              <a className="info-link" href="tel:+5521987654321">
                {arabic.info.telefone}
              </a>
            </li>
          </ul>
        </div>
        <div className="links-arabic">
          <a
            className="botao-hero"
            href="https://sahteinrotisseria.com.br"
            target="_blank"
            rel="noreferrer"
          >
            <span>Visitar restaurante árabe</span>
            <img className="icone" src={iconeLink} alt="" />
          </a>
          <a
            className="botao-hero2-arabic"
            href="https://sahteinrotisseria.com.br"
            target="_blank"
            rel="noreferrer"
          >
            <span>Visitar menu</span>
            <img className="icone" src={iconeLink} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Arabic;
