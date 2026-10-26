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

const isConfigured = (profile) =>
  profile.rating > 0 &&
  profile.rating <= 5 &&
  profile.totalReviews > 0 &&
  !profile.url.startsWith("COLE_AQUI_");

function Stars({ rating, label }) {
  return (
    <span className="reviews__stars" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          className={
            index < Math.round(rating)
              ? "reviews__star reviews__star--filled"
              : "reviews__star"
          }
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="m10 1.5 2.6 5.3 5.9.9-4.25 4.15 1 5.85L10 14.95l-5.25 2.75 1-5.85L1.5 7.7l5.9-.9L10 1.5Z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleMark() {
  return <span className="reviews__google-mark">Google</span>;
}

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

          <div
            className="reviews__summary-group"
            aria-label="Escolha qual restaurante avaliar"
          >
            {googleProfiles.map((profile) => (
              <a
                className="reviews__summary"
                href={profile.url}
                key={profile.restaurant}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  isConfigured(profile)
                    ? `Ver ${profile.totalReviews} avaliações do restaurante ${profile.restaurant} no Google. Nota ${profile.rating} de 5.`
                    : `Ver avaliações do restaurante ${profile.restaurant} no Google`
                }
              >
                <GoogleMark />
                {isConfigured(profile) ? (
                  <>
                    <span className="reviews__summary-stars">
                      <Stars
                        rating={profile.rating}
                        label={`Nota ${profile.rating} de 5`}
                      />
                    </span>
                    <span className="reviews__summary-content">
                      <span className="reviews__score">
                        {String(profile.rating).replace(".", ",")}
                        <span className="reviews__score-max">/5</span>
                      </span>
                      <span className="reviews__summary-detail">
                        <strong>Restaurante {profile.restaurant}</strong>
                        <span>
                          Baseado em {profile.totalReviews} avaliações
                        </span>
                      </span>
                    </span>
                  </>
                ) : (
                  <span className="reviews__summary-prompt">
                    Avaliar restaurante {profile.restaurant}
                  </span>
                )}
              </a>
            ))}
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
