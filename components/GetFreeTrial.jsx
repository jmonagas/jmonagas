import React from "react";
import styles from "../styles/GetFreeTrial.module.css";

function GetFreeTrial() {
	return (
		<>
			<section className={styles.container} id="get_free_trial" role="article">
				<div
					className={styles.wrapper}
					alt="Start A Free Trial Today"
					title="Start A Free Trial Today">
					<h2 className={styles.h2}>
						Start a free trial and enjoy 2 weeks of Website Repair and
						Maintenance Services
					</h2>
					<p className={styles.p}>
						Getting started takes just a moment. No credit card required
					</p>
				</div>
			</section>
		</>
	);
}

export default GetFreeTrial;
