import React from "react";
import Company1 from "../assests/c1.png";
import Company2 from "../assests/c2.png";
import Company3 from "../assests/c3.png";
import Company4 from "../assests/c4.png";
import Company5 from "../assests/c5.png";
import Company6 from "../assests/c6.png";
import Home from "../assests/home.png";

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
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-[60%] text-start lg:ml-24 mt-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight">
            Navigating the <br /> digital landscape <br /> for success
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Our digital marketing agency helps businesses <br className="hidden lg:block" />
            grow and succeed online through a range of <br className="hidden lg:block" />
            services including SEO, PPC, social media marketing, <br className="hidden lg:block" />
            and content creation.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg w-48 md:w-60">
            Book a consultation
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="flex w-full lg:w-[40%] lg:mr-16 mt-6 lg:mt-0">
          <img src={Home} alt="Not-Found" className="w-full max-w-sm mx-auto lg:max-w-full" />
        </div>
      </div>

      {/* Company Logos - White Background in Dark Mode */}
      <div className="flex flex-wrap justify-center lg:justify-between space-x-6 mt-12 lg:mt-24 px-4 lg:ml-24 lg:mr-16 
                logo-container">
  {companyLogos.map((company) => (
    <img key={company.id} src={company.logo} alt="Company Logo" className="h-8 md:h-10 mx-2" />
  ))}
</div>


    </section>
  );
};

export default Hero;
