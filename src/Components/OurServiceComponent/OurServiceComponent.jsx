import React from "react";
import Container from "../ContainerComponent/ContainerComponent";
import styles from "./OurServiceComponent.module.css";

function OurService() {
  return (
    <div id="ourServiceSection">
      <Container>
        <div className={styles.section_header}>
          <h1>Our Services</h1>
        </div>
        <div className={styles.services_container}>
          <div className={styles.service_card_container}>
            <div className={styles.service_card}>
              <div className={styles.service_image_container}>
                <img src="./life_insurance.webp" alt="life_insurance image" />
              </div>

              <div className={styles.service_title}>
                <h3>Life Insurance</h3>
              </div>
              <div className={styles.service_text}>
                <p>
                  Protecting your loved ones is important, and that’s why we
                  offer a range of life insurance options to meet your needs.
                  Our policies provide financial security for your family in the
                  event of an unexpected death, ensuring they’re taken care of
                  when you’re no longer able to. Our team of experts helping you
                  find the right coverage for your needs and budget.
                </p>
              </div>
              <div>
                <a
                  className={styles.link_btn}
                  href="./life-insurance.pdf"
                  target="_blank"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className={styles.service_card_container}>
            <div className={styles.service_card}>
              <div className={styles.service_image_container}>
                <img src="./accident.webp" alt="Accident insurance image" />
              </div>

              <div className={styles.service_title}>
                <h3>Accident Insurance</h3>
              </div>
              <div className={styles.service_text}>
                <p>
                  Accident insurance can provide financial protection in the
                  event of an accident that results in serious injury or death.
                  It can cover medical bills, lost wages, and other expenses
                  related to the accident. It can also provide a death benefit
                  to surviving family members. Accident insurance is a type of
                  personal insurance and can be purchased.
                </p>
              </div>
              <div>
                <a
                  className={styles.link_btn}
                  href="./accident.pdf"
                  target="_blank"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className={styles.service_card_container}>
            <div className={styles.service_card}>
              <div className={styles.service_image_container}>
                <img
                  src="./retirment_plans.webp"
                  alt="Retirement plans image"
                />
              </div>

              <div className={styles.service_title}>
                <h3>Retirement plans</h3>
              </div>
              <div className={styles.service_text}>
                <p>
                  Accident insurance can provide financial protection in the
                  event of an accident that results in serious injury or death.
                  It can cover medical bills, lost wages, and other expenses
                  related to the accident. It can also provide a death benefit
                  to surviving family members. Accident insurance is a type of
                  personal insurance and can be purchased.
                </p>
              </div>
              <div>
                <a
                  className={styles.link_btn}
                  href="./Retirement.pdf"
                  target="_blank"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className={styles.service_card_container}>
            <div className={styles.service_card}>
              <div className={styles.service_image_container}>
                <img
                  src="./disability_insurance.webp"
                  alt="Retirement plans image"
                />
              </div>

              <div className={styles.service_title}>
                <h3>Disability Insurance</h3>
              </div>
              <div className={styles.service_text}>
                <p>
                  Disability insurance is an important type of insurance that
                  helps to protect your income in the event of an illness or
                  injury that prevents you from working. This type of insurance
                  provides financial protection in the form of a monthly benefit
                  payment that can help cover your basic living expenses while
                  you are unable to work.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.service_card_container}>
            <div className={styles.service_card}>
              <div className={styles.service_image_container}>
                <img
                  src="./dential_and_vision_insurance.webp"
                  alt="disability_insurance image"
                />
              </div>

              <div className={styles.service_title}>
                <h3>Dential & Vision Insurance</h3>
              </div>
              <div className={styles.service_text}>
                <p>
                  Dental and vision insurance can help you save money on routine
                  dental and vision care, such as cleanings, check-ups, and eye
                  exams. Having this type of coverage can also help you save on
                  more costly procedures, such as fillings and braces. In
                  addition, many plans cover preventive care.
                </p>
              </div>
              <div>
                <a
                  className={styles.link_btn}
                  href="https://www.humana.com/agent/health-insurance-Agents/AOALanding?SANID=1465328&MarketpointAgent=false"
                  target="_blank"
                >
                  HUMANA
                </a>
                <a
                  className={styles.link_btn}
                  href="https://brokers.careington.com/Index.aspx?A=455354494D5A"
                  target="_blank"
                >
                  CAREINGTON
                </a>
              </div>
            </div>
          </div>
          <div className={styles.service_card_container}>
            <div className={styles.service_card}>
              <div className={styles.service_image_container}>
                <img src="./funeral_plans.webp" alt="funeral plans image" />
              </div>

              <div className={styles.service_title}>
                <h3>Funeral Plans</h3>
              </div>
              <div className={styles.service_text}>
                <p>
                  Funeral plans are a form of financial protection that can
                  provide peace of mind to individuals and families in the event
                  of a loved one’s death. These plans are designed to help cover
                  the costs of a funeral, including burial or cremation
                  services, a casket, and other related expenses. Funeral plans
                  can be purchased through insurance companies.
                </p>
              </div>
              <div>
                <a
                  className={styles.link_btn}
                  href="./CFG-Funnel.pdf"
                  target="_blank"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className={styles.service_card_container}>
            <div className={styles.service_card}>
              <div className={styles.service_image_container}>
                <img src="./mortgage.webp" alt="Mortgage protection image" />
              </div>

              <div className={styles.service_title}>
                <h3>Mortgage Protection</h3>
              </div>
              <div className={styles.service_text}>
                <p>
                  Mortgage protection insurance is a type of life insurance that
                  pays off your mortgage if you die or become disabled. It
                  provides financial security for your loved ones by protecting
                  them from the burden of paying off your mortgage if something
                  happens to you. This type of insurance can be an invaluable
                  asset for anyone who is looking to secure.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.service_card_container}>
            <div className={styles.service_card}>
              <div className={styles.service_image_container}>
                <img
                  src="./health-insurance.webp"
                  alt="health insurance image"
                />
              </div>

              <div className={styles.service_title}>
                <h3>Health Insurance</h3>
              </div>
              <div className={styles.service_text}>
                <p>
                  Health insurance is an insurance policy that provides
                  financial protection against medical costs incurred by an
                  individual. The policy pays for medical expenses incurred by
                  the insured person, including hospital stays, doctor visits,
                  lab tests, prescription medications, and other treatments.
                  Health insurance covers both inpatient.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.service_card_container}>
            <div className={styles.service_card}>
              <div className={styles.service_image_container}>
                <img src="./policy.webp" alt="Policy Review image" />
              </div>

              <div className={styles.service_title}>
                <h3>Policy Review</h3>
              </div>
              <div className={styles.service_text}>
                <p>
                  We review our policies and procedures regularly to ensure they
                  are up to date and remain compliant with state and local
                  regulations. We also strive to maintain the highest standards
                  of fairness and integrity in all our dealings with our
                  customers. Our commitment to excellence is reflected in our
                  commitment to customer service.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.service_card_container}>
            <div className={styles.service_card}>
              <div className={styles.service_image_container}>
                <img src="./Supplementary.webp" alt="Supplementary image" />
              </div>

              <div className={styles.service_title}>
                <h3>SUPPLEMENTARY HEALTH INSURANCE</h3>
              </div>
              <div className={styles.service_text}>
                <p>
                  We offer supplementary health insurance plans designed to
                  provide additional coverage for medical expenses. Our plans
                  provide coverage for hospital stays, doctor visits, lab tests,
                  prescription drugs, emergency care, and more. We offer
                  flexible coverage options, competitive rates, and a variety of
                  payment options to make it easier to find the right plan for
                  your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurService;
