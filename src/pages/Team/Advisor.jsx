import React from "react";
import { Download } from "lucide-react";

const AdvisorPage = () => {
    return (
        <section className="max-w-4xl mx-auto px-4 py-12">
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center">
                {/* Advisor Image */}
                <img
                    src="/advisor.jpg" 
                    alt="Advisor"
                    className="w-48 h-48 object-cover rounded-full shadow-md mb-4"
                />

                {/* Advisor Name */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Mittal Sarthak</h2>
                <p className="text-gray-600 text-lg mb-6">
                    Founder & CEO of Mittal Alliance
                </p>

                {/* Download Resume Button */}
                <a
                    href="https://www.linkedin.com/in/sarthak-cxo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-all"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.46-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.561 2.837-1.561 3.036 0 3.6 2.001 3.6 4.605v5.589z" />
                    </svg>
                    <span className="font-medium">View LinkedIn</span>
                </a>

            </div>
        </section>
    );
};

export default AdvisorPage;
