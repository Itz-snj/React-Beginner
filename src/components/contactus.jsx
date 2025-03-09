import React, { useState } from "react";

const Contactus = () => {
    const [selected, setSelected] = useState("sayHi");

    return (
        <div className="w-full px-24 flex justify-start items-center">
            <div className="w-full py-10 px-24 bg-gray-200 rounded-3xl flex flex-col justify-start items-start gap-6">
                <div className='flex w-full gap-x-6'>
                    <div className="bg-green-500 text-3xl font-bold px-6 py-3 rounded-lg">
                        Contact Us
                    </div>
                    <div className='max-w-70'>
                        Connect with Us: Let's Discuss Your Digital Marketing Needs
                    </div>
                </div>

                <div className="flex justify-start items-center gap-9">
                    {/* Say Hi Option */}
                    <div
                        className="relative flex items-center gap-2 cursor-pointer"
                        onClick={() => setSelected("sayHi")}
                    >
                        <p className="text-black text-lg font-space-grotesk font-normal">Say Hi</p>
                        <div className="relative w-7 h-7 flex items-center justify-center">
                            <div className="w-7 h-7 bg-white rounded-full border border-black" />
                            {selected === "sayHi" && <div className="w-4 h-4 bg-green-500 rounded-full absolute" />}
                        </div>
                    </div>

                    {/* Get a Quote Option */}
                    <div
                        className="relative flex items-center gap-2 cursor-pointer"
                        onClick={() => setSelected("getQuote")}
                    >
                        <p className="text-black text-lg font-space-grotesk font-normal">Get a Quote</p>
                        <div className="relative w-7 h-7 flex items-center justify-center">
                            <div className="w-7 h-7 bg-white rounded-full border border-black" />
                            {selected === "getQuote" && <div className="w-4 h-4 bg-green-500 rounded-full absolute" />}
                        </div>

                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-5">
                    {/* Name Field */}
                    <div className="flex flex-col justify-start items-start gap-1 w-full">
                        <p className="text-black text-base font-space-grotesk font-normal leading-7">Name</p>
                        <input
                            className="w-full px-4 py-4 bg-white rounded-xl border border-black text-gray-500 text-lg font-space-grotesk"
                            placeholder="Name"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col justify-start items-start gap-1 w-full">
                        <p className="text-black text-base font-space-grotesk font-normal leading-7">Email*</p>
                        <input
                            className="w-full px-4 py-4 bg-white rounded-xl border border-black text-gray-500 text-lg font-space-grotesk"
                            placeholder="Email"
                        />
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col justify-start items-start gap-1 w-full">
                        <p className="text-black text-base font-space-grotesk font-normal leading-7">Message*</p>
                        <textarea
                            className="w-full h-40 px-4 py-4 bg-white rounded-xl border border-black text-gray-500 text-lg font-space-grotesk"
                            placeholder="Message"
                        ></textarea>
                    </div>
                </div>
                <button className="w-full max-w-xl px-9 py-5 bg-black rounded-xl flex justify-center items-center text-white text-xl font-space-grotesk">Send Message</button>
            </div>
        </div>

    );
};

export default Contactus;