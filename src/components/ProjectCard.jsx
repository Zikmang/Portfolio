import { Link } from "react-router-dom"
const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="group relative block w-full aspect-4/3 overflow-hidden cursor-pointer bg-gray-200">

      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      
      <div className="absolute inset-0 bg-black/80 flex flex-col justify-around items-center text-left p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        
        <div className="transform translate-y-4 space-y-4 transition-transform duration-300 group-hover:translate-y-0">
          
          <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-3 border-b-2 border-white">
            {project.title}
          </h3>
          
          <p className="text-gray-200 text-sm  leading-loose mb-4 line-clamp-3">
            {project.description}
          </p>
          
          <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
            {project.date}
          </p>

        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;