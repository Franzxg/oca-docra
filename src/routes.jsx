import { route, index } from "@react-router/dev/routes";

export default [
  route("home", "routes/home.jsx"),
  route("illustrazioni", "routes/illustrazioni.jsx"),
  route("illustrazioni/:slug", "routes/illustrazioni/[slug].jsx"),
  route("contatti", "routes/contatti.jsx"),
  route("biografia", "routes/biografia.jsx"),
  route("racconti", "routes/racconti.jsx"),
];
