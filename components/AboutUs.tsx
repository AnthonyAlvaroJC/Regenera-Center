import { motion } from "framer-motion"; 
import { useState, useEffect } from "react";

const images = ["/img/person2.png", "/img/person3.png", "/img/person6.png"];

export default function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="nosotros"
      className="bg-gray-50 py-16"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <motion.h2
          className="text-5xl font-bold text-center text-[#135e82] mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Sobre Nosotros
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="bg-gray-50"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-semibold text-[#135e82]">
              Un Enfoque Holístico
            </h3>
            <p className="text-lg text-gray-600 mt-4">
              En <span className="font-bold text-[#fbd862]">Regenera Center</span>, creemos en una conexión profunda entre mente, cuerpo y espíritu. Nuestro equipo multidisciplinario trabaja en armonía para ofrecer soluciones que combinen lo mejor de la medicina estética, regenerativa e integrativa.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Nuestro objetivo es transformar la salud y la belleza desde adentro hacia afuera, brindando experiencias personalizadas con un enfoque humano y tecnológico. Nos comprometemos a ayudarte a alcanzar tu mejor versión.
            </p>
          </motion.div>

          {/* Contenedor de la imagen sin efecto de fluido */}
          <motion.div
            className="relative w-full h-[480px] md:h-[500px] flex justify-center items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.img
              src={images[currentIndex]}
              alt={`Equipo Regenera Center ${currentIndex + 1}`}
              className="w-[400px] h-[400px] object-cover shadow-lg transition-all duration-500 rounded-lg"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: 1.05, opacity: 1 }}
              exit={{ scale: 1, opacity: 0.8 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
