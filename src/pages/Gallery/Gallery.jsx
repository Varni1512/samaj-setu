import React from 'react'

const Gallery = () => {
    return (
        <>
            <section className="relative w-full">
                <img
                    src="/background/NGOBanner1.jpg"
                    alt="Banner"
                    className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-start px-4 sm:px-10 text-white ">
                    <div className="sm:ml-20 sm:space-y-8 mt-30">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">
                            Gallery
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl mt-3 max-w-xl drop-shadow-md">
                            A Glimpse Into Our Shared Journey.
                        </p>
                        <p className="text-sm sm:text-base mt-3 max-w-lg drop-shadow-md">
                            At <strong>Samaj Setu Foundation</strong>, every photo tells a story of hope, action, and impact. Our gallery reflects the moments that define our mission from community outreach to grassroots empowerment. Explore the faces, places, and progress that inspire our journey toward a more inclusive society.
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

            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 px-6 sm:px-12 lg:px-32">
                <div className="w-full h-[500px] overflow-hidden rounded-lg">
                    <img src="/Gallery/p1.jpg" alt="p1" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[500px] overflow-hidden rounded-lg">
                    <img src="/Gallery/p2.jpg" alt="p2" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[500px] overflow-hidden rounded-lg">
                    <img src="/Gallery/p3.jpg" alt="p3" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[500px] overflow-hidden rounded-lg">
                    <img src="/Gallery/p4.jpg" alt="p4" className="w-full h-full object-cover" />
                </div>
            </section>


        </>
    )
}

export default Gallery