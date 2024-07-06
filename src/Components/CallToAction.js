import React from "react";
import HouseImg from '../assets/house-img.png';

function CallToAction() {
    return (
        <div className="bg-white-200">
            <div className="max-w-[1200px] h-auto mx-auto flex flex-col items-start md:h-[400px] md:flex-row min-[1090px]:h-[320px]">
                <img src={HouseImg} className="w-full md:w-1/2 md:h-full object-cover" alt="House-Img" />
                <div className="p-10" Style="background-color:rgba(209 230 245">
                    <h5 className="text-lg font-medium text-blue-800 mb-2 lg:md-4">Find Out If Costs</h5>
                    <p className="text-sm leading-5 text-justify mb-5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quos temporibus consectetur earum atque. Mollitia modi, odio quaerat eius architecto tenetur laborum debitis voluptatum velit fuga earum minima dignissimos reprehenderit.
                    </p>
                    <button class="h-10 bg-sky-500/75 text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-sky-500/75 md:block ease-out duration-300">GET ESTIMATION</button>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;