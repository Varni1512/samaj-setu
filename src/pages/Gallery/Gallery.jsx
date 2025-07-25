import React from 'react'

const Gallery = () => {
    return (
        <>
            {/* Title */}
            <h2 className="text-4xl font-bold text-center text-gray-800 mt-28">
                Gallery
            </h2>

            <section className="grid grid-cols-1 md:grid-cols-3  gap-10 py-14 px-6 sm:px-12 lg:px-32">
                <div className="w-full h-[400px] overflow-hidden rounded-lg">
                    <img src="/Gallery/p1.jpg" alt="p1" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[400px] overflow-hidden rounded-lg">
                    <img src="/Gallery/p2.jpg" alt="p2" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[400px] overflow-hidden rounded-lg">
                    <img src="/Gallery/p3.jpg" alt="p3" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[400px] overflow-hidden rounded-lg">
                    <img src="/Gallery/p4.jpg" alt="p4" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[400px] overflow-hidden rounded-lg">
                    <img src="/Gallery/p5.jpg" alt="p5" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[400px] overflow-hidden rounded-lg">
                    <img src="/Gallery/p6.jpg" alt="p6" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[400px] overflow-hidden rounded-lg">
                    <img src="/Gallery/p7.jpg" alt="p7" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[400px] overflow-hidden rounded-lg">
                    <img src="/Gallery/p8.jpg" alt="p8" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[400px] overflow-hidden rounded-lg">
                    <img src="/Gallery/p9.jpg" alt="p9" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[400px] overflow-hidden rounded-lg">
                    <img src="/Gallery/p12.jpg" alt="p12" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[400px] overflow-hidden rounded-lg">
                    <img src="/Gallery/p13.jpg" alt="p13" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[400px] overflow-hidden rounded-lg">
                    <img src="/Gallery/p14.jpg" alt="p4" className="w-full h-full object-cover" />
                </div>
            </section>
        </>
    )
}

export default Gallery
