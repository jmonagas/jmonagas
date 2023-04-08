import React from "react";
import styles from "../styles/WebsiteRefs.module.css";
import Link from "next/link";

function WebsiteRefs() {
	return (
		<>
			<footer
				className={styles.container}
				alt="Menu Quick Reference"
				title="Menu Quick Reference">
				<div className={styles.card}>
					<div className={styles.item}>
						<h3>
							<Link href={"/"} title="Click to Follow Link">
								Who We Are
							</Link>
						</h3>
					</div>

					<div className={styles.item}>
						<Link href={"/#expertise"} title="Click to Follow Link">
							Our Expertise
						</Link>
					</div>

					<div className={styles.item}>
						<Link href={"/#reasons"} title="Click to Follow Link">
							Key Reasons
						</Link>
					</div>

					<div className={styles.item}>
						<Link href={"/#benefits"} title="Click to Follow Link">
							The Benefits
						</Link>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.item}>
						<h3>
							<Link href={"/services"} title="Click to Follow Link">
								What We Do
							</Link>
						</h3>
					</div>

					<div className={styles.item}>
						<Link href={"/services/#offer"} title="Click to Follow Link">
							Our Services
						</Link>
					</div>

					<div className={styles.item}>
						<Link href={"/services/#maintenance"} title="Click to Follow Link">
							Maintenance
						</Link>
					</div>

					<div className={styles.item}>
						<Link href={"/services/#development"} title="Click to Follow Link">
							Development
						</Link>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.item}>
						<h3>
							<Link href={"/contact"} title="Click to Follow Link">
								How To Contact
							</Link>
						</h3>
					</div>

					<div className={styles.item}>
						<Link href={"/contact/#how_to_order"} title="Click to Follow Link">
							Order Today
						</Link>
					</div>

					<div className={styles.item}>
						<Link href={"/contact/#support"} title="Click to Follow Link">
							Our Support
						</Link>
					</div>

					<div className={styles.item}>
						<Link href={"/contact/#consulting"} title="Click to Follow Link">
							Consulting
						</Link>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.item}>
						<h3>
							<Link href={"/#why_contract_us"} title="Click to Follow Link">
								Background
							</Link>
						</h3>
					</div>

					<div className={styles.item}>
						<Link href={"/#deadline"} title="Click to Follow Link">
							Deadline
						</Link>
					</div>

					<div className={styles.item}>
						<Link
							href={"/contact/#how_to_contact"}
							title="Click to Follow Link">
							Requests
						</Link>
					</div>

					<div className={styles.item}>
						<Link
							href={"/contact/#let_us_proceed"}
							title="Click to Follow Link">
							Proceed
						</Link>
					</div>
				</div>
			</footer>

			<div className={styles.copyright}>
				<Link href={"/"} title="Go Back to Homepage">
					<p>
						All&nbsp;Rights&nbsp;Reserved&nbsp;&copy;&nbsp;
						{new Date().getFullYear()}&#8211;
						{new Date().getFullYear() + 5}
					</p>
				</Link>
			</div>
		</>
	);
}

export default WebsiteRefs;
