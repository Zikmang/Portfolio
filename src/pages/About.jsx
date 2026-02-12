import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TechStack from '../components/TechStack';
import profilePic from '../assets/profile-pic.png'
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-200">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
         
          <div className="md:col-span-5">
            <div className="sticky top-32">
              <img 
                src={profilePic}
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-16">

            <section>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Hi, I'm Zikmang.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-2">
                I'm a frontend engineer who enjoys building practical, well-structured web interfaces that solve real problems.
                I care about how applications are built, emphasizing reusable components and clear data models alongside clean design.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                I deliver clear value to every project through thoughtful implementation, meticulous attention to detail, and collaborative execution. I'm driven by challenging work that promotes growth, creativity, and meaningful innovation.
                 My goal is to integrate design and engineering to develop effective, user-centered software applications.
              </p>
            </section>

            <hr className="border-gray-200" />
            <TechStack />
            <hr className="border-gray-200" />

            <section>
              <h3 className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-6">
                Connect
              </h3>
              <div className="flex gap-6 text-gray-600">
                <a 
                  href="mailto:zikmanglekmang@gmail.com"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  <MdEmail size={26} />
                </a>
                <a
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-300"
                >
                  <SiLinkedin size={24} />
                </a>
                <a 
                  href="https://github.com/Zikmang" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-400 hover:text-black transition-colors duration-300"
                >
                  <SiGithub size={24} />
                </a>
              </div>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;