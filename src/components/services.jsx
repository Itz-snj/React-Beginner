import { ArrowRight } from "lucide-react";
import s1 from '../assests/s1.png'
import s2 from '../assests/s2.png'
import s3 from '../assests/s3.png'
import s4 from '../assests/s4.png'
import s5 from '../assests/s5.png'
import s6 from '../assests/s6.png'


const services = [
  {
    title: "Search engine ",
    title2: "optimization",
    image: s2, // Replace with actual image
    bg: "bg-gray-100",
    textBg: "bg-green-500 text-white"
  },
  {
    title: "Pay-per-click ",
    title2: "advertising",
    image: s4,
    bg: "bg-green-300",
    textBg: "bg-black text-white"
  },
  {
    title: "Social Media ",
    title2: "Marketing",
    image: s1,
    bg: "bg-black text-white",
    textBg: "bg-white text-black"
  },
  {
    title: "Email ",
    title2: "Marketing",
    image: s5,
    bg: "bg-gray-100",
    textBg: "bg-green-500 text-white"
  },
  {
    title: "Content",
    title2: "Creation",
    image: s3,
    bg: "bg-green-300",
    textBg: "bg-black text-white"
  },
  {
    title: "Analytics and",
    title2: "Tracking",

    image: s6,
    bg: "bg-black text-white",
    textBg: "bg-white text-black"
  }
];

const Services = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-start">
        <h2 className="text-3xl md:text-4xl font-medium rounded-xl p-3 w-40 mb-4 md:mb-0 bg-green-300 text-center">
          Services
        </h2>
        <p className="text-black dark:text-white text-lg md:text-xl md:ml-6 md:mt-2 text-center md:text-left">
  At our digital marketing agency, we offer a range of services to <br className="hidden md:block" />
  help businesses grow and succeed online. These services include:
</p>

      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl transition-transform duration-200 ease-in shadow-md flex flex-col justify-between ${service.bg} hover:scale-105 hover:shadow-lg`}
          >
            {/* Service Title & Image */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className={`px-3 py-1 text-lg md:text-xl font-medium rounded ${service.textBg}`}>
                  {service.title}
                </span>
                <span className={`px-3 py-1 text-lg md:text-xl font-medium rounded -mt-1 ${service.textBg}`}>
                  {service.title2}
                </span>
              </div>
              <img src={service.image} alt={service.title} className="w-40 md:w-48 h-32 md:h-40 object-contain" />
            </div>

            {/* Learn More Button */}
            <div className="flex justify-start p-4">
              <button className="text-lg font-bold flex items-center space-x-2 hover:underline">
                <span>Learn more</span>
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
