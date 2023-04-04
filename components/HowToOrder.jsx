import React from "react";
import styles from "../styles/HowToOrder.module.css";
import Image from "next/image";

function HowToOrder() {
	return (
		<section className={styles.container} id="howToOrder">
			<h1 className={styles.h1}>
				How can you order website repair and
				<br />
				maintenance services?
			</h1>
			<h2 className={styles.desc}>
				We provide from basic maintenance services to having a
				<br />
				dedicated website manager
			</h2>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<Image
						className={styles.img}
						src={process.env.NEXT_PUBLIC_URL + "/img/0005.png"}
						width={300}
						height={200}
						alt="Image shows a hand with a wrench repairing a cogwheel"
						title="Image shows a hand with a wrench repairing a cogwheel"
					/>
				</div>
				<div
					className={styles.right}
					title="Find Out Where To Start And Go"
					alt="Find Out Where To Start And Go">
					<h2 className={styles.h2}>Hourly Services</h2>
					<p className={styles.p}>When you are not sure where to start or go</p>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<Image
						className={styles.img}
						src={process.env.NEXT_PUBLIC_URL + "/img/0039.png"}
						width={300}
						height={200}
						alt="Image shows a clean calendar"
						title="Image shows a clean calendar"
					/>
				</div>
				<div
					className={styles.right}
					title="Have The Freedom To Choose What You Want"
					alt="Have The Freedom To Choose What You Want">
					<h2 className={styles.h2}>Monthly Services</h2>
					<p className={styles.p}>
						When you do not want a long-term commitment
					</p>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<Image
						className={styles.img}
						src={process.env.NEXT_PUBLIC_URL + "/img/0009.png"}
						width={300}
						height={200}
						alt="Image shows a contract being cut to pieces"
						title="Image shows a contract being cut to pieces"
					/>
				</div>
				<div
					className={styles.right}
					title="Follow Your Own Path Without Restrains"
					alt="Follow Your Own Path Without Restrains">
					<h2 className={styles.h2}>Yearly Services</h2>
					<p className={styles.p}>
						When you want to be more relaxed and productive
					</p>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<Image
						className={styles.img}
						src={process.env.NEXT_PUBLIC_URL + "/img/0025.png"}
						width={300}
						height={200}
						alt="Image shows a series of media projects"
						title="Image shows a series of media projects"
					/>
				</div>
				<div
					className={styles.right}
					title="Be Productive On Your Own Terms"
					alt="Be Productive On Your Own Terms">
					<h2 className={styles.h2}>Project Services</h2>
					<p className={styles.p}>
						When you need technical support on your terms
					</p>
				</div>
			</div>
		</section>
	);
}

export default HowToOrder;
