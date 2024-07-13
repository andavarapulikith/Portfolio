import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaPlay } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { name, description, tags, code, demo, image } = project;

  return (
    <div className="group w-full flex flex-col items-center justify-center relative overflow-hidden px-3 py-4 bg-gradient-to-r from-[#281e57] to-[#201435] shadow-2xl rounded-lg border border-[#1a1443] transform transition-all duration-500 hover:scale-105">
      <div className="w-full h-48 overflow-hidden rounded-t-lg">
        <Image
          src={image}
          alt={name}
          width={300}
          height={200}
          className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <div className="w-full p-4 flex flex-col items-center opacity-0 animate-fadeIn">
        <h3 className="text-[#EFF3F4] font-semibold text-lg text-center">{name}</h3>
        <p className="text-[#EFF3F4] text-sm text-center">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2 opacity-0 animate-slideUp">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-800 text-white text-xs px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-around w-full mt-4">
          <Link href={demo} target='_blank' className="flex justify-center items-center w-8 h-8 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41] transition-transform transform hover:scale-125 duration-300">
            <FaPlay />
          </Link>
          <Link href={code} target='_blank' className="flex justify-center items-center w-8 h-8 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41] transition-transform transform hover:scale-125 duration-300">
            <FaCode />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
