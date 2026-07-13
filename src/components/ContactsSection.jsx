import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function ContactsSection() {
  return (
    <>
      <div className="contacts-div">
        <p className="contact-info">
          <EmailIcon /> ocadocra.illustrazioni@gmail.com
        </p>
        <p className="contact-info">
          <LocalPhoneIcon /> +39 334 813 9839
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
