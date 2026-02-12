// pages/ProjectDetail.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white font-sans">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link 
              to="/" 
              className="text-gray-600 hover:text-black transition-colors underline"
            >
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const getNextProjectId = () => {
    return project.id === projects.length ? 1 : project.id + 1;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-200">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        
        {/* HEADER SECTION */}
        <header className="max-w-4xl mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* INFO GRID */}
        <section 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gray-200 py-8 mb-20"
          aria-label="Project information"
        >
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
              Role
            </h3>
            <p className="text-sm font-medium">{project.role}</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
              Timeline
            </h3>
            <p className="text-sm font-medium">{project.date}</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
              Tools
            </h3>
            <p className="text-sm font-medium">{project.tools.join(", ")}</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
              Context
            </h3>
            <p className="text-sm font-medium">{project.context}</p>
          </div>
        </section>

        {/* HERO IMAGE */}
        <figure className="w-full aspect-video bg-gray-100 mb-20 md:mb-32 overflow-hidden rounded-lg">
          <img 
            src={project.imageUrl} 
            alt={`${project.title} hero image`}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* CHALLENGE SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-24 md:mb-32">
          <div className="md:col-span-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
              {project.sections.challenge.title}
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6">
            {project.sections.challenge.paragraphs.map((p, index) => (
              <p key={index} className="text-lg text-gray-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </section>

       {/* GALLERY */}
        <section 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-24 md:mb-32"
          aria-label="Project gallery"
        >
          {project.gallery.map((img) => (
            <figure 
              key={img.id}
              className="w-full bg-gray-100 overflow-hidden rounded-lg"
            >
              <img 
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                src={img.imageUrl} 
                alt={`${project.title} - image ${img.id}`}
              />
            </figure>
          ))}
        </section>

        {/* SOLUTION SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-20">
          <div className="md:col-span-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
              {project.sections.solution.title}
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-6 mb-8">
              {project.sections.solution.paragraphs.map((p, index) => (
                <p key={index} className="text-lg text-gray-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            
            {/* PROJECT LINKS */}
            {(project.liveUrl) && (
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3  text-orange-800 text-sm font-bold uppercase tracking-widest hover:text-orange-300 transition-colors rounded"
                  >
                    View Project
                    <span aria-hidden="true">→</span>
                  </a>
                )}
                {/* {project.codeUrl && (
                  <a 
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-black text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors rounded"
                  >
                    View Code
                    <span aria-hidden="true">→</span>
                  </a>
                )} */}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* PROJECT NAVIGATION */}
      <nav 
        className="border-t border-gray-200"
        aria-label="Project navigation"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link 
            to="/" 
            className="text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-black transition-colors flex items-center gap-2 group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform duration-300">
              ←
            </span>
            Back to Home
          </Link>
          
          <Link 
            to={`/project/${getNextProjectId()}`}
            className="text-sm font-bold tracking-widest uppercase text-black hover:text-gray-600 transition-colors flex items-center gap-2 group"
          >
            Next Project
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </nav>

      <Footer />
    </div>
  );
};

export default ProjectDetail;