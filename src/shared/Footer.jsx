import imgLogo from '../assets/logo_nav.png';
import imgLogoFooter from '../assets/logo_pro.png'
const Footer = () => {
    return (
        <div className="gradientreversBg md:px-24 p-4 max-w-screen-full  text-white">
            <div className='my-12 flex flex-col md:flex-row gap-10'>
                <div className='md:w-1/2 space-y-6'>
                    <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-white">
                        <img src={imgLogo} alt="" className='w-16 inline-block items-center' /> <span
                            className='text-white'>MD-Jardin</span>
                    </a>
                    <p className='md:w-1/2'>A simple paragraph is comprised of three major components. The which is often a declarative
                        sentence.</p>
                    <div >
                        <input type="email" name='email' id='email' placeholder='Your email'
                            className='bg-[#262331af] py-2 px-4 rounded-md focus:outline-none' />
                        <input type="submit" value="Subscribe" className='px-4 py-2 bg-secondary rounded-md -ml-2
                        cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all' />
                    </div>
                </div>
                {/* foot navigations */}
                <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                    <div>
                        <div className='space-y-4 mt-5'>
                            <h4 className='text-xl'>Platform</h4>
                            <ul className='space-y-3'>
                                <a href="/" className='block hover:text-gray-300'>OverView</a>
                                <a href="/" className='block hover:text-gray-300'>Features</a>
                                <a href="/" className='block hover:text-gray-300'>About</a>
                                <a href="/" className='block hover:text-gray-300'>Pricing </a>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='space-y-4 mt-5'>
                            <h4 className='text-xl'>Help</h4>
                            <ul className='space-y-3'>
                                <a href="/" className='block hover:text-gray-300'>How does it works?</a>
                                <a href="/" className='block hover:text-gray-300'>Where to ask question?</a>
                                <a href="/" className='block hover:text-gray-300'>How to play?</a>
                                <a href="/" className='block hover:text-gray-300'>What is needed for this? </a>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='space-y-4 mt-5'>
                            <h4 className='text-xl'>Contact</h4>
                            <ul className='space-y-3'>
                                <p className='hover:text-gray-300'>+33600342312</p>
                                <p className='hover:text-gray-300'>123 md-jardin</p>
                                <p className='hover:text-gray-300'>Quoicoubeeehh</p>
                                <p className='hover:text-gray-300'>47000 </p>
                            </ul>
                        </div>
                    </div>
                </div>



            </div>
            <hr />
            <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8 '>
                <p>@ MD-Jardin 2024. All rights reserved.</p>
                <div className='flex items-center space-x-5'>
                    <img src={imgLogoFooter} alt="" className='w-10 cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                    <img src={imgLogoFooter} alt="" className='w-10 cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                    <img src={imgLogoFooter} alt="" className='w-10 cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                    <img src={imgLogoFooter} alt="" className='w-10 cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                </div>
            </div>
        </div>
    )

}
export default Footer;