import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Team = () => {
    const cards = [
        {
            card: "/About/about.png",
            name: "Priya Sharma",
            position: "Program Director",
            description: "Social worker with expertise in program management and women empowerment initiatives.",
            linkedln: "https://linkedin.com",
            x: "https://twitter.com",
            gmail: "mailto:priya@example.com",
        },
        {
            card: "/About/about.png",
            name: "John Doe",
            position: "Technical Advisor",
            description: "Technology consultant helping build sustainable systems with modern tools and strategic planning.",
            linkedln: "https://linkedin.com",
            x: "https://twitter.com",
            gmail: "mailto:john@example.com",
        },
        {
            card: "/About/about.png",
            name: "Sara Lee",
            position: "Field Coordinator",
            description: "On-ground expert coordinating outreach and data gathering for impactful decision-making.",
            linkedln: "https://linkedin.com",
            x: "https://twitter.com",
            gmail: "mailto:sara@example.com",
        },
        {
            card: "/About/about.png",
            name: "Ankit Jain",
            position: "Finance Head",
            description: "Managing budgets and financial strategy for our initiatives with strong transparency.",
            linkedln: "https://linkedin.com",
            x: "https://twitter.com",
            gmail: "mailto:ankit@example.com",
        },
        {
            card: "/About/about.png",
            name: "Ankit Jain",
            position: "Finance Head",
            description: "Managing budgets and financial strategy for our initiatives with strong transparency.",
            linkedln: "https://linkedin.com",
            x: "https://twitter.com",
            gmail: "mailto:ankit@example.com",
        },
    ];

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);

    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.destroy();
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <div className="sm:px-10 px-4 py-10 bg-[#f3f8ed] min-h-screen">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-[#6D4C41]">Our Team</h2>
                <p className="text-sm mt-2 text-gray-700 px-4">
                    Meet the dedicated individuals who work tirelessly to bring positive change in rural communities
                </p>
            </div>

            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                <div
                    ref={prevRef}
                    className="w-10 h-10 flex items-center justify-center bg-[#8bc34a] hover:bg-[#8bc34a] text-white rounded-full cursor-pointer"
                >
                    <FaChevronLeft />
                </div>

                <Swiper
                    onSwiper={setSwiperInstance}
                    slidesPerView={4}
                    spaceBetween={20}
                    loop={true}
                    modules={[Navigation]}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="flex-1"
                >
                    {cards.map((member, index) => (
                        <SwiperSlide key={index}>
                            <div className="rounded-xl bg-white flex flex-col justify-between shadow-md min-h-[450px] overflow-hidden">
                                <div>
                                    <div className="relative">
                                        <img
                                            src={member.card}
                                            alt={member.name}
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent p-4 text-white">
                                            <h3 className="font-semibold text-lg">{member.name}</h3>
                                            <p className="text-sm">{member.position}</p>
                                        </div>
                                    </div>
                                    <div className="p-4 text-sm text-gray-700">
                                        <p className="mb-4">{member.description}</p>
                                    </div>
                                </div>
                                <div className="p-4 pt-0 flex gap-3">
                                    <a
                                        href={member.linkedln}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full w-8 h-8 flex items-center justify-center text-black bg-gray-100"
                                    >
                                        <FaLinkedin size={14} />
                                    </a>
                                    <a
                                        href={member.x}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full w-8 h-8 flex items-center justify-center text-black bg-gray-100"
                                    >
                                        <FaTwitter size={14} />
                                    </a>
                                    <a
                                        href={member.gmail}
                                        className="rounded-full w-8 h-8 flex items-center justify-center text-black bg-gray-100"
                                    >
                                        <FaEnvelope size={14} />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div
                    ref={nextRef}
                    className="w-10 h-10 flex items-center justify-center bg-[#8bc34a] hover:bg-[#8bc34a] text-white rounded-full cursor-pointer"
                >
                    <FaChevronRight />
                </div>
            </div>
        </div>
    );
};

export default Team;
