import imgContact from '../assets/img_contact_2.png';
import imgArbre from '../assets/result.png';

const Contact = () => {
    return (
        <div className='md:px-14 p-4 max-w-s mx-auto space-y-10'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className="md:w-1/2">
                    <img src={imgContact} alt="" />
                </div>
                {/*about content */}
                <div className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
                        Pour établir un devis gratuit, <span className='text-secondary'>contactez moi</span> directement</h2>
                    <p className='text-tarciary text-lg '>Par téléphone en composents le 06.xx.xx.xx.xx</p>
                    <p className='text-tarciary text-s mb-7'>Déplacement et devis gratuit.</p>
                    <button className='btnSecondary'>Get Started</button>
                </div>

            </div>
            {/* second part */}
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
                <div className="md:w-1/2">
                    <img src={imgArbre} alt="" />
                </div>
                {/*about content */}
                <div className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
                        Pour établir un devis, <span className='text-secondary'>contactez moi</span> directement</h2>
                    <p className='text-tarciary text-lg mb-7'>par téléphone en composents le 06.xx.xx.xx.xx</p>
                    <button className='btnSecondary'>Get Started</button>
                </div>

            </div>
        </div>
    )
}
export default Contact;