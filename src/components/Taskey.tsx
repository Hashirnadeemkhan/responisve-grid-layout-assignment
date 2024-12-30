// components/HeroSection.js
import Image from "next/image";
import element from "/public/Element.png"
export default function Taskey() {
    return (
      <section>
        {/* Top Section */}
        <div className="bg-blue-900 text-white py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Your work, everywhere you are
            </h1>
            <p className="text-lg mb-8">
              Access your notes from your computer, phone, or tablet by
              synchronizing with various services, including WhiteSpace, Dropbox,
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android, and iOS. A terminal app is also available!
            </p>
            <button className="bg-[#4F9CF9] text-white py-2 px-6 rounded hover:bg-blue-700">
              Try Taskey →
            </button>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="bg-white py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row ">
            <div className="text-start mb-12 space-y-5">
              <h2 className="text-4xl font-bold text-start">
                100% <span className="text-blue-900">your data</span>
              </h2>
              <p className="text-lg text-gray-600 mt-4 text-start">
                The app is open-source, and your notes are saved to an open
                format, so you will always have access to them. Uses End-To-End
                Encryption (E2EE) to secure your notes and ensure no one but
                yourself can access them.
              </p>
              <button className="bg-[#4F9CF9] text-white py-2 px-6 rounded hover:bg-blue-700">
              Try Taskey →
            </button>
            </div>
            <div>
                </div>
              {/* Dotted Diagram */}
              
        <Image src={element} alt="ele" height={500} width={500}></Image>       
            
            </div>
          </div>
        
      </section>
    );
  }
  

  