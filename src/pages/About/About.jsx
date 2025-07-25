import { RiHealthBookLine } from "react-icons/ri";
import { FaHandHoldingHeart } from "react-icons/fa";

const About = () => {
    return (
        <div className="px-8 md:px-10 md:h-screen flex py-10 bg-white -mt-12" id="about">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">


                <div className="order-1 md:order-2">
                    <img
                        src="/About/about.png"
                        alt="About us"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>


                <div className="order-2 md:order-1">
                    <h1 className="text-3xl font-bold mb-5 text-[#6D4C41]">About Us</h1>
                    <p className="text-justify text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit amet temporibus
                        provident voluptates voluptatem facilis laboriosam modi tempore exercitationem obcaecati,
                        nam, magnam eveniet doloribus porro enim quis sint eos id dolorum?
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia perspiciatis
                        quisquam cupiditate dolor esse corrupti, aliquid porro animi facilis qui? Optio distinctio
                        nostrum error molestiae itaque maiores dicta est! Repellat, modi?
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                        {[
                            {
                                icon: <RiHealthBookLine className="w-6 h-8 text-[#8bc34a]" />,
                                title: "Preventive Care",
                                subtitle: "Focus on preventing illness"
                            },
                            {
                                icon: <img src="/Logo/Intelligence.png" alt="Intelligence Logo" className="w-6 h-6  " />,
                                title: "Holistic Approach",
                                subtitle: "Physical and mental wellbeing"
                            },
                            {
                                icon: <FaHandHoldingHeart className="w-6 h-8 text-[#8bc34a]" />,
                                title: "Community-Centered",
                                subtitle: "Local involvement & ownership"
                            },
                            {
                                icon: <img src="/Logo/Empathy.png" alt="Intelligence Logo" className="w-6 h-6" />,
                                title: "Sustainable Solutions",
                                subtitle: "Long-term health systems"
                            },
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-4">
                                <div className="bg-green-50 rounded-2xl w-10 h-10 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-[#6D4C41]">{item.title}</span>
                                    <span className="text-sm">{item.subtitle}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
