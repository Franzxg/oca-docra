import idromele from "../imgs/illustrazioni/Idromele/IMG_0874.JPG";
import idromeleMockup from "../imgs/illustrazioni/Idromele/Mockup-bottiglia.png";
import idromeleMockup2 from "../imgs/illustrazioni/Idromele/Mockup-bottiglia-lato.png";
import etichettaIdromele from "../imgs/illustrazioni/Idromele/Etichetta.jpg";

import erbario from "../imgs/illustrazioni/Erbario/Copertina_erbario.jpg";
import bellaDonna from "../imgs/illustrazioni/Erbario/Belladonna.jpg";
import cacciaDiavoli from "../imgs/illustrazioni/Erbario/Cacciadiavoli.jpg";
import lunaria from "../imgs/illustrazioni/Erbario/Lunaria.jpg";
import spadaDoro from "../imgs/illustrazioni/Erbario/Spadadoro.jpg";

import libro_illustrato from "../imgs/illustrazioni/Libro_illustrato/Copertina1.jpg";
import libro_illustrato2 from "../imgs/illustrazioni/Libro_illustrato/Copertina2.jpg";
import illustrazione_interna1 from "../imgs/illustrazioni/Libro_illustrato/Illus-Interna.jpg";
import illustrazione_interna2 from "../imgs/illustrazioni/Libro_illustrato/Illustrazione-interna.jpg";
import illustrazione_interna3 from "../imgs/illustrazioni/Libro_illustrato/Illustrazione-interna-libro.jpg";
import studi_maschere from "../imgs/illustrazioni/Libro_illustrato/Studi-maschere.jpg";
import studi from "../imgs/illustrazioni/Libro_illustrato/Studi.jpg";

import playing_cards from "../imgs/illustrazioni/Maestro_e_Margherita_Cards/IMG_1088.jpg";
import mockupCarte from "../imgs/illustrazioni/Maestro_e_Margherita_Cards/IMG_0986.jpg";
import carte1 from "../imgs/illustrazioni/Maestro_e_Margherita_Cards/IMG_1083.jpg";

import mago from "../imgs/illustrazioni/Mago_di_Oz/IMG_1095.jpg";
import cittaSmeraldo from "../imgs/illustrazioni/Mago_di_Oz/IMG_1093.jpg";

export const illustrazioni = [
  {
    id: 1,
    slug: "idromele",
    title: "Idromele",
    image: idromele,
    description: "Etichetta per idromele artigianale",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gallery: [
      {
        src: etichettaIdromele,
        alt: "Etichetta idromele",
        caption: "Etichetta per idromele artigianale",
      },
      {
        src: idromeleMockup,
        alt: "Mockup bottigliaidromele",
        caption: "Mockup bottiglia idromele",
      },
      {
        src: idromeleMockup2,
        alt: "Mockup idromele di lato",
        caption: "Mockup bottiglia idromele dilato",
      },
      {
        src: idromele,
        alt: "Presentazione finale del prodotto con etichetta",
        caption: "Presentazione finale del prodotto con etichetta",
      },
    ],
  },
  {
    id: 2,
    slug: "erbario",
    title: "Erbario",
    image: erbario,
    description: "Erbario illustrato, progetto personale",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gallery: [
      {
        src: bellaDonna,
        alt: "Personificazione della pianta Bella Donna",
        caption: "Personificazione della pianta Bella Donna",
      },
      {
        src: cacciaDiavoli,
        alt: "Personificazione della pianta Caccia diavoli",
        caption: "Personificazione della pianta Caccia diavoli",
      },
      {
        src: lunaria,
        alt: "Personificazione della pianta Lunaria",
        caption: "Personificazione della pianta Lunaria",
      },
      {
        src: spadaDoro,
        alt: "Personificazione della pianta Spada d'oro",
        caption: "Personificazione della pianta Spada d'oro",
      },
    ],
  },
  {
    id: 3,
    slug: "libro-illustrato",
    title: "Il signore delle maschere",
    image: libro_illustrato,
    description: "Libro illustrato",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gallery: [
      {
        src: libro_illustrato,
        alt: "Copertina del libro illustrato",
        caption: "Copertina del libro illustrato",
      },
      {
        src: libro_illustrato2,
        alt: "Copertina del libro illustrato con costa",
        caption: "Copertina del libro illustrato con costa",
      },
      {
        src: illustrazione_interna1,
        alt: "Illustrazione interna del libro",
        caption: "Illustrazione interna del libro",
      },
      {
        src: illustrazione_interna2,
        alt: "Illustrazione interna del libro",
        caption: "Illustrazione interna del libro",
      },
      {
        src: illustrazione_interna3,
        alt: "Illustrazione interna del libro",
        caption: "Illustrazione interna del libro",
      },
      {
        src: studi_maschere,
        alt: "Studi per le maschere del libro",
        caption: "Studi per le maschere del libro",
      },
      {
        src: studi,
        alt: "Studi personaggi del libro",
        caption: "Studi personaggi del libro",
      },
    ],
  },
  {
    id: 4,
    slug: "playing-cards",
    title: "Il Maestro e Margherita",
    image: playing_cards,
    description: "Playing Cards ispirate al romanzo 'Il Maestro e Margherita'",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gallery: [
      {
        src: playing_cards,
        alt: "Carte da gioco ispirate al romanzo 'Il Maestro e Margherita'",
        caption: "Carte da gioco ispirate al romanzo 'Il Maestro e Margherita'",
      },
      {
        src: mockupCarte,
        alt: "Mockup carte da gioco",
        caption: "Mockup carte da gioco",
      },
      {
        src: carte1,
        alt: "Dettaglio carte da gioco",
        caption: "Dettaglio carte da gioco",
      },
    ],
  },
  {
    id: 5,
    slug: "mago-di-oz",
    title: "Il Mago di Oz",
    image: mago,
    description: "Illustrazioni per il romanzo 'Il Mago di Oz'",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gallery: [
      {
        src: mago,
        alt: "Illustrazione del romanzo 'Il Mago di Oz'",
        caption: "Illustrazione del romanzo 'Il Mago di Oz'",
      },
      {
        src: cittaSmeraldo,
        alt: "Illustrazione della Città di Smeraldo",
        caption: "Illustrazione della Città di Smeraldo",
      },
    ],
  },
];
