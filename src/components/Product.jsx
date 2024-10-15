import nos_racines_img from '../assets/nos_racines.png'
const Product = () => {
    return (
        <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                <div className="lg:w-1/4">
                <h3 className='text-3xl text-primary font-bold lg:w-1/2 mb-3'>Du travail sur mesure ?</h3>
                <p>Voici la liste des services que je proposes, n'hésitez surtout pas à me contacter pour établir un devis.</p>
                </div>
                {/* product cards */}
                <div className="w-full lg:w-3/4">
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 items-start md:gap-12 gap-8'>
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[20px] h-96 shadow-3xl p-8
                        items-center flex justify-center hover:-translate-y-4 transition-all
                        duration-300 cursor-pointer'>
                            <div>
                                <img src={nos_racines_img} alt="" className='rounded-[20px]'/>
                                <h5 className='text-2xl font-sembold text-primary px-5 text-center
                                mt-5'>Forfait taille Arbre</h5>
                            </div>
                        </div>
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[20px] h-96 shadow-3xl p-8
                        items-center flex justify-center hover:-translate-y-4 transition-all
                        duration-300 cursor-pointer md:mt-16'>
                            <div>
                                <img src={nos_racines_img} alt="" className='rounded-[20px]'/>
                                <h5 className='text-2xl font-sembold text-primary px-5 text-center
                                mt-5'>Forfait taille Arbre</h5>
                            </div>
                        </div>
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[20px] h-96 shadow-3xl p-8
                        items-center flex justify-center hover:-translate-y-4 transition-all
                        duration-300 cursor-pointer'>
                            <div>
                                <img src={nos_racines_img} alt="" className='rounded-[20px]'/>
                                <h5 className='text-2xl font-sembold text-primary px-5 text-center
                                mt-5'>Forfait taille Arbre</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Product;