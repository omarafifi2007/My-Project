import React from "react";
import StarIcon  from '../../assets/star-yellow-icon.png';

function TestimonailsCard({ name, imgUrl, review, description }) {
    return (
        <>
            <div className="bg-white rounded-md p-5 border mx-2">
                <div className="flex items-center gap-3 mb-4">
                    <img src={imgUrl} alt={name} className="w-14 h-14 md:w-16 md:h-16 rounded-full" />
                </div>
                <div>
                    <p className="text-sm md:text-base mb-1">{name}</p>
                    <div className="flex items-end gap-[2px]">
                        <img src={StarIcon} alt="StartIcon" className="w-4 h-4 object-contain" />
                        <img src={StarIcon} alt="StartIcon" className="w-4 h-4 object-contain" />
                        <img src={StarIcon} alt="StartIcon" className="w-4 h-4 object-contain" />
                        <img src={StarIcon} alt="StartIcon" className="w-4 h-4 object-contain" />
                        <img src={StarIcon} alt="StartIcon" className="w-4 h-4 object-contain" />
                    </div>
                </div>
            </div>
            <h6 className="text-sm md:text-base font-medium mb-1">{review}</h6>
            <span className="text-xs md:text-[13px] text-state-500">{description}</span>
        </>
    );
}

export default TestimonailsCard;