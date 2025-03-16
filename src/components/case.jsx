import Case from '../assests/news.png'

export default function CaseStudiesPage() {
  return (
    <div className=" min-h-screen p-6">
      {/* Hero Section */}
      <div className="bg-gray-200  p-8 flex flex-row justify-between rounded-4xl shadow-md ml-24 mr-12 items-center text-center">
        <div className='flex flex-col '>
          <h2 className="text-2xl font-semibold text-start mb-2">Let’s make things happen</h2>
          <p className="text-gray-600 mt-2 max-w-lg  text-start mb-2">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <button className="mt-4 mb-2 bg-black w-60  text-white px-6 py-2 rounded-lg">Get your free proposal</button>
        </div>
        <div>
          <img src={Case} alt="Case" className="w-64 h-64" />
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="mt-24 mr-12 ml-24">
        <h3 className="text-xl font-bold flex items-center">
          <span className="bg-green-500 text-black px-2 py-1 rounded mr-2">Case Studies</span>
          <span className="text-black"> Explore Real-Life Examples of Our Proven Digital Marketing Success</span>
        </h3>

        <div className="mt-12 grid md:grid-cols-3 gap-12 ">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-black text-white p-6 rounded-2xl transition-transform hover:scale-105 duration-300 ease-in">
              <p>{study.description}</p>
              <a href="#" className="text-green-400 mt-2 inline-block">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const caseStudies = [
  {
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
  },
  {
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
  },
  {
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
  }
];
