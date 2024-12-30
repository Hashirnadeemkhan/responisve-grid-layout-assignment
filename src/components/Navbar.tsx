// import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import logo from "/public/logo.png"


export function Navbar() {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between  max-w-7xl mx-auto">
      <div className="flex items-center gap-12">

         <div className="flex items-center gap-2 text-2xl font-bold text-white">
                <Image 
                  src={logo}
                  alt="Whitepace Logo" 
                  width={32} 
                  height={32} 
                />
                whitepace
              </div>
        
        <div className="hidden md:flex items-center gap-8">
          <NavItem text="Products" />
          <NavItem text="Solutions" />
          <NavItem text="Resources" />
          <NavItem text="Pricing" />
        </div>
      </div>

      <div className="flex items-center gap-4 ">
        <button className="px-6 py-4 text-sm font-medium text-blue-900 bg-[#FFE492] rounded-lg hover:bg-[#FFD43B]/90 transition-colors">
          Login
        </button>
        <button className="hidden md:flex px-5 py-4 text-sm font-medium text-white bg-[#4B9CFF] rounded-lg hover:bg-[#4B9CFF]/90 transition-colors">
          Try Whitepace free →
        </button>
      </div>
    </nav>
  )
}

function NavItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-1 text-white/80 hover:text-white cursor-pointer">
      <span className="text-sm font-medium">{text}</span>
      <ChevronDown className="w-4 h-4" />
    </div>
  )
}

