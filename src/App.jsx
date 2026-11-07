import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Owners from "./components/Owners/Owners";
import History from "./components/History/History";
import Arabic from "./components/Arabic/Arabic";
import Italian from "./components/Italian/Italian";
import Reviews from "./components/Reviews/Reviews";
import Visit from "./components/Visit/Visit";
import Faq from "./components/Faq/Faq";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";

function Home() {
  useEffect(() => {
    const fotos = document.querySelectorAll(".revelar-foto");

    // Se IntersectionObserver não for suportado no ambiente, revela todas as fotos
    if (!("IntersectionObserver" in window)) {
      fotos.forEach((foto) => {
        foto.classList.add("revelada");
      });
      return;
    }

    // Revela cada foto assim que entra na tela (threshold: 0 garante detecção imediata)
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("revelada");
            observer.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    fotos.forEach((foto) => observer.observe(foto));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
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
      <section id="visite" aria-labelledby="visite-title">
        <Visit />
      </section>
      <section id="faq" aria-labelledby="faq-title">
        <Faq />
      </section>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <main id="conteudo-principal">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Contact />
    </>
  );
}

export default App;
