import { IoIosCheckmark } from "react-icons/io";
import { FiBookOpen } from "react-icons/fi";
import { MdOutlineGroups } from "react-icons/md";
import { RiHeartPulseLine,RiWomenLine,RiBuildingLine } from "react-icons/ri";
import { BiBuildingHouse} from "react-icons/bi";

const Health = () => {

    const services = [
        {
            icon: <RiHeartPulseLine className="text-green-500 h-6 w-6 mx-auto mt-1" />,
            image: '/Home/home3.jpg',
            title: 'Health & Wellness',
            description:
                'Promoting accessible and preventive healthcare:',
            points: ['Free medical camps and screenings',
                'Blood donation and health awareness drives',
                'Mental health support and counseling',
                'Collaborations with healthcare professionals and labs',],
        },
        {
            icon: <FiBookOpen className="w-5 h-5 text-green-500" />,
            image: '/Home/service.jpg',
            title: 'Education & Skill Development',
            description:
                'Bridging learning gaps and building skills for life:',
            points: [
                'Digital literacy and basic education programs',
                'Vocational training and career readiness workshops',
                'Scholarships and mentorship for students',
                'Support for competitive exam aspirants',],
        },
        {
            icon: <RiWomenLine className="w-5 h-5 text-green-500" />,
            image: '/Home/home2.jpg',
            title: 'Women Empowerment',
            description:
                'Enabling women to lead, earn, and thrive:',
            points: [
                'Tailoring, digital, and home-based skill training',
                'Health and hygiene awareness (especially menstrual health)',
                'Self-Help Group (SHG) development and micro-entrepreneurship',
                'Women-led community initiatives',],
        },
        {
            icon: <RiBuildingLine className="w-5 h-5 text-green-500" />,
            image: '/Home/service1.jpg',
            title: 'Youth Development',
            description:
                'Shaping confident, capable and civic-minded youth:',
            points: [
                'Leadership and soft skills development',
                'Career counseling and life coaching',
                'Volunteerism and internship programs',
                'Youth-led rural innovation projects',],
        },
        {
            icon: <MdOutlineGroups className="w-5 h-5 text-green-500" />,
            image: '/Home/service2.png',
            title: 'Environment & Sustainability',
            description:
                'Protecting our planet through education and action:',
            points: [
                'Tree plantation and clean-up drives',
                'Water conservation and waste management education',
                'Climate awareness and eco-friendly initiatives in villages',],
        },
        {
            icon: <BiBuildingHouse className="w-5 h-5 text-green-500" />,
            image: '/Home/home1.jpg',
            title: 'Rural Development',
            description:
                'Uplifting rural lives through integrated interventions:',
            points: [
                'Model Village and Gurukul projects',
                'Infrastructure support: toilets, clean water, roads',
                'Agriculture, livestock, and livelihood support',
                'Community empowerment through local leadership',],
        },
    ];

    return (
        <div className="px-10 py-10 bg-[#f3f8ed]">
            <div>
                <div className="flex flex-col justify-center text-center">
                    <h1 className="text-[#6D4C41] text-3xl font-bold mb-4">Our Health Programs & Initiatives</h1>
                    <span className='text-sm flex items-center justify-center text-center'>Comprehensive healthcare solutions designed to address the unique challanges faced by rural communities</span>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10  sm:mt-0 sm:p-20">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg ">
                            <img src={service.image} alt={service.title} className="w-full h-68 rounded-t-lg mb-4" />
                            <div className="p-5">
                                <div className="flex items-center  space-y-2 space-x-5">
                                    <div className="bg-green-50  h-10 w-10 rounded-full flex items-center justify-center">
                                        {service.icon}
                                    </div>
                                    <h3 className="sm:text-xl text-lg font-semibold mb-2 text-[#7d4c41]">{service.title}</h3>
                                </div>
                                <p className="text-gray-700 mb-3">{service.description}</p>
                                <ul className="list-inside text-gray-600 space-y-1">

                                    {service.points.map((point, idx) => (
                                        <li key={idx} className="flex items-center"><IoIosCheckmark className="text-green-500" />{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center mt-10 sm:mt-0 ">
                    <button className="bg-[#8bc34a] p-2 rounded-full text-white font-semibold w-44 shadow-2xl cursor-pointer">Learn More..</button>
                </div>
            </div>
        </div>
    )
}

export default Health