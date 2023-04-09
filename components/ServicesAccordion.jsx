import React from "react";
import styles from "../styles/ServicesAccordion.module.css";

function ServicesAccordion() {
	return (
		<>
			<section className={styles.container} id="development" role="article">
				<div className={styles.desc}>
					<h2 className={styles.h2}>How we can help your business</h2>
					<p className={styles.p}>This is the time to think big and grow</p>
				</div>
				<div className={styles.wrapper}>
					<ul className={styles.ul}>
						<li
							className={styles.li}
							alt="Get Front-End Services"
							title="Get Front-End Services">
							<label
								className={styles.label}
								htmlFor="one"
								title="Click to Display Content"
								alt="Click to Display Content">
								Front-End
							</label>

							<input
								role="button"
								className={styles.check}
								type="checkbox"
								name="accordion"
								id="one"
								title="Click to Display Content"
								alt="Click to Display Content"
							/>

							<div className={styles.text}>
								<p>
									Let us build those great interactive components for your web
									project to enhance the client side with visual user
									interfaces, refined aesthetics, and layouts. We can use basic
									HTML, CSS, and JavaScript to engage your audience through
									text, images, and colors. By the same token, we can use the
									industry state of the art frameworks such as React.Js or
									Next.Js for top speed and to deliver a final product that your
									clients will appreciate while it generates online traffic and
									sales
								</p>
							</div>
						</li>

						<li
							className={styles.li}
							alt="Get Back-End Services"
							title="Get Back-End Services">
							<label
								className={styles.label}
								htmlFor="two"
								title="Click to Display Content"
								alt="Click to Display Content">
								Back-End
							</label>

							<input
								role="button"
								className={styles.check}
								type="checkbox"
								name="accordion"
								id="two"
								title="Click to Display Content"
								alt="Click to Display Content"
							/>

							<div className={styles.text}>
								<p>
									You have completed the front of your store or website. It is
									time to make sure that you keep it running and functioning
									properly. The server and database of your site need to be
									built and implemented with logic for performance versus
									demand. This is vital in the modern web development process.
									We can make good use of programming languages such as Python
									along with SQL and a DB in a virtual environment that will
									handle your products or services information, images, and
									prices
								</p>
							</div>
						</li>

						<li
							className={styles.li}
							alt="Get Full-Stack Services"
							title="Get Full-Stack Services">
							<label
								className={styles.label}
								htmlFor="three"
								title="Click to Display Content"
								alt="Click to Display Content">
								Full-Stack
							</label>

							<input
								role="button"
								className={styles.check}
								type="checkbox"
								name="accordion"
								id="three"
								title="Click to Display Content"
								alt="Click to Display Content"
							/>

							<div className={styles.text}>
								<p>
									99% of business owners have no time or money to misuse in
									complicated marketing campaigns or agencies. So, they usually
									hire a full stack web development specialist to code or work
									on both the frontend and backend of their websites. The key is
									efficiency, right? Full stack web developers can troubleshoot
									and solve problems that may and will occur on the frontend or
									backend of a website. You cannot afford to launch your website
									and forget about maintaining the parts that make it a valuable
									investment
								</p>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default ServicesAccordion;
