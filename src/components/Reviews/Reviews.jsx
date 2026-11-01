import "./reviews.css";

const googleProfiles = [
  {
    restaurant: "árabe",
    url: "COLE_AQUI_O_LINK_DO_GOOGLE_ARABE", // TODO: link real do perfil árabe
    rating: 0, // TODO: nota real
    totalReviews: 0, // TODO: total real
  },
  {
    restaurant: "italiano",
    url: "COLE_AQUI_O_LINK_DO_GOOGLE_ITALIANO", // TODO: link real do perfil italiano
    rating: 0, // TODO: nota real
    totalReviews: 0, // TODO: total real
  },
];

const reviews = [
  // TODO: SUBSTITUIR POR AVALIAÇÃO REAL
  {
    text: "Texto de exemplo: substitua por um trecho fiel de uma avaliação pública.",
    author: "Identificação a preencher",
    restaurant: "árabe",
    source: "Fonte a confirmar",
  },
  // TODO: SUBSTITUIR POR AVALIAÇÃO REAL
  {
    text: "Texto de exemplo: substitua por um trecho fiel de uma avaliação pública.",
    author: "Identificação a preencher",
    restaurant: "italiano",
    source: "Fonte a confirmar",
  },
  // TODO: SUBSTITUIR POR AVALIAÇÃO REAL
  {
    text: "Texto de exemplo: substitua por um trecho fiel de uma avaliação pública.",
    author: "Identificação a preencher",
    restaurant: "árabe",
    source: "Fonte a confirmar",
  },
];

function Reviews() {
  return (
    <section className="reviews" aria-labelledby="reviews-title">
      <div className="reviews__inner">
        <header className="reviews__header">
          <div className="reviews__heading">
            <h2 className="reviews__title" id="reviews-title">
              O que dizem nossos convidados
            </h2>
            <p className="reviews__intro">
              Histórias à mesa, compartilhadas por quem já nos visitou.
            </p>
          </div>
        </header>

        <ul className="reviews__list" aria-label="Depoimentos de visitantes">
          {reviews.map((review, index) => (
            <li className="reviews__item" key={`${review.restaurant}-${index}`}>
              <figure className="reviews__card">
                <div className="reviews__card-meta">
                  {review.rating != null && (
                    <Stars
                      rating={review.rating}
                      label={`Nota ${review.rating} de 5`}
                    />
                  )}
                  <span className="reviews__source">{review.source}</span>
                </div>
                <blockquote className="reviews__quote">
                  {review.text}
                </blockquote>
                <figcaption className="reviews__caption">
                  <span className="reviews__author-label">Autor</span>
                  <span className="reviews__author">{review.author}</span>
                  <span className="reviews__restaurant">
                    Restaurante {review.restaurant}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <footer className="reviews__footer">
          <p>Já nos visitou? Conte como foi a sua experiência.</p>
          <div className="reviews__footer-links">
            {googleProfiles.map((profile) => (
              <a
                className="reviews__all-link"
                href={profile.url}
                key={profile.restaurant}
                target="_blank"
                rel="noopener noreferrer"
              >
                Avaliar restaurante {profile.restaurant} no Google
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
