import Features from "../../components/Features/Features";

import chatIcon from "../../assets/icon-chat.png";
import moneyIcon from "../../assets/icon-money.png";
import securityIcon from "../../assets/icon-security.png";

export default function Home() {
  const featuresContent = [
    {
      icon: chatIcon,
      title: "You are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      icon: moneyIcon,
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!",
    },
    {
      icon: securityIcon,
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <div>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <ul className="features">
          {featuresContent.map((feature, index) => {
            return (
              <li className="feature-item" key={index}>
                <Features
                  text={feature.text}
                  title={feature.title}
                  icon={feature.icon}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
