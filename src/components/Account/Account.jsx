import propTypes from "prop-types";

export default function Account({ title, amount, amountDescription }) {
  return (
    <div className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${amount}</p>
        <p className="account-amount-description">{amountDescription}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </div>
  );
}

Account.prototype = {
  title: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  amountDescription: propTypes.string.isRequired,
};
