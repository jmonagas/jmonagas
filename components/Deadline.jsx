import React from "react";
import styles from "../styles/Deadline.module.css";

function Deadline() {
  return (
    <>
      <section className={styles.container} id="deadline">
        <div className={styles.wrapper}>
          <h2 className={styles.h2}>
            How soon do you need to sell your products or services?
          </h2>
          <p className={styles.p}>
            You will need good marketing and advertising, right?
          </p>
          <p className={styles.p}>
            Let us talk about your business needs in terms of web development,
            maintenance, user interface (UI), user experience (UX), search
            engine optimization (SEO), cybersecurity, best practices, GTmetrix,
            Core Web Vitals, Google PageSpeed Insights, mobile responsiveness,
            quality assurance, and testing. This is in fact very simple to
            understand if we compare it to the process involving design,
            creation, research, and data mining versus the process of making a
            product or service recognized by an audience
          </p>
        </div>
      </section>
    </>
  );
}

export default Deadline;
