import Banner from '../shared/Banner';
import imgBanner from '../assets/img_contact_2.png'

const Newsletter = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-4xl mx-auto my-12">
            {/* use our banner component and pass props */}
            <Banner banner={imgBanner} heading="Vous pouvez envoyer votre demande de devis ici" subheading="A simple paragraph is comprised of three major components. The which is often a declarative
                    sentence" btn1={"I have a devis"} />
        </div>
    )
}
export default Newsletter;