import { useEffect, useState } from "react";
import imgHerramientasManuales from '../assets/herramientasManuales.png';
import imgFijacionSujetacion from '../assets/fijacionSujetacion.png';
import imgHerramientasElectricas from '../assets/herramientasElectricas.png';
import imgFontaneriaPlomeria from '../assets/fontaneriaPlomeria.png';

import '../styles/Carousel.css'; 

const images = [
  imgHerramientasManuales,
  imgFijacionSujetacion,
  imgHerramientasElectricas,
  imgFontaneriaPlomeria,
];

export const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-container">
      <img
        src={images[index]}
        alt={`carousel-${index}`}
        className="carousel-image"
      />
    </div>
  );
};