import React from "react";
import styles from "../styles/ServicesArticle.module.css";

function ServicesArticle() {
	return (
		<section className={styles.container} id="servicesArticle">
			<div className={styles.wrapper}>
				<div className={styles.articles}>
					<h2 className={styles.h2}>
						What website maintenance and repair services should you purchase?
					</h2>
					<p className={styles.p}>
						Building, maintaining and repairing websites is complicated. Under a
						Do-It-Yourself Approach, you will have to invest a great deal of
						time, money and effort into learning the many different
						technologies, techniques, best practices, typical patterns, and
						other components that are necessary to implement. It will take you
						months to really start to get into it, and years to keep learning so
						that your knowledge stays up-to-date with all the new tools and
						features that are constantly appearing on the web, along with
						practicing and refining your skills.
					</p>
					<p className={styles.p}>
						So, let us face it: Web maintenance and repair is time consuming and
						technical. Your website platform, features, products and services
						will greatly contribute to your overall maintenance and repair
						costs.
					</p>
					<p className={styles.p}>
						Our website maintenance and repair includes basic and highly visible
						daily, weekly, monthly, and yearly tasks such as guaranteeing that
						all the links on your site are properly working, and updating their
						content accordingly. It also involves more technical tasks like
						backing up your site, and monitoring its performance versus commonly
						accepted industry standards such as cross browser compatibility,
						responsive web design, accessibility, privacy and security, frontend
						web development, dynamic websites, just to name a few of them.
					</p>
					<p className={styles.p}>
						Next, we can focus on fixing poor user experience versus the Core
						Web Vitals for speed, responsiveness, and visual stability to boost
						your website rankings. Why should you care about this? Simply
						because Google Chrome has a 91% of search market share.
					</p>
					<p className={styles.p}>
						Get a complimentary&nbsp;
						<a
							className={styles.a}
							href="https://docs.google.com/forms/d/e/1FAIpQLSfbZNpHFFOY_RY20mHva54ryS1mRpbaIYJiFQdZCZXcl0_BJQ/viewform"
							title="Get A Free Audit of Your Website"
							alt="Get A Free Audit of Your Website"
							target="_blank"
							rel="noopener noreferrer">
							audit of your website
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}

export default ServicesArticle;
