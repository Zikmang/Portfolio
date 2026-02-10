import { SiReact, SiJavascript, SiPython, SiTailwindcss, SiGit } from 'react-icons/si';

export default function TechStack() {
  const techStack = [
    { name: 'React', icon: SiReact, color: 'hover:text-[#61DAFB]' },
    { name: 'JavaScript', icon: SiJavascript, color: 'hover:text-[#F7DF1E]' },
    { name: 'Python', icon: SiPython, color: 'hover:text-[#3776AB]' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'hover:text-[#06B6D4]' },
    { name: 'Git', icon: SiGit, color: 'hover:text-[#F05032]' },
  ];
  const marqueeList = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <div className="w-full py-12 overflow-hidden">
      <h3 className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-8 text-center md:text-left">
        Technologies
      </h3>

      <div className="relative w-full mx-auto">
        <div className="absolute left-0 top-0 w-24 h-full bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-24 h-full bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          
          {marqueeList.map((tech, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center min-w-25 mr-16 group cursor-default transition-colors duration-300 text-gray-400 ${tech.color}`}
            >
              <tech.icon 
                size={40} 
                className="mb-4 transform transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xs font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 group-hover:text-gray-900 transition-all">
                {tech.name}
              </span>
            </div>
          ))}

        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Move exactly 50% of the width (which covers 2 of the 4 sets) */
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite; /* Slower speed for elegance */
        }
      `}</style>
    </div>
  );
}