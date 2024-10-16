import { useState } from 'react';
import logo_pro from '../assets/logo_pro.png';


const Tarifs = () => {

    const [isYearly, setIsYearly] = useState(false);
    const packages = [
        { name: "Start", monthlyPrice: 19, yearlyPrice: 199, description: "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.", greenDot: "/src/assets/logo_pro.png" },
        { name: "Advence", monthlyPrice: 39, yearlyPrice: 399, description: "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.", greenDot: "/src/assets/logo_pro.png" },
        { name: "Premium", monthlyPrice: 59, yearlyPrice: 599, description: "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.", greenDot: "/src/assets/logo_pro.png" },
    ]

    return (
        <div className='md:px-14 p-4 max-w-s mx-auto py-10'>
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Voici les tarifs</h2>
                <p className="text-tartiary md:w-1/3 mx-auto px-4 ">A simple paragraph is comprised of three major components. The which is often a declarative
                    sentence.</p>
                {/* toggle pricing */}
                <div className=" py-10">
                    <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                        <span className='mr-8 text-2xl font-semibold'>Monthly</span>
                        <div className='w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out'>
                            <div className={`w-6 h-6 rounded-full transision duration-200 ease-in-out ${isYearly ? "gradientBg ml-8" : "gradientreversBg"}`}></div>
                        </div>
                        <span className='ml-8 text-2xl font-semibold'>Yearly</span>
                        <input type="checkbox" id='toggle' className='hidden' checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
                    </label>
                </div>

            </div>
            {/* pricing cards */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10  md:w-11/12 mx-auto'>
                {packages.map((pkg, index) => <div key={index} className=' border py-5 md:px-6 px-4 rounded-lg shadow-3xl'>
                    <h3 className='text-3xl font-bold text-center text-primary'>{pkg.name}</h3>
                    <p className='text-tartiary text-center my-5'>{pkg.description}</p>
                    <p className='mt-5 text-center text-secondary text-4xl font-bold'>
                        {isYearly ? `${pkg.yearlyPrice}€` : `${pkg.monthlyPrice}€`} <span className='text-base 
                        text-tartiary font-medium'>/{isYearly ? 'year' : 'month'}</span>
                    </p>
                    <ul className='mt-4 space-y-2 px-4'>
                        <li className='flex gap-3 items-center'><img src={pkg.greenDot} alt="" className='w-6 h-6 rounded-3xl' /> Videos of lessons</li>
                        <li className='flex gap-3 items-center'><img src={pkg.greenDot} alt="" className='w-6 h-6 rounded-3xl' /> Homework check </li>
                        <li className='flex gap-3 items-center'><img src={pkg.greenDot} alt="" className='w-6 h-6 rounded-3xl' /> Additional proactical task</li>
                        <li className='flex gap-3 items-center'><img src={pkg.greenDot} alt="" className='w-6 h-6 rounded-3xl' /> Monthly conferences</li>
                        <li className='flex gap-3 items-center'><img src={pkg.greenDot} alt="" className='w-6 h-6 rounded-3xl' /> Personal advice from teachers</li>
                    </ul>
                    <div className='w-full mx-auto mt-8 flex items-center justify-center'>
                        <button className='btnPrimary'>Get Started</button>
                    </div>
                </div>)
                }
            </div>
        </div>
    )
}
export default Tarifs;