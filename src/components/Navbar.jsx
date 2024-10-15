import { useState } from 'react';
import logo_nav from '../assets/logo_nav.png';
// react icons
import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from 'react-icons/fa6'
const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        { link: "Accueil", path: "home" },
        { link: "Service", path: "service" },
        { link: "Contact", path: "Contact" },
    ]

    return (
        <>
            <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed left-0 top-0 right-0'>
                <div className='text-xl container mx-auto flex justify-between items-center font-medium'>
                    {/* nav bar */}
                    <div className='flex space-x-14 items-center' >
                        <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                            <img src={logo_nav} alt="" className='w-12 inline-block item-center rounded-xl' /><span className='hover:text-green-800'>MD-Jardin</span>
                        </a>
                        <ul className='md:flex space-x-12 hidden'>
                            {
                                navItems.map(({ link, path }) => <a key={link} href={path} className='block 
                            hover:text-gray-300'>{link}</a>)
                            }
                        </ul>
                    </div>
                    {/* language */}
                    <div className='space-x-12 hidden md:flex items-center'>
                        <a href="/" className='hidden lg:flex items-center hover:text-secondary'><GrLanguage className='mr-2' /> <span>Langue</span></a>
                        <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded
                    hover:text-white hover:bg-indigo-600'>Sign up</button>
                    </div>
                    {/* menu btn. only display on mobile */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none
                    focus:text-gray-300'>
                            {
                                isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary' />) : (<FaBars className='w-6 h-6 text-primary ' />)
                            }

                        </button>

                    </div>
                </div>
            </nav >

            <div className={`sapce-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isMenuOpen ? "block fixed left-0 top-0 right-0" : "hidden"}`}>
                {

                    navItems.map(({ link, path }) => <a key={link} href={path} className='block 
                hover:text-gray-300'>{link}</a>)

                }
            </div>
        </>
    );
};

export default Navbar;