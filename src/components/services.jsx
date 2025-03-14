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
    <section className="px-8 py-12">
      <div className="flex flex-row  ">
        <h2 className=" text-4xl text-center  font-medium rounded-xl p-3 w-40 m-24 mb-4 bg-green-300">Services</h2>
        <p className="text-black mb-8 mt-24 -ml-12 text-xl">
          At our digital marketing agency, we offer a range of services to <br></br> help businesses grow and
          succeed online. These services include:
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 m-24 ">
        {services.map((service, index) => (
          <div
          key={index}
          className={`p-6 rounded-4xl m-4 transition-transform duration-200 ease-in shadow-md flex flex-col justify-between ${service.bg} hover:scale-110 hover:shadow-lg`}
        >
        
            <div className="flex flex-row justify-between">
              <div className="flex flex-col ml-4">
                <span className={`w-auto h-auto px-3 py-1 text-xl font-medium rounded ${service.textBg}`}>{service.title}</span>
                <span className={`w-auto h-auto px-3 py-1 text-xl font-medium rounded -mt-1 ${service.textBg}`}>{service.title2}</span>
              </div>
              <div className="mt-4 mr-6">
                <img src={service.image} alt={service.title} className="w-52 h-40 mx-auto" />
              </div>
            </div>
            <div className="flex justify-start p-4">
              <button className="text-lg font-bold flex  space-x-2">
                <span>Learn more</span> <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
