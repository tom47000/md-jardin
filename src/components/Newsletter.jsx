import Banner from '../shared/Banner';
import imgBanner from '../assets/img_contact_2.png'

const Newsletter = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-4xl mx-auto my-12">
            {/* use our banner component and pass props */}
            <Banner banner={imgBanner} heading="Regardez votre jardin prendre forme" subheading="Offrez une seconde vie à vos espaces verts avec nos services d'entretien de parc et jardin ! Taille, tonte, élagage, arrosage, et évacuation des déchets verts : nous prenons soin de votre jardin pour qu'il reste beau, propre et accueillant toute l'année. 🌿" btn1={""} />
        </div>
    )
}
export default Newsletter;