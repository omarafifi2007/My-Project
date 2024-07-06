import React from "react";

function ServicesInfoCard({ imgUrl, title, descraption }) {
    return (
        <div className="bg-slate-100 flex flex-col md:even:flex-row-reverse md:odd:flex-row">
            <div className="flex-1">
                <img src={imgUrl} alt={title} className="w-full h-80 md:h-full" />
            </div>
            <div className="flex-1 bg-sky-100" Style='background-color:rgba(209 230 245'>
                <div className="p-10">
                    <h6 className="text-md md:text-xl text-darkBlue font-medium mb-3">{title}</h6>
                    <p className="text-sm md:text-sm leading-6 text-darkBlue whitespace-pre-line">{descraption}</p>
                </div>
            </div>
        </div>
    );
}

export default ServicesInfoCard;