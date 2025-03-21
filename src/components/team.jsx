export default function TeamSection() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO and Founder",
      experience: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "Jane Doe",
      role: "Director of Operations",
      experience: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      experience: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      name: "Emily Johnson",
      role: "PPC Manager",
      experience: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    {
      name: "Brian Williams",
      role: "Social Media Specialist",
      experience: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      name: "Sarah Kim",
      role: "Content Creator",
      experience: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    },
  ];

  return (
    <section className="px-6 py-12 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Team</h2>
        <p className="text-gray-600 mt-2">
          Meet the skilled and experienced team behind our successful digital marketing strategies.
        </p>
      </div>

      <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative p-6 bg-white rounded-xl shadow-lg border hover:shadow-xl transition-transform ease-in duration-400 hover:scale-105"
          >
            <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zM8 14a8 8 0 108 0M15 18l6 6"
                />
              </svg>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-green-600">{member.role}</p>
              <p className="text-gray-600 mt-2">{member.experience}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          See all team
        </button>
      </div>
    </section>
  );
}
