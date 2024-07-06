import React from "react";
import LogoImg from '../assets/logo.png';

function Footer() {
    return (
        <>
            <div className="max-w-[1200px] mx-auto bg-white-200">
                <div className="flex flex-col items-center justify-center p-8">
                    <img className="w-20 mb-6" src={LogoImg} alt="Logo" />
                    <ul className="flex justify-center gap-6 flex-wrap">
                        <li>
                            <a href="/" className="text-xs text-blue-800 hove:font-medium">About Us</a>
                        </li>
                        <li>
                            <a href="/" className="text-xs text-blue-800 hove:font-medium">Contact Us</a>
                        </li>
                        <li>
                            <a href="/" className="text-xs text-blue-800 hove:font-medium">Services</a>
                        </li>
                        <li>
                            <a href="/" className="text-xs text-blue-800 hove:font-medium">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="/" className="text-xs text-blue-800 hove:font-medium">Get Quotes</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-blue-800 text-xs text-white text-center p-4">© 2024. All Rights Reversed</div>
        </>
    );
}

export default Footer;