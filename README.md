# ComponentKit — Week 3 React Component Library

A reusable React UI component library containing Button, Card and Modal components.

## Requirements

- Node.js 18 or later
- npm

## Run the project

Open a terminal in the folder containing `package.json`, then run:

```bash
npm install
npm run dev
```

Open the localhost address printed by Vite (normally http://127.0.0.1:5173).

## Build for production

```bash
npm run build
```

## Components

### Button

```jsx
<Button variant="primary" size="medium" onClick={() => alert("Clicked")}>
  Save
</Button>
```

Variants: `primary`, `secondary`, `outline`, `danger`, `ghost`.
Sizes: `small`, `medium`, `large`.
Also supports `disabled`, `type`, and `onClick`.

### Card

```jsx
<Card title="Profile" description="A reusable card">
  <p>Any React content can be passed as children.</p>
</Card>
```

Supports `title`, `description`, `image`, `imageAlt`, `footer`, `children`, and `className`.

### Modal

```jsx
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open</Button>
<Modal isOpen={open} onClose={() => setOpen(false)} title="Example">
  <p>Modal content</p>
</Modal>
```

Supports `isOpen`, `onClose`, `title`, `children`, and `closeOnOverlay`.
The dialog can be closed using Escape, the close icon, the Close button or the overlay.

## Project structure

- `src/components/` — reusable component source and styles
- `src/App.jsx` — demonstration page
- `src/main.jsx` — React entry point
- `src/styles.css` — page styling
- `index.html` — Vite HTML entry point
