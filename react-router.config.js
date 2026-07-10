export default {
  appDirectory: "src",
  ssr: false, // niente server-side rendering per ora: resta un sito statico
};

// Nota 1: il file react-router.config.js è un file di configurazione per React Router, che definisce le impostazioni e le opzioni per l'applicazione. In questo caso, viene specificata la directory dell'applicazione come "src" e viene disabilitato il server-side rendering (SSR) impostando ssr su false. Questo significa che l'applicazione sarà eseguita interamente sul lato client, senza generare contenuti HTML sul server.

// Nota 2: con ssr: false ho già routing pulito e loader per caricare dati (es. da un file JSON o da un CMS headless),se in futuro vorrò che i contenuti siano generati dinamicamente lato server (utile per SEO e performance quando i contenuti crescono), basta attivare ssr: true in react-router.config.js senza dover riscrivere tutta l'architettura.
