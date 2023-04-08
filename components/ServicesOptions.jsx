import React from "react";
import styles from "../styles/ServicesOptions.module.css";
import Link from "next/link";

function ServicesOptions() {
	return (
		<>
			<section className={styles.container} id="services_options">
				<div className={styles.desc}>
					<h2 className={styles.h2}>
						With so many options available, it would be right to contact Website
						Repair & Maintenance Services
					</h2>
					<p className={styles.p}>
						For all your website maintenance and repair needs
					</p>
				</div>
				<div className={styles.wrapper}>
					<div
						className={styles.left}
						alt="Option One: Pay As You Go"
						title="Option One: Pay As You Go">
						<h2 className={styles.h2}>Pay as you go</h2>

						<p className={styles.p}>
							Enjoy a flexible plan that works for you. Do not limit yourself
							under a contract. When your needs are modest, So your fees should
							be too.
						</p>

						<Link href={"/contact"}>
							<button
								className={styles.btnLeft}
								alt="Go to Contact Page"
								title="Go to Contact Page">
								Tell Me More Please
							</button>
						</Link>
					</div>
					<div
						className={styles.right}
						alt="Option Two: Pay A Set Fee"
						title="Option Two: Pay A Set Fee">
						<h2 className={styles.h2}>Pay a set fee</h2>

						<p className={styles.p}>
							Know what you have to pay ahead. Make well informed decisions.
							Have a fee structure and budget. Get charged for services and
							advice.
						</p>
						<Link href={"/contact"}>
							<button
								className={styles.btnRight}
								alt="Go to Contact Page"
								title="Go to Contact Page">
								Tell Me More Please
							</button>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

export default ServicesOptions;
