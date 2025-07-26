import React, { useState } from 'react';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        {
            question: "How can I volunteer with Samaj Setu?",
            answer: "You can volunteer by visiting our website and filling out the volunteer form. We regularly onboard passionate individuals who want to contribute to rural development.",
        },
        {
            question: "What kind of training does Samaj Setu offer?",
            answer: "We provide training in sustainable farming, digital literacy, women's empowerment, and local entrepreneurship tailored to rural communities.",
        },
        {
            question: "Is Samaj Setu a non-profit organization?",
            answer: "Yes, Samaj Setu is a registered non-profit organization focused on rural upliftment and sustainable development.",
        },
        {
            question: "Can I donate to support Samaj Setu’s work?",
            answer: "Absolutely. You can donate through our website. Your support helps us reach more communities with impactful programs.",
        },
        {
            question: "How does Samaj Setu choose its focus villages?",
            answer: "We prioritize villages based on need assessments, local government cooperation, and our capacity to make sustainable impact.",
        },
        {
            question: "How does Samaj Setu choose its focus villages?",
            answer: "We prioritize villages based on need assessments, local government cooperation, and our capacity to make sustainable impact.",
        },
    ];

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="sm:px-10 px-4 py-10 bg-[#f3f8ed] min-h-[74vh]">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-[#6D4C41]">Frequently Asked Questions</h2>
                <hr className="w-20 h-1 bg-[#8bc34a] border-0 rounded mx-auto my-2" />
                <p className="text-sm mt-2 text-gray-700 px-4 py-2 max-w-xl mx-auto">
                    Final answers to common questions about our initiatives, volunteering opportunities,
                    and how you can contribute to rural development.
                </p>

                <div className="flex justify-center mt-10">
                    <div className="w-full max-w-2xl space-y-4">
                        {questions.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-2xl shadow-md"
                            >
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleQuestion(index)}
                                >
                                    <p className="font-medium text-gray-800">{item.question}</p>
                                    {openIndex === index ? (
                                        <IoMdRemove className="text-[#8bc34a] text-xl" />
                                    ) : (
                                        <IoMdAdd className="text-[#8bc34a] text-xl" />
                                    )}
                                </div>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-40 mt-4" : "max-h-0"
                                        }`}
                                >
                                    <p className="text-gray-600 text-sm leading-relaxed text-justify border-t border-gray-200 pt-4">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
