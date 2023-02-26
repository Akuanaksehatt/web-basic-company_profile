import React from "react";
import { services } from "mock/data";
import SectionTitle from "./SectionTitle";
import { DotCircleIcon } from "utils/Icons";
import SectionSubtitle from "./SectionSubtitle";
import ServiceList from "components/ServiceList";
import SectionDescription from "./SectionDescription";

const ServicesSection: React.FC = () => {
  return (
    <section id="product" className="flex flex-col items-center justify-center py-9 mx-auto w-full px-4 md:px-0">
      <div className="flex flex-col items-center justify-center space-y-4 max-w-2xl">
        <div className="relative flex items-center text-center">
          <div className="flex-shrink-0 absolute left-0 -mr-6 -top-4">
            <DotCircleIcon />
          </div>
          <SectionTitle>Our Best Product</SectionTitle>
        </div>
      </div>
      <div className="py-14 w-full max-w-5xl">
        <ServiceList services={services} />
      </div>
    </section>
  );
};

export default ServicesSection;
