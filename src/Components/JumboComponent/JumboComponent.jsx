import React from "react";
import styles from "./JumboComponent.module.css";

function Jumbo() {
  return (
    <div className={styles.jumbo_container}>
      <div className={styles.jumbo_text_container}>
        <h1>Insurance Broker</h1>
        <h1>You Can Trust</h1>
        <p>
          Committed to proving you with the protection that you need at rates
          you can afford
        </p>
        <button className={styles.qoute_btn}>Get a Quote</button>
      </div>
    </div>
  );
}

export default Jumbo;
