import React from 'react';

const TeamShowcase = () => {
    // Sample team data - replace with your actual data
    const allTeamMembers = [
        {
            id: 1,
            name: 'Pragya Jain',
            position: 'Board of Director',
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
        },
        {
            id: 4,
            name: 'Kratika Jain',
            position: 'CHRO',
            image: '/board/4.jpg'
        },
        {
            id: 5,
            name: 'Aseem joshi',
            position: 'CMO - Chief Marketing Officer',
            image: '/board/5.jpg'
        },
        {
            id: 6,
            name: 'Prateek Jain',
            position: 'CSR Head',
            image: '/board/6.jpg'
        },
        {
            id: 7,
            name: 'Atul Saxena',
            position: 'Chief FIncial Officer',
            image: '/board/demo.jpg'
        },
        {
            id: 8,
            name: 'DR.Amit Jain',
            position: 'Head - ASHOK nagar Madhya Pradesh',
            image: '/board/8.jpg'
        },
        {
            id: 9,
            name: 'Sai kumar',
            position: 'Regional head south india',
            image: '/board/9.jpg'
        },
        {
            id: 10,
            name: 'Sarah Johnson',
            position: 'Innovation Mentor',
            image: '/board/10.jpg'
        },
        {
            id: 11,
            name: 'Dr.Ritesh Kumar Agrawal',
            position: 'National Head Health',
            image: '/board/11.jpg'
        },
        {
            id: 12,
            name: 'Dr. Prachi Agrawal',
            position: 'Advisor - Health',
            image: '/board/12.jpg'
        },
        {
            id: 13,
            name: 'Seemant Deshpande',
            position: 'Education head',
            image: '/board/13.jpg'
        },
        {
            id: 14,
            name: 'Anurenj P Kumar',
            position: 'Advisor & Mentor',
            image: '/board/14.jpg'
        },
        {
            id: 15,
            name: 'Dr. Neha Racca',
            position: 'Advisor & Mentor',
            image: '/board/15.jpg'
        },
        {
            id: 16,
            name: 'Mittal Sarthak',
            position: 'Advisors',
            image: '/board/16.jpg'
        },
        {
            id: 17,
            name: 'Pawan Gujar',
            position: 'Advisors',
            image: '/board/7.jpg'
        },
    ];

    // Helper function to create rows of 3
    const createRows = (members) => {
        const rows = [];
        for (let i = 0; i < members.length; i += 3) {
            rows.push(members.slice(i, i + 3));
        }
        return rows;
    };

    const teamRows = createRows(allTeamMembers);

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

            {/* Team Members in Rows */}
            <div className="space-y-12 md:space-y-16">
                {teamRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center">
                        <div className={`grid gap-8 md:gap-62 ${row.length === 1 ? 'grid-cols-1' :
                                row.length === 2 ? 'grid-cols-2' :
                                    'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                            }`}>
                            {row.map((member) => (
                                <TeamCard key={member.id} member={member} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default TeamShowcase;