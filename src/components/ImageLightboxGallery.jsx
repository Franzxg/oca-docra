import { useState, useEffect, useRef } from "react";

const FADE_DURATION = 250;

export default function ImageLightboxGallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeoutRef = useRef(null);

  function openImage(index) {
    // Se stavamo già chiudendo un'immagine precedente, annulla quel timeout
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsClosing(false);
    setSelectedIndex(index);
  }

  function closeImage() {
    setIsClosing(true);
    closeTimeoutRef.current = setTimeout(() => {
      setSelectedIndex(null);
      setIsClosing(false);
    }, FADE_DURATION);
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && selectedIndex !== null) closeImage();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const selected = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <>
      <div className="image-stack">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.caption || `Immagine ${index + 1}`}
            className="stack-image"
            onClick={() => openImage(index)}
          />
        ))}
      </div>

      {selected && (
        <div
          className={`lightbox-overlay ${isClosing ? "lightbox-closing" : "lightbox-open"}`}
          onClick={closeImage}
        >
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              closeImage();
            }}
            aria-label="Chiudi"
          >
            ×
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={selected.caption || ""}
              className="lightbox-image"
            />
            {selected.caption && (
              <p className="lightbox-caption">{selected.caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
