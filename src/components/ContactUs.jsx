import React from 'react'
import { useState } from "react";
import illustration from "../assests/illustration.png";


const ContactUs = () => {
    const [selectedOption, setSelectedOption] = useState("say_hi");

    return (

        <section className="px-4 md:mx-12 sm:px-8 py-12">

            <div className="flex flex-col mb-4 md:flex-row items-center md:items-start justify-center md:justify-start md:px-4 gap-4 lg:gap-8">
                <span className="flex flex-col md:flex-row justify-center items-center md:text-3xl text-4xl md:bg-green-300 md:rounded-xl font-medium">
                    <h2 className="bg-green-300 rounded-xl md:rounded-r-0 p-3  md:whitespace-nowrap">Contact us</h2>

                </span>


                <p className="text-black md:text-base lg:text-lg text-lg text-center md:text-left md:self-center lg:self-start lg:max-w-[50%] lg:pr-32 pb-4">
                    Connect with Us: Let's Discuss Your<span className="md:block">Digital Marketing Needs </span>
                </p>
            </div>

            <div className="bg-[#F3F3F3] p-6 py-16 md:mx-4 md:justify-between md:pr-0 mx-auto rounded-4xl shadow-md flex flex-col md:flex-row items-center"> 
                {/* Left Side - Form and Text */}
                <div className="md:w-1/2 w-full md:text-left text-center">
                    {/* Radio Selection */}
                    <div className="flex justify-center md:justify-start gap-4 mb-4">
                        <label className="flex items-center gap-2 text-black text-sm">
                            <input
                                type="radio"
                                name="contactOption"
                                value="say_hi"
                                checked={selectedOption === "say_hi"}
                                onChange={() => setSelectedOption("say_hi")}
                                className="w-5 h-5 
                                text-green-300 focus:ring-green-300"
                            />
                            <span>Say Hi</span>
                        </label>

                        <label className="flex items-center gap-2 text-black text-sm">
                            <input
                                type="radio"
                                name="contactOption"
                                value="get_quote"
                                checked={selectedOption === "get_quote"}
                                onChange={() => setSelectedOption("get_quote")}
                                className="w-5 h-5 text-green-300 focus:ring-green-300"
                            />
                            <span>Get a Quote</span>
                        </label>
                    </div>

                    {/* Form */}
                    <form className="w-full">
                        <div className="mb-3 text-left">
                            <label className="block text-black text-sm mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-2 border border-black bg-white rounded-md text-base"
                            />
                        </div>

                        <div className="mb-3 text-left">
                            <label className="block text-black text-sm mb-1">Email*</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="w-full p-2 border border-black bg-white rounded-md text-base"
                            />
                        </div>

                        <div className="mb-3 text-left">
                            <label className="block text-black text-sm mb-1">Message*</label>
                            <textarea
                                rows="4"
                                placeholder="Enter your message"
                                required
                                className="w-full p-2 border border-black bg-white rounded-md text-base"
                            ></textarea>
                        </div>

                        {/* Button inside form for small screens */}
                        <div className="md:hidden">
                            <button
                                type="submit"
                                className="w-full p-4 bg-black text-white rounded-md hover:bg-gray-800"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>

                    {/* Button below the textual part in md and larger screens */}
                    <div className="hidden md:block w-full mt-4">
                        <button
                            type="submit"
                            className="w-full p-2 bg-black text-white rounded-md hover:bg-gray-800"
                        >
                            Send Message
                        </button>
                    </div>
                </div>

                {/* Right Side - Image (Visible in md and larger screens) */}
                <div className="hidden md:flex justify-end">
                    <img
                        src={illustration} 
                        alt="Contact"
                        className="w-full
                         h-full object-cover object-right rounded-lg"
                    />
                </div>

            </div>




        </section>
    )
}

export default ContactUs
