import Image from 'next/image';
import apple from "/public/apple.png"
import apps from "/public/apps.png"
import google from "/public/Google.png"
import slack from "/public/slack.png"
import microsoft from "/public/Microsoft.png"

export default function Sponsers() {
  return (
    <div className="font-sans ">
      {/* Sponsors Section */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Our sponsors <span className="text-yellow-500">_</span>
        </h2>
        <div className="flex justify-center items-center gap-8">
          <Image
            src={apple}
            alt="Apple"
            width={80}
            height={80}
          />
          <Image
            src={microsoft}
            alt="Microsoft"
            width={80}
            height={80}
          />
          <Image
            src={slack}
            alt="Slack"
            width={80}
            height={80}
          />
          <Image
            src={google}
            alt="Google"
            width={80}
            height={80}
          />
        </div>
      </section>

      {/* Integration Section */}
      <div className='bg-[#043873]'>
      <section className=" text-white py-16 max-w-7xl mx-auto">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
          {/* Image Section */}
          <div className="relative flex-shrink-0 w-full lg:w-1/2">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-3 flex justify-center">
               <Image src={apps} alt='app' height={500} width={500}></Image>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4">
              Work with Your Favorite Apps Using Whitespace
            </h2>
            <p className="text-lg mb-6">
              Whitespace teams up with your favorite software. Integrate with
              over 1000+ apps with Zapier to have all the tools you need for
              your project success.
            </p>
            <a
              href="#"
              className="bg-[#4F9CF9] hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            >
              Read more →
            </a>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
