import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>J. Monagas&trade; Website Repair and Maintenance</title>
				<meta
					name="description"
					content="Since December 2020, J. Monagas&trade; has been providing website repair and maintenance services to his clients in Canada and abroad"
					key="description"
				/>
				<meta
					name="keywords"
					content="monagas, website, repair, maintenance, front-end, back-end, full-stack, copyrighting, proofreading, SEO audits"
					key="keywords"
				/>
				<meta lang="en" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:locale" content="en_US" key="og:locale" />
				<meta property="og:type" content="website" key="og:type" />
				<meta property="og:url" content="https://jmonagas.com" key="og:url" />
				<meta
					property="og:site_name"
					content="J. Monagas&trade; Website Repair and Maintenance"
					key="og:site_name"
				/>
				<meta
					property="og:title"
					content="J. Monagas&trade; Website Repair and Maintenance"
					key="og:title"
				/>
				<meta
					property="og:description"
					content="J. Monagas&trade; Website Repair and Maintenance"
					key="og:description"
				/>
				<meta
					property="og:image"
					content="https://cdn.pixabay.com/photo/2021/10/11/13/12/website-6700615_960_720.png"
					key="og:image"
				/>
				<meta
					property="og:image:alt"
					content="J. Monagas&trade; Website Repair and Maintenance"
					key="og:image:alt"
				/>
				<meta
					property="twitter:card"
					content="summary_large_image"
					key="twitter:card"
				/>
				<meta
					property="twitter:site"
					content="https://jmonagas.com"
					key="twitter:site"
				/>
				<meta
					property="twitter:title"
					content="J. Monagas&trade; Website Repair and Maintenance"
					key="twitter:title"
				/>
				<meta
					property="twitter:description"
					content="J. Monagas&trade; Website Repair and Maintenance"
					key="twitter:description"
				/>
				<meta
					property="twitter:image"
					content="https://cdn.pixabay.com/photo/2021/10/11/13/12/website-6700615_960_720.png"
					key="twitter:image"
				/>
				<meta
					property="twitter:image:alt"
					content="J. Monagas&trade; Website Repair and Maintenance"
					key="twitter:image:alt"
				/>
				<meta name="language" content="en-us" key="language" />
				<meta name="rating" content="General" key="rating" />
				<meta name="distribution" content="Global" key="distribution" />
				<meta
					name="classification"
					content="website, development, front-end, back-end, full-stack, repair, maintenance"
					key="classification"
				/>
				<meta name="robots" content="index, follow, notranslate" key="robots" />
				<meta
					name="author"
					content="J. Monagas&trade; Website Repair and Maintenance"
					key="author"
				/>
				<meta
					name="creator"
					content="Jose G. Monagas, Web Developer Full Stack, Calgary AB Canada"
					key="creator"
				/>
				<meta
					name="publisher"
					content="J. Monagas&trade; Website Repair and Maintenance in English and Spanish"
					key="publisher"
				/>
				<meta
					name="copyright"
					content="Jose G. Monagas, Web Developer Full Stack, Calgary AB Canada"
					key="copyright"
				/>
				<link rel="canonical" type="canonical" href="https://jmonagas.com" />
				<link
					rel="shortcut icon"
					href="https://cdn.pixabay.com/photo/2021/10/11/13/12/website-6700615_960_720.png"
				/>
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
