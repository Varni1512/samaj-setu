import React, { useState } from 'react';

const MemberCard = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  
  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-lg mx-auto flex flex-col h-full">
      <div className="h-100 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{member.role}</p>
        <div className="text-gray-600 leading-relaxed flex-grow">
          <p className="mb-4">
            {isExpanded ? member.description : truncateText(member.description)}
          </p>
        </div>
        {member.description.length > 150 && (
          <button
            onClick={toggleReadMore}
            className="mt-auto bg-[#8bc34a] text-white px-5 py-2 rounded-lg shadow hover:bg-[#7cb342] transition-all cursor-pointer self-start"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
    </div>
  );
};

const MemberCards = () => {
  const members = [
    {
      id: 1,
      name: "Dr. Ritesh Kumar Agrawal (BHMS)",
      role: "Homeopathic Consultant | CMD, Dr Agrawal’s Healthcare Clinic & Drmedilab",
      image: "/team1.jpg",
      description: "With over 18 years of clinical experience since 2006, Dr. Ritesh Kumar Agrawal is a trusted Homeopathic Consultant known for his expertise in treating Hair Problems, Skin Disorders, Obesity, Diabetes, and various Autoimmune Diseases through classical and evidence-based homeopathy.As the Chief Managing Director of Dr Agrawal's Healthcare Clinic and Drmedilab, he is committed to delivering affordable, personalized, and quality healthcare to people across all strata of society. His vision is to bridge the gap between modern diagnostics and holistic homeopathic healing, promoting wellness through preventive and curative care."
    },
    {
      id: 2,
      name: "Dr. Prachi Agrawal (BHMS)",
      role: "Homeopathic Consultant | Managing Director – Dr. Agrawal’s Healthcare Clinic & Drmedilab , Government Medical Officer (Homeopathy)",
      image: "team2.jpg",
      description: "Practicing since 2008, Dr. Prachi Agrawal is a highly experienced Homeopathic Consultant specializing in Gynecological & Obstetric care, as well as treatments related to Hair, Skin, Obesity, and Diabetes. She is the Managing Director of Dr. Agrawal’s Healthcare Clinic and Drmedilab, and also serves as a Government Homeopathic Medical Officer, dedicated to delivering affordable, holistic, and women-focused healthcare through classical homeopathy and modern diagnosis."
    },
    {
      id: 3,
      name: "Seemant Deshpande",
      role: "Education head",
      image: "team3.jpg",
      description: "With over six years of experience in the social sector and more than two years in the corporate world,  Seemant Deshpande brings a rich blend of insight, leadership, and commitment to transformative change. Having worked with diverse organizations across education and development, he currently serves as the National Head of Education at Samasutra Foundation.  Seemant work focuses on creating inclusive learning ecosystems, empowering youth, and driving community-based educational initiatives. His passion lies in bridging gaps between grassroots needs and systemic solutions, aligning with Samasutra’s mission to foster equitable access to quality education and sustainable social progress."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Team Members
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberCards;