import Head from "next/head";
import BrandContact from "../components/BrandContact.jsx";
import ContactAccordion from "../components/ContactAccordion.jsx";
import HowToContact from "../components/HowToContact.jsx";
import HowToOrder from "../components/HowToOrder.jsx";
import LetUsProceed from "../components/LetUsProceed.jsx";
import ChooseServices from "../components/ChooseServices.jsx";
import EffectiveWebsites from "../components/EffectiveWebsites.jsx";
import ServicesBreakdown from "../components/ServicesBreakdown.jsx";

export default function Contact() {
	return (
		<>
			<Head>
				<title>
					Contact J. Monagas&trade; Website Repair and Maintenance Services
				</title>
			</Head>
			<BrandContact />
			<HowToOrder />
			<ContactAccordion />
			<HowToContact />
			<LetUsProceed />
			<ChooseServices />
			<EffectiveWebsites />
			<ServicesBreakdown />
		</>
	);
}
