import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EmailModal from '../components/EmailModal';
import { MdEmail } from "react-icons/md";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Contact = () => {
const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-200 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-12 md:pt-24 pb-20 grow relative">

        <section className="mb-20 md:mb-32">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
            Let's create something meaningful together.
          </h1>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-gray-200 pt-12">
          
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400">Inquiries</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              I am currently available for freelance projects and open to full-time opportunities.
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7 space-y-12">

            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400">Email</h3>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group flex items-center gap-2 text-2xl md:text-3xl font-serif italic hover:text-blue-600 transition-colors duration-300 w-max text-left"
              >
                <span>zikmanglekmang@gmail.com</span>
                <span className="text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 not-italic">
                  ↗
                </span>
              </button>
              <p className="text-xs text-gray-400">Click to send a message.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400">Socials</h3>
              <div className="flex gap-6 pt-2">
                <button onClick={() => setIsModalOpen(true)} className="text-gray-400 hover:text-red-500 transition-colors">
                  <MdEmail size={28} />
                </button>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                  <SiLinkedin size={26} />
                </a>
                <a href="https://github.com/zikman" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black transition-colors">
                  <SiGithub size={26} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>

      {isModalOpen && (
        <EmailModal onClose={() => setIsModalOpen(false)} />
      )}

      <Footer />
    </div>
  );
};

export default Contact;