import React from "react";
import styles from "../styles/LetUsProceed.module.css";

function LetUsProceed() {
	return (
		<>
			<section className={styles.container} id="let_us_proceed" role="article">
				<div
					className={styles.wrapper}
					alt="Let Us Proceed Now"
					title="Let Us Proceed Now">
					<h2 className={styles.h2}>
						After COVID-19, the digital transformation continues to disrupt
						traditional industries
					</h2>
					<p className={styles.p}>
						If you do not know this by <u>now</u>, that is okay: Let us focus
					</p>
					<p className={styles.p}>
						If we do not have the answer right away, we will let you know
						without false pretenses. Next, we will invest the time needed to
						research thoughtfully, find the information required, and get that
						answered for you. If you commit to working with us, there will be no
						charge for the initial consultation
					</p>
				</div>
			</section>
		</>
	);
}

export default LetUsProceed;
