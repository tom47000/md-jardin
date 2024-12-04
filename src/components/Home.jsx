import Banner from '../shared/Banner';
import logo_banner from '../assets/img_contact_2.png';

const Home = () => {
    return (
        <div className='md:px-12 p-4  mx-auto mt-24' id='home'>
            <Banner banner={logo_banner} heading="Regardez votre jardin prendre forme" subheading="Offrez à vos espaces verts une allure impeccable ! Taille, tonte, arrosage, débroussaillage, et entretien complet pour des jardins toujours soignés."
                btn1={'Téléphone'} />
        </div>
    )
}
export default Home;