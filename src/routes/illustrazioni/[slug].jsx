import { useParams } from "react-router";
import { illustrazioni } from "../../data/illustrazioniData.js";

export default function IllustrazioneDettaglio() {
  const { slug } = useParams();
  const progetto = illustrazioni.find((item) => item.slug === slug);

  if (!progetto) {
    return <p>Progetto non trovato.</p>;
  }

  return (
    <div className="illustrazione-dettaglio">
      <h2>{progetto.title}</h2>
      <img
        src={progetto.image}
        alt={progetto.title}
        style={{ maxWidth: "100%" }}
      />
      <p>{progetto.fullDescription}</p>
    </div>
  );
}
