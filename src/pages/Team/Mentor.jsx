import React, { useState } from "react";
import { Download } from "lucide-react";

const MentorPage = () => {
  const [showMore, setShowMore] = useState(false);

  const mentorsTop = [
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

  const drNehaShort = `Dr. Neha Racca is a globally recognized Wellness Consultant and Yoga Educator with over two decades of experience in guiding individuals towards a more balanced, joyful, and healthy life. As the Founder of Itiyoga, she blends ancient yogic wisdom with modern therapeutic techniques to offer a truly holistic approach to well-being—physically, mentally, and emotionally.`;

  const drNehaFull = `

A TEDx speaker and seasoned Yoga Ambassador of India (2015–2018), Dr. Neha has travelled extensively—spreading the magic of yoga in the USA, UK, Bahrain, Vietnam, Nepal, Mauritius, France, Scotland, Thailand, and the Maldives through immersive retreats and wellness workshops.

Certified Stress Management Coach, Hypnotherapist, and Pranic Healer  
Expert Pre-Post Natal Yoga Teacher and Relationship Counsellor  
Certified Thetapist for psychosomatic ailments.

Dr. Neha specializes in helping individuals recover from heartbreaks, divorces, depression, and anxiety, helping them break the patterns and remove blockages within, empowering them with practical tools and ancient wisdom. Her sessions go beyond physical postures, offering emotional resilience, meditative depth, and spiritual upliftment.

With her, in ITI-YOG, you don’t just practice yoga—you experience a complete yogic energy flow and a better way of life, Transforming into a Healthier and Happier you.
`;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-[#6D4C41] mb-10">
        Our Mentors
      </h1>

      {/* Top 2 Mentors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        {mentorsTop.map((mentor, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center"
          >
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-40 h-40 object-cover rounded-full shadow-md mb-4"
            />
            <h2 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{mentor.role}</p>
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

      {/* Dr. Neha Racca Full-Width Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 md:flex md:items-start gap-6">
        <div className="w-full md:w-2/5 flex justify-center mb-4 md:mb-0">
          <img
            src="/mentor3.jpg"
            alt="Dr. Neha Racca"
            className="w-64 h-64 object-cover rounded-xl shadow-md"
          />
        </div>
        <div className="w-full md:w-3/5">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Dr. Neha Racca</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Founder, Itiyoga | Wellness Consultant | TEDx Speaker | Ph.D. in Yoga
          </p>
          <p className="text-gray-700 text-sm whitespace-pre-line">
            {drNehaShort}
            {showMore && <span className="block mt-2">{drNehaFull}</span>}
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center mt-5 space-x-2 bg-[#8bc34a] text-white px-5 py-2 rounded-lg shadow hover:bg-[#7cb342] transition-all cursor-pointer"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MentorPage;