import Banner from '../shared/Banner';
import logo_banner from '../assets/img_contact_2.png';

const Home = () => {
    return (
        <div className='md:px-12 p-4  mx-auto mt-24' id='home'>
            <Banner banner={logo_banner} heading="Regardez votre jardin prendre forme" subheading="Offrez une seconde vie à vos espaces verts avec nos services d'entretien de parc et jardin ! Taille, tonte, élagage, arrosage, et évacuation des déchets verts : nous prenons soin de votre jardin pour qu'il reste beau, propre et accueillant toute l'année. 🌿"
                btn1={'Téléphone'} />
        </div>
    )
}
export default Home;