import React, { useRef, useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import FoundationCard from './Founder';

const Team = () => {
    return (
        <div className="sm:px-10 px-4 py-10 bg-[#f3f8ed] min-h-screen">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-[#6D4C41]">Our Founder</h2>
            </div>
            <FoundationCard />
        </div>
        
    );
};

export default Team;
