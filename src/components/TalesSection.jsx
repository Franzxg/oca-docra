import ActionAreaCard from "./ActionAreaCard";
import { racconti } from "../data/raccontiData.js";

export default function TalesSection() {
  return (
    <div className="racconti-section">
      {racconti.map((racconto) => (
        <ActionAreaCard
          key={racconto.id}
          title={racconto.title}
          image={racconto.image}
          description={racconto.description}
          slug={racconto.slug}
          basePath="/racconti"
        />
      ))}
    </div>
  );
}
