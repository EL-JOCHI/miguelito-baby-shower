import {Button} from "@/components/ui/button.tsx";
import { motion } from "framer-motion";

interface LocationSectionProps {
    link: string;
}

export default function LocationSection(
    {
        link
    }: LocationSectionProps
) {
    return (
        <motion.div
            className="max-w-2xl mx-auto mt-8 font-insideout"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <div className="bg-custom-cream dark:bg-custom-blue rounded-lg p-6 shadow-md relative">
                {/* Relative for button positioning */}
                <h2 className="text-4xl text-custom-brown dark:text-custom-cream text-center mb-4">
                    <span className="mr-2">🗺️</span> ¿Dónde?
                </h2>

                <p className="font-insideout-regular text-xl text-custom-brown dark:text-custom-cream mb-6">
                    🔖 Avenida Alemana 5to anillo. Barrio: San Jorge. Calle: Luz De Vida # 5
                </p>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3799.965221568128!2d-63.157638899999995!3d-17.746277799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQ0JzQ2LjYiUyA2M8KwMDknMjcuNSJX!5e0!3m2!1ses!2sbo!4v1725836983969!5m2!1ses!2sbo"
                    width="100%" // Use 100% width for responsiveness
                    height="300"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-md" // Add rounded corners to the iframe
                ></iframe>

                {/* Button with better placement and emoji */}
                <Button
                    onClick={() => window.open(link, '_blank')}
                    className="absolute bottom-4 left-1/2 transform -translate-y-3 -translate-x-1/2  text-custom-brown dark:text-custom-cream bg-custom-cream dark:bg-custom-blue hover:bg-custom-blue dark:hover:bg-custom-cream hover:text-custom-cream dark:hover:text-custom-blue py-3 px-6 rounded-lg transition duration-300 ease-in-out"
                >
                    📍 Ver en Google Maps
                </Button>
            </div>
        </motion.div>
    );
}