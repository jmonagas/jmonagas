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
						<Link href={"/"} title="Click to Follow Link">
							Who We Are
						</Link>
					</div>

					<div className={styles.item}>
						<Link href={"/#introduction"} title="Click to Follow Link">
							Our Expertise
						</Link>
					</div>

					<div className={styles.item}>
						<Link href={"/#mainReasons"} title="Click to Follow Link">
							Key Reasons
						</Link>
					</div>

					<div className={styles.item}>
						<Link href={"/#introArticle"} title="Click to Follow Link">
							The Benefits
						</Link>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.item}>
						<h4>
							<Link href={"/services"} title="Click to Follow Link">
								What We Do
							</Link>
						</h4>
					</div>

					<div className={styles.item}>
						<Link href={"/services/#whatWeDo"} title="Click to Follow Link">
							Our Services
						</Link>
					</div>

					<div className={styles.item}>
						<Link
							href={"/services/#servicesArticle"}
							title="Click to Follow Link">
							Maintenance
						</Link>
					</div>

					<div className={styles.item}>
						<Link
							href={"/services/#servicesAccordion"}
							title="Click to Follow Link">
							Development
						</Link>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.item}>
						<h4>
							<Link href={"/contact"} title="Click to Follow Link">
								How To Contact
							</Link>
						</h4>
					</div>

					<div className={styles.item}>
						<Link href={"/contact/#howToOrder"} title="Click to Follow Link">
							Order Today
						</Link>
					</div>

					<div className={styles.item}>
						<Link
							href={"/contact/#contactAccordion"}
							title="Click to Follow Link">
							Our Support
						</Link>
					</div>

					<div className={styles.item}>
						<Link
							href={"/contact/#effectiveWebsites"}
							title="Click to Follow Link">
							Consulting
						</Link>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.item}>
						<h4>
							<Link href={"/#whyContractUs"} title="Click to Follow Link">
								Background
							</Link>
						</h4>
					</div>

					<div className={styles.item}>
						<Link href={"/#deadline"} title="Click to Follow Link">
							Deadline
						</Link>
					</div>

					<div className={styles.item}>
						<Link href={"/contact/#howToContact"} title="Click to Follow Link">
							Requests
						</Link>
					</div>

					<div className={styles.item}>
						<Link href={"/contact/#letUsProceed"} title="Click to Follow Link">
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
