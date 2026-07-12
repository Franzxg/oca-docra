import ActionAreaCard from "./ActionAreaCard";
import idromele from "../imgs/illustrazioni/Idromele/IMG_0874.JPG";

const illustrazioni = [
  {
    id: 1,
    title: "Idromele",
    image: idromele,
    description: "Etichetta per idromele artigianale",
  },
  { id: 2, title: "", image: "", description: "" },
  { id: 3, title: "", image: "", description: "" },
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
