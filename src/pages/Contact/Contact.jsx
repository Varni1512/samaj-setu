import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Form from "./Form";

export default function Contact() {
    return (
        <>
            <h2 className="text-4xl font-bold text-center text-gray-800 mt-32">
                Contact Us
            </h2>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 px-6 sm:px-12 lg:px-32 " id="contact">

                <div className="w-full ">
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
                                <strong>OUR LOCATION:</strong> 47/2 Sanvid Nagar near kanadiya road indore
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-neutral-50 rounded-full shadow-md">
                                <Mail className="text-green-500 w-6 h-6 " />
                            </div>
                            <p className="text-gray-700 text-base sm:text-lg font-medium ">
                                <strong>SEND US MAIL:</strong> samajsetufoundation@gmail.com 
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-neutral-50 rounded-full shadow-md">
                                <Phone className="text-green-500 w-6 h-6" />
                            </div>
                            <p className="text-gray-700 text-base sm:text-lg font-medium">
                                <strong>CALL US:</strong> +91 9179441567
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
