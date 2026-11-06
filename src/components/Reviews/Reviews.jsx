import { useState } from "react";
import { dadosDoSite } from "../../data/conteudo";
import "./reviews.css";

// Extrai até 2 iniciais do nome do cliente para o avatar discreto
function obterIniciais(nome) {
  return nome
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("")
    .toUpperCase();
}

function Stars({ rating, label }) {
  return (
    <span className="reviews__stars" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          className={`reviews__star${index < rating ? " reviews__star--filled" : ""}`}
          key={index}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.5Z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({ review, conteudo }) {
  const [expandido, setExpandido] = useState(false);
  const textoLongo = review.text.length > 180;
  const ehItaliano = review.restaurant.toLowerCase().includes("forno");
  const classeTema = ehItaliano ? " reviews__card--italian" : "";

  return (
    <figure className={`reviews__card${classeTema}`}>
      <div className="reviews__card-meta">
        {review.rating != null && (
          <Stars
            rating={review.rating}
            label={conteudo.notaLabel.replace("{rating}", review.rating)}
          />
        )}
        <span className="reviews__source">{review.source}</span>
      </div>

      <div className="reviews__quote-wrapper">
        <span className="reviews__quote-mark" aria-hidden="true">
          “
        </span>
        <blockquote
          className={`reviews__quote${
            textoLongo && !expandido ? " reviews__quote--clamped" : ""
          }`}
        >
          {review.text}
        </blockquote>
        {textoLongo && (
          <button
            type="button"
            className="reviews__toggle"
            aria-expanded={expandido}
            onClick={() => setExpandido(!expandido)}
          >
            {expandido ? conteudo.lerMenosLabel : conteudo.lerMaisLabel}
          </button>
        )}
      </div>

      <figcaption className="reviews__caption">
        <span className="reviews__avatar" aria-hidden="true">
          {obterIniciais(review.author)}
        </span>
        <div className="reviews__author-info">
          <span className="reviews__author">{review.author}</span>
          <span className="reviews__restaurant">{review.restaurant}</span>
        </div>
      </figcaption>
    </figure>
  );
}

function Reviews() {
  const conteudo = dadosDoSite.reviews;

  return (
    <div className="reviews">
      <div className="reviews__inner">
        <header className="reviews__header">
          <span className="rotulo-secao">{conteudo.intro}</span>
          <h2 className="reviews__title" id="reviews-title">
            {conteudo.titulo}
          </h2>
          <p className="reviews__intro">{conteudo.introducao}</p>
        </header>

        <ul className="reviews__list" aria-label={conteudo.listaAriaLabel}>
          {conteudo.avaliacoes.map((review, index) => (
            <li className="reviews__item" key={`${review.restaurant}-${index}`}>
              <ReviewCard review={review} conteudo={conteudo} />
            </li>
          ))}
        </ul>

        <footer className="reviews__footer">
          <p className="reviews__footer-text">{conteudo.convite}</p>
          <div className="reviews__footer-links">
            {conteudo.perfisGoogle.map((profile) => {
              const ehItaliano = profile.restaurant
                .toLowerCase()
                .includes("forno");
              return (
                <a
                  className={`reviews__all-link${
                    ehItaliano ? " reviews__all-link--italian" : ""
                  }`}
                  href={profile.url}
                  key={profile.restaurant}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    {conteudo.avaliarLink.replace(
                      "{restaurant}",
                      profile.restaurant,
                    )}
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>
              );
            })}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Reviews;
