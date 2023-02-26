import React from "react";
import { values, shipping, payment } from "mock/data";
import SectionTitle from "./SectionTitle";
import { DotCircleIcon } from "utils/Icons";
import ValueList from "components/ValueList";
import ValueItem from "components/ValueItem";
import SectionSubtitle from "./SectionSubtitle";
import SectionDescription from "./SectionDescription";

const ShipmentSection: React.FC = () => {
  return (
    <section id="benefit" className="flex flex-col items-center justify-center py-9 mx-auto w-full px-4 md:px-0">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="relative flex items-center">
          <div className="flex-shrink-0 absolute right-0 -mr-4">
            <DotCircleIcon />
          </div>
          <SectionTitle>Shipment & Payment</SectionTitle>
        </div>
      </div>
      <div className="max-w-4xl pt-12">
        <SectionDescription>
          Tutorial mendapatkan wanita yang bisa dijadikan istri untuk Muhammad Alifian Aqshol.
        </SectionDescription>
      </div>
      <div className="px-0 sm:px-4 md:px-6 lg:px-10 xl:px-16 py-14 content-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 lg:grap-5 xl:gap-8 w-full">
            {shipping.map((value, i) => (
            <ValueItem key={i} {...value} />
          ))}
        </div>
      </div>
      <div className="max-w-4xl pt-12">
        <SectionDescription>
          Dan untuk payment itu apa ya Tutorial mendapatkan wanita yang
        </SectionDescription>
      </div>
      <div className="px-0 sm:px-4 md:px-6 lg:px-10 xl:px-16 py-14 content-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-3 md:gap-4 lg:grap-5 xl:gap-8 w-full">
            {payment.map((value, i) => (
            <ValueItem key={i} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShipmentSection;
