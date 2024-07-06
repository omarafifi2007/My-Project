import { useState } from "react";
import logo from '../assets/logo.png';
import { RiMenu4Line, RiCloseFill } from 'react-icons/ri';
import MobileNavbar from './MobileNavbar';

function Navbar() {
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {isMenuOpen && <MobileNavbar setisMenuOpen={setisMenuOpen} />}
            <div className='bg-background sticky top-0 bg-white z-10'>
                <nav className='max-w-screen-xl mx-auto py-4 px-6'>
                    <div className='flex align-item-center justify-between'>
                        <img src={logo} alt='logo' className='h-11 w-auto object-contain' />
                        <ul className='hidden md:flex md:gap-14'>
                            <li>
                                <a href='/' className='menu-item text-sm font-medium text-primary relative cursor-pointer w-full h-[3px] bg-primary absolute left-0 top-2 rounded translate-x-11 hover:translate-x-0 transition-all hover:opacity-100'>Home</a>
                            </li>
                            <li>
                                <a href='/' className='menu-item text-sm font-medium text-primary relative cursor-pointer w-full h-[3px] bg-primary absolute left-0 top-2 rounded translate-x-11 hover:translate-x-0 transition-all hover:opacity-100'>Services</a>
                            </li>
                            <li>
                                <a href='/' className='menu-item text-sm font-medium text-primary relative cursor-pointer w-full h-[3px] bg-primary absolute left-0 top-2 rounded translate-x-11 hover:translate-x-0 transition-all hover:opacity-100'>Our Work</a>
                            </li>
                            <li>
                                <a href='/' className='menu-item text-sm font-medium text-#2563eb relative cursor-pointer bg-primary absolute left-0 top-2 rounded translate-x-11 hover:translate-x-0 transition-all hover:opacity-100'>Testimonails</a>
                            </li>
                        </ul>
                        <button className='hidden h-10 bg-sky-500/75 text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-sky-500/75 md:block ease-out duration-300'>Contact Us</button>
                        <button onClick={() => { setisMenuOpen(true) }} className='w-11 h-11 bg-blue-100 text-2xl text-sky-500/75 flex items-center justify-center rounded md:hidden z-50'>
                            {isMenuOpen ? <RiCloseFill /> : <RiMenu4Line />}
                        </button>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;