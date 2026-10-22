import { dadosDoSite } from "../../data/conteudo";
import imagemPrato from "../../assets/arabic-prato.jpg";
import imagemMesa from "../../assets/arabic-mesa.jpg";
import imagemGrill from "../../assets/arabic-grill.jpg";
import "./arabic.css";

function Arabic() {
  const { arabic } = dadosDoSite;
  const imagens = [
    { src: imagemPrato, alt: "Foto de um prato árabe original" },
    { src: imagemMesa, alt: "Foto da mesa principal" },
    { src: imagemGrill, alt: "Foto da grill que cozinha" },
  ];

  return (
    <div className="arabic">
      <section className="first-half">
        {imagens.map((imagem) => (
          <img
            key={imagem.alt}
            src={imagem.src}
            alt={imagem.alt}
            loading="lazy"
            decoding="async"
          />
        ))}
      </section>
      <section className="second-half">
        <span className="uptitle-arabic">{arabic.intro}</span>
        <h1 className="title-arabic">{arabic.titulo}</h1>
        <p className="subtitle-arabic">{arabic.subTitulo}</p>
        <hr className="line" />
        <span className="dishes">{arabic.menu}</span>
      </section>
    </div>
  );
}

export default Arabic;
