import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import { motion } from "framer-motion";
import {QRCodeSVG} from "qrcode.react";

interface GiftSectionProps {
    phoneNumber: string;
    message: string;
}

export default function GiftSection({phoneNumber, message}:GiftSectionProps) {

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    const QRCode = 'XDt1T2RMMAnexSgIK1vHevNbWnHgmgx8wNNMsLM6FTHiCV3Gh1vlvFzETMwC1dyUXWathXE0uVIk8VUa6znVCobNjcU/ZidngKY3oCy2lZJZN6m+QFiiVTymvL0rvhRLfMw7seKGUikgVvW6bwSNG/SFaArhOcfKnoXtm80++SvhFeeiXF42APO7Hxb+JqixaYl1wNdemSO43EulBYnXBdIdRxktMbHHvFfpAvmGP0Jp8Zc24o32SYDSitMSs3YymE9MxOooxrd4Y6MaSAb7YMFzwDW1ZNH3hP0xXuKSj5ceSTQm8NDAnspYofxcPnWhQSAucyIhZ0xfd4sskuGvPQ==|7DAD95B465C68C9440972C15';

    return (
        <motion.div
            className="max-w-2xl mx-auto mt-8 font-insideout"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="border-custom-brown dark:border-custom-cream shadow-custom-brown dark:shadow-custom-cream">
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
                    <QRCodeSVG
                            value={QRCode}
                            size={128}
                            level={'H'}
                            bgColor={'#F3F3F3'}
                            fgColor={'#3F3427'}
                            marginSize={8}
                            title={'QR para presentes de Miguelito'}
                            className="w-full h-auto rounded-md max-w-xs mx-auto"
                    />
                    <p className="font-insideout-regular text-xl text-custom-brown dark:text-custom-cream text-center">
                        O si te gustaría darme un presente en particular, como pañales o ropa, y no sabes que talla elegir, puedes preguntarle a mi mami. 😊
                    </p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-400 text-white py-3 px-6 rounded-lg transition duration-300 ease-in-out dark:bg-custom-green dark:hover:bg-green-500"
                    >
                        <span className="mr-2">📲</span> Coordina con mi mami
                    </a>
                </CardContent>
            </Card>
        </motion.div>
    );
}