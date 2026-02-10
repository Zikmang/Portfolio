import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';


import { projects } from '../data/projects';


const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-200">
      <Navbar />
      
      <main className="max-w-7xl mx-auto mt-6 px-6 md:px-12 pt-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;