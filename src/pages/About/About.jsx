import { useState } from "react";
import { RiHealthBookLine } from "react-icons/ri";
import { FaHandHoldingHeart } from "react-icons/fa";

const About = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="px-8 md:px-10 md:h-auto flex py-10 bg-white" id="about">
            <div className="max-w-7xl mx-auto">

                {/* Heading (always on top in mobile and desktop) */}
                <h1 className="text-3xl font-bold mb-7 text-[#6D4C41] text-center md:text-left">
                    About Samaj Setu Foundation – For Sustainable Development in Rural India
                </h1>

                {/* Grid for image and text */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section (always second column on desktop) */}
                    <div className="md:sticky md:top-20 self-start order-2 md:order-2">
                        <img
                            src="/Home/home1.jpg"
                            alt="About us"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>

                    {/* Text Content Section */}
                    <div className="order-3 md:order-1">
                        <p className="text-justify text-gray-700 leading-relaxed">
                            Samaj Setu Foundation is a non-profit organization committed to empowering rural communities through inclusive, sustainable, and participatory development. Established with a vision to bridge the gap between grassroots realities and national development goals, the foundation works as a "Setu" (bridge) connecting people, policies, and progress.
                            <br /><br />
                            Our mission is rooted in the belief that true development begins at the village level — where challenges are greatest, but the potential for transformation is even greater. Through innovative models, capacity-building programs, and convergence with government schemes, we aim to improve livelihoods, education, health, gender equality, environmental sustainability, and local governance.
                        </p>

                        {showMore && (
                            <div className="mt-4 text-justify text-gray-700 leading-relaxed">
                                <p>
                                    We actively align our initiatives with the United Nations Sustainable Development Goals (SDGs), with a special focus on:
                                </p>

                                <ul className="list-disc pl-6 mt-4 text-gray-700 leading-relaxed">
                                    <li>No Poverty (SDG 1)</li>
                                    <li>Gender Equality (SDG 5)</li>
                                    <li>Clean Water and Sanitation (SDG 6)</li>
                                    <li>Decent Work and Economic Growth (SDG 8)</li>
                                    <li>Sustainable Communities (SDG 11)</li>
                                    <li>Climate Action (SDG 13)</li>
                                </ul>

                                <p className="mt-4">
                                    From organic farming and cow-based eco-products to skill development for rural youth, digital literacy for women, support for tribal and nomadic communities, and rights-based awareness campaigns — Samaj Setu Foundation is creating models of rural resilience and self-reliance.
                                    <br /><br />
                                    Our work is guided by the principles of transparency, inclusion, dignity, and collaboration. We invite individuals, organizations, and institutions to join us in building a rural India that is not only developed but sustainable, just, and equitable for all.
                                    <br /><br />
                                    <strong className="text-[#6D4C41]">
                                        Together, let’s build villages of hope, hubs of innovation, and models of sustainable development.
                                    </strong>
                                </p>
                            </div>
                        )}

                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="mt-4 px-4 py-2 bg-[#6D4C41] text-white rounded-lg shadow hover:bg-[#5a3c33] transition"
                        >
                            {showMore ? "Read Less" : "Read More"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default About;
