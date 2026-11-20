import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      className={`ui-button ui-button--${variant} ui-button--${size} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}