import React from 'react';
import { Link } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp, FaHeart, FaShareAlt } from "react-icons/fa";

const faqs = [
    {
        question: "Is my donation tax-deductible?",
        answer:
            "Yes, all donations to Samaj Setu are eligible for tax deduction under Section 80G of the Income Tax Act. You will receive a donation receipt via email.",
    },
    {
        question: "How will my donation be used?",
        answer:
            "Your donation directly supports our programs in education, healthcare, livelihood, and disaster relief. We maintain complete transparency and publish quarterly impact reports.",
    },
    {
        question: "Can I make a recurring donation?",
        answer:
            'Yes, you can set up monthly recurring donations by selecting the "Make this a monthly recurring donation" option during the donation process.',
    },
    {
        question: "Is my payment information secure?",
        answer:
            "Absolutely. We use industry-standard encryption and secure payment gateways to ensure your financial information is protected at all times.",
    },
];

const Question = () => {
    return (
        <>
            <div className="px-4 py-16 max-w-5xl mx-auto text-center">
                <h1 className="text-2xl sm:text-3xl font-extrabold mb-2">Everything You Need to Know Before You Pay</h1>
                <p className="text-gray-600 mb-10">
                    Find answers to common questions about donations and payment methods.
                </p>

                <div className="flex flex-col gap-6">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-neutral-50 rounded-xl shadow-sm p-6 text-left max-w-2xl mx-auto"
                        >
                            <h3 className="font-semibold text-base sm:text-lg mb-1">{faq.question}</h3>
                            <p className="text-sm sm:text-base text-gray-700">{faq.answer}</p>
                        </div>
                    ))}

                    <div className="bg-neutral-50 rounded-xl shadow-sm px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left max-w-7xl mx-auto w-full">
                        <div className="flex-1">
                            <h3 className="font-semibold text-base sm:text-lg mb-1">
                                Need Help with Your Donation?
                            </h3>
                            <p className="text-sm sm:text-base text-gray-700">
                                Our dedicated team is available to assist you with any questions.
                            </p>
                        </div>
                        <div className="flex gap-3 flex-col sm:flex-row items-start sm:items-center">
                            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border text-sm sm:text-base text-gray-800">
                                <IoCallOutline className="text-green-500" />
                                +91 800 123 4567
                            </span>
                            <Link
                                to="#"
                                className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg shadow-sm text-sm sm:text-base"
                            >
                                <FaWhatsapp />
                                WhatsApp Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full bg-[#f9fbf4]">
                <div className="w-full py-12 text-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                        Be the Change You Wish to See in the World
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Your generosity can transform lives and communities. Join us in our mission to create a more
                        equitable society.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link
                            to="#"
                            className="inline-flex items-center justify-center px-5 py-2 bg-[#a4e85c] text-white font-medium rounded-lg shadow-sm hover:bg-[#91d64f] transition"
                        >
                            <FaHeart className="mr-2" />
                            Donate Now
                        </Link>
                        {/* <Link
                            to="#"
                            className="inline-flex items-center justify-center px-5 py-2 bg-white text-gray-800 border border-gray-200 font-medium rounded-lg shadow-sm hover:bg-gray-100 transition"
                        >
                            <FaShareAlt className="mr-2" />
                            Share This Cause
                        </Link> */}
                    </div>
                </div>
            </div>

        </>
    );
};

export default Question;
