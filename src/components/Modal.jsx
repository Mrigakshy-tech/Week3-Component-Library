import { useEffect } from "react";
import Button from "./Button.jsx";
import "./Modal.css";

export default function Modal({
  isOpen,
  onClose,
  title = "Dialog",
  children,
  closeOnOverlay = true,
}) {
  useEffect(() => {
    if (!isOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose?.();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="ui-modal-overlay"
      onMouseDown={(event) => {
        if (closeOnOverlay && event.target === event.currentTarget) onClose?.();
      }}
    >
      <section className="ui-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <header className="ui-modal-header">
          <h2 id="modal-title">{title}</h2>
          <button className="ui-modal-x" type="button" onClick={onClose} aria-label="Close dialog">×</button>
        </header>
        <div className="ui-modal-content">{children}</div>
        <footer className="ui-modal-footer">
          <Button variant="outline" onClick={onClose}>Close</Button>
        </footer>
      </section>
    </div>
  );
}