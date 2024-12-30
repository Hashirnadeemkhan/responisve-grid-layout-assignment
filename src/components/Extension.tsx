import React from 'react'

const Extension = () => {
  return (
    <div className=' bg-[#002B59] '>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center py-12 md:py-2 lg:px-0 px-10 gap-y-5 mt-20  max-w-7xl mx-auto lg:space-x-20">
      <div className='mt-20 mb-20'>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Use as Extension
        </h1>
        <p className="text-lg text-white/80 mb-8 max-w-lg">
        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
        </p>
        <button className="px-8 py-3 text-white bg-[#4B9CFF] rounded-lg hover:bg-[#4B9CFF]/90 transition-colors">
          Lets Go →
        </button>
      </div>
      <div className="w-full md:w-[600px] lg:h-[400px] h-96 relative mt-20 mb-20">
        <div className="absolute inset-0 bg-[#C4DEFD] ">
        
        </div>
      </div>
    </div>
    </div>
  )
}

export default Extension
