import React from "react";
import { SERVICES } from '../utils/data'
import ServicesInfoCard from "./Cards/ServicesInfoCard";

function OurServices() {
    return (
        <section className='max-w-[1200px] py-16 mx-auto'>
            <h5 className="text-3xl font-medium text-darkBlue text-center mb-10">Our Services</h5>

            <div className="bg-white lg:shadow-xl lg:shadow-slate-200/50">
                {SERVICES.map((item) => (
                    <ServicesInfoCard key={item.title} imgUrl={item.imgUrl} title={item.title} descraption={item.descraption} />
                ))}
            </div>
        </section>
    );
}

export default OurServices;