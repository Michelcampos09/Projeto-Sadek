import { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Owners from "./components/Owners/Owners";
import History from "./components/History/History";
import Arabic from "./components/Arabic/Arabic";
import Italian from "./components/Italian/Italian";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
function App() {
  useEffect(() => {
    const secoes = document.querySelectorAll("main > section:not(#inicio)");

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("apareceu");
            observer.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    secoes.forEach((secao) => observer.observe(secao));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Header />
      <main>
        <section id="inicio" aria-labelledby="hero-title">
          <Hero />
        </section>
        <section id="donos" aria-labelledby="donos-title">
          <Owners />
        </section>
        <section id="historia" aria-labelledby="historia-title">
          <History />
        </section>
        <section id="restaurantes" aria-label="Restaurantes da família">
          <Arabic />
          <Italian />
        </section>
        <section id="avaliacao" aria-labelledby="reviews-title">
          <Reviews />
        </section>
        <section id="contact" aria-label="Contato">
          <Contact />
        </section>
      </main>
    </>
  );
}
export default App;
