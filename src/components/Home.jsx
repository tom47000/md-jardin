import Banner from '../shared/Banner';
import logo_pro from '../assets/logo_pro.png'

const Home = () => {
    return ( 
       <div className='md:px-50 p-4 max-w-screen-2x1 mx-auto mt-20'>
        <Banner banner={logo_pro} heading="Regardez votre jardin prendre forme" subheading="Grace à mon savoir faire, je peux apporter à votre jardin, les soins necessaire pour qu'il soit rayonnant tout au long de l'année.
                        De plus en faisant appel a mes service bénéficiez d'une déduction d'impot a auteur de 50% du montant facturé." btn1={'Contact'} />
       </div>
    )
}
export default Home;