// @flow strict
import Image from "next/image";
import React from 'react';
import Marquee from "react-fast-marquee";

function Accomplishments() {
  return (
    <div id="accomplishments" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Accomplishments
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="w-full overflow-hidden">
          <Marquee
            gradient={false}
            speed={100}
            pauseOnHover={true}
            pauseOnClick={true}
            direction="left"
          >
            <div className="flex space-x-8 mr-2 ml-2">
              <div className="p-5 bg-[#1a1443] rounded-lg shadow-lg h-60 w-96">
                <h3 className="text-lg font-semibold text-[#16f2b3]">Competitive Programming</h3>
                <p className="text-base sm:text-xl mb-2">
                  Solved 300+ Leetcode and 250+ Geeks for Geeks challenges.
                </p>
                <p className="text-base">
                  Achieved 3-star coder status on CODECHEF and 1204 rating on CODEFORCES, highlighting strong proficiency in algorithms.
                </p>
              </div>

              <div className="p-5 bg-[#1a1443] rounded-lg shadow-lg h-60 w-96">
                <h3 className="text-lg font-semibold text-[#16f2b3]">Machine Learning</h3>
                <p className="text-base sm:text-xl mb-2">
                  Amazon ML Summer School 2023 participant, committed to advancing Machine Learning expertise.
                </p>
                <p className="text-base">
                  Achieved significant improvement in practical skills, covering model building and applying theory to enhance real-world ML applications.
                </p>
              </div>

              <div className="p-5 bg-[#1a1443] rounded-lg shadow-lg h-60 w-96">
                <h3 className="text-lg font-semibold text-[#16f2b3]">Web Development</h3>
                <p className="text-base sm:text-xl mb-2">
                  Winner of the SPEEDUI competition conducted by IIIT Sri City.
                </p>
                <p className="text-base">
                  Demonstrated strong skills in web development and UI/UX design throughout the competition.
                </p>
              </div>
            </div>

            {/* Add empty space for gap */}
            <div className="flex space-x-8 w-60"></div>

          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Accomplishments;
