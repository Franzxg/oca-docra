import { useState, useEffect } from "react";

export default function ImageLightboxGallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setSelectedIndex(null);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {selected && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
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
