import { useParams } from "react-router";
import ImageLightboxGallery from "../../components/ImageLightboxGallery.jsx";
import { illustrazioni } from "../../data/illustrazioniData.js";

export default function IllustrazioneDettaglio() {
  const { slug } = useParams();
  const progetto = illustrazioni.find((item) => item.slug === slug);

  if (!progetto) {
    return <p>Progetto non trovato.</p>;
  }

  return (
    <div className="illustrazione-dettaglio">
      <h1>{progetto.title}</h1>
      <ImageLightboxGallery images={progetto.gallery} />
      <p>{progetto.fullDescription}</p>
    </div>
  );
}
