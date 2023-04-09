import React from "react";
import styles from "../styles/ChooseServices.module.css";

function ChooseServices() {
	return (
		<>
			<div className={styles.container} id="choose_services" role="article">
				<div
					className={styles.wrapper}
					alt="Choose the services you need"
					title="Choose the services you need">
					<h2 className={styles.titles}>
						What website maintenance services do you need as a minimum?
					</h2>
					<p className={styles.subs}>
						To stay competitive and get all of the benefits without spending a
						fortune
					</p>
					<ul className={styles.list}>
						<li className={styles.item}>
							<span className={styles.span}>.01</span>
							<h2 className={styles.h2}>Design</h2>
							<p className={styles.desc}>
								Branding, colors, fonts, images, texts
							</p>
						</li>
						<li className={styles.item}>
							<span className={styles.span}>.02</span>
							<h2 className={styles.h2}>Create</h2>
							<p className={styles.desc}>
								Responsive, static, dynamic, pages, APIs
							</p>
						</li>
						<li className={styles.item}>
							<span className={styles.span}>.03</span>
							<h2 className={styles.h2}>Monitor</h2>
							<p className={styles.desc}>
								Performance, availability, speed, functions
							</p>
						</li>
						<li className={styles.item}>
							<span className={styles.span}>.04</span>
							<h2 className={styles.h2}>Develop</h2>
							<p className={styles.desc}>
								Writing code, implementing, upgrading
							</p>
						</li>
						<li className={styles.item}>
							<span className={styles.span}>.05</span>
							<h2 className={styles.h2}>Update</h2>
							<p className={styles.desc}>
								Domain, hosting, content, data, scopes
							</p>
						</li>
						<li className={styles.item}>
							<span className={styles.span}>.06</span>
							<h2 className={styles.h2}>Analize</h2>
							<p className={styles.desc}>Check main competitor key strengths</p>
						</li>
						<li className={styles.item}>
							<span className={styles.span}>.07</span>
							<h2 className={styles.h2}>Devise</h2>
							<p className={styles.desc}>
								Security risks, compatibility, key features
							</p>
						</li>
						<li className={styles.item}>
							<span className={styles.span}>.08</span>
							<h2 className={styles.h2}>Optimize</h2>
							<p className={styles.desc}>
								Boost content, design, traffic, conversion
							</p>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default ChooseServices;
