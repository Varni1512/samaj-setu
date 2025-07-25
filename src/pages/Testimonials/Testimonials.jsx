import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";

const testimonialsData = [
    {
        name: "Ramesh Singh",
        title: "Farmer, Bhanpur Village",
        image: "/Logo/Avatar.jpg",
        rating: 5,
        text: "The sustainable farming techniques taught by Samaj Setu have doubled my crop yield while reducing costs. Their support in connecting us to markets has increased my income significantly. My family now has better food security and I can afford education for my children."
    },
    {
        name: "Sita Devi",
        title: "Artisan, Madhopur",
        image: "/Logo/Avatar.jpg",
        rating: 4,
        text: "With Samaj Setu's help, I learned new skills and started a handicrafts business. The training was easy to follow and I now contribute to my family's income."
    }
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    // Auto-slide logic
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval); // Clean up
    }, []);

    return (
        <div className="sm:px-10 px-4 py-10 bg-white">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-[#6D4C41]">Testimonials</h2>
                <p className="text-sm mt-2 text-gray-700 px-4 max-w-xl mx-auto">
                    Hear from the people whose lives have been transformed through our initiatives and programs.
                </p>
            </div>

            <div className="max-w-3xl mx-auto relative">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {testimonialsData.map((testimonial, i) => (
                            <div key={i} className="w-full flex-shrink-0 px-4">
                                <div className="rounded-xl shadow-sm p-6 sm:p-10 h-full bg-white">
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-14 h-14 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500">{testimonial.title}</p>
                                            <div className="flex text-yellow-400 mt-1">
                                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                    <FaStar key={i} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <blockquote className="relative text-green-900 text-lg leading-relaxed mt-4 px-4">
                                        <FaQuoteLeft className="text-[#8bc34a] absolute -top-2 -left-2 text-xl" />
                                        <p className="italic">{testimonial.text}</p>
                                        <FaQuoteRight className="text-[#8bc34a] absolute -bottom-2 -right-2 text-xl" />
                                    </blockquote>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-6 space-x-2">
                    {testimonialsData.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition ${i === index ? "bg-[#8bc34a]" : "bg-gray-300"}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
