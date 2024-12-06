import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { statistics, shoes } from "../constants";
import mocassin from "../assets/images/mocassin1.png";
import ShoeCard from "../components/ShoeCard.jsx";

// Fonction pour convertir des valeurs comme '1k+' en nombre (sans multiplier par 1000)
const convertToNumber = (value) => {
  if (typeof value === 'string') {
    // Vérification des suffixes courants
    if (value.includes('k+')) {
      return parseFloat(value.replace('k+', '')); // '1k+' devient 1
    } else if (value.includes('M+')) {
      return parseFloat(value.replace('M+', '')) * 1000000; // '1M+' devient 1000000
    }
    // Ajouter d'autres cas si nécessaire (ex: 'B+', etc.)
    return parseFloat(value.replace(/[^\d.-]/g, '')); // Éliminer tout caractère non numérique (si nécessaire)
  }
  return value; // Si ce n'est pas une chaîne, retourner la valeur brute
};

// Fonction pour formater les valeurs en ajoutant des suffixes (k+)
const formatStatValue = (value, label) => {
  if (value >= 1000 && label === "Customers") {
    return `${Math.round(value / 1000)}k+`; // Affiche "250k+" pour les clients
  }
  if (label === "Shops" || label === "Brands") {
    return `${value}+`; // Affiche "500+" pour les magasins ou "1k+" pour les marques
  }
  return value; // Pour d'autres cas, renvoyer la valeur brute
};

const Hero = () => {
  const [mainImage, setMainImage] = useState(mocassin);
  const [countedStats, setCountedStats] = useState(
    statistics.map((stat) => ({ ...stat, value: 0 })) // Initialisation avec des valeurs à 0
  );

  // Animation des chiffres au DOMContentLoaded
  useEffect(() => {
    const animateNumbers = () => {
      statistics.forEach((stat, index) => {
        const target = convertToNumber(stat.value); // Convertir la valeur en nombre
        if (isNaN(target)) {
          console.error(`Invalid value for ${stat.label}: ${stat.value}`);
          return;
        }

        let count = 0;
        const increment = target / 100; // Ajuster la vitesse de l'animation

        const interval = setInterval(() => {
          count += increment;
          if (count >= target) {
            count = target;
            clearInterval(interval);
          }

          setCountedStats((prevStats) => {
            const newStats = [...prevStats];
            newStats[index].value = Math.round(count); // Mise à jour des valeurs
            return newStats;
          });
        }, 10); // Vitesse de l'animation
      });
    };

    animateNumbers();
  }, []);  // L'animation se déclenche après le premier rendu

  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-[#266131]">Our Winter collections</p>
        <h1 className="mt-10 font-montserrat text-8xl extra-small:leading-[1]  max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10">The New Arrival</span>
          <br />
          <span className="text-[#266131] inline-block mt-3">Shoesea</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Shoesea arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label="Shop now >" />

        {/* Affichage des statistiques animées */}
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {countedStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold font-montserrat">{formatStatValue(`${stat.value + `K+`}`)}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Deuxième colonne - Image et sélection de chaussures */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary z-0 bg-cover bg-center">
        <img
          src={mainImage}
          alt="shoe collection"
          width={1610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={index}
              imgURL={shoe} 
              changeBigShoeImage={setMainImage} 
              image={mainImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
