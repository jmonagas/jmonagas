import React from "react";
import styles from "../styles/MainReasons.module.css";

function MainReasons() {
	return (
		<section className={styles.container} id="reasons" role="article">
			<h2 className={styles.h2}>
				Why should you get website repair and maintenance services?
			</h2>
			<p className={styles.p}>
				Within a myriad of possibilities available out there, these are the four
				key reasons:
			</p>
			<div className={styles.wrapper}>
				<div className={styles.cards}>
					<div
						className={styles.svg}
						title="Reason Number One"
						alt="Reason Number One">
						<svg viewBox="0 0 24 24" fill="#0077b6" height={50} width={50}>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M14 1.5V22h-2V3.704L7.5 4.91V2.839l5-1.339z" />
						</svg>
					</div>
					<h3 className={styles.h3}>More Traffic</h3>
					<p className={styles.p}>
						Searching online for products and brands, and checking reviews is
						the standard nowadays
					</p>
				</div>
				<div className={styles.cards}>
					<div
						className={styles.svg}
						title="Reason Number Two"
						alt="Reason Number Two">
						<svg viewBox="0 0 24 24" fill="#0077b6" height={50} width={50}>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M16 7.5a4 4 0 10-8 0H6a6 6 0 1110.663 3.776l-7.32 8.723L18 20v2H6v-1.127l9.064-10.802A3.982 3.982 0 0016 7.5z" />
						</svg>
					</div>
					<h3 className={styles.h3}>Lower Costs</h3>
					<p className={styles.p}>
						Web presence supports businesses by helping create brand awareness
						and promotion
					</p>
				</div>
				<div className={styles.cards}>
					<div
						className={styles.svg}
						title="Reason Number Three"
						alt="Reason Number Three">
						<svg viewBox="0 0 24 24" fill="#0077b6" height={50} width={50}>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M18 2v1.362L12.809 9.55a6.501 6.501 0 11-7.116 8.028l1.94-.486A4.502 4.502 0 0016.5 16a4.5 4.5 0 00-6.505-4.03l-.228.122-.69-1.207L14.855 4H6.5V2H18z" />
						</svg>
					</div>
					<h3 className={styles.h3}>More Sales</h3>
					<p className={styles.p}>
						Making your products and services available online increases your
						chances of selling them
					</p>
				</div>
				<div className={styles.cards}>
					<div
						className={styles.svg}
						title="Reason Number Four"
						alt="Reason Number Four">
						<svg viewBox="0 0 24 24" fill="#0077b6" height={50} width={50}>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M16 1.5V16h3v2h-3v4h-2v-4H4v-1.102L14 1.5h2zM14 16V5.171L6.968 16H14z" />
						</svg>
					</div>
					<h3 className={styles.h3}>More Access</h3>
					<p className={styles.p}>
						Website repair and maintenance services are made available 24/7 as
						needed
					</p>
				</div>
			</div>
		</section>
	);
}

export default MainReasons;
