import React from 'react'

const Customise = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center py-12 md:py-2 lg:px-0 px-10 gap-y-5 mt-20 max-w-7xl mx-auto lg:space-x-20">
    <div className="w-full md:w-[700px] lg:h-[500px] h-96 relative">
      <div className="absolute inset-0 bg-[#E9F1FF] ">
      
      </div>
    </div>
    <div>
      <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
      Customise it
      to your needs
      </h1>
      <p className="text-lg text-black/80 mb-8 max-w-lg">
      Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
      </p>
      <button className="px-6 py-3 text-white bg-[#4B9CFF] rounded-lg hover:bg-[#4B9CFF]/90 transition-colors">
      Lets Go →
      </button>
    </div>
  </div>
  )
}

export default Customise
