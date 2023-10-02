import React from "react";
import styles from "./AboutSectionComponent.module.css";
import Container from "../ContainerComponent/ContainerComponent";

function AboutSection() {
  return (
    <div id="aboutSection">
      <Container>
        <div className={styles.section_header}>
          <h1>
            The Insurance Lady has over 20 years of experience in the Insurance
            industry.
          </h1>
        </div>
        <div className={styles.card}>
          <div className={styles.card_top}>
            <div className={styles.card_image_container}>
              <img src="./card.jpeg" alt="image of self" />
            </div>
            <div className={styles.card_name_container}>
              <p className={styles.card_name}>Caroline Opurum</p>
              <p className={styles.card_name_tagline}>
                -<i>The Insurance Lady</i>
              </p>
            </div>
          </div>
          <p className={styles.card_text}>
            Caroline Opurum is a licensed broker advocate for all clients. She
            has 19 years of experience in informing as well as educating clients
            on Financial Insurance products. Shopping for the best prices and
            helping with budgets has always been top priority on her agenda.
            Leaving a financial Legacy for your family is of the utmost
            importance as well as assuring your retirement will be enough to
            sustain you is her number one goal. Regardless of your health
            conditions, Caroline is often successful and finds coverage for the
            uninsurable. Taking great pride in serving well over 8,000 clients
            in the past 18 years, she is eager to help all who need assistance
            and understand the finances section.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default AboutSection;
