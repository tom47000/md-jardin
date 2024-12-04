import { useState } from 'react';
import logo_nav from '../assets/logo_nav.png';
// react icons
import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from 'react-icons/fa6';

import { Link } from 'react-scroll';


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        { link: "Accueil", path: "home" },
        { link: "Photos", path: "photos" },
        { link: "Préstation", path: "prestation" },
        { link: "Contact", path: "contact" },
    ]


    return (
        <>
            <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed left-0 top-0 right-0'>
                <div className='text-xl container mx-auto flex justify-between items-center font-medium'>
                    {/* nav bar */}
                    <div className='flex space-x-36 items-center' >
                        <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                            <img src={logo_nav} alt="logo de l'entreprise Md-Jardin" className='w-12 inline-block item-center rounded-xl' /><span className='hover:text-green-800'>MD-Jardin</span>
                        </a>
                        <ul className='md:flex space-x-12 hidden'>
                            {
                                navItems.map(({ link, path }) => <Link activeClass='active' spy={true} smooth={true} offset={-90} key={link} to={path}
                                    className='gradientreversBg py-2 2xl:px-14 px-4 transition-all duration-300 rounded
                                hover:text-white cursor-pointer'>{link}</Link>)
                            }
                        </ul>
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

            <div className={`sapce-y-4 px-4 pt-24 pb-5 gradientreversBg text-xl ${isMenuOpen ? "block fixed left-0 top-0 right-0" : "hidden"}`}>
                {
                    navItems.map(({ link, path }) => <Link activeClass='active' spy={true} smooth={true} offset={-80} key={link} to={path}
                        className='block text-white py-2 hover:text-gray-300
                        cursor-pointer' onClick={toggleMenu}>{link}</Link>)
                }
            </div>
        </>
    );
};

export default Navbar;