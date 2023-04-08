import React from "react";
import styles from "../styles/WhyContractUs.module.css";
import Image from "next/image";

function WhyContractUs() {
	return (
		<>
			<section className={styles.container} id="why_contract_us">
				<div className={styles.wrapper}>
					<div className={styles.left}>
						<Image
							className={styles.img}
							src={process.env.NEXT_PUBLIC_URL + "/img/jmonagas.png"}
							width={400}
							height={400}
							alt="Image shows the Logo of J.Monagas&trade;"
							title="Image shows the Logo of J.Monagas&trade;"
						/>
					</div>
					<div className={styles.right}>
						<h2 className={styles.h2}>Why contract us</h2>
						<p className={styles.p}>
							With a solid, professional background in Applied Linguistics, we
							are down to earth and incorporate an unpretentious approach to
							frontend and backend website design and maintenance plus SEO
							audits along with search engine optimization under best practices
							for optimum results
						</p>
						<h3 className={styles.h3}>Jose G. Monagas</h3>
						<p className={styles.title}>Creative Web Developer, Full Stack</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default WhyContractUs;
