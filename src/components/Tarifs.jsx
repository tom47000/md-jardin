import { div } from "framer-motion/client";
import React from "react";

const PackageComparison = () => {
    const packages = [
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

    return (
        <div className='md:px-14 p-4 max-w-screen-2xl mx-auto' id='tarifs'>
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-5 ">Voici les tarifs</h2>
                {/* <p className="text-tartiary md:w-1/3 mx-auto px-4 mb-5 ">A simple paragraph is comprised of three major components. The which is often a declarative
                    sentence.</p> */}
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10  md:w-11/12 mx-auto '>
                {packages.map((pkg, index) => (
                    <div key={index} className=' border py-5 md:px-6 px-4 rounded-lg shadow-3xl hover:-translate-y-4 transition-all
                        duration-300 cursor-pointer'>
                        <h3 className='text-3xl font-bold text-center text-primary'>{pkg.name}</h3>
                        <p className='mt-5 text-center text-secondary text-4xl font-bold'>{pkg.price}</p>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            {pkg.features.map((item, idx) => (
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
    );
};

export default PackageComparison;
