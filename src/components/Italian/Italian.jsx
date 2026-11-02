import { dadosDoSite } from "../../data/conteudo";
import { Restaurante } from "../Arabic/Arabic";
import pizzaDeSalmao from "../../assets/pizza-salmao-artesanal.png";
import pizzaDePistache from "../../assets/pizza-pistache-artesanal.png";
import pizzaDeKitKat from "../../assets/pizza-kitkat-artesanal.png";
import pizzaDeCamarao from "../../assets/pizza-camarao-artesanal.png";
import pizzaDeCalabresa from "../../assets/pizza-calabresa-artesanal.png";
import "./italian.css";

const imagensItaliano = [
  { src: pizzaDeSalmao, alt: "Pizza artesanal de salmão" },
  { src: pizzaDePistache, alt: "Pizza artesanal de pistache" },
  { src: pizzaDeKitKat, alt: "Pizza artesanal de KitKat" },
  { src: pizzaDeCamarao, alt: "Pizza artesanal de camarão" },
  { src: pizzaDeCalabresa, alt: "Pizza artesanal de calabresa" },
];

function Italian() {
  return (
    <Restaurante
      variante="italian"
      dados={dadosDoSite.italian}
      imagens={imagensItaliano}
      ariaGaleria="Galeria de fotos do restaurante italiano"
    />
  );
}

export default Italian;
