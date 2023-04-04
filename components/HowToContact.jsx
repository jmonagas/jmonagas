import React from "react";
import styles from "../styles/HowToContact.module.css";

function HowToContact() {
	return (
		<>
			<section className={styles.container} id="howToContact">
				<div className={styles.desc}>
					<h2 className={styles.h2}>
						Why should you get a free consultation now?
					</h2>
					<p className={styles.p}>
						A free consultation with Website Repair and Maintenance Services is
						a great way to actively seek the type of services your business
						needs and offers multiple benefits without any cost upfront
					</p>
				</div>
				<div className={styles.wrapper}>
					<div
						className={styles.left}
						alt="Send A Contact Request"
						title="Send A Contact Request">
						<h2 className={styles.subs}>Email Us</h2>
						<p className={styles.def}>Schedule your free consultation</p>
						<div
							className={styles.btnLeft}
							alt="Send A Contact Request"
							title="Send A Contact Request">
							<a
								className={styles.a}
								href="https://docs.google.com/forms/d/e/1FAIpQLSfbZNpHFFOY_RY20mHva54ryS1mRpbaIYJiFQdZCZXcl0_BJQ/viewform"
								alt="Send A Contact Request"
								title="Send A Contact Request"
								target="_blank"
								rel="noopener noreferrer">
								Send A Contact Request
							</a>
						</div>
					</div>
					<div
						className={styles.right}
						alt="Leave A Contact Number"
						title="Leave A Contact Number">
						<h2 className={styles.subs}>Phone Us</h2>
						<p className={styles.def}>Weekly between 9am and 5pm</p>
						<div
							className={styles.btnRight}
							alt="Leave A Contact Number"
							title="Leave A Contact Number">
							<a alt="Leave A Contact Number" title="Leave A Contact Number">
								+1 (403) 397 3696
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default HowToContact;
