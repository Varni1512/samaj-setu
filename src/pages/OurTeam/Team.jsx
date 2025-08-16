import React from 'react';

const TeamShowcase = () => {
  // Sample team data - replace with your actual data
  const teamData = {
    'Board of Members': [
      {
        id: 1,
        name: 'Pragya Soni',
        position: 'Co Chairman',
        image: '/board/1.jpg'
      },
      {
        id: 2,
        name: 'Mandakini Avhad',
        position: 'Board of Director',
        image: '/board/2.jpg'
      },
      {
        id: 3,
        name: 'Balraj Sharma',
        position: 'Board of Director',
        image: '/board/3.jpg'
      }
    ],
    'Advisor Committee ': [
      {
        id: 4,
        name: 'Mittal Sarthak',
        position: 'Advisors',
        image: '/board/16.jpg'
      },
      {
        id: 5,
        name: 'Pawan Gujar',
        position: 'Advisors',
        image: '/board/7.jpg'
      },
      {
        id: 6,
        name: 'Dr. Prachi Agrawal',
        position: 'Advisor - Health',
        image: '/board/12.jpg'
      }
    ],
    'Mentor': [
      {
        id: 7,
        name: 'Anurenj P Kumar',
        position: 'Advisor & Mentor',
        image: '/board/14.jpg'
      },
      {
        id: 8,
        name: 'Dr. Neha Racca',
        position: 'Advisor & Mentor',
        image: '/board/15.jpg'
      },
      {
        id: 9,
        name: 'G George',
        position: 'Advisor & Mentor',
        image: '/board/demo.jpg'
      }
    ],
    'Corporate Wing': [
      {
        id: 19,
        name: 'Amar Singh Baghel',
        position: 'CEO',
        image: '/board/founder.jpg'
      },
      {
        id: 16,
        name: 'Himanshu Varshney',
        position: 'COO',
        image: '/board/10.jpg'
      },
      {
        id: 13,
        name: 'Atul Saxena',
        position: 'CFO',
        image: '/board/demo.jpg'
      },
      {
        id: 10,
        name: 'Kratika Jain',
        position: 'CHRO',
        image: '/board/4.jpg'
      },
      {
        id: 11,
        name: 'Aseem joshi',
        position: 'CMO',
        image: '/board/5.jpg'
      },
      {
        id: 12,
        name: 'Prateek Jain',
        position: 'CSR Head',
        image: '/board/6.jpg'
      }
      
    ],
    'Social Wing': [
      {
        id: 17,
        name: 'Dr.Ritesh Kumar Agrawal',
        position: 'National Head Health',
        image: '/board/11.jpg'
      },
      {
        id: 18,
        name: 'Seemant Deshpande',
        position: 'National Education head',
        image: '/board/13.jpg'
      },
      {
        id: 14,
        name: 'Dr.Amit Jain',
        position: 'Head - Ashok Nagar ( M.P.)',
        image: '/board/8.jpg'
      },
      {
        id: 15,
        name: 'Sai kumar',
        position: 'Regional head south india',
        image: '/board/9.jpg'
      }
    ],
  };

  const TeamCard = ({ member }) => (
    <div className="flex flex-col items-center text-center group">
      <div className="relative mb-4 transform transition-transform duration-300 group-hover:scale-105">
        <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="space-y-2">
        <h3 className="font-bold text-lg md:text-xl text-gray-800 group-hover:text-[#8bc34a] transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-[#8bc34a] font-medium text-sm md:text-base">
          {member.position}
        </p>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 mt-20">
      {/* Header */}
      <div className="text-center mb-8 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Our Team
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Meet the exceptional individuals driving our vision forward
        </p>
      </div>

      {/* All Categories in Flow */}
      {Object.entries(teamData).map(([category, members], index) => (
        <div key={category} className={`mb-16 md:mb-20 ${index !== 0 ? 'mt-20' : ''}`}>
          {/* Category Title */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
              {category}
            </h2>
            <div className="w-24 h-1 bg-[#8bc34a] mx-auto rounded-full"></div>
          </div>

          {/* Team Grid for this category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {members.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      ))}

    </div>
  );
};

export default TeamShowcase;