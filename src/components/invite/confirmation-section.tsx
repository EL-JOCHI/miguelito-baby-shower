import { motion } from "framer-motion";

interface ConfirmationSectionProps {
    phoneNumber: string;
    message: string;
}

export default function ConfirmationSection(
    {
        phoneNumber,
        message,
    }: ConfirmationSectionProps
) {

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <motion.div
            className="font-insideout"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="bg-custom-cream dark:bg-custom-blue rounded-lg p-6 shadow-md text-center">
                <p className="text-2xl text-custom-brown dark:text-custom-cream mb-4">
                    <span className="mr-2">📞</span> Por favor, confirma tu asistencia
                </p>
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-400 text-white py-3 px-6 rounded-lg transition duration-300 ease-in-out
          dark:bg-custom-green dark:hover:bg-green-500"
                >
                    <span className="mr-2">📲</span> Confirmar por WhatsApp
                </a>
            </div>
        </motion.div>
    )
}