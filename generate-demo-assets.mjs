/**
 * generate-demo-assets.mjs
 *
 * Scarica immagini placeholder gratuite (Lorem Picsum, foto reali sorgenti
 * da Unsplash, licenza libera per qualsiasi uso, nessuna attribuzione
 * richiesta: https://picsum.photos/) e genera racconti di esempio,
 * ricreando ESATTAMENTE la struttura di cartelle e i nomi file che il
 * codice del progetto si aspetta in src/imgs/.
 *
 * USO:
 *   node generate-demo-assets.mjs
 *
 * Richiede Node.js 18+ (usa il "fetch" integrato, nessuna dipendenza da installare).
 * Esegui questo script dalla ROOT del progetto (dove sta la cartella src/).
 */

import { writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const BASE = "src/imgs";

// Ogni voce: percorso di destinazione (relativo a src/imgs) + seed univoco
// (garantisce che la stessa immagine venga sempre riscaricata identica,
// utile se rilanci lo script) + dimensioni.
const images = [
  // Nota: logo-home.png NON è incluso qui di proposito — è il logo originale
  // del sito (non un asset "personale" della cliente da nascondere) e resta
  // versionato nel repository così com'è, senza bisogno di un placeholder.

  // --- Illustrazioni: Idromele ---
  { path: "illustrazioni/Idromele/IMG_0874.JPG", seed: "idromele-cover", w: 900, h: 1200 },
  { path: "illustrazioni/Idromele/Mockup-bottiglia.png", seed: "idromele-mockup1", w: 900, h: 1200 },
  { path: "illustrazioni/Idromele/Mockup-bottiglia-lato.png", seed: "idromele-mockup2", w: 900, h: 1200 },
  { path: "illustrazioni/Idromele/Etichetta.jpg", seed: "idromele-etichetta", w: 900, h: 1200 },

  // --- Illustrazioni: Erbario ---
  { path: "illustrazioni/Erbario/Copertina_erbario.jpg", seed: "erbario-cover", w: 900, h: 1200 },
  { path: "illustrazioni/Erbario/Belladonna.jpg", seed: "erbario-belladonna", w: 900, h: 1200 },
  { path: "illustrazioni/Erbario/Cacciadiavoli.jpg", seed: "erbario-cacciadiavoli", w: 900, h: 1200 },
  { path: "illustrazioni/Erbario/Lunaria.jpg", seed: "erbario-lunaria", w: 900, h: 1200 },
  { path: "illustrazioni/Erbario/Spadadoro.jpg", seed: "erbario-spadadoro", w: 900, h: 1200 },

  // --- Illustrazioni: Libro illustrato ---
  { path: "illustrazioni/Libro_illustrato/Copertina1.jpg", seed: "libro-cover1", w: 900, h: 1200 },
  { path: "illustrazioni/Libro_illustrato/Copertina2.jpg", seed: "libro-cover2", w: 900, h: 1200 },
  { path: "illustrazioni/Libro_illustrato/Illus-Interna.jpg", seed: "libro-interna1", w: 900, h: 1200 },
  { path: "illustrazioni/Libro_illustrato/Illustrazione-interna.jpg", seed: "libro-interna2", w: 900, h: 1200 },
  { path: "illustrazioni/Libro_illustrato/Illustrazione-interna-libro.jpg", seed: "libro-interna3", w: 900, h: 1200 },
  { path: "illustrazioni/Libro_illustrato/Studi-maschere.jpg", seed: "libro-studi-maschere", w: 900, h: 1200 },
  { path: "illustrazioni/Libro_illustrato/Studi.jpg", seed: "libro-studi", w: 900, h: 1200 },

  // --- Illustrazioni: Il Maestro e Margherita (playing cards) ---
  { path: "illustrazioni/Maestro_e_Margherita_Cards/IMG_1088.jpg", seed: "carte-cover", w: 900, h: 1200 },
  { path: "illustrazioni/Maestro_e_Margherita_Cards/IMG_0986.jpg", seed: "carte-mockup", w: 900, h: 1200 },
  { path: "illustrazioni/Maestro_e_Margherita_Cards/IMG_1083.jpg", seed: "carte-dettaglio", w: 900, h: 1200 },

  // --- Illustrazioni: Il Mago di Oz ---
  { path: "illustrazioni/Mago_di_Oz/IMG_1095.jpg", seed: "oz-cover", w: 900, h: 1200 },
  { path: "illustrazioni/Mago_di_Oz/IMG_1093.jpg", seed: "oz-citta-smeraldo", w: 900, h: 1200 },

  // --- Racconti: copertine ---
  { path: "racconti/Il_bambino_dei_cieli/IMG_0120.JPG", seed: "racconto-bambino-cieli", w: 900, h: 1200 },
  { path: "racconti/Il_Grande_risveglio/IMG_1110.JPG", seed: "racconto-grande-risveglio", w: 900, h: 1200 },
  { path: "racconti/Siamo_acqua_che_scorre/IMG_1111.JPG", seed: "racconto-acqua-che-scorre", w: 900, h: 1200 },
];

// Racconti placeholder: stesso nome file .md che il codice importa con "?raw",
// riempiti con testo segnaposto generico (nessun contenuto reale della cliente).
const markdownFiles = [
  {
    path: "racconti/Il_bambino_dei_cieli/Il_bambino_dei_cieli.md",
    title: "Il bambino dei cieli",
  },
  {
    path: "racconti/Il_Grande_risveglio/Il_grande_risveglio.md",
    title: "Il Grande risveglio",
  },
  {
    path: "racconti/Siamo_acqua_che_scorre/Siamo_acqua_che_scorre.md",
    title: "Siamo acqua che scorre",
  },
];

const placeholderStory = (title) => `# ${title}

*Questo è un racconto segnaposto generato automaticamente per la demo pubblica del progetto.*
*Il testo originale della cliente non è incluso in questo repository.*

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

async function ensureDir(filePath) {
  await mkdir(dirname(filePath), { recursive: true });
}

// Una manciata di colori coerenti con la palette del sito (crema/oro/rosso
// scuro), usati a rotazione per i placeholder .png generati con placehold.co.
const PALETTE = ["f2e8cf", "c0a400", "6e1707", "e5d9ad", "9c8000"];

function pickColor(seed) {
  const index = [...seed].reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % PALETTE.length;
  return PALETTE[index];
}

async function downloadImage({ path, seed, w, h }) {
  const destination = `${BASE}/${path}`;
  const isPng = destination.toLowerCase().endsWith(".png");

  // Lorem Picsum restituisce sempre JPEG: va bene per i file .jpg/.JPG,
  // ma NON per i file .png (altrimenti l'estensione mentirebbe sul formato
  // reale, esattamente l'errore trovato). Per i .png usiamo placehold.co,
  // che genera veri PNG (un semplice rettangolo a tinta unita).
  const url = isPng
    ? `https://placehold.co/${w}x${h}/${pickColor(seed)}/ffffff.png`
    : `https://picsum.photos/seed/${seed}/${w}/${h}`;

  await ensureDir(destination);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Download fallito per ${url}: ${response.status}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(destination, buffer);
  console.log(`✓ ${destination}${isPng ? " (placeholder a tinta unita, PNG reale)" : ""}`);
}

async function writeMarkdown({ path, title }) {
  const destination = `${BASE}/${path}`;
  await ensureDir(destination);
  await writeFile(destination, placeholderStory(title), "utf-8");
  console.log(`✓ ${destination}`);
}

async function main() {
  console.log("Scaricamento immagini placeholder (Lorem Picsum)...\n");
  for (const img of images) {
    await downloadImage(img);
  }

  console.log("\nCreazione racconti placeholder...\n");
  for (const md of markdownFiles) {
    await writeMarkdown(md);
  }

  console.log("\nFatto! Tutti gli asset placeholder sono stati generati in src/imgs/.");
}

main().catch((err) => {
  console.error("Errore durante la generazione degli asset:", err);
  process.exit(1);
});
