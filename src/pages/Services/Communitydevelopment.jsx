import {
    RiHeartPulseLine,
    RiWomenLine,
    RiBuildingLine,
    RiMentalHealthLine,
    RiGovernmentLine,
    RiHomeHeartLine
} from "react-icons/ri";
import { BiBuildingHouse, BiDonateBlood } from "react-icons/bi";
import { PiPersonArmsSpread } from "react-icons/pi";
import { FiBookOpen } from "react-icons/fi";
import { LuDot } from "react-icons/lu";
import { MdOutlineGroups } from "react-icons/md";
import { TbPlant } from "react-icons/tb";


const Communitydevelopment = () => {
    const services = [
        {
            icon: (
                <RiHeartPulseLine className="text-black h-6 w-6 mx-auto mt-1" />
            ),
            title: 'Health & Wellness',
            description: 'Promoting accessible and preventive healthcare:',
            points: [
                'Free medical camps and screenings',
                'Blood donation and health awareness drives',
                'Mental health support and counseling',
                'Collaborations with healthcare professionals and labs',
            ],
        },
        {
            icon: (
                <FiBookOpen className="text-black h-6 w-6 mx-auto mt-1" />
            ),
            title: 'Education & Skill Development',
            description: 'Bridging learning gaps and building skills for life:',
            points: [
                'Digital literacy and basic education programs',
                'Vocational training and career readiness workshops',
                'Scholarships and mentorship for students',
                'Support for competitive exam aspirants',
            ],
        },
        {
            icon: (
                <RiWomenLine className="text-black h-6 w-6 mx-auto mt-1" />
            ),
            title: 'Women Empowerment',
            description: 'Enabling women to lead, earn, and thrive:',
            points: [
                'Tailoring, digital, and home-based skill training',
                'Health and hygiene awareness (especially menstrual health)',
                'Self-Help Group (SHG) development and micro-entrepreneurship',
                'Women-led community initiatives',
            ],
        },
        {
            icon: (
                <RiBuildingLine className="text-black h-6 w-6 mx-auto mt-1" />
            ),
            title: 'Youth Development',
            description: 'Shaping confident, capable and civic-minded youth:',
            points: [
                'Leadership and soft skills development',
                'Career counseling and life coaching',
                'Volunteerism and internship programs',
                'Youth-led rural innovation projects',
            ],
        },
        {
            icon: (
                <MdOutlineGroups className="text-black h-6 w-6 mx-auto mt-1" />
            ),
            title: 'Environment & Sustainability',
            description: 'Protecting our planet through education and action:',
            points: [
                'Tree plantation and clean-up drives',
                'Water conservation and waste management education',
                'Climate awareness and eco-friendly initiatives in villages',
            ],
        },
        {
            icon: (
                <BiBuildingHouse className="text-black h-6 w-6 mx-auto mt-1" />
            ),
            title: 'Rural Development',
            description: 'Uplifting rural lives through integrated interventions:',
            points: [
                'Model Village and Gurukul projects',
                'Infrastructure support: toilets, clean water, roads',
                'Agriculture, livestock, and livelihood support',
                'Community empowerment through local leadership',
            ],
        },
        {
            icon: (
                <BiDonateBlood className="text-black h-6 w-6 mx-auto mt-1" />
            ),
            title: 'Social Welfare & Inclusion',
            description: 'Serving the underserved with dignity:',
            points: [
                'Elderly support and senior care initiatives',
                'Disability aid and accessibility programs',
                'Child welfare and support for orphans',
                'Emergency relief and disaster response',
            ],
        },
        {
            icon: (
                <RiMentalHealthLine className="text-black h-6 w-6 mx-auto mt-1" />
            ),
            title: 'Mental Health & Emotional Wellbeing',
            description: 'Promoting a healthier mind for a healthier society:',
            points: [
                'Individual and group counseling',
                'Stress management and awareness workshops',
                'Support for addiction recovery and youth anxiety',
            ],
        },
        {
            icon: (
                <RiGovernmentLine className="text-black h-6 w-6 mx-auto mt-1" />
            ),
            title: 'Government Scheme Facilitation',
            description: 'Bridging gaps between citizens and benefits:',
            points: [
                'Awareness of central and state schemes',
                'Application assistance and documentation',
                'Legal aid and rights-based advocacy',
            ],
        },
        {
            icon: (
                <PiPersonArmsSpread className="text-black h-6 w-6 mx-auto mt-1" />
            ),
            title: 'CSR & Partnership Solutions',
            description: 'Strengthening impact through strategic collaborations:',
            points: [
                'End-to-end CSR project design and implementation',
                'Partnership with corporates, NGOs, hospitals, and institutions',
                'Volunteer and employee engagement programs',
            ],
        },
        {
            icon: (
                <TbPlant className="text-black h-6 w-6 mx-auto mt-1" />
            ),
            title: 'NGO Assistant Program',
            description: 'Training the next generation of changemakers:',
            points: [
                'Internships and volunteering opportunities',
                'Real-world NGO experience and mentorship',
                'Certification, field exposure, and career support',
                'Leadership pipeline for dedicated social workers',
            ],
        },
        {
            icon: (
                <RiHomeHeartLine className="text-black h-6 w-6 mx-auto mt-1" />
            ),
            title: 'NGO Incubation Centre',
            description: 'Helping new NGOs take root and grow:',
            points: [
                'Start-up support: registration, compliance, branding',
                'Mentorship in project design and fundraising',
                'Connection to funders, networks, and experts',
            ],
        },

    ];

    return (
        <div className="px-4 sm:px-10 py-10 bg-white" id="services">

            <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                    Comprehensive Services for Community Development
                </h1>
                <p className="text-sm sm:text-lg text-neutral-600 max-w-3xl mx-auto mt-3">
                    Our integrated approach addresses multiple dimensions of social welfare,
                    creating sustainable impact across communities.
                </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-25 px-2">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 shadow-lg  rounded-xl p-6 flex flex-col min-h-[400px] max-w-[350px] border-1"
                    >
                        <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-black mb-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-700 mb-3">{service.description}</p>
                        <ul className="list-inside space-y-2 text-gray-600">
                            {service.points.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <LuDot className="text-green-500 mt-1" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Communitydevelopment;
