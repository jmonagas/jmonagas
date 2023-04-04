import React from "react";
import styles from "../styles/ContactAccordion.module.css";

function ContactAccordion() {
  return (
    <>
      <section className={styles.container} id="contactAccordion">
        <div className={styles.desc}>
          <h2 className={styles.h2}>
            What support will you get when hiring our web repair and maintenance
            services?
          </h2>
          <p className={styles.p}>
            Whether you are just exploring your niche or have already decided
            what your next marketing steps will be, even if you already have a
            business strategy and online presence, including a fully functional
            website generated via WordPress or Shopify or Wix or BigCommerce...
            you are just scratching the surface and getting more acquainted with
            new technologies. Let us have this conversation! Let ideas flow...
          </p>
        </div>
        <div className={styles.wrapper}>
          <ul className={styles.ul}>
            <li
              className={styles.li}
              alt="Get Our Continuous Support And Dedicated Services"
              title="Get Our Continuous Support And Dedicated Services">
              <label
                className={styles.label}
                htmlFor="one"
                title="Click to Display Content"
                alt="Click to Display Content">
                Identify
              </label>

              <input
                className={styles.check}
                type="checkbox"
                name="accordion"
                id="one"
                title="Click to Display Content"
                alt="Click to Display Content"
              />

              <div className={styles.text}>
                <p>
                  Why on Earth would you make your present or future customers
                  access your business website only by downloading some
                  exclusive app on a mobile or some computer software when all
                  you need to do is to have your web developer write the code in
                  HTML, CSS, JavaScript, Python or via a framework such as
                  React.Js or Next.Js? Mobile friendly and progressive web apps
                  (PWA) is the way to go
                </p>
              </div>
            </li>

            <li
              className={styles.li}
              alt="Get Our Continuous Support And Dedicated Services"
              title="Get Our Continuous Support And Dedicated Services">
              <label
                className={styles.label}
                htmlFor="two"
                title="Click to Display Content"
                alt="Click to Display Content">
                Manage
              </label>

              <input
                className={styles.check}
                type="checkbox"
                name="accordion"
                id="two"
                title="Click to Display Content"
                alt="Click to Display Content"
              />

              <div className={styles.text}>
                <p>
                  We did not invent web programming or the Internet, nor we can
                  claim that we are the experts in every single aspect of modern
                  Internet based technologies. But we have learned the trade and
                  know how to use the best web development tools to build both
                  the frontend and backend of web applications using the most
                  relevant programming languages and technologies available.
                  And, to be honest, it is the Wild West out there
                </p>
              </div>
            </li>

            <li
              className={styles.li}
              alt="Get Our Continuous Support And Dedicated Services"
              title="Get Our Continuous Support And Dedicated Services">
              <label
                className={styles.label}
                htmlFor="three"
                title="Click to Display Content"
                alt="Click to Display Content">
                Discover
              </label>

              <input
                className={styles.check}
                type="checkbox"
                name="accordion"
                id="three"
                title="Click to Display Content"
                alt="Click to Display Content"
              />

              <div className={styles.text}>
                <p>
                  It is not about you anymore! You need to acquire a sound
                  appreciation of user experience (also referred to as UX) both
                  on the frontend and the backend. More importantly, you must
                  communicate effectively with clients, associates, contractors,
                  and allies with a view to staying informed of relevant matters
                  pertaining to your main line of business (either services or
                  products) versus the most critical aspects of website
                  optimization (generally described as SEO)
                </p>
              </div>
            </li>

            <li
              className={styles.li}
              alt="Get Our Continuous Support And Dedicated Services"
              title="Get Our Continuous Support And Dedicated Services">
              <label
                className={styles.label}
                htmlFor="four"
                title="Click to Display Content"
                alt="Click to Display Content">
                Achieve
              </label>

              <input
                className={styles.check}
                type="checkbox"
                name="accordion"
                id="four"
                title="Click to Display Content"
                alt="Click to Display Content"
              />

              <div className={styles.text}>
                <p>
                  Now it is the time to strategize and implement those online
                  marketing ideas to generate demand for your products and
                  services. Let us craft and fine tune your business brand and
                  web presence through attractive and original media content.
                  Cut the cost of delivery and the time it takes to get your
                  products or services to your costumers. Okay, we get it! You
                  may not yet be as big as Amazon or Microsoft; however, you
                  cannot afford to not managing your online reputation
                </p>
              </div>
            </li>

            <li
              className={styles.li}
              alt="Get Our Continuous Support And Dedicated Services"
              title="Get Our Continuous Support And Dedicated Services">
              <label
                className={styles.label}
                htmlFor="five"
                title="Click to Display Content"
                alt="Click to Display Content">
                Evaluate
              </label>

              <input
                className={styles.check}
                type="checkbox"
                name="accordion"
                id="five"
                title="Click to Display Content"
                alt="Click to Display Content"
              />

              <div className={styles.text}>
                <p>
                  We do not have to reinvent the wheel! You must have heard of
                  how Jeff Bezos started Amazon off as an online bookstore right
                  from his garage back in 1994. Next, Jack Ma founded Alibaba
                  right from his own apartment in 1999. The cofounder of Apple,
                  Steve Wozniak, was a self educated electronics engineer. So,
                  do not even think about putting all of your precious business
                  budget on expensive social media marketing campaigns, because
                  that is not your only choice
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default ContactAccordion;
