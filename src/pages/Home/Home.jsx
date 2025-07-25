"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const bannerData = [
        {
            id: 1,
            title: "Dhyan Kashi",
            bgImage: "/Home/home1.jpg"
        },
        {
            id: 2,
            title: "Spiritual Collection",
            bgImage: "/Home/home2.jpg"
        },
        {
            id: 3,
            title: "Crystal Power",
            bgImage: "/Home/home3.jpg"
        },
        {
            id: 4,
            title: "Yantra Magic",
            bgImage: "/Home/home4.jpg"
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % bannerData.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [bannerData.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + bannerData.length) % bannerData.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Carousel Container */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                    height: '85vh', 
                    transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {bannerData.map((slide, index) => (
                    <div
                        key={slide.id}
                        className="w-full flex-shrink-0 relative h-full"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.bgImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundColor: '#8B4513'
                        }}
                    >
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300 cursor-pointer"
                style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300 cursor-pointer"
                style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {bannerData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                            ? 'bg-[#8bc34a] scale-125'
                            : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                    />
                ))}
            </div>

        </div>
    );
};

export default Home;
