

const Banner = ({ banner, heading, subheading, btn1 }) => {
    return (
        <div className="md:px-12 p-4 max-w-screen-2x1 mx-auto my-10">
            <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-'>
                <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>

                    {/* image de la bannière */}
                    <div>
                        <img src={banner} alt="" className='lg:h-[368px] rounded-xl rounded-br-[80px]' />
                    </div>

                    {/* contenu de bannière d'accueil */}
                    <div className="md:w-3/5">
                        <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading}</h2>
                        <p className='text-[#EBEBEB] text-2xl mb-8'>{subheading}</p>
                        <div>
                            <button className='py-3 px-8 bg-secondary font-semibold text-white rounded
                            hover:bg-primary transition-all duration-200'>
                                {btn1}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;