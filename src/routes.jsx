import { route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("illustrazioni", "routes/illustrazioni.jsx"),
  route("contatti", "routes/contatti.jsx"),
  route("biografia", "routes/biografia.jsx"),
  route("racconti", "routes/racconti.jsx"),
];
