import React from "react";
import Gallery1 from '../assets/gallery-img1.png'
import Gallery2 from '../assets/gallery-img2.png'
import Gallery3 from '../assets/gallery-img3.png'
import Gallery4 from '../assets/gallery-img4.png'
import Gallery5 from '../assets/gallery-img5.png'
import Gallery6 from '../assets/gallery-img6.png'

function OurWork() {
    return (
        <>
            <section className="max-w-[1200px] pt-0 mx-auto">
                <h5 className="text-2xl font-medium	text-darkBlue text-center mb-16">Our Work</h5>

                <div className="grid grid-cols-l grid-row-6 gap-2 md:grid-cols-4 md:grid-rows-2">
                    <div className="md:col-span-2">
                        <img src={Gallery1} alt="Gallery-Img" className="w-full h-72 md:h-full object-cover" />
                    </div>
                    <div className="">
                        <img src={Gallery2} alt="Gallery-Img" className="w-full h-72 md:h-full object-cover" />
                    </div>
                    <div className="">
                        <img src={Gallery3} alt="Gallery-Img" className="w-full h-72 md:h-full object-cover" />
                    </div>
                    <div className="">
                        <img src={Gallery4} alt="Gallery-Img" className="w-full h-72 md:h-full object-cover" />
                    </div>
                    <div className="">
                        <img src={Gallery5} alt="Gallery-Img" className="w-full h-72 md:h-full object-cover" />
                    </div>
                    <div className="md:col-span-2">
                        <img src={Gallery6} alt="Gallery-Img" className="w-full h-72 md:h-full object-cover" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurWork;