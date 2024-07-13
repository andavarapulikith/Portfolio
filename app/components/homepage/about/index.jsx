// @flow strict

import { personalData } from "@/utils/data/personal-data";

function AboutSection() {
  return (
    <div id="about" className="my-3 lg:my-4 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="flex flex-col items-center lg:items-start gap-4">
        <div className="text-center lg:text-left">
          <p className="mb-2 text-[#16f2b3] text-xl font-bold uppercase">
            Who I am?
          </p>
          <div className="text-gray-200 text-sm lg:text-lg pr-16">
            {personalData.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
