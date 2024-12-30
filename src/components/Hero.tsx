

export function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center py-12 md:py-2 lg:px-0 px-10 gap-y-5 mt-20 lg:-space-x-28  max-w-7xl mx-auto">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Get More Done with whitepace
        </h1>
        <p className="text-lg text-white/80 mb-8 max-w-lg">
          Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
        </p>
        <button className="px-8 py-3 text-white bg-[#4B9CFF] rounded-lg hover:bg-[#4B9CFF]/90 transition-colors">
          Try Whitepace free →
        </button>
      </div>
      <div className="w-full md:w-[824px] lg:h-[549px] h-96 relative">
        <div className="absolute inset-0 bg-[#E9F1FF] ">
        
        </div>
      </div>
    </div>
  )
}

