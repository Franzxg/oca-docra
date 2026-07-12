import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { racconti } from "../../data/raccontiData.js";

export default function RaccontoDettaglio() {
  const { slug } = useParams();
  const racconto = racconti.find((item) => item.slug === slug);

  if (!racconto) {
    return <p>Racconto non trovato.</p>;
  }

  return (
    <div className="racconto-dettaglio">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {racconto.content}
      </ReactMarkdown>
    </div>
  );
}
