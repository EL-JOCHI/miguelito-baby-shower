import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import { motion } from "framer-motion";

interface GiftSectionProps {
    phoneNumber: string;
    message: string;
}

export default function GiftSection({phoneNumber, message}:GiftSectionProps) {

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    const giftImage = "./QR-MIGUELITO.jpeg";

    return (
        <motion.div
            className="max-w-2xl mx-auto mt-8 font-insideout"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card>
                <CardHeader>
                    <CardTitle className="text-4xl text-custom-brown dark:text-custom-cream text-center flex items-center justify-center">
                        <span className="mr-2">🎁</span>
                        Presente
                    </CardTitle>
                    <CardDescription className="text-custom-brown dark:text-custom-cream text-center">
                        Lo más importante es poder contar con tu presencia, pero si gustas
                        darnos un presente, lo aceptamos con mucho gusto. 💖
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid">
                    <p className="font-insideout-regular text-xl text-custom-brown dark:text-custom-cream text-center">
                        Si gustas darme un regalo monetario, aquí te dejo un QR: 👇
                    </p>
                    <img
                        src={giftImage}
                        alt="Aquí debería mostrarse un QR"
                        className="w-full h-auto rounded-md max-w-xs mx-auto"
                    />
                    <p className="font-insideout-regular text-xl text-custom-brown dark:text-custom-cream text-center">
                        O si gustas hacerme un presente en físico, agradecería que sea para
                        mayores de 6 meses 👶. O también, puedes preguntarle a mi mami
                        por algún presente en particular. 😊
                    </p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out dark:bg-green-600 dark:hover:bg-green- 700"
                    >
                        <span className="mr-2">📲</span> Coordina con mi mami
                    </a>
                </CardContent>
            </Card>
        </motion.div>
    );
}