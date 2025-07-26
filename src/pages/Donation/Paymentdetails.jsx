import { MdPhoneAndroid } from "react-icons/md";
import { FaQrcode } from "react-icons/fa";
import { PiCurrencyInrLight } from "react-icons/pi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Paymentdetails = () => {
    return (
        <section className="px-4 py-8 bg-white mt-10">
            <div className=" max-w-7xl mx-auto justify-items-center">

                {/* <div className="flex flex-col md:flex-row md:items-start border rounded-lg p-4 shadow-sm">
                    <img
                        src="/Payment/QR.jpg"
                        alt="QR Code for UPI payment"
                        className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4 md:mb-0 md:mr-6 self-center rounded-lg"
                    />
                    <div className="flex flex-col text-gray-700 space-y-4 w-full p-2 rounded-lg">
                        {[
                            {
                                icon: <MdPhoneAndroid />,
                                title: "Open your UPI app",
                                description:
                                    "Use any UPI-enabled app like Google Pay, PhonePe, Paytm, or BHIM.",
                            },
                            {
                                icon: <FaQrcode />,
                                title: "Scan the QR Code",
                                description:
                                    'Select "Scan & Pay" option in your UPI app and scan the QR code.',
                            },
                            {
                                icon: <PiCurrencyInrLight />,
                                title: "Enter donation amount",
                                description: "Enter the amount you wish to donate.",
                            },
                            {
                                icon: <IoCheckmarkDoneCircle />,
                                title: "Complete Payment",
                                description: "Enter your UPI PIN and confirm the payment.",
                            },
                        ].map((step, idx) => (
                            <div key={idx}>
                                <div className="flex items-center space-x-2">
                                    <div className="bg-green-100 w-8 h-8 flex items-center justify-center rounded-full text-green-600 text-lg">
                                        {step.icon}
                                    </div>
                                    <h4 className="font-semibold text-base sm:text-lg">
                                        {step.title}
                                    </h4>
                                </div>
                                <p className="text-sm sm:text-base pl-10">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div> */}


                <div className="border rounded-lg shadow-sm w-full max-w-md">
                    <div className="bg-[#aee555] flex items-center px-4 py-3 rounded-t-lg">
                        <img
                            src="/Logo/Logo2.png"
                            alt="Samaj Setu Logo"
                            className="w-10 h-10 mr-3"
                        />
                        <span className="text-white font-bold text-lg">Samaj Setu</span>
                    </div>
                    <div className="p-5 text-gray-700 bg-white rounded-b-lg">
                        <h2 className="font-semibold text-xl sm:text-2xl uppercase mb-4">
                            Direct Bank Transfer
                        </h2>
                        <ul className="space-y-1 mt-5 text-base sm:text-lg">
                            <li>Name : Samaj Setu Foundation</li>
                            <li>Bank : Bandhan Bank</li>
                            <li>A/C No : 20100043680101</li>
                            <li>IFSC : BDBL0002416</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Paymentdetails;
