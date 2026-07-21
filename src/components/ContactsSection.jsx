import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Form from "./Form.jsx";

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
        <h3>Scrivimi!</h3>
        <p>
          Se vuoi contattarmi per parlare di una tua idea, per una proposta di
          collaborazione o per qualsiasi altra cosa, compila il form qua sotto!
        </p>
        <Form></Form>
      </div>
    </>
  );
}
