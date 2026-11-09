import { useState, useRef } from "react";
import { dadosDoSite, obterUrlSegura } from "../../data/conteudo";
import miniKibe from "../../assets/arabic-mini-kibe.png";
import torreKibeCru from "../../assets/arabic-torre-kibe-cru.png";
import copinhoTeta from "../../assets/arabic-copinho-teta.png";
import ninhoGalak from "../../assets/arabic-ninho-galak.png";
import ninhoKinderBueno from "../../assets/arabic-ninho-kinder-bueno.png";
import ninhoKitKat from "../../assets/arabic-ninho-kitkat.png";
import "./arabic.css";

const imagensArabe = [
  { src: miniKibe, alt: "Mini porção de kibe artesanal da Sahtein Rotisseria" },
  { src: torreKibeCru, alt: "Torre de kibe cru tradicional da Sahtein Rotisseria" },
  { src: copinhoTeta, alt: "Sobremesa Copinho da TeTa da Sahtein Rotisseria" },
  { src: ninhoGalak, alt: "Ninho árabe recheado com Galak" },
  { src: ninhoKinderBueno, alt: "Ninho árabe recheado com Kinder Bueno" },
  { src: ninhoKitKat, alt: "Ninho árabe recheado com KitKat" },
];

export function Restaurante({ variante, dados, imagens, ariaGaleria }) {
  const [imagemAtual, setImagemAtual] = useState(0);
  const toqueInicioRef = useRef({ x: null, y: null });

  const selecionarImagem = (indice) => {
    setImagemAtual((indice + imagens.length) % imagens.length);
  };

  const lidarTouchStart = (evento) => {
    const toque = evento.touches?.[0];
    if (!toque) return;
    toqueInicioRef.current = { x: toque.clientX, y: toque.clientY };
  };

  const lidarTouchEnd = (evento) => {
    const { x: inicioX, y: inicioY } = toqueInicioRef.current;
    const toque = evento.changedTouches?.[0];
    toqueInicioRef.current = { x: null, y: null };

    if (inicioX === null || inicioY === null || !toque) return;

    const deltaX = toque.clientX - inicioX;
    const deltaY = toque.clientY - inicioY;
    const distanciaMinima = 40;

    // Só troca o slide se o movimento horizontal for predominante e superar o limiar
    if (
      Math.abs(deltaX) >= distanciaMinima &&
      Math.abs(deltaX) > Math.abs(deltaY) * 1.2
    ) {
      if (deltaX < 0) {
        selecionarImagem(imagemAtual + 1);
      } else {
        selecionarImagem(imagemAtual - 1);
      }
    }
  };

  const lidarKeyDownGaleria = (evento) => {
    if (evento.key === "ArrowLeft") {
      evento.preventDefault();
      selecionarImagem(imagemAtual - 1);
    } else if (evento.key === "ArrowRight") {
      evento.preventDefault();
      selecionarImagem(imagemAtual + 1);
    }
  };

  const telefoneLimpo = dados.info.telefone.replace(/\D/g, "");
  const pratosDestaque = dados.menu
    .split("·")
    .map((prato) => prato.trim())
    .filter(Boolean);

  const urlMapaSegura = obterUrlSegura(dados.info.linkMapa, "#visite");
  const urlRestauranteSegura = obterUrlSegura(dados.linkRestaurante, "#visite");
  const urlMenuSegura = obterUrlSegura(dados.linkMenu, "#visite");

  return (
    <div id={dados.id} className={`restaurante ${variante}`}>
      <div className="restaurante-cabecalho">
        {dados.capitulo && (
          <span className="restaurante-capitulo">{dados.capitulo}</span>
        )}
        <span className="restaurante-uptitle rotulo-secao">{dados.intro}</span>
      </div>

      <div
        className="restaurante-galeria"
        role="region"
        aria-label={ariaGaleria}
        aria-roledescription="carrossel"
        onKeyDown={lidarKeyDownGaleria}
      >
        <div
          className="restaurante-galeria-quadro revelar-foto"
          onTouchStart={lidarTouchStart}
          onTouchEnd={lidarTouchEnd}
        >
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

        <div className="restaurante-galeria-barra">
          <span className="restaurante-galeria-contador" aria-live="polite">
            {imagemAtual + 1} / {imagens.length} — {imagens[imagemAtual].alt}
          </span>
          <div className="restaurante-galeria-pontos" role="tablist" aria-label="Selecionar foto">
            {imagens.map((img, idx) => (
              <button
                key={img.alt}
                type="button"
                role="tab"
                aria-selected={idx === imagemAtual}
                aria-label={`Ver foto ${idx + 1}: ${img.alt}`}
                className={`restaurante-ponto${idx === imagemAtual ? " ativo" : ""}`}
                onClick={() => selecionarImagem(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="restaurante-conteudo">
        <h2 className="restaurante-titulo">{dados.titulo}</h2>
        <p className="restaurante-subtitulo">{dados.subTitulo}</p>

        <div className="restaurante-bloco-menu">
          <h3 className="restaurante-secao-titulo">Sabores da nossa cozinha</h3>
          <ul className="restaurante-pratos-lista" aria-label="Especialidades da casa">
            {pratosDestaque.map((prato) => (
              <li key={prato} className="restaurante-prato-tag">
                {prato}
              </li>
            ))}
          </ul>
        </div>

        <div className="restaurante-bloco-info">
          <h3 className="restaurante-secao-titulo">Visite a casa</h3>
          <ul className="restaurante-info-lista">
            <li>
              <span className="restaurante-info-rotulo">Endereço</span>
              <a
                className="restaurante-info-link"
                href={urlMapaSegura}
                target="_blank"
                rel="noopener noreferrer"
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
            href={urlRestauranteSegura}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{dados.textoBotaoPrimario}</span>
            <span className="restaurante-icone-seta" aria-hidden="true">↗</span>
          </a>
          <a
            className="restaurante-botao-secundario"
            href={urlMenuSegura}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{dados.textoBotaoSecundario}</span>
            <span className="restaurante-icone-seta" aria-hidden="true">↗</span>
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
