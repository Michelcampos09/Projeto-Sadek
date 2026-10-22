import { useState } from "react";
import { dadosDoSite } from "../../data/conteudo";
import imagemPrato from "../../assets/arabic-prato.jpg";
import imagemMesa from "../../assets/arabic-mesa.jpg";
import imagemGrill from "../../assets/arabic-grill.jpg";
import imagemMezze from "../../assets/arabic-mezze.jpg";
import imagemMaqluba from "../../assets/arabic-maqluba.jpg";
import imagemKanafeh from "../../assets/arabic-kanafeh.jpg";
import iconeLink from "../../assets/icone.png";

import "./arabic.css";

function Arabic() {
  const { arabic } = dadosDoSite;
  const [imagemAtual, setImagemAtual] = useState(0);
  const imagens = [
    { src: imagemPrato, alt: "Foto de um prato árabe original" },
    { src: imagemMesa, alt: "Foto da mesa principal" },
    { src: imagemGrill, alt: "Foto da grill que cozinha" },
    {
      src: imagemMezze,
      alt: "Prato árabe de mezze com molho e acompanhamentos",
    },
    {
      src: imagemMaqluba,
      alt: "Maqluba servida em uma refeição compartilhada",
    },
    { src: imagemKanafeh, alt: "Sobremesa árabe kanafeh servida com chá" },
  ];

  return (
    <div className="arabic">
      <span className="uptitle-arabic">{arabic.intro}</span>
      <section
        className="first-half"
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
      </section>
      <section className="second-half">
        <div>
          <h1 className="title-arabic">{arabic.titulo}</h1>
          <p className="subtitle-arabic">{arabic.subTitulo}</p>
        </div>
        <hr className="line-arabic" />
        <div>
          <span className="dishes-title">Pratos Principais:</span>
          <span className="dishes">{arabic.menu}</span>
        </div>
        <hr className="line-arabic" />
        <div>
          <span className="title-info">Informações:</span>
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
      </section>
    </div>
  );
}

export default Arabic;
