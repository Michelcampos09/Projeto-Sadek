import { dadosDoSite } from "../../data/conteudo";
import "./reviews.css";

function Reviews() {
  const conteudo = dadosDoSite.reviews;

  return (
    <section className="reviews" aria-labelledby="reviews-title">
      <div className="reviews__inner">
        <header className="reviews__header">
          <div className="reviews__heading">
            <h2 className="reviews__title" id="reviews-title">
              {conteudo.titulo}
            </h2>
            <p className="reviews__intro">{conteudo.introducao}</p>
          </div>
        </header>

        <ul
          className="reviews__list"
          aria-label={conteudo.listaAriaLabel}
        >
          {conteudo.avaliacoes.map((review, index) => (
            <li className="reviews__item" key={`${review.restaurant}-${index}`}>
              <figure className="reviews__card">
                <div className="reviews__card-meta">
                  {review.rating != null && (
                    <Stars
                      rating={review.rating}
                      label={conteudo.notaLabel.replace(
                        "{rating}",
                        review.rating,
                      )}
                    />
                  )}
                  <span className="reviews__source">{review.source}</span>
                </div>
                <blockquote className="reviews__quote">
                  {review.text}
                </blockquote>
                <figcaption className="reviews__caption">
                  <span className="reviews__author-label">
                    {conteudo.autorLabel}
                  </span>
                  <span className="reviews__author">{review.author}</span>
                  <span className="reviews__restaurant">
                    {conteudo.restauranteLabel} {review.restaurant}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <footer className="reviews__footer">
          <p>{conteudo.convite}</p>
          <div className="reviews__footer-links">
            {conteudo.perfisGoogle.map((profile) => (
              <a
                className="reviews__all-link"
                href={profile.url}
                key={profile.restaurant}
                target="_blank"
                rel="noopener noreferrer"
              >
                {conteudo.avaliarLink.replace(
                  "{restaurant}",
                  profile.restaurant,
                )}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Reviews;
