import imgContact from '../assets/logo_nav.png';
import imgArbre from '../assets/result.png';




const Prestation = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 90, // Décale de 130px pour compenser le header
                behavior: 'smooth', // Défilement fluide
            });
        }
    };

    const package1 = [
        {
            name: "Entretien jardin",
            price: "",
            features: [
                { feature: "Élagage et débroussaillage (arbres et arbustes, etc.),", included: true },
                { feature: "Taille haies,", included: true },
                { feature: "Arrosage", included: true },
                { feature: "Tonte de votre gazon, pelouse et espaces extérieurs", included: true },
                { feature: "Entretien de votre plantation", included: true },
                { feature: "Ramassage des feuilles et évacuation des déchets verts", included: true },
                { feature: "Remise en état de votre espace vert.", included: true },
            ],
        },

    ];
    const package2 = [
        {
            name: "Entretien toiture",
            price: "",
            features: [
                { feature: "Inspection régulière (tuiles, charpente, infiltrations, etc.)", included: true },
                { feature: "Nettoyage de la toiture (débris, mousses, etc.)", included: true },
                { feature: "Traitement anti-mousse ou algicide si nécessaire", included: true },
                { feature: "Nettoyage des gouttières et vérification des systèmes de drainage", included: true },
                { feature: "Réparation ou remplacement des tuiles, ardoises ou bardeaux endommagés", included: true },
                { feature: "Vérification de l’étanchéité (solins, joints, membranes)", included: true },
                { feature: "Application de traitement hydrofuge pour imperméabilisation", included: true },
                { feature: "Inspection des cheminées, fenêtres de toit et conduits", included: true },
                { feature: "Élagage des arbres proches de la toiture", included: true },
                { feature: "Vérification et réparation des dommages causés par les nuisibles (nids, etc.)", included: true },
                { feature: "Faire appel à un professionnel pour un contrôle approfondi si nécessaire", included: true },
            ],
        },
    ];
    return (
        <div className='md:px-14 p-4 max-w-screen-2xl mx-auto ' id='prestation'>
            {/*Prestation 1*/}
            <h1 className='text-3xl md:text-5xl text-primary font-bold '>Les prestations que je propose </h1>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8 pt-20'>
                <div className="md:w-1/2">
                    <div className='mx-auto '>
                        {package1.map((pkg1, index) => (
                            <div key={index} className=' border py-5 md:px-6 px-4 rounded-lg shadow-3xl hover:-translate-y-4 transition-all
                        duration-300 cursor-pointer'>
                                <h3 className='text-3xl font-bold text-center text-primary'>{pkg1.name}</h3>
                                <p className='mt-5 text-center text-secondary text-4xl font-bold'>{pkg1.price}</p>
                                <ul style={{ listStyleType: "none", padding: 0 }}>
                                    {pkg1.features.map((item, idx) => (
                                        <li
                                            key={idx}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                margin: "10px 0",
                                            }}
                                        >
                                            <span>{item.feature}</span>
                                            <span
                                                style={{
                                                    color: item.included ? "green" : "red",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {item.included ? "✔️" : "❌"}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                {/*about content */}
                <div className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
                        Entretiens de jardin <span className='text-secondary'>contractualisés</span></h2>
                    <p className='text-tarciary text-lg mb-7 '>C’est la solution pour toujours avoir un jardin correctement entretenu sans pour autant se soucier du temps à y consacrer et de l’énergie à dépenser dans des travaux parfois difficiles.
                    </p>
                    <p className='text-tarciary text-lg mb-7'>Nous établissons ensemble un planning de gestion (nombres de tontes, périodes de tailles…) qui permet de bien maîtriser les coûts liés aux diverses opérations que vous souhaitez déléguer. Nous nous déplaçons pour tous travaux d'entretien de parc et jardin dans le Lot-et-Garonne.</p>
                    <button onClick={() => scrollToSection("contact")} className='btnSecondary' >Contact</button>
                </div>
            </div>
            {/*Prestation 2*/}
            <div className='flex flex-col md:flex-row justify-between items-center gap-8 pt-20'>
                <div className="md:w-1/2">
                    <div className='mx-auto '>
                        {package2.map((pkg2, index) => (
                            <div key={index} className=' border py-5 md:px-6 px-4 rounded-lg shadow-3xl hover:-translate-y-4 transition-all
                        duration-300 cursor-pointer'>
                                <h3 className='text-3xl font-bold text-center text-primary'>{pkg2.name}</h3>
                                <p className='mt-5 text-center text-secondary text-4xl font-bold'>{pkg2.price}</p>
                                <ul style={{ listStyleType: "none", padding: 0 }}>
                                    {pkg2.features.map((item, idx) => (
                                        <li
                                            key={idx}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                margin: "10px 0",
                                            }}
                                        >
                                            <span>{item.feature}</span>
                                            <span
                                                style={{
                                                    color: item.included ? "green" : "red",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {item.included ? "✔️" : "❌"}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                {/*about content */}
                <div className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
                        Protégez votre maison grâce à un <span className='text-secondary'>entretien de toiture professionnel !</span></h2>
                    <p className='text-tarciary text-lg mb-7 '>Votre toiture est votre première ligne de défense contre les intempéries et les éléments extérieurs. Avec le temps, les mousses, feuilles et débris peuvent l’endommager, entraînant des infiltrations, une perte d’isolation, ou des réparations coûteuses.
                    </p>
                    <p className='text-tarciary text-s mb-7'>Notre service d’entretien de toiture vous offre une solution complète pour maintenir votre toit en parfait état : nettoyage, traitement anti-mousse, vérification des tuiles, gouttières et étanchéité, et bien plus encore.</p>
                    <p className='text-tarciary text-s mb-7'>Faites confiance à mon expertise pour prolonger la durée de vie de votre toiture tout en améliorant la sécurité et l’esthétique de votre maison. Un entretien régulier, c’est l’assurance d’une toiture fiable et durable, sans soucis pour les années à venir</p>
                    <button onClick={() => scrollToSection("contact")} className='btnSecondary' >Contact</button>
                </div>
            </div>

        </div>
    )
}
export default Prestation;