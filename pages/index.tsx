import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import Layout from "layouts/default";

const HeroSection = dynamic(() => import("sections/HeroSection"), {
  ssr: true,
});

const AboutSection = dynamic(() => import("sections/AboutSection"), {
  ssr: true,
});

const ValuesSection = dynamic(() => import("sections/ValuesSection"), {
  ssr: true,
});

const ProjectSection = dynamic(() => import("sections/ProjectSection"), {
  ssr: true,
});

const ServicesSection = dynamic(() => import("sections/ServicesSection"), {
  ssr: true,
});

const VisionSection = dynamic(() => import("sections/VisionSection"), {
  ssr: true,
});

const FeedbackSection = dynamic(() => import("sections/FeedbackSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("sections/FaqSection"), {
  ssr: true,
});

const ShipmentSection = dynamic(() => import("sections/ShipmentSection"), {
  ssr : true,
});

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Osomware</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroSection />
        <AboutSection />
        <ValuesSection />
        <ProjectSection />
        <ServicesSection />
        <ShipmentSection />
        <VisionSection />
        <FaqSection />
        <FeedbackSection />
      </Layout>
    </React.Fragment>
  );
};

export default Index;
