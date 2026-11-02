import { useState } from "react";
import { dadosDoSite } from "../../data/conteudo";
import pizzaDeSalmao from "../../assets/pizza-salmao-artesanal.png";
import pizzaDePistache from "../../assets/pizza-pistache-artesanal.png";
import pizzaDeKitKat from "../../assets/pizza-kitkat-artesanal.png";
import pizzaDeCamarao from "../../assets/pizza-camarao-artesanal.png";
import pizzaDeCalabresa from "../../assets/pizza-calabresa-artesanal.png";
import iconeLink from "../../assets/icone.png";
import "./italian.css";

function Italian() {
  const { italian } = dadosDoSite;
  const [imagemAtual, setImagemAtual] = useState(0);
  const imagens = [
    { src: pizzaDeSalmao, alt: "Pizza artesanal de salmão" },
    { src: pizzaDePistache, alt: "Pizza artesanal de pistache" },
    { src: pizzaDeKitKat, alt: "Pizza artesanal de KitKat" },
    { src: pizzaDeCamarao, alt: "Pizza artesanal de camarão" },
    { src: pizzaDeCalabresa, alt: "Pizza artesanal de calabresa" },
  ];

  const selecionarImagem = (indice) => {
    setImagemAtual((indice + imagens.length) % imagens.length);
  };

  return (
    <div className="italian">
      <span className="uptitle-italian">{italian.intro}</span>
      <section
        className="italian-gallery"
        aria-label="Galeria de fotos do restaurante italiano"
        aria-roledescription="carrossel"
      >
        <div className="italian-gallery-feature">
          <img
            key={imagemAtual}
            src={imagens[imagemAtual].src}
            alt={imagens[imagemAtual].alt}
            loading="lazy"
            decoding="async"
          />
          <button
            className="italian-gallery-arrow italian-gallery-previous"
            type="button"
            aria-label="Imagem anterior"
            onClick={() => selecionarImagem(imagemAtual - 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            className="italian-gallery-arrow italian-gallery-next"
            type="button"
            aria-label="Próxima imagem"
            onClick={() => selecionarImagem(imagemAtual + 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </section>
      <section className="italian-content">
        <div>
          <h1 className="italian-title">{italian.titulo}</h1>
          <p className="italian-subtitle">{italian.subTitulo}</p>
        </div>
        <hr className="italian-divider" />
        <div>
          <span className="italian-dishes-title">Sabores da nossa cozinha</span>
          <span className="italian-dishes">{italian.menu}</span>
        </div>
        <hr className="italian-divider" />
        <div>
          <span className="italian-info-title">Informações:</span>
          <ul className="italian-info-list">
            <li>
              <span className="italian-info-label">Endereço</span>
              <a
                className="italian-info-link"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(italian.info.endereco)}`}
                target="_blank"
                rel="noreferrer"
              >
                {italian.info.endereco}
              </a>
            </li>
            <li>
              <span className="italian-info-label">Horário</span>
              <span className="italian-info">{italian.info.horario}</span>
            </li>
            <li>
              <span className="italian-info-label">Telefone</span>
              <a className="italian-info-link" href="tel:+5521987654321">
                {italian.info.telefone}
              </a>
            </li>
          </ul>
        </div>
        <div className="italian-links">
          <a
            className="italian-visit-primary"
            href="https://cardapio.takeat.app/fornosahtein"
            target="_blank"
            rel="noreferrer"
          >
            <span>Visitar restaurante italiano</span>
            <img className="icone" src={iconeLink} alt="" />
          </a>
          <a
            className="italian-visit-secondary"
            href="https://cardapio.takeat.app/fornosahtein"
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

export default Italian;
