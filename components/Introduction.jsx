import React from "react";
import styles from "../styles/Introduction.module.css";

function Introduction() {
	return (
		<section className={styles.container} id="expertise" role="article">
			<h1 className={styles.h1}>
				What expertise do you have at website
				<br />
				repair and maintenance services?
			</h1>
			<h2 className={styles.desc}>
				We focus on helping our clients achieve business growth, instead of
				worrying
				<br />
				about maintaining their company website for items such as the following:
			</h2>
			<div className={styles.wrapper}>
				<div className={styles.left} title="Be Consistent" alt="Be Consistent">
					<svg viewBox="0 0 64 64" fill="currentColor" height={70} width={70}>
						<g
							fill="none"
							stroke="currentColor"
							strokeMiterlimit={10}
							strokeWidth={2}>
							<path d="M1 10h62v41H1zM22 63h20M32 63V51" />
						</g>
						<path
							fill="none"
							stroke="currentColor"
							strokeMiterlimit={10}
							strokeWidth={2}
							d="M1 43h63"
						/>
					</svg>
				</div>
				<div className={styles.right} title="Be Consistent" alt="Be Consistent">
					<h2 className={styles.h2}>Consistency</h2>
					<p className={styles.p}>
						Your website should function properly in all the latest versions of
						major website browsers like Chrome, Firefox, etc.
					</p>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.left} title="Fix Errors" alt="Fix Errors">
					<svg viewBox="0 0 64 64" fill="currentColor" height={70} width={70}>
						<path
							fill="none"
							stroke="currentColor"
							strokeMiterlimit={10}
							strokeWidth={2}
							d="M1 7h62v50H1zM1 15h62M10 11H6M18 11h-4M26 11h-4M39 44L25 30M25 44l14-14"
						/>
					</svg>
				</div>
				<div className={styles.right} title="Fix Errors" alt="Fix Errors">
					<h2 className={styles.h2}>Errors</h2>
					<p className={styles.p}>
						A minor coding error could lead to a number of problems such as
						weird looking pages, missing media, etc.
					</p>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.left} title="Keep Files" alt="Keep Files">
					<svg viewBox="0 0 64 64" fill="currentColor" height={70} width={70}>
						<g
							fill="none"
							stroke="currentColor"
							strokeMiterlimit={10}
							strokeWidth={2}>
							<path d="M23 1h32v62H9V15z" />
							<path d="M9 15h14V1M32 14h14M18 24h28M18 34h28M18 44h28M18 54h28" />
						</g>
					</svg>
				</div>
				<div className={styles.right} title="Keep Files" alt="Keep Files">
					<h2 className={styles.h2}>Files</h2>
					<p className={styles.p}>
						Our website maintenance services ensure that file and database
						backups are performed, at least on a weekly basis
					</p>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div
					className={styles.left}
					title="Update Content"
					alt="Update Content">
					<svg viewBox="0 0 64 64" fill="currentColor" height={70} width={70}>
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
				</div>
				<div
					className={styles.right}
					title="Update Content"
					alt="Update Content">
					<h2 className={styles.h2}>Content</h2>
					<p className={styles.p}>
						Outdated and irrelevant web content must be removed regularly to
						increase web traffic and conversions
					</p>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div
					className={styles.left}
					title="Beat Competitors"
					alt="Beat Competitors">
					<svg viewBox="0 0 64 64" fill="currentColor" height={70} width={70}>
						<g
							fill="none"
							stroke="currentColor"
							strokeMiterlimit={10}
							strokeWidth={2}>
							<path d="M23 1h32v62H9V15z" />
							<path d="M9 15h14V1" />
						</g>
						<g
							fill="none"
							stroke="currentColor"
							strokeMiterlimit={10}
							strokeWidth={2}>
							<path d="M27 44v-7h-4v7M34 44V27h-4v17M41 44V34h-4v10M20 45h24" />
						</g>
					</svg>
				</div>
				<div
					className={styles.right}
					title="Beat Competitors"
					alt="Beat Competitors">
					<h2 className={styles.h2}>Analytics</h2>
					<p className={styles.p}>
						Use web metrics and learn how many new and returning visitors your
						website has had for the past month
					</p>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div
					className={styles.left}
					title="Remain Relevant"
					alt="Remain Relevant">
					<svg viewBox="0 0 64 64" fill="currentColor" height={70} width={70}>
						<path
							fill="none"
							stroke="currentColor"
							strokeMiterlimit={10}
							strokeWidth={2}
							d="M32.001.887C49.185.887 63.114 14.816 63.113 32 63.114 49.185 49.184 63.115 32 63.113 14.815 63.114.887 49.185.888 32.001.885 14.816 14.815.887 32.001.887zM32 1v62M63 32H1"
						/>
						<path
							fill="none"
							stroke="currentColor"
							strokeMiterlimit={10}
							strokeWidth={2}
							d="M30 1S16 12 16 32s14 31 14 31M34 1s14 11 14 31-14 31-14 31"
						/>
						<path
							fill="none"
							stroke="currentColor"
							strokeMiterlimit={10}
							strokeWidth={2}
							d="M8 12s5 10 24 10 24-10 24-10M8 52s5-10 24-10 24 10 24 10"
						/>
					</svg>
				</div>
				<div
					className={styles.right}
					title="Remain Relevant"
					alt="Remain Relevant">
					<h2 className={styles.h2}>Links</h2>
					<p className={styles.p}>
						Broken links are detrimental to your business as they give visitors
						the impression that your website is useless
					</p>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div
					className={styles.left}
					title="Increase Traffic"
					alt="Increase Traffic">
					<svg viewBox="0 0 64 64" fill="currentColor" height={70} width={70}>
						<path
							fill="none"
							stroke="currentColor"
							strokeMiterlimit={10}
							strokeWidth={2}
							d="M36 34l5 5"
						/>
						<path
							fill="none"
							stroke="currentColor"
							strokeMiterlimit={10}
							strokeWidth={1.99998}
							d="M63 55l-5.999 6-19-19 6-6z"
						/>
						<path
							fill="none"
							stroke="currentColor"
							strokeMiterlimit={10}
							strokeWidth={2}
							d="M12 16l6-6L8 4 6 6zM28 26L15 13M58 12.5l-8 3.75-4-4.125 3.5-8.062h0C39.5 4.062 37 9 37 14v4L3.5 52l-1.75 6 2.125 2 6.062-1.5L44 25h4c5 0 10-2.5 10-12.5h0z"
						/>
					</svg>
				</div>
				<div
					className={styles.right}
					title="Increase Traffic"
					alt="Increase Traffic">
					<h2 className={styles.h2}>Optimization</h2>
					<p className={styles.p}>
						Eliminate structural issues within your webpages that may affect how
						search engines view your website
					</p>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div
					className={styles.left}
					title="Provide Answers"
					alt="Provide Answers">
					<svg viewBox="0 0 64 64" fill="currentColor" height={70} width={70}>
						<path
							fill="none"
							stroke="currentColor"
							strokeMiterlimit={10}
							strokeWidth={2}
							d="M32.001.887C49.185.887 63.114 14.816 63.113 32 63.114 49.185 49.184 63.115 32 63.113 14.815 63.114.887 49.185.888 32.001.885 14.816 14.815.887 32.001.887z"
						/>
						<path
							fill="none"
							stroke="currentColor"
							strokeMiterlimit={10}
							strokeWidth={2}
							d="M10 32a21.93 21.93 0 016.444-15.556c8.591-8.593 22.521-8.593 31.112 0A21.93 21.93 0 0154 32M24 26l6.333 7.333"
						/>
						<path
							fill="none"
							stroke="currentColor"
							strokeMiterlimit={10}
							strokeWidth={2}
							d="M34 35 A2 2 0 0 1 32 37 A2 2 0 0 1 30 35 A2 2 0 0 1 34 35 z"
						/>
					</svg>
				</div>
				<div
					className={styles.right}
					title="Provide Answers"
					alt="Provide Answers">
					<h2 className={styles.h2}>Speed</h2>
					<p className={styles.p}>
						An average twenty five percent (25%) of users navigate out of a
						website if it takes more than three seconds to load
					</p>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.left} title="Be Found" alt="Be Found">
					<svg viewBox="0 0 64 64" fill="currentColor" height={70} width={70}>
						<path
							fill="none"
							stroke="currentColor"
							strokeMiterlimit={10}
							strokeWidth={2}
							d="M1 7h62v50H1z"
						/>
						<path
							fill="none"
							stroke="currentColor"
							strokeLinejoin="round"
							strokeMiterlimit={10}
							strokeWidth={2}
							d="M32 41l-6.125 4L28 38l-6-4h7.213L32 26l3 8h7l-6 4 1.938 7z"
						/>
						<path
							fill="none"
							stroke="currentColor"
							strokeMiterlimit={10}
							strokeWidth={2}
							d="M1 15h62M10 11H6M18 11h-4M26 11h-4"
						/>
					</svg>
				</div>
				<div className={styles.right} title="Be Found" alt="Be Found">
					<h2 className={styles.h2}>Domain</h2>
					<p className={styles.p}>
						Every website needs a catchy name. The domain consists of two
						elements: The website name and the extension
					</p>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.left} title="Stay Safe" alt="Stay Safe">
					<svg viewBox="0 0 64 64" fill="currentColor" height={70} width={70}>
						<path
							fill="none"
							stroke="currentColor"
							strokeLinejoin="bevel"
							strokeMiterlimit={10}
							strokeWidth={2}
							d="M59 56c0 3.866-11.641 7-26 7S7 59.866 7 56M59 40c0 3.866-11.641 7-26 7S7 43.866 7 40M59 24c0 3.866-11.641 7-26 7S7 27.866 7 24"
						/>
						<path
							fill="none"
							stroke="currentColor"
							strokeLinejoin="bevel"
							strokeMiterlimit={10}
							strokeWidth={2}
							d="M59 8 A26 7 0 0 1 33 15 A26 7 0 0 1 7 8 A26 7 0 0 1 59 8 z"
						/>
						<path
							fill="none"
							stroke="currentColor"
							strokeLinejoin="bevel"
							strokeMiterlimit={10}
							strokeWidth={2}
							d="M7 8v48M59 8v48"
						/>
					</svg>
				</div>
				<div className={styles.right} title="Stay Safe" alt="Stay Safe">
					<h2 className={styles.h2}>Hosting</h2>
					<p className={styles.p}>
						Hosting providers charge different fees for a similar plan due to
						different features and overall infrastructure
					</p>
				</div>
			</div>
		</section>
	);
}

export default Introduction;
