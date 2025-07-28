import React, { useRef, useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import FoundationCard from './Founder';
import MentorPage from './Mentor';
import AdvisorPage from './Advisor';
import Team1 from './Team1';

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
                <h2 className="text-3xl font-bold text-[#6D4C41]">Our Founder</h2>
                {/* <p className="text-sm mt-2 text-gray-700 px-4">
                    Meet the dedicated individuals who work tirelessly to bring positive change in rural communities
                </p> */}
            </div>
            <FoundationCard />
            <MentorPage />
            <div className="text-center ">
                <h2 className="text-3xl font-bold text-[#6D4C41]">Our Advisors</h2>
            </div>
            <AdvisorPage />
            <Team1 />
        </div>
        
    );
};

export default Team;
