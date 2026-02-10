import { useState, useRef } from "react"; 
import emailjs from '@emailjs/browser';  
import { MdClose } from "react-icons/md";

export default function EmailModal({ onClose }) {
  const form = useRef(); 
  const [formStatus, setFormStatus] = useState('idle'); 

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    emailjs.sendForm(
      'service_zoc1o32', 
      'template_tadlgh7',
      form.current,
      'UynRBOCXkHE1NqUkd'  
    )
      .then((result) => {
          console.log(result.text);
          setFormStatus('success');
      }, (error) => {
          console.log(error.text);
          setFormStatus('error');
      });
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      
     
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

    
      <div className="relative bg-white w-full max-w-lg p-8 md:p-12 shadow-2xl animate-fadeInUp">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
        >
          <MdClose size={24} />
        </button>

        {formStatus === 'success' ? (
          <div className="text-center py-12 space-y-4">
            <h2 className="text-2xl font-bold text-green-600">Message Sent!</h2>
            <p className="text-gray-600">Thanks for reaching out. I'll get back to you soon.</p>
            <button 
              onClick={onClose}
              className="mt-6 px-6 py-2 bg-black text-white text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <h2 className="text-2xl font-bold mb-8">Send a Message</h2>

            {formStatus === 'error' && (
               <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
            )}

            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest uppercase text-gray-500">Name</label>
              <input 
                required 
                type="text" 
                name="user_name" 
                placeholder="Your Name" 
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors placeholder-gray-300" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest uppercase text-gray-500">Email</label>
              <input 
                required 
                type="email" 
                name="user_email" 
                placeholder="your@email.com" 
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors placeholder-gray-300" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest uppercase text-gray-500">Message</label>
              <textarea 
                required 
                rows="4" 
                name="message" 
                placeholder="Tell me about your project..." 
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors placeholder-gray-300 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={formStatus === 'submitting'}
              className="w-full bg-black text-white py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors disabled:bg-gray-400"
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}