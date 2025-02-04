// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";

function Skills() {
  const categories = {
    Languages: ["C++", "Python", "Java","C"], // Replace with actual skills
    "Web Technologies": ["HTML", "CSS","JavaScript", "React", "nodejs","tailwind","bootstrap"], // Replace with actual skills
    "Data bases":["mongodb","mysql"],
    "Machine Learning": ["TensorFlow", "PyTorch","numpy"], // Replace with actual skills
    Others: ["Git", "Docker","aws"], // Replace with actual skills
  };

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="flex flex-col gap-10 my-12">
        {Object.entries(categories).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-[#16f2b3] text-2xl mb-2 font-bold ">{category}</h3>
            <div className="flex flex-wrap gap-6">
              {skills.map((skill) => (
                <div
                  className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 rounded-lg group relative hover:scale-[1.05] cursor-pointer"
                  key={skill}
                >
                  <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                    <div className="flex justify-center">
                      <div className="w-3/4">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 p-6">
                      <div className="h-8 sm:h-10">
                        <Image
                          src={skillsImage(skill)?.src}
                          alt={skill}
                          width={40}
                          height={40}
                          className="h-full w-auto rounded-lg"
                        />
                      </div>
                      <p className="text-white text-sm sm:text-lg">{skill}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
