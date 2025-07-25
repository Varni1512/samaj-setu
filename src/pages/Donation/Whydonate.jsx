import React from 'react';
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import { MdOutlineStairs } from "react-icons/md";

const Whydonate = () => {
    return (
        <div className='px-4 py-12 bg-white shadow-lg w-fit mx-auto flex flex-col items-center rounded-2xl '>
            <h1 className='text-2xl sm:text-3xl font-extrabold text-center mb-10'>
                Why Donate to Samaj Setu?
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

                <div className='flex flex-col items-center text-center space-y-4 px-4'>
                    <div className='bg-green-100 rounded-full p-5 text-green-600 text-3xl'>
                        <FaHandHoldingHeart />
                    </div>
                    <strong className='text-base sm:text-lg'>Community Impact</strong>
                    <p className='text-sm sm:text-base text-gray-700 max-w-xs'>
                        Your donation directly helps communities in need with immediate support and long-term development programs.
                    </p>
                </div>


                <div className='flex flex-col items-center text-center space-y-4 px-4'>
                    <div className='bg-green-100 rounded-full p-5 text-green-600 text-3xl'>
                        <MdOutlineStairs />
                    </div>
                    <strong className='text-base sm:text-lg'>Transparency</strong>
                    <p className='text-sm sm:text-base text-gray-700 max-w-xs'>
                        We maintain complete transparency in fund utilization with regular updates and detailed annual reports.
                    </p>
                </div>


                <div className='flex flex-col items-center text-center space-y-4 px-4'>
                    <div className='bg-green-100 rounded-full p-5 text-green-600 text-3xl'>
                        <IoDocumentSharp />
                    </div>
                    <strong className='text-base sm:text-lg'>Tax Benefits</strong>
                    <p className='text-sm sm:text-base text-gray-700 max-w-xs'>
                        All donations are eligible for tax exemption under Section 80G of the Income Tax Act, 1961.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Whydonate;
