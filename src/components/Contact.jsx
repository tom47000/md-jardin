import imgContact from '../assets/logo_nav.png';
import imgArbre from '../assets/result.png';

const Contact = () => {
    return (
        <div className='md:px-14 p-4 max-w-screen-2xl mx-auto space-y-10' id='contact'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className="md:w-1/2">
                    <img src={imgContact} alt="" />
                </div>
                {/*about content */}
                <div className='md:w-2/5 ' >
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal sm:leading-tight'>
                        Pour établir un devis après visite sur site, <span className='text-secondary '>contactez-moi</span></h2>
                    <p className='text-tarciary text-lg pt-5 '>Par téléphone en composant le</p>
                    <button className='py-3 px-8 bg-secondary font-semibold text-gray-900 rounded
                            hover:bg-primary hover:text-white transition-all duration-200'>
                        <a
                            meta="Numéro de téléphone de l'entreprise MD-jardin47."
                            href="tel:+33609341866">
                            06 09 34 18 66
                        </a></button>
                    <p className='text-tarciary text-lg pt-5'>Par email</p>
                    <button className='py-3 px-8 bg-secondary font-semibold text-gray-900 rounded
                            hover:bg-primary hover:text-white transition-all duration-200'>
                        <a
                            meta="Adresse email de l'entreprise MD-jardin47."
                            href="mailto:md-jardin47@gmail.com">
                            md-jardin47@gmail.com
                        </a></button>
                </div>



            </div>

        </div >
    )
}
export default Contact;