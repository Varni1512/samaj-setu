import React from "react";
import { Download } from "lucide-react";

const MentorPage = () => {
  const mentors = [
    {
      name: "Anurenj P Kumar",
      role: "Advisor & Mentor",
      image: "/mentor1.jpg", 
      resume: "/Anurenj.pdf", 
    },
    {
      name: "G GEORGE",
      role: "Founder and CEO SHASHWATGYAN",
      image: "/mentor2.jpg",
      resume: "/George.pdf", 
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-[#6D4C41] mb-10">
        Our Mentors
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center"
          >
            {/* Mentor Image */}
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-48 h-48 object-cover rounded-full shadow-md mb-4"
            />

            {/* Mentor Name & Role */}
            <h2 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{mentor.role}</p>

            {/* Download Resume */}
            <a
              href={mentor.resume}
              download
              className="flex items-center space-x-2 bg-[#8bc34a] text-white px-5 py-2 rounded-lg shadow hover:bg-[#7cb342] transition-all"
            >
              <Download size={18} />
              <span className="text-sm font-medium">Download Resume</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MentorPage;
