import "./Card.css";

export default function Card({
  title,
  description,
  image,
  imageAlt = "",
  footer,
  children,
  className = "",
}) {
  return (
    <article className={`ui-card ${className}`}>
      {image && <img className="ui-card__image" src={image} alt={imageAlt} />}
      <div className="ui-card__body">
        {title && <h3 className="ui-card__title">{title}</h3>}
        {description && <p className="ui-card__description">{description}</p>}
        {children}
      </div>
      {footer && <div className="ui-card__footer">{footer}</div>}
    </article>
  );
}