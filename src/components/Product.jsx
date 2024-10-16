import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

import nos_racines_img from '../assets/nos_racines.png'

const Product = () => {
    return (
        <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id='services'>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="lg:w-1/4">
                    <h3 className='text-4xl text-primary font-bold lg:w-1/2 mb-3'>Du travail sur mesure ?</h3>
                    <p className='text-base text-tartiary md:m-4'>Voici la liste des services que je proposes, n'hésitez surtout pas à me contacter pour établir un devis.</p>
                </motion.div>
                {/* product cards */}
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="w-full lg:w-3/4">
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 items-start md:gap-12 gap-8'>
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[20px] h-96 shadow-3xl p-8
                        items-center flex justify-center hover:-translate-y-4 transition-all
                        duration-300 cursor-pointer'>
                            <div>
                                <img src={nos_racines_img} alt="" className='rounded-[20px]' />
                                <h5 className='text-2xl font-sembold text-primary px-5 text-center
                                mt-5'>Forfait taille arbres</h5>
                            </div>
                        </div>
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[20px] h-96 shadow-3xl p-8
                        items-center flex justify-center hover:-translate-y-4 transition-all
                        duration-300 cursor-pointer md:mt-16'>
                            <div>
                                <img src={nos_racines_img} alt="" className='rounded-[20px]' />
                                <h5 className='text-2xl font-sembold text-primary px-5 text-center
                                mt-5'>Forfait taille haie</h5>
                            </div>
                        </div>
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[20px] h-96 shadow-3xl p-8
                        items-center flex justify-center hover:-translate-y-4 transition-all
                        duration-300 cursor-pointer'>
                            <div>
                                <img src={nos_racines_img} alt="" className='rounded-[20px]' />
                                <h5 className='text-2xl font-sembold text-primary px-5 text-center
                                mt-5'>Forfait taille entretient complet</h5>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
export default Product;