import ActionAreaCard from "./ActionAreaCard";
import { illustrazioni } from "../data/illustrazioniData.js";

export default function IllustrationsSection() {
  return (
    <div className="illustrations-section">
      {illustrazioni.map((illustrazione) => (
        <ActionAreaCard
          key={illustrazione.id}
          title={illustrazione.title}
          image={illustrazione.image}
          description={illustrazione.description}
          slug={illustrazione.slug}
          basePath="/illustrazioni"
        />
      ))}
    </div>
  );
}
