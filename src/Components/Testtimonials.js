import React, { useRef, useState } from "react";
import { TESTMONIALS } from "../utils/data";
import TestimonailsCard from "./Cards/TestimonailCard";
import Slider from "react-slick";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import Pagination from "./Pagination";


function Testtimonials() {
    const sliderRef = useRef();
    const [CurrentSlide, setCurrentSlide] = useState(0);

    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        SlidesToshow: 2,
        SlidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 769,
                setting: {
                    SlidesToshow: 1,
                    SlidesToScroll: 1,
                }
            }
        ],
        beforeChange: (index) => {
            setCurrentSlide(index);
        },
    };
    const slideRight = () => {
        sliderRef.current.slickNext();
    };
    const slideLeft = () => {
        sliderRef.current.slickPrev();
    };


    return (
        <section className="max-w-[1200px] py-16 mx-auto">
            <h5 className="text-2xl font-medium text-darkBlue text-center mb-16">Testimonials</h5>
            <div className="relative mb-7 px-5 md:px-28">
                <Slider ref={sliderRef} {...setting}>
                    {TESTMONIALS.map((item) => (
                        <TestimonailsCard key={item.id} name={item.name} imgUrl={item.imgUrl} review={item.review} description={item.descraption} />
                    ))}
                </Slider>
                <button className="left-1 md:left-5 lg:left-2 bg-white p-1 border-blue-800 rounded-md absolute top-[45%]" onClick={slideLeft}>
                    <RiArrowLeftSLine size={25} />
                </button>
                <button className="right-1 md:right-5 lg:right-2 bg-white p-1 border-blue-800 rounded-md absolute top-[45%]" onClick={slideRight}>
                    <RiArrowRightSLine size={25} />
                </button>
            </div>
            <Pagination active={CurrentSlide} />
        </section>
    );
}

export default Testtimonials;