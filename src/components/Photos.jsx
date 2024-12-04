import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import des styles principaux
import "slick-carousel/slick/slick-theme.css"; // Import des styles du thème
import img1 from '../assets/result.png'
import img2 from '../assets/logo_nav.png'
import img3 from '../assets/contact_img.png'
import img4 from '../assets/arbre.png'

const PhotoCarousel = ({ images }) => {

    const settings = {
        dots: true, // Affiche les indicateurs (petits points en bas)
        infinite: true, // Permet de défiler en boucle
        speed: 500, // Vitesse de transition en ms
        slidesToShow: 4, // Nombre d'images visibles à la fois
        slidesToScroll: 1, // Nombre d'images défilées à la fois
        autoplay: true, // Active le défilement automatique
        autoplaySpeed: 4000, // Intervalle du défilement automatique (en ms)
        arrows: true, // Affiche les flèches pour naviguer
        responsive: [
            {
                breakpoint: 768, // Pour les écrans de largeur < 768px
                settings: {
                    slidesToShow: 1, // Une seule image visible
                    slidesToScroll: 1, // Une seule image défilée à la fois
                    dots: true, // Active les indicateurs sur petits écrans
                    arrows: true, // Cache les flèches pour simplifier
                    autoplay: true, // Active le défilement automatique
                    autoplaySpeed: 4000, // Intervalle du défilement automatique (en ms)
                },
            },
            {
                breakpoint: 1000, // Pour les écrans de largeur < 768px
                settings: {
                    slidesToShow: 2, // Une seule image visible
                    slidesToScroll: 1, // Une seule image défilée à la fois
                    dots: true, // Active les indicateurs sur petits écrans
                    arrows: true, // Cache les flèches pour simplifier
                    autoplay: true, // Active le défilement automatique
                    autoplaySpeed: 4000, // Intervalle du défilement automatique (en ms)
                },
            },
        ],
    };

    return (
        <div className="my-14 md:px-14 px-4 max-w-screen-2xl mx-auto ">
            <div>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="px-5">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                style={{
                                    width: "100%",
                                    height: "300px",
                                    objectFit: "fill",
                                    borderRadius: "10px",
                                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                }}
                                className="carousel-image"
                                onMouseOver={(e) => {
                                    e.target.style.transform = "scale(1.1)";
                                    e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.3)";
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.transform = "scale(1)";
                                    e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

const App = () => {
    const photos = [
        img1,
        img2,
        img3,
        img4,
    ];

    return (
        <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto " id='photos'>
            <div>
                <h1 className='text-4xl text-primary font-bold lg:w-1/2 mb-1'>Mes réalisations </h1>
                <PhotoCarousel images={photos} />
            </div>
        </div>

    );
};

export default App;