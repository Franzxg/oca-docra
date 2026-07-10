import { Outlet, Scripts, ScrollRestoration, Meta, Links } from "react-router";
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
        <title>oca-docra</title>
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
  return (
    <>
      <Navbar />
      <div className="page-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
