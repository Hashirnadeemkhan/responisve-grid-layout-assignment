import React from "react";
import Image from "next/image";
import avatar from "/public/avater.png";
import quote from "/public/Quote.png";
import quoteblue from "/public/Quote-blue.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      name: "Oberon Shaw, MCH",
      position: "Head of Talent Acquisition, North America",
      bgColor: "bg-white",
      textColor: "text-gray-800",
    },
    {
      id: 2,
      text: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      name: "Oberon Shaw, MCH",
      position: "Head of Talent Acquisition, North America",
      bgColor: "bg-blue-500",
      textColor: "text-white",
    },
    {
      id: 3,
      text: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      name: "Oberon Shaw, MCH",
      position: "Head of Talent Acquisition, North America",
      bgColor: "bg-blue-500",
      textColor: "text-white",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          What Our Clients <span className="text-yellow-500">Say</span>
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`w-full max-w-sm p-6 py-16 rounded-lg shadow-md ${testimonial.bgColor}`}
            >
              <div className="flex justify-start">
                {/* Dynamically render the appropriate quote image */}
                {testimonial.bgColor === "bg-white" ? (
                  <Image
                    src={quoteblue}
                    alt="blue quote"
                    height={100}
                    width={100}
                 
                  />
                ) : (
                  <Image
                    src={quote}
                    alt="white quote"
                    height={100}
                    width={100}
               
                  />
                )}
              </div>
              <p
                className={`mt-4 text-lg ${testimonial.textColor} font-medium leading-relaxed text-start mt-10`}
              >
                {testimonial.text}
              </p>
              <hr className="my-4 border-t border-gray-300 mt-10" />
              <div className="flex items-center mt-10">
                <Image
                  src={avatar}
                  alt="avatar"
                  height={100}
                  width={100}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="text-left">
                  <p className={`font-bold ${testimonial.textColor}`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-sm ${testimonial.textColor}`}>
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
