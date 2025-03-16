import React, { useState } from "react";

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
                    Step-by-Step Guide to Achieving Your Business Goals
                </p>
            </div>


            <div
                className={`border bg-[#F3F3F3] p-8 max-w-5xl md:mx-24 border-b-4 border-black mt-8 rounded-[60px] md:rounded-[50px] lg:rounded-xl transition-all duration-300
                 ${activeIndex === 0 ? "bg-green-300" : "bg-[#F3F3F3]"}`}
            >
                <button
                    onClick={() => handleToggle(0)}
                    className="flex flex-row items-center justify-between w-full py-3 text-left text-lg font-medium"
                >
                    <div className="flex flex-row items-center gap-4">
                        <p className="font-medium text-3xl">01</p>
                        <p className="font-medium text-[18px] md:text-lg">Consultation</p>
                    </div>
                    <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 text-3xl font-bold shadow-md ${activeIndex === 0 ? "bg-[#F3F3F3] text-black border-1 p-4 border-black" : "bg-[#F3F3F3] border-1 p-4 text-black border-black"}`}
                    >
                        {activeIndex === 0 ? "−" : "+"}
                    </div>
                </button>

                {activeIndex === 0 && (
                    <div className="py-4 mt-4 border-t-2 border-black rounded-b-3xl lg:rounded-b-xl transition-all duration-300">
                        <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
                    </div>
                )}
            </div>


            <div
                className={`border bg-[#F3F3F3]  p-8 max-w-5xl md:mx-24  border-b-4 border-black mt-8 rounded-[60px] md:rounded-[50px] lg:rounded-xl transition-all duration-300
                 ${activeIndex === 1 ? "bg-green-300" : "bg-[#F3F3F3]"}`}
            >
                <button
                    onClick={() => handleToggle(1)}
                    className="flex flex-row items-center justify-between w-full py-3  text-left text-lg font-medium"
                >
                    <div className="flex flex-row items-center gap-4">
                        <p className="font-medium text-3xl ">02</p>
                        <p className="font-medium text-[18px] md:text-lg">Research and Strategy Development</p>
                    </div>
                    <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 text-3xl font-bold shadow-md ${activeIndex === 1 ? "bg-[#F3F3F3] text-black border-1 p-4 border-black" : "bg-[#F3F3F3] border-1 p-4 text-black border-black"}`}
                    >
                        {activeIndex === 1 ? "−" : "+"}
                    </div>
                </button>

                {activeIndex === 1 && (
                    <div className="py-4 mt-4 border-t-2 border-black rounded-b-3xl lg:rounded-b-xl transition-all duration-300">
                        <p></p>
                    </div>
                )}
            </div>
            <div
                className={`border bg-[#F3F3F3]  p-8 max-w-5xl md:mx-24  border-b-4 border-black mt-8 rounded-[60px] md:rounded-[50px] lg:rounded-xl transition-all duration-300
                 ${activeIndex === 2 ? "bg-green-300" : "bg-[#F3F3F3]"}`}
            >
                <button
                    onClick={() => handleToggle(2)}
                    className="flex flex-row items-center justify-between w-full py-3  text-left text-lg font-medium"
                >
                    <div className="flex flex-row items-center gap-4">
                        <p className="font-medium text-3xl ">03</p>
                        <p className="font-medium text-[18px] md:text-lg">Implementation</p>
                    </div>
                    <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 text-3xl font-bold shadow-md ${activeIndex === 2 ? "bg-[#F3F3F3] text-black border-1 p-4 border-black" : "bg-[#F3F3F3] border-1 p-4 text-black border-black"}`}
                    >
                        {activeIndex === 2 ? "−" : "+"}
                    </div>
                </button>

                {activeIndex === 2 && (
                    <div className="py-4 mt-4 border-t-2 border-black rounded-b-3xl lg:rounded-b-xl transition-all duration-300">
                        <p></p>
                    </div>
                )}
            </div>
            <div
                className={`border bg-[#F3F3F3]  p-8 max-w-5xl md:mx-24  border-b-4 border-black mt-8 rounded-[60px] md:rounded-[50px] lg:rounded-xl transition-all duration-300
                 ${activeIndex === 3 ? "bg-green-300" : "bg-[#F3F3F3]"}`}
            >
                <button
                    onClick={() => handleToggle(3)}
                    className="flex flex-row items-center justify-between w-full py-3  text-left text-lg font-medium"
                >
                    <div className="flex flex-row items-center gap-4">
                        <p className="font-medium text-3xl ">04</p>
                        <p className="font-medium text-[18px] md:text-lg">Monitoring and Optimization</p>
                    </div>
                    <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 text-3xl font-bold shadow-md ${activeIndex === 3 ? "bg-[#F3F3F3] text-black border-1 p-4 border-black" : "bg-[#F3F3F3] border-1 p-4 text-black border-black"}`}
                    >
                        {activeIndex === 3 ? "−" : "+"}
                    </div>
                </button>

                {activeIndex === 3 && (
                    <div className="py-4 mt-4 border-t-2 border-black rounded-b-3xl lg:rounded-b-xl transition-all duration-300">
                        <p></p>
                    </div>
                )}
            </div>
            <div
                className={`border bg-[#F3F3F3]  p-8 max-w-5xl md:mx-24  border-b-4 border-black mt-8 rounded-[60px] md:rounded-[50px] lg:rounded-xl transition-all duration-300
                 ${activeIndex === 4 ? "bg-green-300" : "bg-[#F3F3F3]"}`}
            >
                <button
                    onClick={() => handleToggle(4)}
                    className="flex flex-row items-center justify-between w-full py-3  text-left text-lg font-medium"
                >
                    <div className="flex flex-row items-center gap-4">
                        <p className="font-medium text-3xl ">05</p>
                        <p className="font-medium text-[18px] md:text-lg">Reporting and Communication</p>
                    </div>
                    <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 text-3xl font-bold shadow-md ${activeIndex === 4 ? "bg-[#F3F3F3] text-black border-1 p-4 border-black" : "bg-[#F3F3F3] border-1 p-4 text-black border-black"}`}
                    >
                        {activeIndex === 4 ? "−" : "+"}
                    </div>
                </button>

                {activeIndex === 4 && (
                    <div className="py-4 mt-4 border-t-2 border-black rounded-b-3xl lg:rounded-b-xl transition-all duration-300">
                        <p></p>
                    </div>
                )}
            </div>
            <div
                className={`border bg-[#F3F3F3]  p-8 max-w-5xl md:mx-24  border-b-4 border-black mt-8 rounded-[60px] md:rounded-[50px] lg:rounded-xl transition-all duration-300
                 ${activeIndex === 5 ? "bg-green-300" : "bg-[#F3F3F3]"}`}
            >
                <button
                    onClick={() => handleToggle(5)}
                    className="flex flex-row items-center justify-between w-full py-3  text-left text-lg font-medium"
                >
                    <div className="flex flex-row items-center gap-4">
                        <p className="font-medium text-3xl ">06</p>
                        <p className="font-medium text-[18px] md:text-lg">Continual Improvement</p>
                    </div>
                    <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 text-3xl font-bold shadow-md ${activeIndex === 5 ? "bg-[#F3F3F3] text-black border-1 p-4 border-black" : "bg-[#F3F3F3] border-1 p-4 text-black border-black"}`}
                    >
                        {activeIndex === 5 ? "−" : "+"}
                    </div>
                </button>

                {activeIndex === 5 && (
                    <div className="py-4 mt-4 border-t-2 border-black rounded-b-3xl lg:rounded-b-xl transition-all duration-300">
                        <p></p>
                    </div>
                )}
            </div>


        </section>
    )
}

export default WorkingProcess
