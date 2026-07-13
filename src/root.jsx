import {
  Outlet,
  Scripts,
  ScrollRestoration,
  Meta,
  Links,
  useLocation,
} from "react-router";
import "@fontsource/pt-serif/400.css"; // regular
import "@fontsource/pt-serif/700.css"; // bold
import "@fontsource/pt-serif/400-italic.css"; // corsivo
import "@fontsource/pt-serif/700-italic.css"; // grassetto corsivo
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import "./App.css";

export function Layout({ children }) {
  return (
    <html lang="it">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="../public/favicon.ico" sizes="any" />
        <title>Oca d'Ocra</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {!isHome && <Navbar />}
        <div className={isHome ? "" : "page-content"}>
          <Outlet />
        </div>
        {!isHome && <Footer />}
      </ThemeProvider>
    </>
  );
}
