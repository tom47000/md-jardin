import Banner from '../shared/Banner';
import logo_banner from '../assets/img_contact_2.png';

const Home = () => {
    return (
        <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24' id='home'>
            <Banner banner={logo_banner} heading="Regardez votre jardin prendre forme" subheading="Grace à mon savoir faire, je peux apporter à votre jardin, les soins necessaires pour qu'il soit rayonnant tout au long de l'année.
                        De plus en faisant appel a mes services bénéficiez d'une déduction d'impot à auteur de 50% du montant facturé."
                        btn1={'Contact'} />
        </div>
    )
}
export default Home;