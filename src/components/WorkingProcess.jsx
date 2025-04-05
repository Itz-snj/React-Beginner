import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals, target audience, and marketing efforts to tailor our services to best fit your needs.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    description:
      "We conduct detailed market research to develop a custom digital strategy tailored to your business objectives.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "We execute the planned strategy using effective tools and platforms, ensuring each component aligns with your brand vision.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description:
      "We closely monitor the performance of all campaigns and make real-time adjustments to maximize results.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    description:
      "You receive regular, transparent updates on progress and performance through easy-to-understand reports.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    description:
      "We analyze data to continually enhance and refine our approach, ensuring your growth never stops.",
  },
];

const WorkingProcess = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="px-6 sm:px-8 py-12 dark:bg-black dark:text-white transition-all duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:px-16 lg:gap-8">
        <span className="flex flex-col md:flex-row items-center text-4xl md:text-3xl font-medium">
          <h2 className="bg-green-300 dark:bg-black text-black dark:text-white rounded-xl md:rounded-r-none p-3">
            Our Working
          </h2>
          <h2 className="bg-green-300 dark:bg-black text-black dark:text-white rounded-xl md:rounded-l-none p-3">
            Process
          </h2>
        </span>
        <p className="text-black dark:text-white text-lg md:text-base lg:text-lg text-center md:text-left lg:max-w-[50%] lg:pr-32 pb-4">
          Step-by-Step Guide to Achieving{" "}
          <span className="md:block">Your Business Goals</span>
        </p>
      </div>

      {/* Accordion Steps */}
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{ height: "auto" }}
          transition={{ duration: 0.4 }}
          className={`border p-8 max-w-full md:mx-24 border-b-4 mt-8 rounded-[60px] md:rounded-[50px] lg:rounded-xl transition-all duration-300
            ${activeIndex === index ? "bg-green-300 dark:bg-black text-black dark:text-white" : "bg-[#F3F3F3] dark:bg-black text-black dark:text-white"}
            border-black dark:border-white`}
        >
          <button
            onClick={() => handleToggle(index)}
            className="flex items-center justify-between w-full py-3 text-left text-lg font-medium"
          >
            <div className="flex items-center gap-4">
              <p className="font-medium text-3xl">{step.number}</p>
              <p className="font-medium text-[18px] md:text-lg">{step.title}</p>
            </div>
            <motion.div
              className="w-8 h-8 flex items-center justify-center rounded-full text-3xl font-bold shadow-md border p-4 border-black dark:border-white"
              initial={{ rotate: 0 }}
              animate={{ rotate: activeIndex === index ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeIndex === index ? "−" : "+"}
            </motion.div>
          </button>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="py-4 mt-4 border-t-2 border-black dark:border-white rounded-b-3xl lg:rounded-b-xl"
              >
                <p className="text-black dark:text-white">{step.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </section>
  );
};

export default WorkingProcess;
