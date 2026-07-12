import ActionAreaCard from "./ActionAreaCard";
import idromele from "../imgs/illustrazioni/Idromele/IMG_0874.JPG";
import erbario from "../imgs/illustrazioni/Erbario/Copertina_erbario.JPG";
import libro_illustrato from "../imgs/illustrazioni/Libro_illustrato/Copertina.jpg";
import playing_cards from "../imgs/illustrazioni/Maestro_e_Margherita_Cards/IMG_1088.jpg";
import mago from "../imgs/illustrazioni/Mago_di_Oz/IMG_1095.jpg";

const illustrazioni = [
  {
    id: 1,
    title: "Idromele",
    image: idromele,
    description: "Etichetta per idromele artigianale",
  },
  {
    id: 2,
    title: "Erbario",
    image: erbario,
    description: "Erbario illustrato, progetto personale",
  },
  {
    id: 3,
    title: "Il signore delle maschere",
    image: libro_illustrato,
    description: "Libro illustrato",
  },
  {
    id: 4,
    title: "Il Maestro e Margherita",
    image: playing_cards,
    description: "Playing Cards ispirate al romanzo 'Il Maestro e Margherita'",
  },
  {
    id: 5,
    title: "Il Mago di Oz",
    image: mago,
    description: "Illustrazioni per il romanzo 'Il Mago di Oz'",
  },
];
export default function IllustrationsSection() {
  return (
    <div className="illustrations-section">
      {illustrazioni.map((illustrazione) => (
        <ActionAreaCard
          key={illustrazione.id}
          title={illustrazione.title}
          image={illustrazione.image}
          description={illustrazione.description}
        />
      ))}
    </div>
  );
}
