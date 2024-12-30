import React from 'react'
import Image from 'next/image'
import work from '/public/work-together.png'

const Work = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center py-12 md:py-2 lg:px-0 px-10 gap-y-5 mt-20 max-w-7xl mx-auto lg:space-x-28">
    <div>
  
    <Image src={work}alt='work' width={500} height={500}></Image>
    </div>
    
    <div>
      <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
      Work together
      </h1>
      <p className="text-lg text-black/80 mb-8 max-w-lg">
      With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.
      </p>
      <button className="px-6 py-3 text-white bg-[#4B9CFF] rounded-lg hover:bg-[#4B9CFF]/90 transition-colors">
      Try it now →
      </button>
    </div>
  </div>
  )
}

export default Work
