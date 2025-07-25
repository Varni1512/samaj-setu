import { AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Communitydevelopment from "./Communitydevelopment";

const Service = () => {
    return (
        <>
            <div className="relative w-full">

                <img
                    src="/background/NGOBanner1.jpg"
                    alt="Banner"
                    className="w-full h-[500px] sm:h-[590px] object-cover"
                />


                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-4 sm:px-10 text-white">
                    <div className="sm:ml-20 sm:space-y-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">
                            Our Services
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl mt-4 max-w-md sm:max-w-xl drop-shadow-md">
                            Empowering Communities, Connecting People. Building the Nation.
                        </p>

                        <p className="text-sm sm:text-base mt-3 max-w-sm sm:max-w-lg drop-shadow-md">
                            At Samaj Setu Foundation, we are committed to holistic community development through a wide range of impactful services. Here's how we serve society.
                        </p>


                        <div className="flex gap-3 mt-6 flex-wrap">
                            <Link
                                to="/contact"
                                className="bg-[#8bc34a] hover:bg-[#7cb342] text-white font-medium rounded-lg px-5 py-2 text-sm sm:text-base"
                            >
                                Get In Touch
                            </Link>
                            <a
                                href="#services"
                                className="bg-white text-black font-medium rounded-lg px-5 py-2 text-sm sm:text-base"
                            >
                                Explore Services
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <Communitydevelopment />
            </section>
        </>
    );
};

export default Service;
