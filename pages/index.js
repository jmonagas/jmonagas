import Head from "next/head";
import BrandIntro from "../components/BrandIntro.jsx";
import Introduction from "../components/Introduction.jsx";
import MainReasons from "../components/MainReasons.jsx";
import IntroArticle from "../components/IntroArticle.jsx";
import WhyContractUs from "../components/WhyContractUs.jsx";
import Deadline from "../components/Deadline.jsx";

export default function About() {
  return (
    <>
      <Head>
        <title>
          About J. Monagas&trade; Website Repair and Maintenance Services
        </title>
      </Head>
      <BrandIntro />
      <Introduction />
      <MainReasons />
      <IntroArticle />
      <WhyContractUs />
      <Deadline />
    </>
  );
}
