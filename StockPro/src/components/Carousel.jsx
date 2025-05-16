import { useEffect, useState } from "react";
import '../styles/Carousel.css/'

const images = [
  "/assets/herramientasManuales.png",
  "/assets/fijacionSujetacion.png",
  "/assets/herramientasElectricas.png",
  "/assets/fontaneriaPolimeria.png",
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
