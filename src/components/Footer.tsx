import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Linkedin } from 'lucide-react'
 import group from "/public/Group.png"; 
  import window from "/public/Window.png"; 
   import androidLogo from "/public/android-logo.png"
   import logo from "/public/logo.png"

const FooterSection=()=> {
  return (
    <div className="bg-[#002B59] text-white">
      {/* CTA Section */}
      <div className="text-center py-20">
        <h2 className="text-5xl font-bold mb-4">
          Try Whitepace<br />today
        </h2>
        <div className="space-y-6">
          <p className="text-lg text-white/80">
            Get started for free.<br />
            Add your whole team as your needs grow.
          </p>
          <button className="px-8 py-3 bg-[#4B9CFF] rounded-lg text-sm font-medium hover:bg-[#4B9CFF]/90 transition-colors">
            Try Taskey free →
          </button>
          <p className="text-sm text-white/80">
            On a big team? Contact sales
          </p>
          <div className="flex justify-center items-center gap-4 pt-2">
            <Image 
              src={group}
              alt="Apple" 
              width={60} 
              height={60}
              className="rounded"
            />
            <Image 
              src={window}
              alt="Windows" 
              width={60} 
              height={60}
              className="rounded"
            />
            <Image 
              src={androidLogo}
              alt="Android" 
              width={60} 
              height={60}
              className="rounded"
            />
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 text-xl font-bold">
                <Image 
                  src={logo}
                  alt="Whitepace Logo" 
                  width={32} 
                  height={32} 
                />
                whitepace
              </div>
              <p className="mt-4 text-sm text-white/60 pr-8">
                whitepace was created for the new ways we live and work. We make a better workspace around the world
              </p>
            </div>

            {/* Product Links */}
            <div className="md:col-span-2">
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><Link href="#">Overview</Link></li>
                <li><Link href="#">Pricing</Link></li>
                <li><Link href="#">Customer stories</Link></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="md:col-span-2">
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Guides & tutorials</Link></li>
                <li><Link href="#">Help center</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="md:col-span-2">
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><Link href="#">About us</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Media kit</Link></li>
              </ul>
            </div>

            {/* Try It Today Section */}
            <div className="md:col-span-2">
              <h4 className="font-bold mb-4">Try It Today</h4>
              <p className="text-sm text-white/60 mb-4">
                Get started for free. Add your whole team as your needs grow.
              </p>
              <button className="px-6 py-2 bg-[#4B9CFF] rounded text-sm font-medium hover:bg-[#4B9CFF]/90 transition-colors">
                Start today →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6 text-sm text-white/60">
                <button className="flex items-center gap-2">
                  English
                </button>
                <Link href="#">Terms & privacy</Link>
                <Link href="#">Security</Link>
                <Link href="#">Status</Link>
              </div>

              <div className="text-sm text-white/60">
                ©2021 Whitepace LLC.
              </div>

              <div className="flex items-center gap-4">
                <Link href="#" className="text-white/60 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-white/60 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-white/60 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSection