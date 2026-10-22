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
        <div>
          <h1 className="title-arabic">{arabic.titulo}</h1>
          <p className="subtitle-arabic">{arabic.subTitulo}</p>
        </div>
        <hr className="line-arabic" />
        <div>
          <span className="dishes-title">Pratos Principais:</span>
          <span className="dishes">{arabic.menu}</span>
        </div>
        <hr className="line-arabic" />
        <div>
          <span className="title-info">Informações:</span>
          <span className="info">{arabic.info}</span>
        </div>
        <div className="buttons-arabic">
          <button></button>
          <button></button>
        </div>
      </section>
    </div>
  );
}

export default Arabic;
