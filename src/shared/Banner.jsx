import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { useMediaQuery } from "react-responsive";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareFacebook } from 'react-icons/fa6';

const Banner = ({ banner, heading, subheading, btn1 }) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
        <div className='gradientBg rounded-xl rounded-br-[80px] md:p-5 px-4 '>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-5'>
                {/* image de la bannière */}
                <motion.div
                    initial={isMobile ? false : "hidden"} // Pas d'animation si mobile
                    animate={isMobile ? false : "visible"} // Pas d'animation si mobile
                    variants={fadeIn("up", 0.2)}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <img src={banner} alt="" className='lg:h-[386px]' />
                </motion.div>

                {/* contenu de bannière d'accueil */}
                <motion.div
                    initial={isMobile ? false : "hidden"} // Pas d'animation si mobile
                    animate={isMobile ? false : "visible"} // Pas d'animation si mobile
                    variants={fadeIn("down", 0.2)}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    className="md:w-3/5">
                    <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading}</h2>
                    <p className='text-[#EBEBEB] text-2xl mb-8'>{subheading}</p>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <button className='py-3 px-8 bg-secondary font-semibold text-white rounded
                            hover:bg-primary transition-all duration-200'>
                            <a
                                meta="Numéro de téléphone de l'entreprise MD-jardin47."
                                href="tel:+33609341866">
                                06 09 34 18 66
                            </a>
                        </button>
                        <button className='py-3 px-8 bg-secondary font-semibold text-white rounded
                            hover:bg-primary transition-all duration-200'>
                            <a
                                meta="Adresse email de l'entreprise MD-jardin47."
                                href="mailto:md-jardin47@gmail.com">
                                md-jardin47@gmail.com
                            </a>
                        </button>


                    </div>

                </motion.div>
            </div>
            <div>

                <div className="flex space-x-4 mt-3">
                    <p>Retrouvez nos réseaux sociaux<br />en un clic</p>
                    {/* <FaFacebook size={30} className="text-blue-600"  /> */}
                    <a
                        href="https://www.instagram.com//"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-800 hover:text-rose-500"
                    >
                        <FaInstagram size={40} />
                    </a>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-blue-900"
                    >
                        <FaSquareFacebook size={40} />
                    </a>

                </div>
            </div>
        </div>

    )
}
export default Banner;