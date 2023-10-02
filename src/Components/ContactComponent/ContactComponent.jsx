import React from "react";
import styles from "./ContactComponent.module.css";
import Container from "../ContainerComponent/ContainerComponent";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

function ContactComponent() {
  const [sendingMessage, setSendingMessage] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [serverError, setServerError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = async (data) => {
    if (isValid) {
      setSendingMessage(true);
      try {
        await axios.post("/api/message/create", data);
        setSendingMessage(false);
        setMessageSent(true);
        reset();
      } catch (error) {
        setSendingMessage(false);
        setServerError(true);
        reset();
      }
    }
  };

  return (
    <div id="contactSection">
      <Container>
        <div className={styles.section_header}>
          <h1>Contact us</h1>
        </div>

        <div className={styles.section_container}>
          <div className={styles.contact_info_container}>
            <div className={styles.contact_info}>
              <img src="./phone-call.png" alt="phone icon" />
              <div>
                <h3>Business Number</h3>
                <p>+(404) 246-2528</p>
              </div>
            </div>
            <div className={styles.contact_info}>
              <img src="./fax-machine.png" alt="fax icon" />
              <div>
                <h3>Fax Number</h3>
                <p>+1(866) 594-1881</p>
              </div>
            </div>
            <div className={styles.contact_info}>
              <img src="./email.png" alt="email icon" />
              <div>
                <h3>Business Email</h3>
                <p>theinsuranceladyinc@gmail.com</p>
              </div>
            </div>
            <div className={styles.contact_info}>
              <img src="./location.png" alt="location icon" />
              <div>
                <h3>Business Address</h3>
                <p>
                  The Insurance Lady Of Atlanta #1 Insurance Sales & Education
                  238 Stockbridge Road,Suite203. Jonesboro,GA 30236.
                </p>
              </div>
            </div>
            <div className={styles.contact_info}>
              <img src="./clock.png" alt="clock icon" />
              <div>
                <h3>Business Hours</h3>
                <p>10:00 AM – 08:00 PM Monday – Friday</p>
              </div>
            </div>
          </div>
          <form
            className={styles.contact_form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.name_and_email_container}>
              <input
                type="text"
                name="fullname"
                placeholder="Name"
                {...register("fullname", { required: true })}
              />
              <input
                name="email"
                type="email"
                placeholder="email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
            </div>
            <textarea
              name="message"
              placeholder="Message..."
              {...register("message", { required: true })}
            ></textarea>
            {!messageSent && (
              <button
                className={styles.submit_btn}
                disabled={!isValid || sendingMessage}
              >
                {sendingMessage ? "Sending message" : "Send"}
              </button>
            )}
            {messageSent && (
              <p className={styles.response}>Message Sent!, Thank you</p>
            )}
            {serverError && !messageSent && (
              <p className={styles.response}>
                Unable to send message, Call or please try again later
              </p>
            )}
          </form>
        </div>
      </Container>
    </div>
  );
}

export default ContactComponent;
