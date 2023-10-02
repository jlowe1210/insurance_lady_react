import React, { useState } from "react";
import Container from "../ContainerComponent/ContainerComponent";
import styles from "./NavBarComponent.module.css";

function NarBar() {
  const [showMobileDetails, setShowMobileDetails] = useState(false);

  const scrollTo = (id) => {
    let el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className={styles.navbar_toolbar_container}>
        <Container>
          <p className={styles.navbar_toolbar_container_text}>
            Welcome to Insurance Lady Inc
          </p>
        </Container>
      </div>
      <Container>
        <div className={styles.details_container_mobile}>
          <div className={styles.menu_icon_container}>
            <img
              onClick={() => setShowMobileDetails(!showMobileDetails)}
              src="./hamburger.png"
              alt="hamburger icon"
              width="30"
              height="30"
            />
          </div>
          {showMobileDetails && (
            <div className={styles.mobile_details_container}>
              <div className={styles.mobile_details}>
                <div className={styles.navbar_logo_container}>
                  <img
                    className={styles.navbar_logo_container_logo}
                    src="./logo.png"
                    width="50"
                    height="50"
                  />
                  <p className={styles.mobile_logo_text}>The Insurance Lady</p>
                </div>
                <div className={styles.mobile_detail}>
                  <img
                    className={styles.detail_image}
                    src="./phone-call.png"
                    alt="phone icon"
                  />
                  <div>
                    <p>Need help?</p>
                    <p>+1(404) 246-2528</p>
                  </div>
                </div>
                <div className={styles.mobile_detail}>
                  <img
                    className={styles.detail_image}
                    src="./location.png"
                    alt="location icon"
                  />
                  <div>
                    <p>236 Stockbridge Road Suite 15</p>
                    <p>Jonesboro, GA 30236</p>
                  </div>
                </div>
                <div className={styles.mobile_detail}>
                  <img
                    className={styles.detail_image}
                    src="./clock.png"
                    alt="clock icon"
                  />
                  <div>
                    <p>07:30 am - 05:30 pm</p>
                    <p>Mon-Fri</p>
                  </div>
                </div>
                <button
                  onClick={() => scrollTo("consultationSection")}
                  className={styles.qoute_btn}
                >
                  {" "}
                  Get a Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
      <Container>
        <div className={styles.details_container_desktop}>
          <div className={styles.navbar_logo_container}>
            <img
              className={styles.navbar_logo_container_logo}
              src="logo.png"
              width="50"
              height="50"
            />
            <p className={styles.navbar_logo_container_text}>
              The Insurance Lady
            </p>
          </div>
          <div className={styles.detail}>
            <img
              className={styles.detail_image}
              src="./phone-call.png"
              alt="phone icon"
            />
            <div>
              <p>Need help?</p>
              <p>+1(404) 246-2528</p>
            </div>
          </div>
          <div className={styles.detail}>
            <img className={styles.detail_image} src="location.png" />
            <div>
              <p>236 Stockbridge Road Suite 15</p>
              <p>Jonesboro, GA 30236</p>
            </div>
          </div>
          <div className={styles.detail}>
            <img className={styles.detail_image} src="clock.png" />
            <div>
              <p>07:30 am - 05:30 pm</p>
              <p>Mon-Fri</p>
            </div>
          </div>
          <button
            onClick={() => scrollTo("consultationSection")}
            className={styles.qoute_btn}
          >
            Get a Qoute
          </button>
        </div>
      </Container>
      <div className={styles.navbar_container}>
        <Container>
          <div>
            <ul className={styles.navbar_items_container}>
              <li onClick={() => scrollTo("aboutSection")}>About</li>
              <li onClick={() => scrollTo("ourServiceSection")}>Services</li>
              <li onClick={() => scrollTo("consultationSection")}>Book now</li>
              <li onClick={() => scrollTo("contactSection")}>Contact</li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default NarBar;
