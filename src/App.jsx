import Header from "./components/Header";
import Hero from "./components/Hero";
import Owners from "./components/Owners";
function App() {
  return (
    <>
      <main>
        <section id="inicio">
          {" "}
          <Header />
          <Hero />
        </section>
        <section id="donos">
          <Owners />
        </section>
        <section id="historia"></section>
        <section id="restaurantes"></section>
        <section id="avaliacao"></section>
        <section id="contato"></section>
      </main>
    </>
  );
}
export default App;
