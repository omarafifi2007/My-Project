import React from 'react';
import logo from '../assets/logo.png';

function MobileNavbar({ setIsMenuOpen }) {
    return (
        <div className='w-64 h-screen bg-white bg-slate fixed top-0 z-20'>
            <div className='p-4'>
                <img src={logo} alt='logo' className='w-20 object-contain mb-8' />

                <ul>
                    <li className='mb-5'>
                        <a href='/' className='menuItem'>Home</a>
                    </li>
                    <li className='mb-5'>
                        <a href='/' className='menuItem'>Services</a>
                    </li>
                    <li className='mb-5'>
                        <a href='/' className='menuItem'>Our Work</a>
                    </li>
                    <li className='mb-5'>
                        <a href='/' className='menuItem'>Testimonails</a>
                    </li>
                </ul>
                <button className='w-40 h-10 bg-sky-500/75 text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-sky-500/75 md:block'>Contact Us</button>
            </div>
            <div onClick={() => {
                setIsMenuOpen(false)
            }} className='w-screen h-screen bg-overlayBg fixed top-0 z-10'></div>
        </div>
    );
}

export default MobileNavbar;