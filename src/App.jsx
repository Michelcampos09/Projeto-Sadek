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
    // Se IntersectionObserver não for suportado no ambiente, revela todas as seções
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("main > section").forEach((secao) => {
        secao.classList.add("apareceu");
      });
      return;
    }

    const secoes = document.querySelectorAll("main > section:not(#inicio)");

    // Revela imediatamente a seção de destino caso a página seja aberta com âncora (#donos, etc.)
    if (window.location.hash) {
      const secaoAlvo = document.querySelector(window.location.hash);
      if (secaoAlvo) {
        secaoAlvo.classList.add("apareceu");
      }
    }

    // M5: threshold 0 + rootMargin para revelar a seção assim que o topo entrar na tela
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("apareceu");
            observer.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );

    secoes.forEach((secao) => observer.observe(secao));

    const lidarHashChange = () => {
      if (window.location.hash) {
        const secaoAlvo = document.querySelector(window.location.hash);
        if (secaoAlvo) secaoAlvo.classList.add("apareceu");
      }
    };
    window.addEventListener("hashchange", lidarHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", lidarHashChange);
    };
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
