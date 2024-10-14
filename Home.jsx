import Banner from '../shared/Banner';
import logo_banner from '../assets/logo_banner.png';

const Home = () => {
    return (
        <div className='md:px-50 p-4 max-w-screen-2x1 mx-auto mt-20'>
            <Banner banner={logo_banner} heading="Regardez votre jardin prendre forme" subheading="Grace à mon savoir faire, je peux apporter à votre jardin, les soins necessaires pour qu'il soit rayonnant tout au long de l'année.
                        De plus en faisant appel a mes services bénéficiez d'une déduction d'impot à auteur de 50% du montant facturé." btn1={'Contact'} />
        </div>
    )
}
export default Home;