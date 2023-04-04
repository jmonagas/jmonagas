import Head from "next/head";
import BrandServices from "../components/BrandServices";
import WhatWeDo from "../components/WhatWeDo";
import ServicesArticle from "../components/ServicesArticle";
import ServicesOptions from "../components/ServicesOptions";
import ServicesAccordion from "../components/ServicesAccordion";

export default function Services() {
  return (
    <>
      <Head>
        <title>
          Services J. Monagas&trade; Website Repair and Maintenance Services
        </title>
      </Head>
      <BrandServices />
      <WhatWeDo />
      <ServicesArticle />
      <ServicesOptions />
      <ServicesAccordion />
    </>
  );
}
