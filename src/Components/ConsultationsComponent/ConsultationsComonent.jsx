import React from "react";
import { useState } from "react";
import styles from "./ConsultationsComponent.module.css";
import { useForm } from "react-hook-form";
import Container from "../ContainerComponent/ContainerComponent";
import axios from "axios";
import moment from "moment";

const services = [
  "Life Insurance",
  "Health Insurance",
  "Dental and vision Insurance",
  "Disability Insurance",
  "Retirement plans",
  "Accident Insurance",
  "Mortgage Protection",
];

function ConsultationComponent() {
  const {
    register,
    handleSubmit,

    setError,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const [booking, setBooking] = useState(false);
  const [ConsultationBooked, setConsultationBooked] = useState(false);
  const [serverError, setServerError] = useState(false);

  const defaultAppointTime = moment().add(1, "hours").format().slice(0, 16);

  const onSubmit = async (data) => {
    setBooking(true);
    const { fullname } = data;

    if (!fullname.trim()) {
      setError("fullname", { type: "required" });
      setBooking(false);
      return;
    }

    if (isValid) {
      console.log(data);
      try {
        const response = await axios.post("/api/consulation/create", data);
        setBooking(true);
        setConsultationBooked(true);
      } catch (error) {
        console.log(error);
        setServerError(true);
        setConsultationBooked(false);
      }
    }
  };

  return (
    <div id="consultationSection" className={styles.page_container}>
      <Container>
        <div className={styles.section_header}>
          <h1>Book consultation now!</h1>
        </div>
        <div className={styles.section_container}>
          <div className={styles.image_container}>
            <img className={styles.image} src="./consultation.webp" />
          </div>
          <div className={styles.form_container}>
            {ConsultationBooked && <p>Consultation Booked! Thank you</p>}
            {serverError && !ConsultationBooked && (
              <p>
                Unable to book Consultation, Call to book or try again later
              </p>
            )}
            {!ConsultationBooked && (
              <form
                className={styles.appointment_form}
                onSubmit={handleSubmit(onSubmit)}
              >
                <label htmlFor="category">Category</label>
                <select id="category" {...register("category")}>
                  <option value="Insurance">Insurance</option>
                </select>
                <label htmlFor="service">Services</label>
                <select id="service" {...register("service")}>
                  {services.map((service) => {
                    return (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    );
                  })}
                </select>
                <label htmlFor="Agent">Agent</label>
                <select id="Agent" {...register("agent")}>
                  <option value="Caroline Opurum">Caronline Opurum</option>
                </select>
                <label htmlFor="appointment_time">Consultation date</label>
                <input
                  id="appointment_time"
                  type="datetime-local"
                  min={defaultAppointTime}
                  defaultValue={defaultAppointTime}
                  {...register("consultation_time")}
                />
                <label htmlFor="fullname">Full Name</label>
                {errors.fullname?.type === "required" && (
                  <div style={{ color: "red" }} role="alert">
                    Name is Required
                  </div>
                )}
                <input
                  id="fullname"
                  type="text"
                  placeholder="John Doe"
                  {...register("fullname", { required: true })}
                />
                <label htmlFor="phone number">Phone number</label>
                {errors.phonenumber?.type === "required" && (
                  <div style={{ color: "red" }}>Phone number is required</div>
                )}
                {errors.phonenumber?.type === "pattern" && (
                  <div style={{ color: "red" }}>
                    Please format number correctly example. 123 456 7891
                  </div>
                )}
                <input
                  id="phone number"
                  type="tel"
                  placeholder="914 171 1222"
                  maxLength="12"
                  {...register("phonenumber", {
                    required: true,
                    pattern: /^[0-9]{3} [0-9]{3} [0-9]{4}$/,
                  })}
                />
                <button
                  disabled={!isValid || booking}
                  className={styles.submit_btn}
                >
                  {booking ? "Booking" : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ConsultationComponent;
