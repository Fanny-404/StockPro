import { useEffect, useState } from "react";
import imgHerramientasManuales from '../assets/herramientasManuales.png';
import imgFijacionSujetacion from '../assets/fijacionSujetacion.png';
import imgHerramientasElectricas from '../assets/herramientasElectricas.png';
import imgFontaneriaPlomeria from '../assets/fontaneriaPlomeria.png';

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
    <div className="w-full mb-4 flex justify-center">
      <img
        src={images[index]}
        alt={`carousel-${index}`}
        className="w-full max-w-screen-md h-64 object-cover rounded shadow"
      />
    </div>
  );
};