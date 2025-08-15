import { FaHeart } from "react-icons/fa";
import { RiHandHeartLine, RiSecurePaymentFill } from "react-icons/ri";
import { PiHeartbeatThin } from "react-icons/pi";
import Paymentdetails from "./Paymentdetails";
import Whydonate from "./Whydonate";
import Question from "./Question";

const Donate = () => {
    return (
        <>
            <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="bg-green-100 text-green-800 text-sm sm:text-base font-medium px-5 py-1 rounded-full inline-block">
                        Every Act of Kindness Matters
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800">
                        Transform Lives Today
                    </h1>

                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        Your generosity has the power to create lasting change. <br className="hidden sm:block" />
                        Join us in building a brighter future for those in need.
                    </p>
                </div>

                <div className="flex justify-center mt-8">
                    <div className="bg-[#e3f5c3] rounded-full shadow-inner w-full max-w-xl flex items-center justify-start relative overflow-hidden">
                        <button className="bg-[#aee555] cursor-pointer hover:bg-[#9edf4a] text-black font-semibold flex items-center gap-2 px-6 py-4 rounded-full transition-all duration-300 shadow-md z-10">
                            <FaHeart /> Donate Now
                        </button>
                    </div>
                </div>

                <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10 text-sm sm:text-base px-4">
                    <li className="flex items-center gap-2 text-gray-700">
                        <RiSecurePaymentFill className="text-green-500 text-lg" />
                        100% Secure
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <PiHeartbeatThin className="text-green-500 text-lg" />
                        5000+ Lives Impacted
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <RiHandHeartLine className="text-green-500 text-lg" />
                        Tax Benefits
                    </li>
                </ul>

                <section className="mt-12 px-4">
                    <Paymentdetails />
                </section>
            </div>

            <section className="mt-12 px-4">
                <Whydonate />
            </section>

            <section className="mt-12 px-4">
                <Question />
            </section>
        </>
    );
};

export default Donate;
