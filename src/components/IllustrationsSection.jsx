import ActionAreaCard from "./ActionAreaCard";

const illustrazioni = [
  { id: 1, title: "", image: "", description: "" },
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
