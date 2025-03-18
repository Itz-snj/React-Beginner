import React, { useState } from "react";


const steps = [
    {
        number: "01",
        title: "Consultation",
        description: "During the initial consultation, we will discuss your business goals, target audience, and marketing efforts to tailor our services to best fit your needs.",
    },
    {
        number: "02",
        title: "Research and Strategy Development",
        description: "",
    },
    {
        number: "03",
        title: "Implementation",
        description: "",
    },
    {
        number: "04",
        title: "Monitoring and Optimization",
        description: "",
    },
    {
        number: "05",
        title: "Reporting and Communication",
        description: "",
    },
    {
        number: "06",
        title: "Continual Improvement",
        description: "",
    },
];

const WorkingProcess = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }; return (
        <section className="px-6 sm:px-8 py-12">

            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 md:px-16 lg:gap-8">
                <span className="flex flex-col md:flex-row justify-center md:ml-8 items-center text-4xl md:bg-green-300 md:rounded-xl font-medium">
                    <h2 className="bg-green-300 rounded-xl md:rounded-r-0 p-3 md:whitespace-nowrap">Our Working</h2>
                    <h2 className="bg-green-300 rounded-xl md:rounded-l-0 p-3">Process</h2>
                </span>


                <p className="text-black text-lg text-center md:text-left md:self-center lg:self-start lg:max-w-[50%] lg:pr-32 pb-4">
                    Step-by-Step Guide to Achieving <span className="md:block">Your Business Goals</span>
                </p>
            </div>

            {steps.map((step, index) =>
                <div
                    key={index}
                    className={`border bg-[#F3F3F3] p-8 max-w-full md:mx-24  border-b-4 border-black mt-8 rounded-[60px] md:rounded-[50px] lg:rounded-xl transition-all duration-300
                 ${activeIndex === index ? "bg-green-300" : "bg-[#F3F3F3]"}`}
                >
                    <button
                        onClick={() => handleToggle(index)}
                        className="flex flex-row items-center justify-between w-full py-3 text-left text-lg font-medium"
                    >
                        <div className="flex flex-row items-center gap-4">
                            <p className="font-medium text-3xl">{step.number}</p>
                            <p className="font-medium text-[18px] md:text-lg">{step.title}</p>
                        </div>
                        <div
                            className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 text-3xl font-bold shadow-md ${activeIndex === index ? "bg-[#F3F3F3] text-black border-1 p-4 border-black" : "bg-[#F3F3F3] border-1 p-4 text-black border-black"}`}
                        >
                            {activeIndex === index ? "−" : "+"}
                        </div>
                    </button>

                    {activeIndex === index && (
                        <div className="py-4 mt-4 border-t-2 border-black rounded-b-3xl lg:rounded-b-xl transition-all duration-300">
                            <p>{step.description}</p>
                        </div>
                    )}
                </div>
            )}           
            
        </section>
    )
}

export default WorkingProcess
