import { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Owners from "./components/Owners/Owners";
import History from "./components/History/History";
import Arabic from "./components/Arabic/Arabic";
import Italian from "./components/Italian/Italian";
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
    <main>
      <Header />
      <section id="inicio">
        <Hero />
      </section>
      <section id="donos">
        <Owners />
      </section>
      <section id="historia">
        <History />
      </section>
      <section id="restaurantes">
        <Arabic />
        <Italian />
      </section>
      <section id="avaliacao"></section>
      <section id="contato"></section>
    </main>
  );
}
export default App;
