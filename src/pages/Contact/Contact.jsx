import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Form from "./Form";

export default function Contact() {
    return (
        <>
            <section className="relative w-full">
                <img
                    src="/background/NGOBanner1.jpg"
                    alt="Banner"
                    className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-4 sm:px-10 text-white ">
                    <div className="sm:ml-20 sm:space-y-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">
                            Contact Us
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl mt-3 max-w-xl drop-shadow-md">
                            Connecting with Us, Strengthening Communities.
                        </p>
                        <p className="text-sm sm:text-base mt-3 max-w-lg drop-shadow-md">
                            At Samaj Setu <strong>Foundation</strong>, we believe that communication is the first step toward <strong>collaboration</strong>. Whether you have questions, ideas, or the desire to <strong>get involved</strong>, we are here to listen and respond. Let work together to build a more <strong>inclusive</strong> and empowered society
                        </p>
                        <div className="flex gap-4 mt-6 flex-wrap">
                            <a
                                href="#contact"
                                className="bg-[#8bc34a] hover:bg-[#7cb342] text-white font-semibold rounded-lg px-6 py-2 text-sm sm:text-base shadow"
                            >
                                Get In Touch
                            </a>
                            <a
                                href="#services"
                                className="bg-white text-black font-medium rounded-lg px-5 py-2 text-sm sm:text-base"
                            >
                                Explore Services
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 px-6 sm:px-12 lg:px-32 bg-[#f6f6f5]" id="contact">

                <div className="w-full">
                    <Form />
                </div>


                <div className="flex flex-col gap-8">

                    <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://maps.google.com/maps?q=22.7228,75.8984&z=14&output=embed"
                            width="100%"
                            height="100%"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="border-0 w-full h-full"
                        ></iframe>
                    </div>


                    <div className="space-y-6">

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-neutral-50 rounded-full shadow-md">
                                <MapPin className="text-green-500 w-6 h-6" />
                            </div>
                            <p className="text-gray-700 text-base sm:text-lg font-medium">
                                <strong>OUR LOCATION:</strong> 123 Example Road, Indore, MP
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-neutral-50 rounded-full shadow-md">
                                <Mail className="text-green-500 w-6 h-6 " />
                            </div>
                            <p className="text-gray-700 text-base sm:text-lg font-medium ">
                                <strong>SEND US MAIL:</strong> info@samajsetu.org
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-neutral-50 rounded-full shadow-md">
                                <Phone className="text-green-500 w-6 h-6" />
                            </div>
                            <p className="text-gray-700 text-base sm:text-lg font-medium">
                                <strong>CALL US:</strong> +91 98765 43210
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
