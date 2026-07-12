import copertina_bambino_cieli from "../imgs/racconti/Il_bambino_dei_cieli/IMG_0120.JPG";
import il_bambino_dei_cieli from "../imgs/racconti/Il_bambino_dei_cieli/Il_bambino_dei_cieli.pdf";

import copertina_grande_risveglio from "../imgs/racconti/Il_Grande_risveglio/IMG_1110.JPG";
import il_grande_risveglio from "../imgs/racconti/Il_Grande_risveglio/Il_grande_risveglio.pdf";

import copertina_acqua from "../imgs/racconti/Siamo_acqua_che_scorre/IMG_1111.JPG";
import siamo_acqua_che_scorre from "../imgs/racconti/Siamo_acqua_che_scorre/Siamo_acqua_che_scorre.pdf";

export const racconti = [
  {
    id: 1,
    slug: "Il bambino dei cieli",
    title: "Il bambino dei cieli",
    image: copertina_bambino_cieli,
    description: "Breve descrizione del racconto.",
    pdf: il_bambino_dei_cieli,
  },
  {
    id: 2,
    slug: "Il Grande risveglio",
    title: "Il Grande risveglio",
    image: copertina_grande_risveglio,
    description: "Breve descrizione del racconto.",
    pdf: il_grande_risveglio,
  },
  {
    id: 3,
    slug: "Siamo acqua che scorre",
    title: "Siamo acqua che scorre",
    image: copertina_acqua,
    description: "Breve descrizione del racconto.",
    pdf: siamo_acqua_che_scorre,
  },
];
