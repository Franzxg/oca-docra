import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © 2026 Oca d'ocra Illustrazioni. All rights reserved. Reproduction and
          use in AI datasets is not permitted.
        </p>
        <div className="footer-social">
          <a
            href="https://www.instagram.com/ocadocra/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.behance.net/sofiacasavecchi1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
          <a
            href="https://ocadocra.substack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Substack
          </a>
          <a
            href="https://ko-fi.com/ocadocra"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ko-fi
          </a>
        </div>
      </div>
    </footer>
  );
}
