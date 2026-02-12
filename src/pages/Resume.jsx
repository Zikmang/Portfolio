import { Download } from 'lucide-react'; 
const Resume = () => {
  const resumeImage = "/preview.jpg"; 
  const resumePdf = "/Zikmang-Isah-Lekmang-Resume.pdf"; 

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">My Resume</h1>
        <p className="text-gray-600 mb-6">
          View my qualifications below or download a copy.
        </p>
        
        {/* Download Button */}
        <a 
          href={resumePdf} 
          download="Zikmang_Resume.pdf"
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all shadow-lg font-medium"
        >
          <Download size={20} />
          Download PDF
        </a>
      </div>

      {/* Resume Image Preview */}
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-200">
        <img 
          src={resumeImage} 
          alt="Resume Preview" 
          className="w-full h-auto"
        />
      </div>
      
    </div>
  );
};

export default Resume;