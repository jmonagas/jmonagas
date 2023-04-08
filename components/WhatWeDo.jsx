import React from "react";
import styles from "../styles/WhatWeDo.module.css";
import Image from "next/image";

function WhatWeDo() {
	return (
		<section className={styles.container} id="offer">
			<h1 className={styles.h1}>
				What services do you offer at website <br />
				repair and maintenance?
			</h1>
			<h2 className={styles.desc}>
				Should you maintain your website yourself? Or hire a professional
				developer? <br />
				What are the benefits and advantages?
			</h2>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<Image
						className={styles.img}
						src={process.env.NEXT_PUBLIC_URL + "/img/0028.jpg"}
						width={300}
						height={200}
						alt="Image shows two hands holding a magnifying glass"
						title="Image shows two hands holding a magnifying glass"
					/>
				</div>
				<div
					className={styles.right}
					title="Find What Works For You"
					alt="Find What Works For You">
					<h2 className={styles.h2}>Audit</h2>
					<p className={styles.p}>
						Run a full-cycle website SEO health audit to find what is affecting
						your search rankings
					</p>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<Image
						className={styles.img}
						src={process.env.NEXT_PUBLIC_URL + "/img/0018.png"}
						width={300}
						height={200}
						alt="Image shows a monitor surrounded by multiple apps"
						title="Image shows a monitor surrounded by multiple apps"
					/>
				</div>
				<div
					className={styles.right}
					title="Have No Limits To Advance"
					alt="Have No Limits To Advance">
					<h2 className={styles.h2}>Design</h2>
					<p className={styles.p}>
						Use visual hierarchy to guide visitors attention to important
						elements of your business first
					</p>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<Image
						className={styles.img}
						src={process.env.NEXT_PUBLIC_URL + "/img/0026.jpg"}
						width={300}
						height={200}
						alt="Image shows a crane lifting a website frame"
						title="Image shows a crane lifting a website frame"
					/>
				</div>
				<div
					className={styles.right}
					title="Make Your Goals Happen"
					alt="Make Your Goals Happen">
					<h2 className={styles.h2}>Build</h2>
					<p className={styles.p}>
						Based on time and budget, there are many ways to build a modern and
						mobile-friendly website
					</p>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<Image
						className={styles.img}
						src={process.env.NEXT_PUBLIC_URL + "/img/0023.jpg"}
						width={300}
						height={200}
						alt="Image shows a rocket being launched"
						title="Image shows a rocket being launched"
					/>
				</div>
				<div
					className={styles.right}
					title="Be Found Out There"
					alt="Be Found Out There">
					<h2 className={styles.h2}>Deploy</h2>
					<p className={styles.p}>
						Choose from various platforms where you can host your website for
						free as long as you demand
					</p>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<Image
						className={styles.img}
						src={process.env.NEXT_PUBLIC_URL + "/img/0029.jpg"}
						width={300}
						height={200}
						alt="Image shows a hand holding a web map"
						title="Image shows a hand holding a web map"
					/>
				</div>
				<div
					className={styles.right}
					title="Keep Improving What You Got"
					alt="Keep Improving What You Got">
					<h2 className={styles.h2}>Optimize</h2>
					<p className={styles.p}>
						Use the tools, advanced strategies, and experiments to improve the
						performance of your website
					</p>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<Image
						className={styles.img}
						src={process.env.NEXT_PUBLIC_URL + "/img/0015.png"}
						width={300}
						height={200}
						alt="Image shows a laptop connected to multiple files"
						title="Image shows a laptop connected to multiple files"
					/>
				</div>
				<div
					className={styles.right}
					title="Stay Relevant And Productive"
					alt="Stay Relevant And Productive">
					<h2 className={styles.h2}>Create</h2>
					<p className={styles.p}>
						Drive more web traffic, increase conversion rates, and grow your
						revenue through great web content
					</p>
				</div>
			</div>
		</section>
	);
}

export default WhatWeDo;
