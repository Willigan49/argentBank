import propTypes from "prop-types";

export default function Features({ icon, title, text }) {
  return (
    <div>
      <img src={icon} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

Features.prototype = {
  icon: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};
