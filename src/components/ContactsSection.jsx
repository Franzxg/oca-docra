import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function ContactsSection() {
  return (
    <>
      <div className="contacts-div">
        <p className="contact-info">
          <a href="mailto:demo@example.com" className="contact-link">
            <EmailIcon /> demo@example.com
          </a>
        </p>
        <p className="contact-info">
          <a
            href="https://wa.me/391233456789"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <WhatsAppIcon /> +39 123 345 6789
          </a>
        </p>
        <div className="contact-social">
          <a
            href="https://www.instagram.com/ocadocra/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info"
          >
            <InstagramIcon /> @ocadocra
          </a>
          <a
            href="https://www.behance.net/sofiacasavecchi1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance: Oca D'ocra
          </a>
          <a
            href="https://ocadocra.substack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Substack: Almanacco dell'Oca
          </a>
          <a
            href="https://ko-fi.com/ocadocra"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ko-fi: Oca D'ocra
          </a>
        </div>
        <form>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="cognome">Cognome:</label>
          <input type="text" id="cognome" name="cognome" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="subject">Oggetto:</label>
          <input type="text" id="subject" name="subject" required />
          <label htmlFor="message">Messaggio:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Invia</button>
        </form>
      </div>
    </>
  );
}
