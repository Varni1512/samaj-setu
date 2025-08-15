import Contact from "./Contact";
// import Googlemap from "./Googlemap";
// import OfficeTabs from "./Officetabs";
import { BsFillSendFill } from "react-icons/bs";
export default function Form() {
    return (
        <div>
            <div>

                <div className="flex justify-center items-center">
                    <form className="w-full max-w-2xl bg-[#f6f6f5]  p-8 md:p-10 rounded-lg shadow-md space-y-6">
                        <h3 className="text-2xl font-medium text-gray-900">Contact Us</h3>

                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-3"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email*"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-3"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-3"
                            required
                        />
                        <textarea
                            placeholder="Message Us"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-3 h-36"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="cursor-pointer bg-[#8bc34a] text-sm w-full sm:w-[192px] h-[43px]  text-white font-semibold rounded flex justify-center items-center gap-2"
                        >
                            SEND MESSAGE
                            <div className="w-4 h-4"><BsFillSendFill />
                            </div>
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}
