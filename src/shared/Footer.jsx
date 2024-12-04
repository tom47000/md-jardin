import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import imgLogo from '../assets/logo_nav.png';
import imgLogoFooter from '../assets/logo_pro.png'
const Footer = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 90, // Décale de 130px pour compenser le header
                behavior: 'smooth', // Défilement fluide
            });
        }
    };

    return (
        <div className="gradientreversBg md:px-24 p-4 max-w-screen-full ">
            <div className='my-12 md:px-32 flex flex-col md:flex-row  gap-8'>
                <div className='md:w-1/2 space-y-6'>
                    <a href="/" className="text-2xl font-semibold flex items-center space-x-3 ">
                        <img src={imgLogo} alt="" className='w-16 inline-block items-center' /> <span
                            className='text-gray-900'>MD-Jardin47</span>
                    </a>
                    <p className='md:w-1/2 text-gray-900 font-semibold text-xl'>Regardez votre jardin prendre forme</p>
                    <p className='md:w-1/2 text-gray-900 '>Numéro siret: <span className='font-semibold text-xl'>98323186100011</span></p>
                    <p className='text-primary'> Laissez-nous un avi Google en cliquant <a className='text-decoration-none font-bold text-primary hover:text-gray-500'
                        href="https://g.page/r/CYKPoPrwZKQLEAI/review" target="_blank" rel="noopener noreferrer">
                        ICI :)</a>
                    </p>

                </div>
                {/* foot navigations */}
                <div className='md:w-1/2 flex flex-row flex-wrap justify-evenly gap-8 items-start'>
                    <div>
                        <div className='space-y-4 mt-5 text-gray-900'>
                            <h4 className='text-2xl'>Plateforme</h4>
                            <ul className='space-y-2'>
                                <li>
                                    <button onClick={() => scrollToSection("home")} className='block text-primary font-bold hover:text-gray-500 scroll-smooth'>
                                        Accueil
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => scrollToSection("photos")} className='block text-primary font-bold hover:text-gray-500 scroll-smooth'>
                                        Photos
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => scrollToSection("prestation")} className='block text-primary font-bold hover:text-gray-500 scroll-smooth'>
                                        Prestation
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => scrollToSection("contact")} className='block text-primary font-bold hover:text-gray-500 scroll-smooth'>
                                        Contact
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className='space-y-4 mt-5 text-gray-900'>
                            <h4 className='text-2xl'>Contact</h4>
                            <ul className='space-y-2'>
                                <p className='hover:text-gray-500'><a
                                    meta="Numéro de téléphone de l'entreprise MD-jardin47."
                                    href="tel:+33609341866"
                                    style={{
                                        marginLeft: "8px",
                                        textDecoration: "none",
                                        color: "text-primary",
                                        fontWeight: "bold",
                                    }}
                                >
                                    06 09 34 18 66
                                </a></p>
                                <p className='hover:text-gray-500'><a
                                    meta="Adresse email de l'entreprise MD-jardin47."
                                    href="mailto:md-jardin47@gmail.com"

                                    style={{
                                        marginLeft: "8px",
                                        textDecoration: "none",
                                        color: "text-primary",
                                        fontWeight: "bold",
                                    }}
                                >
                                    md-jardin47@gmail.com
                                </a></p>
                                <p className='hover:text-gray-500 ml-1 text-primary'><a
                                    href="https://www.google.fr/maps/place/10+Rue+de+l'Engelbreit,+67200+Strasbourg/@48.5793521,7.7057799,17z/data=!3m1!4b1!4m6!3m5!1s0x4796b62a7d7ddbb3:0xc4cdd8eb37b2e21c!8m2!3d48.5793486!4d7.7083548!16s%2Fg%2F11bw4cd676?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"
                                    style={{

                                        textDecoration: "none",
                                        fontWeight: "bold",
                                    }}
                                >
                                    10 RUE DE L'ENGELBREIT <br /> 67200 STRASBOURG
                                </a></p>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex  flex-row gap-8 items-center justify-between my-8 '>
                <p className='text-gray-900'>&copy; 2024 MD-Jardin47. Tous droits réservés.</p>


                <div className="flex space-x-4">
                    {/* <FaFacebook size={30} className="text-blue-600"  /> */}
                    <a
                        href="https://www.instagram.com//"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-700 hover:text-rose-600"
                    >
                        <FaInstagram size={40} />
                    </a>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-yellow-200"
                    >
                        <FaFacebookSquare size={40} />
                    </a>
                </div>
            </div>
        </div>
    )

}
export default Footer;