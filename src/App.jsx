import { useState } from "react";
import Button from "./components/Button.jsx";
import Card from "./components/Card.jsx";
import Modal from "./components/Modal.jsx";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("Click a button to test its interaction.");

  return (
    <main className="page">
      <nav className="navbar">
        <a className="brand" href="#top"><span className="brand-icon">C</span> ComponentKit</a>
        <span className="nav-caption">WEEK 3 · REACT UI LIBRARY</span>
      </nav>

      <section className="hero" id="top">
        <span className="eyebrow">REUSABLE COMPONENTS</span>
        <h1>Build better interfaces,<br /><span>one component at a time.</span></h1>
        <p>A small, reusable React component library featuring buttons, cards and modal dialogs.</p>
        <div className="hero-actions">
          <Button onClick={() => setIsModalOpen(true)}>Explore modal ↗</Button>
          <Button variant="outline" onClick={() => setMessage("The interaction button works!")}>Try interaction</Button>
        </div>
        <p className="status" role="status">{message}</p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><span className="eyebrow">01 / BUTTONS</span><h2>One button, many purposes.</h2></div>
          <p>Consistent styles, sizes and disabled states.</p>
        </div>
        <Card title="Button variants" description="Click any active button to test its interaction.">
          <div className="button-row">
            <Button onClick={() => setMessage("Primary button clicked.")}>Primary</Button>
            <Button variant="secondary" onClick={() => setMessage("Secondary button clicked.")}>Secondary</Button>
            <Button variant="outline" onClick={() => setMessage("Outline button clicked.")}>Outline</Button>
            <Button variant="danger" onClick={() => setMessage("Danger button clicked.")}>Danger</Button>
            <Button variant="ghost" onClick={() => setMessage("Ghost button clicked.")}>Ghost</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div className="button-row size-row">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
        </Card>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><span className="eyebrow">02 / CARDS</span><h2>Content in clear containers.</h2></div>
          <p>Cards accept titles, descriptions, custom content and footers.</p>
        </div>
        <div className="card-grid">
          <Card title="Simple card" description="A clean container for a short message or summary.">
            <span className="tag">BASIC</span>
          </Card>
          <Card title="Flexible content" description="Add any React elements inside the card body.">
            <div className="stat"><strong>3</strong><span>Reusable components</span></div>
          </Card>
          <Card title="Card with footer" description="Use the footer slot for supporting actions or metadata."
            footer={<span className="footer-text">Updated just now</span>}>
            <span className="tag purple">CUSTOMIZABLE</span>
          </Card>
        </div>
      </section>

      <section className="modal-demo">
        <div><span className="eyebrow">03 / MODAL</span><h2>Keep important actions in focus.</h2>
          <p>Open the dialog to see the reusable modal component in action.</p></div>
        <Button size="large" onClick={() => setIsModalOpen(true)}>Open modal dialog</Button>
      </section>

      <footer className="footer"><strong>ComponentKit</strong><span>Built with React + CSS · Week 3 Task</span></footer>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Welcome to ComponentKit">
        <p>This is a reusable modal component. Close it with the close icon, the Close button, the Escape key, or by clicking outside the dialog.</p>
        <p>The parent component controls its visibility using React state.</p>
      </Modal>
    </main>
  );
}