import React from "react";
import Company1 from '../assests/c1.png'
import Company2 from '../assests/c2.png'
import Company3 from '../assests/c3.png'
import Company4 from '../assests/c4.png'
import Company5 from '../assests/c5.png'
import Company6 from '../assests/c6.png'
import Home from '../assests/home.png'
const Hero = () => {
  const companyLogos = [
    { id: 1, logo: Company1 },
    { id: 2, logo: Company2 },
    { id: 3, logo: Company3 },
    { id: 4, logo: Company4 },
    { id: 5, logo: Company5 },
    { id: 6, logo: Company6 },
  ];

  return (
    <section className="text-center py-12 px-6">
      <div className="flex flex-row justify-between">
        <div className=" flex flex-col w-[60%] text-start ml-24 mt-4">
          
          <h2 className="text-6xl font-semibold mb-4">Navigating the <br></br> digital landscape <br></br>for success</h2>
          <p className="text-gray-600  mb-6">
            Our digital marketing agency helps businesses <br></br> grow and succeed online through a range of <br></br>
            services including SEO, PPC, social media marketing, <br></br> and content creation.
          </p>
          
          <button className="bg-black text-white px-6 py-3 rounded-lg w-60">
            Book a consultation
          </button>

        </div>
        <div className="flex w-[40%] mr-16">
          <img src={Home} alt="Not-Found" ></img>
        </div>
      </div>
      {/* Company Logos */}
      <div className="flex justify-between space-x-6 mt-24 ml-24 mr-16 ">
        {companyLogos.map((company) => (
          <img key={company.id} src={company.logo} alt="Company Logo" className="h-10" />
        ))}
      </div>
    </section>
  );
};

export default Hero;
