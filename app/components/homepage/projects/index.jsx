// components/homepage/skills/projects.jsx

import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';
const Projects = () => {
  return (
    <>
    <div id='projects' className="relative z-50 my-12 lg:my-24 px-4">
      <div className="sticky top-10 mb-8">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
    <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="https://github.com/andavarapulikith?tab=repositories"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
      </>
  );
};

export default Projects;
