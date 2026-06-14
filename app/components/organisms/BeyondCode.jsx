import FeatureCard from "./FeatureCard";
import ContactLinks from "./ContactLinks";

import { IoFlash } from "react-icons/io5";
import { GiNoodles } from "react-icons/gi";
import styles from "./beyondCode.module.css";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function BeyondCode() {
  const cards = [
    {
      icon: <FaMapMarkedAlt />,
      title: "City Hopper",
      description:
        "Exploring new cities, soaking in different cultures. There's something about experiencing new places that fuels creativity.",
    },
    {
      icon: <GiNoodles />,
      title: "Street Food Devotee",
      description:
        "On a mission to taste my way through India's street food scene. Currently winning.",
    },
    {
      icon: <IoFlash />,
      title: "Fast Mover",
      description:
        "Momentum is everything. I ship fast, learn fast, iterate fast. Slow is a feature I haven't shipped yet.",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapperContent}>
      <div className={styles.heading}>
        <span />
        <p>BEYOND THE CODE</p>
        <span />
      </div>

      <div className={styles.cards}>
        {cards.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.content}>
          <h2>
            Like what you see?
            <span> Let's build something awesome.</span>
          </h2>

          <p>
            Always open to interesting conversations, collaborations, and new
            challenges.
          </p>
        </div>

        <ContactLinks />
      </div>
      </div>
    </section>
  );
}
