import React from "react";
import styles from "../styles/BrandIntro.module.css";

function BrandServices() {
	return (
		<section
			role="banner"
			className={styles.container}
			title="Products And Services To Meet Your Needs"
			alt="Products And Services To Meet Your Needs">
			<div className={styles.branding}>
				<section>
					<div className={styles.heading}>
						<h1 className={styles.h1}>
							Get Website Repair & Maintenance Services
						</h1>
						<p className={styles.motto}>
							Products And Services To Meet Your Needs
						</p>
					</div>
				</section>

				<section>
					<div className={styles.framing}>
						<h2 className={styles.h2}>
							Websites might be offline for a few minutes; but oftentimes this
							may take hours. Without regular updates and maintenance, your site
							will be obsolete pretty soon. Web maintenance costs range from $5
							to $5K monthly or $60 to $60K yearly
						</h2>
					</div>
				</section>

				<section>
					<div className={styles.connect}>
						<a href="tel:1+4033973696" title="Phone Us Today">
							<div className={styles.connect_item}>
								<svg
									viewBox="0 0 64 64"
									fill="currentColor"
									height={30}
									width={30}>
									<g
										fill="none"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeWidth={3}>
										<path d="M16 1h32v62H16zM28 5h8M16 51h32M16 9h32" />
										<path
											strokeLinejoin="bevel"
											d="M34 57 A2 2 0 0 1 32 59 A2 2 0 0 1 30 57 A2 2 0 0 1 34 57 z"
										/>
									</g>
								</svg>
							</div>
						</a>
						<a href="mailto:jmonagas@hotmail.ca" title="Email Us Now">
							<div className={styles.connect_item}>
								<svg
									viewBox="0 0 64 64"
									fill="currentColor"
									height={30}
									width={30}>
									<g
										fill="none"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeWidth={3}>
										<path d="M1 13h62v37H1z" />
										<path d="M1 13l31 20 31-20" />
									</g>
								</svg>
							</div>
						</a>
						<a
							href="https://www.google.com/maps/place/Calgary,+AB/@51.0272883,-114.3680132,10z/data=!3m1!4b1!4m5!3m4!1s0x537170039f843fd5:0x266d3bb1b652b63a!8m2!3d51.0447331!4d-114.0718831"
							title="Find Us Today"
							target="_blank"
							rel="noopener noreferrer">
							<div className={styles.connect_item}>
								<svg
									viewBox="0 0 64 64"
									fill="currentColor"
									height={30}
									width={30}>
									<g
										fill="none"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeWidth={3}>
										<path d="M38 22 A6 6 0 0 1 32 28 A6 6 0 0 1 26 22 A6 6 0 0 1 38 22 z" />
										<path d="M53 22.735C52.948 10.73 43.599 1 32 1s-21 9.73-21 21.735C11 38.271 31.965 63 31.965 63S53.069 38.271 53 22.735z" />
									</g>
								</svg>
							</div>
						</a>
					</div>
				</section>
			</div>
		</section>
	);
}

export default BrandServices;
