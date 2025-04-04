import React from "react";
import { motion } from "framer-motion";
import Case from '../assests/news.png';

const caseStudies = [
  {
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
  },
  {
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first-page ranking for key keywords and a 200% increase in organic traffic."
  },
  {
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-24 py-12">
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gray-200 p-8 flex flex-col md:flex-row justify-between items-center rounded-3xl shadow-md text-center md:text-left"
      >
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-2 text-black">Let’s make things happen</h2>
          <p className="text-gray-600 mt-2 max-w-lg mb-4">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <button className="mt-2 bg-black w-full md:w-60 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-200">
            Get your free proposal
          </button>
        </div>
        <div className="mt-6 md:mt-0">
          <img src={Case} alt="Case Study" className="w-48 md:w-64 h-auto" />
        </div>
      </motion.div>

      {/* Case Studies Section Title */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-16"
      >
        <h3 className="text-xl font-bold flex items-center">
          <span className="bg-green-500 text-black px-3 py-1 rounded mr-2">Case Studies</span>
          <span>Explore Real-Life Examples of Our Proven Digital Marketing Success</span>
        </h3>
      </motion.div>

      {/* Case Studies Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-black text-white p-6 rounded-2xl transition-transform hover:scale-105 duration-300 ease-in shadow-lg"
          >
            <p>{study.description}</p>
            <a href="#" className="text-green-400 mt-2 inline-block hover:underline">
              Learn more →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
