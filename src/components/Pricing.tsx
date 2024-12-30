// components/Pricing.js
export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Capture ideas and find them quickly",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard",
        "Connect primary Google Calendar account",
      ],
      buttonColor: "white",
      bgColor: "bg-white",
      textColor: "text-gray-800",
    },
    {
      name: "Personal",
      price: "$11.99",
      description: "Keep home and family on track",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications",
      ],
      buttonColor: "blue",
      bgColor: "bg-[#043873]",
      textColor: "text-white",
    },
    {
      name: "Organization",
      price: "$49.99",
      description: "Capture ideas and find them quickly",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications",
      ],
      buttonColor: "white",
      bgColor: "bg-white",
      textColor: "text-gray-800",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-black mb-6">Choose Your Plan</h2>
        <p className="text-center text-black mb-12">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity,
          we have the right plan for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className={`border border-yellow-300 rounded-lg p-6 shadow ${plan.bgColor}`}>
              <h3 className={`text-lg font-semibold ${plan.textColor}`}>{plan.name}</h3>
              <p className={`text-4xl font-bold mt-4 ${index === 1 ? "text-[#FFE492]" : plan.textColor}`}>{plan.price}</p>
              <p className={`mt-4 ${plan.textColor}`}>{plan.description}</p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={`flex items-center ${plan.textColor}`}>
                    <span className="text-green-500 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={` mt-6 py-2 px-6 rounded ${
                  plan.buttonColor === "white"
                    ? "bg-white border border-yellow-300 text-blue-600 hover:bg-gray-200"
                    : "bg-[#4F9CF9] text-white "
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
