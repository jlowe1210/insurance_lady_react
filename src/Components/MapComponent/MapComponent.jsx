import React from "react";
import styles from "./MapComponent.module.css";

function MapComponent() {
  return (
    <div className={styles.map_container}>
      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.0434675881097!2d-84.34853182415216!3d33.52625547335959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4f984f3efffff%3A0x5b62430ef289c990!2s238%20Stockbridge%20Rd%20Ste.%20203%2C%20Jonesboro%2C%20GA%2030236!5e0!3m2!1sen!2sus!4v1693761916532!5m2!1sen!2sus"
        height="600"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapComponent;
