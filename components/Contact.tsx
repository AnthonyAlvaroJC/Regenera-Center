import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactUs() {
    return (
        <section id="contacto" className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-16">
                {/* Título con Animación */}
                <motion.h2
                    className="text-5xl font-bold text-center text-[#135e82] mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Contáctanos
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Información de Contacto */}
                    <motion.div
                        className="bg-gray-50"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                            Información de Contacto
                        </h3>
                        <p className="text-lg text-gray-600">
                            ¿Tienes alguna pregunta? Estamos aquí para ayudarte.
                            Contáctanos a través de nuestros canales de comunicación o visítanos en
                            nuestra ubicación.
                        </p>
                        <ul className="mt-6 space-y-4">
                            <li className="flex items-center">
                                <Phone className="text-[#1994bf] mr-4" />
                                <p className="text-gray-600">+51 971 798 222</p>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-[#1994bf] mr-4" />
                                <p className="text-gray-600">regeneracenter520@gmail.com</p>
                            </li>
                            <li className="flex items-center">
                                <MapPin className="text-green-700 mr-4" />
                                <p className="text-gray-600">Av. Paso de los Andes 520. Pueblo Libre</p>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Mapa Interactivo */}
                    <motion.div
                        className="bg-gray-50"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2422862477387!2d-77.059066!3d-12.0753291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c91d2bdd21f3%3A0xc484c8fad267081!2sAv.%20Paso%20de%20los%20Andes%20520%2C%20Pueblo%20Libre%2015084!5e0!3m2!1ses-419!2spe!4v1605140806015"
                            width="100%"
                            height="400"
                            frameBorder="0"
                            allowFullScreen={true}
                            style={{ border: 0 }}
                            aria-hidden="false"
                            tabIndex={0}
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
