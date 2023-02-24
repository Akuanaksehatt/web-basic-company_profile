import React from "react";
import { values } from "mock/data";
import SectionTitle from "./SectionTitle";
import { DotCircleIcon } from "utils/Icons";
import ValueList from "components/ValueList";
import SectionSubtitle from "./SectionSubtitle";
import SectionDescription from "./SectionDescription";

const ValuesSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-9 mx-auto w-full px-4 md:px-0">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="relative flex items-center">
          <div className="flex-shrink-0 absolute right-0 -mr-4">
            <DotCircleIcon />
          </div>
          <SectionTitle>Benefit from Palm Sugar</SectionTitle>
        </div>
      </div>
      <div className="max-w-4xl pt-12">
        <SectionDescription>
          palm sugar as it is sometimes called, is a natural sugar made from the
          sugary circulating fluid of the coconut plant called sap. Talking
          about sugar being good for health, then natural sugar or stevia is the
          best. They have many health benefits to offer apart from weight loss.
          It has all the essential nutrients, vitamins, and minerals that are
          essential for your body. While stevia is also known to be the best
          sugar for weight loss.
        </SectionDescription>
      </div>
      <div className="px-0 sm:px-4 md:px-6 lg:px-10 xl:px-16 py-14">
        <ValueList values={values} />
      </div>
    </section>
  );
};

export default ValuesSection;
