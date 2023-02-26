import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import SectionButton from "./SectionButton";
import { DotCircleIcon } from "utils/Icons";
import SectionSubtitle from "./SectionSubtitle";
import SectionDescription from "./SectionDescription";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="flex items-center justify-center py-9 mx-auto w-full px-4 md:px-0 bg-white-pink">
      <div className="relative w-[670px] h-[540px] flex-shrink-0 hidden lg:block">
        <Image
          src="/svgs/tree.svg"
          blurDataURL="/svgs/tree.svg"
          placeholder="blur"
          layout="fill"
          alt="tree-large-image"
        />
      </div>
      <div className="flex flex-col space-y-8 w-full max-w-xl lg:max-w-md">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 absolute -ml-8">
                <DotCircleIcon />
              </div>
              <SectionTitle>What is about palm sugar</SectionTitle>
            </div>
            <div className="relative w-[100px] h-[100px] block lg:hidden">
              <Image
                src="/svgs/tree.svg"
                blurDataURL="/svgs/tree.svg"
                placeholder="blur"
                layout="fill"
                alt="tree-small-image"
              />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <SectionDescription>
            Palm sugar is a sweetener derived from any variety of palm tree and
            palm sugar is much tastier than white sugar in addition to being
            lower on the glycemic index than both white and brown sugar, but you
            also get vitamin C and important minerals like iron, calcium and
            zinc.
          </SectionDescription>
        </div>
        <div>
          <SectionButton>Learn More</SectionButton>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
