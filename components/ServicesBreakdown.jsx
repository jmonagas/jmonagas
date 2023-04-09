import React from "react";
import styles from "../styles/ServicesBreakdown.module.css";

function ServicesBreakdown() {
	return (
		<>
			<div className={styles.container} id="services_breakdown" role="article">
				<div
					className={styles.wrapper}
					title="Have A Comprehensive Breakdown"
					alt="Have A Comprehensive Breakdown">
					<h2 className={styles.titles}>
						We will break down everything you need to know
					</h2>
					<p className={styles.subs}>
						Learn how every piece will function and come together
					</p>
					<ul className={styles.list}>
						<li className={styles.item}>
							<span className={styles.span}>
								<svg
									viewBox="0 0 64 64"
									fill="currentColor"
									height={50}
									width={50}>
									<path
										fill="none"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeWidth={2}
										d="M1 18h62v9H1zM6 27h52v31H6zM32 58V18"
									/>
									<path
										fill="none"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeWidth={2}
										d="M32 18s-13 .101-13-9c0-7 13-4.068 13 2v7zM32 18s13 .101 13-9c0-7-13-4.068-13 2v7z"
									/>
								</svg>
							</span>
							<h2 className={styles.h2}>Appearance</h2>
						</li>
						<li className={styles.item}>
							<span className={styles.span}>
								<svg
									viewBox="0 0 64 64"
									fill="currentColor"
									height={50}
									width={50}>
									<path d="M29 13h2v39h-2zM33 13h2v39h-2z" />
									<path
										fill="none"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeWidth={2}
										d="M40.988 23s0-6-9-6-8 7-8 7 0 7 8 7c9 0 10.012 6 10.012 7 0 2 .988 8-10.012 8-9 0-8.988-4-8.988-5"
									/>
									<path
										fill="none"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeWidth={2}
										d="M53.92 10.081c12.107 12.105 12.107 31.732 0 43.838-12.106 12.108-31.734 12.108-43.839 0-12.107-12.105-12.107-31.732 0-43.838 12.105-12.108 31.732-12.108 43.839 0z"
									/>
								</svg>
							</span>
							<h2 className={styles.h2}>Usability</h2>
						</li>
						<li className={styles.item}>
							<span className={styles.span}>
								<svg
									viewBox="0 0 64 64"
									fill="currentColor"
									height={50}
									width={50}>
									<g
										fill="none"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeWidth={2}>
										<path d="M32 1h-6v9l-6 2-6-6-8 8 6 6-2 6H1v12h9l2 6-6 6 8 8 6-6 6 2v9h12v-9l6-2 6 6 8-8-6-6 2-6h9V26h-9l-2-6 6-6-8-8-6 6-6-2V1z" />
										<path d="M38 32 A6 6 0 0 1 32 38 A6 6 0 0 1 26 32 A6 6 0 0 1 38 32 z" />
									</g>
								</svg>
							</span>
							<h2 className={styles.h2}>Structure</h2>
						</li>
						<li className={styles.item}>
							<span className={styles.span}>
								<svg
									viewBox="0 0 64 64"
									fill="currentColor"
									height={50}
									width={50}>
									<g
										fill="none"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeWidth={2}>
										<path d="M8 33h48v30H8zM16 33V17c0-8.837 7.163-16 16-16s16 7.163 16 16v16" />
										<path d="M36 47 A4 4 0 0 1 32 51 A4 4 0 0 1 28 47 A4 4 0 0 1 36 47 z" />
										<path d="M32 51v4" />
									</g>
								</svg>
							</span>
							<h2 className={styles.h2}>Security</h2>
						</li>
						<li className={styles.item}>
							<span className={styles.span}>
								<svg
									viewBox="0 0 64 64"
									fill="currentColor"
									height={50}
									width={50}>
									<path
										fill="none"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeWidth={2}
										d="M1 7h62v50H1zM1 15h62M10 11H6M18 11h-4M26 11h-4M6 25h27M6 33h27M6 41h27"
									/>
									<path
										fill="none"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeWidth={2}
										d="M38 25h19v16H38z"
									/>
								</svg>
							</span>
							<h2 className={styles.h2}>Contents</h2>
						</li>
						<li className={styles.item}>
							<span className={styles.span}>
								<svg
									viewBox="0 0 64 64"
									fill="currentColor"
									height={50}
									width={50}>
									<g
										fill="none"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeWidth={2}>
										<path d="M53.92 10.081c12.107 12.105 12.107 31.732 0 43.838-12.106 12.108-31.734 12.108-43.84 0-12.107-12.105-12.107-31.732 0-43.838 12.106-12.108 31.733-12.108 43.84 0z" />
										<path d="M32 12v20l9 9M4 32h4M56 32h4M32 60v-4M32 8V4" />
									</g>
								</svg>
							</span>
							<h2 className={styles.h2}>Updates</h2>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default ServicesBreakdown;
