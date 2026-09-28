import Header from "./components/Header";
function App() {
  return (
    <>
      <main>
        <section id="inicio">
          {" "}
          <Header />
        </section>
        <section id="donos"></section>
        <section id="historia"></section>
        <section id="restaurantes"></section>
        <section id="avaliacao"></section>
        <section id="contato"></section>
      </main>
    </>
  );
}
export default App;
