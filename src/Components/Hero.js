import React from "react";
import HeroImg1 from '../assets/hero-img-1.png';
import HeroImg2 from '../assets/hero-img-2.png';
import HeroImg3 from '../assets/hero-img-3.png';

function Hero() {
    return (
        <section className="max-w-screen-xl flex flex-col-reverse gap-12 item-center mx-auto py-16 px-20 md:flex-row">

            <div className="flex-1  text-center md:text-left flex-col" >

                <h2 className="text-2xl z-10 font-bold text-gradient mb-3 md-text-4xl ">Building Dreams, <br /> Crafting Homes</h2>

                <p className="text-sm leading-6 text-darkBlue mb-6 md:w-4/5 ">Turning Dreams Into Homes. Explore Our Exceptional Craftsmanship And Envision Your Perfect Space</p>

                <button className="primary-btn h-11 bg-cyan-500 text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-cyan-500 w-fit ease-out duration-300">Explore Our Projects</button>
            </div>

            <div className="flex gap-2 justify-center md-gap-3 lg:gap-5">
                <img className="hero-img w-1/4 h-5/6 rounded md:w-28 md:h-60 lg:w-44 lg:h-80" src={HeroImg1} alt="img-one" />
                <img className="mt-[5%] hero-img w-1/4 h-5/6 rounded md:w-28 md:h-60 lg:w-44 lg:h-80" src={HeroImg2} alt="img-two" />
                <img className="hero-img w-1/4 h-5/6 rounded md:w-28 md:h-60 lg:w-44 lg:h-80" src={HeroImg3} alt="img-two" />
            </div>
        </section>
    );
}

export default Hero;